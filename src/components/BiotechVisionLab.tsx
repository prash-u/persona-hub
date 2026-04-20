import { useEffect, useMemo, useRef, useState } from "react";
import { AlertCircle, Camera, Loader2, ScanSearch, SquarePlay, SquareX } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type ModelId = "coco-ssd" | "mobilenet" | "handpose" | "face-api";

type ModelOption = {
  id: ModelId;
  label: string;
  badge: string;
  description: string;
};

const MODEL_OPTIONS: ModelOption[] = [
  {
    id: "coco-ssd",
    label: "COCO-SSD",
    badge: "Detection",
    description: "General object detection with bounding boxes over common everyday classes.",
  },
  {
    id: "mobilenet",
    label: "MobileNet",
    badge: "Classification",
    description: "Scene and object classification that returns top labels instead of boxes.",
  },
  {
    id: "handpose",
    label: "Handpose",
    badge: "Keypoints",
    description: "Tracks hands and landmarks in real time for gesture and interaction work.",
  },
  {
    id: "face-api",
    label: "Face API",
    badge: "Faces",
    description: "Runs a lightweight face detector locally in the browser using TinyFaceDetector.",
  },
];

type SummaryState = {
  title: string;
  lines: string[];
};

function isVideoReady(video: HTMLVideoElement | null) {
  return Boolean(video && video.readyState >= 2 && video.videoWidth > 0 && video.videoHeight > 0);
}

export function BiotechVisionLab() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const frameRef = useRef<number | null>(null);
  const modelCacheRef = useRef(new Map<ModelId, unknown>());
  const lastSummaryUpdateRef = useRef(0);

  const [selectedModel, setSelectedModel] = useState<ModelId>("coco-ssd");
  const [cameraState, setCameraState] = useState<"idle" | "starting" | "ready" | "error">("idle");
  const [modelState, setModelState] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [error, setError] = useState<string>("");
  const [summary, setSummary] = useState<SummaryState>({
    title: "Waiting for camera access",
    lines: ["Enable the webcam to run inference locally in the browser."],
  });

  const activeOption = useMemo(
    () => MODEL_OPTIONS.find((option) => option.id === selectedModel) ?? MODEL_OPTIONS[0],
    [selectedModel]
  );

  useEffect(() => {
    void startCamera();

    return () => {
      stopLoop();
      stopCameraTracks();
    };
  }, []);

  useEffect(() => {
    if (cameraState !== "ready") {
      return;
    }

    let cancelled = false;

    const activate = async () => {
      stopLoop();
      setError("");
      setModelState("loading");
      setSummary({
        title: `Loading ${activeOption.label}`,
        lines: [activeOption.description],
      });

      try {
        const model = await loadModel(selectedModel, modelCacheRef.current);
        if (cancelled) {
          return;
        }
        setModelState("ready");
        runLoop(selectedModel, model, () => cancelled);
      } catch (modelError) {
        if (cancelled) {
          return;
        }
        console.error(modelError);
        setModelState("error");
        setError(
          modelError instanceof Error
            ? modelError.message
            : "The selected model could not be loaded."
        );
      }
    };

    void activate();

    return () => {
      cancelled = true;
      stopLoop();
      clearCanvas();
    };
  }, [activeOption.description, activeOption.label, cameraState, selectedModel]);

  async function startCamera() {
    stopLoop();
    stopCameraTracks();
    setError("");
    setCameraState("starting");

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          facingMode: "user",
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
      });

      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }

      setCameraState("ready");
      setSummary({
        title: "Camera live",
        lines: ["Choose a model to start local inference."],
      });
    } catch (cameraError) {
      console.error(cameraError);
      setCameraState("error");
      setModelState("idle");
      setError(
        cameraError instanceof Error
          ? cameraError.message
          : "Camera access was blocked or is unavailable in this browser."
      );
    }
  }

  function stopCameraTracks() {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.srcObject = null;
    }
    setCameraState("idle");
  }

  function stopLoop() {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
  }

  function clearCanvas() {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) {
      return;
    }
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  function syncCanvasToVideo(video: HTMLVideoElement, canvas: HTMLCanvasElement) {
    if (canvas.width !== video.videoWidth || canvas.height !== video.videoHeight) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
    }
  }

  function drawLabel(
    context: CanvasRenderingContext2D,
    x: number,
    y: number,
    text: string,
    color: string
  ) {
    context.font = "600 14px ui-monospace, SFMono-Regular, Menlo, monospace";
    const width = context.measureText(text).width + 16;
    context.fillStyle = color;
    context.fillRect(x, Math.max(0, y - 22), width, 22);
    context.fillStyle = "#04131b";
    context.fillText(text, x + 8, Math.max(14, y - 6));
  }

  function drawFrameTitle(context: CanvasRenderingContext2D, text: string) {
    context.fillStyle = "rgba(10, 25, 47, 0.72)";
    context.fillRect(12, 12, Math.max(220, context.measureText(text).width + 20), 30);
    context.font = "600 14px ui-monospace, SFMono-Regular, Menlo, monospace";
    context.fillStyle = "#d5f6ff";
    context.fillText(text, 22, 32);
  }

  function maybeUpdateSummary(next: SummaryState) {
    const now = Date.now();
    if (now - lastSummaryUpdateRef.current < 180) {
      return;
    }
    lastSummaryUpdateRef.current = now;
    setSummary(next);
  }

  function runLoop(modelId: ModelId, model: unknown, isCancelled: () => boolean) {
    const loop = async () => {
      if (isCancelled()) {
        return;
      }

      const video = videoRef.current;
      const canvas = canvasRef.current;

      if (!isVideoReady(video) || !canvas) {
        frameRef.current = requestAnimationFrame(loop);
        return;
      }

      const context = canvas.getContext("2d");
      if (!context) {
        frameRef.current = requestAnimationFrame(loop);
        return;
      }

      syncCanvasToVideo(video, canvas);
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.lineWidth = 2;
      context.font = "600 14px ui-monospace, SFMono-Regular, Menlo, monospace";

      try {
        if (modelId === "coco-ssd") {
          const predictions = await (model as {
            detect: (input: HTMLVideoElement, maxNumBoxes?: number, minScore?: number) => Promise<
              Array<{ class: string; score: number; bbox: [number, number, number, number] }>
            >;
          }).detect(video, 20, 0.45);

          drawFrameTitle(context, "COCO-SSD object detection");

          predictions.slice(0, 6).forEach((prediction) => {
            const [x, y, width, height] = prediction.bbox;
            context.strokeStyle = "#6ee7ff";
            context.strokeRect(x, y, width, height);
            drawLabel(
              context,
              x,
              y,
              `${prediction.class} ${Math.round(prediction.score * 100)}%`,
              "#6ee7ff"
            );
          });

          maybeUpdateSummary({
            title: predictions.length
              ? `${predictions.length} object${predictions.length === 1 ? "" : "s"} found`
              : "No confident objects yet",
            lines: predictions.length
              ? predictions
                  .slice(0, 4)
                  .map((prediction) => `${prediction.class} · ${Math.round(prediction.score * 100)}%`)
              : ["Try moving a common object like a bottle, keyboard, person, or phone into frame."],
          });
        }

        if (modelId === "mobilenet") {
          const classes = await (model as {
            classify: (
              input: HTMLVideoElement,
              topK?: number
            ) => Promise<Array<{ className: string; probability: number }>>;
          }).classify(video, 3);

          drawFrameTitle(context, "MobileNet scene classification");
          classes.forEach((result, index) => {
            drawLabel(
              context,
              16,
              60 + index * 30,
              `${result.className} ${Math.round(result.probability * 100)}%`,
              "#f4c95d"
            );
          });

          maybeUpdateSummary({
            title: classes[0] ? classes[0].className : "Waiting for classification",
            lines: classes.length
              ? classes.map((result) => `${result.className} · ${Math.round(result.probability * 100)}%`)
              : ["Point the camera at a distinct object or scene for a stronger classification."],
          });
        }

        if (modelId === "handpose") {
          const hands = await (model as {
            estimateHands: (
              input: HTMLVideoElement,
              flipHorizontal?: boolean
            ) => Promise<
              Array<{
                handInViewConfidence?: number;
                landmarks: Array<[number, number, number]>;
                boundingBox: { topLeft: [number, number]; bottomRight: [number, number] };
              }>
            >;
          }).estimateHands(video, false);

          drawFrameTitle(context, "Handpose landmarks");

          hands.forEach((hand, index) => {
            const [x1, y1] = hand.boundingBox.topLeft;
            const [x2, y2] = hand.boundingBox.bottomRight;
            context.strokeStyle = "#86efac";
            context.strokeRect(x1, y1, x2 - x1, y2 - y1);
            drawLabel(context, x1, y1, `hand ${index + 1}`, "#86efac");

            context.fillStyle = "#d9ffe7";
            hand.landmarks.forEach(([x, y]) => {
              context.beginPath();
              context.arc(x, y, 3, 0, Math.PI * 2);
              context.fill();
            });
          });

          maybeUpdateSummary({
            title: hands.length
              ? `${hands.length} hand${hands.length === 1 ? "" : "s"} tracked`
              : "No hands detected yet",
            lines: hands.length
              ? hands.map(
                  (hand, index) =>
                    `Hand ${index + 1} · confidence ${Math.round(
                      (hand.handInViewConfidence ?? 0.8) * 100
                    )}%`
                )
              : ["Place one or both hands in frame with fingers separated for clearer landmarks."],
          });
        }

        if (modelId === "face-api") {
          const faceapi = model as {
            TinyFaceDetectorOptions: new (input?: { inputSize?: number; scoreThreshold?: number }) => unknown;
            detectAllFaces: (
              input: HTMLVideoElement,
              options: unknown
            ) => Promise<Array<{ score: number; box: { x: number; y: number; width: number; height: number } }>>;
          };

          const detections = await faceapi.detectAllFaces(
            video,
            new faceapi.TinyFaceDetectorOptions({ inputSize: 320, scoreThreshold: 0.45 })
          );

          drawFrameTitle(context, "Face API tiny detector");

          detections.forEach((detection, index) => {
            context.strokeStyle = "#fda4af";
            context.strokeRect(
              detection.box.x,
              detection.box.y,
              detection.box.width,
              detection.box.height
            );
            drawLabel(
              context,
              detection.box.x,
              detection.box.y,
              `face ${index + 1} ${Math.round(detection.score * 100)}%`,
              "#fda4af"
            );
          });

          maybeUpdateSummary({
            title: detections.length
              ? `${detections.length} face${detections.length === 1 ? "" : "s"} detected`
              : "No faces detected yet",
            lines: detections.length
              ? detections.map(
                  (detection, index) => `Face ${index + 1} · ${Math.round(detection.score * 100)}%`
                )
              : ["Try a well-lit face facing the camera for the tiny detector to lock on."],
          });
        }
      } catch (runtimeError) {
        console.error(runtimeError);
        setModelState("error");
        setError(
          runtimeError instanceof Error
            ? runtimeError.message
            : "Model inference failed while processing the video stream."
        );
        return;
      }

      frameRef.current = requestAnimationFrame(loop);
    };

    frameRef.current = requestAnimationFrame(loop);
  }

  return (
    <section
      id="live-detection-lab"
      className="container-editorial pb-14"
      aria-labelledby="live-detection-lab-title"
    >
      <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-soft">
        <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="border-b border-border lg:border-b-0 lg:border-r">
            <div className="flex items-center justify-between border-b border-border px-5 py-4 sm:px-6">
              <div>
                <div className="text-mono text-[11px] uppercase tracking-[0.24em] text-accent">
                  Live demo
                </div>
                <h2
                  id="live-detection-lab-title"
                  className="mt-2 text-display text-2xl font-medium tracking-tight text-foreground"
                >
                  Browser vision model lab
                </h2>
              </div>
              <div className="rounded-full border border-border bg-background px-3 py-1 text-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                Local inference
              </div>
            </div>

            <div className="space-y-4 p-5 sm:p-6">
              <div className="flex flex-col gap-3 md:flex-row md:items-center">
                <div className="min-w-0 flex-1">
                  <label className="text-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    Active model
                  </label>
                  <Select value={selectedModel} onValueChange={(value) => setSelectedModel(value as ModelId)}>
                    <SelectTrigger className="mt-2 h-12 rounded-2xl border-border bg-background">
                      <SelectValue placeholder="Choose a model" />
                    </SelectTrigger>
                    <SelectContent>
                      {MODEL_OPTIONS.map((option) => (
                        <SelectItem key={option.id} value={option.id}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-2 pt-5 md:pt-0">
                  <Button
                    type="button"
                    variant="secondary"
                    className="rounded-full"
                    onClick={() => void startCamera()}
                  >
                    <SquarePlay className="mr-2 h-4 w-4" />
                    Restart camera
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="rounded-full"
                    onClick={() => {
                      stopLoop();
                      stopCameraTracks();
                      clearCanvas();
                      setSummary({
                        title: "Camera stopped",
                        lines: ["Restart the camera when you want to resume inference."],
                      });
                    }}
                  >
                    <SquareX className="mr-2 h-4 w-4" />
                    Stop
                  </Button>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[1.5rem] border border-border bg-slate-950/95">
                <div className="aspect-video">
                  <video
                    ref={videoRef}
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                  />
                  <canvas
                    ref={canvasRef}
                    className="pointer-events-none absolute inset-0 h-full w-full"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent px-5 py-4 text-white">
                    <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-cyan-100/75">
                      <span className="inline-flex items-center gap-1.5">
                        <Camera className="h-3.5 w-3.5" />
                        {cameraState === "ready" ? "Camera ready" : cameraState}
                      </span>
                      <span>·</span>
                      <span className="inline-flex items-center gap-1.5">
                        <ScanSearch className="h-3.5 w-3.5" />
                        {activeOption.badge}
                      </span>
                      <span>·</span>
                      <span>{activeOption.label}</span>
                    </div>
                    <p className="mt-2 max-w-2xl text-sm text-slate-200/90">
                      {activeOption.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <StatusPill label="Camera" state={cameraState} />
                <StatusPill label="Model" state={modelState} />
              </div>
            </div>
          </div>

          <div className="space-y-6 p-5 sm:p-6">
            <div>
              <div className="text-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Live readout
              </div>
              <h3 className="mt-3 text-xl font-medium text-foreground">{summary.title}</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {summary.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-[1.5rem] border border-border bg-background p-5">
              <div className="text-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Model notes
              </div>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                <li>`COCO-SSD` is best for quick object boxes around people, bottles, cups, keyboards, and similar everyday items.</li>
                <li>`MobileNet` returns classifications rather than coordinates, so it works more like scene tagging than detection.</li>
                <li>`Handpose` is useful for gesture prototyping, pipetting ergonomics, and interaction experiments.</li>
                <li>`Face API` here uses the lightweight TinyFaceDetector model loaded from local static assets.</li>
              </ul>
            </div>

            <div className="rounded-[1.5rem] border border-dashed border-border p-5">
              <div className="flex items-start gap-3">
                {error ? (
                  <AlertCircle className="mt-0.5 h-5 w-5 text-destructive" />
                ) : (
                  <Loader2
                    className={`mt-0.5 h-5 w-5 ${modelState === "loading" ? "animate-spin text-accent" : "text-muted-foreground"}`}
                  />
                )}
                <div>
                  <div className="text-sm font-medium text-foreground">
                    {error ? "Something needs attention" : "Privacy and runtime"}
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {error ||
                      "Inference runs on-device in your browser tab. The webcam stream is not uploaded by this demo."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatusPill({
  label,
  state,
}: {
  label: string;
  state: "idle" | "starting" | "ready" | "loading" | "error";
}) {
  const tone =
    state === "ready"
      ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
      : state === "loading" || state === "starting"
        ? "bg-amber-500/10 text-amber-700 dark:text-amber-300"
        : state === "error"
          ? "bg-red-500/10 text-red-700 dark:text-red-300"
          : "bg-muted text-muted-foreground";

  return (
    <span
      className={`rounded-full px-3 py-1 text-mono text-[11px] uppercase tracking-[0.22em] ${tone}`}
    >
      {label}: {state}
    </span>
  );
}

async function ensureTf() {
  const tf = await import("@tensorflow/tfjs");
  await import("@tensorflow/tfjs-backend-webgl");

  try {
    await tf.setBackend("webgl");
  } catch {
    await tf.setBackend("cpu");
  }

  await tf.ready();
  return tf;
}

async function loadModel(modelId: ModelId, cache: Map<ModelId, unknown>) {
  if (cache.has(modelId)) {
    return cache.get(modelId);
  }

  await ensureTf();

  let loaded: unknown;

  if (modelId === "coco-ssd") {
    const cocoSsd = await import("@tensorflow-models/coco-ssd");
    loaded = await cocoSsd.load({ base: "mobilenet_v2" });
  }

  if (modelId === "mobilenet") {
    const mobilenet = await import("@tensorflow-models/mobilenet");
    loaded = await mobilenet.load({ version: 2, alpha: 1 });
  }

  if (modelId === "handpose") {
    const handpose = await import("@tensorflow-models/handpose");
    loaded = await handpose.load();
  }

  if (modelId === "face-api") {
    const faceapi = await import("face-api.js");
    await faceapi.nets.tinyFaceDetector.loadFromUri("/models/face-api");
    loaded = faceapi;
  }

  cache.set(modelId, loaded);
  return loaded;
}
