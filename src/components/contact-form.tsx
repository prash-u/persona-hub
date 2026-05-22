import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/config/site";

export function ContactForm() {
  return (
    <div className="signal-shell grid gap-8 p-6 lg:grid-cols-[1.2fr_0.8fr] lg:p-8">
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="flex flex-col gap-4"
      >
        <input
          type="hidden"
          name="form-name"
          value="contact"
        />
        <input
          type="hidden"
          name="bot-field"
        />
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-semibold"
          >
            Name
          </label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold"
          >
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-semibold"
          >
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell me a little about your project, collaboration, or idea."
            required
          />
        </div>
        <div className="flex flex-wrap gap-3">
          <Button type="submit">
            <Send
              className="size-4"
              aria-hidden="true"
            />
            Send enquiry
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() =>
              window.open(
                `mailto:${siteConfig.email}?subject=Portfolio enquiry`,
                "_blank"
              )
            }
          >
            <Mail
              className="size-4"
              aria-hidden="true"
            />
            Mail fallback
          </Button>
        </div>
      </form>
      <div className="rounded-[26px] border border-border/60 bg-background/55 p-6">
        <p className="eyebrow">Direct contact</p>
        <h3 className="mt-4 text-2xl font-semibold">Trusted, straightforward communication.</h3>
        <p className="text-muted-foreground mt-4 text-sm leading-6">
          This form is ready for Netlify Forms on static hosting. Use it for biotech collaboration ideas,
          software project enquiries, or roles that benefit from a mix of scientific operations and practical product building.
        </p>
        <div className="mt-6 grid gap-3 text-sm">
          <p>
            <span className="font-semibold">Email:</span> {siteConfig.email}
          </p>
          <p>
            <span className="font-semibold">LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/in/prashant-umrekar/"
              target="_blank"
              rel="noreferrer"
              className="text-accent font-medium"
            >
              prashant-umrekar
            </a>
          </p>
          <p>
            <span className="font-semibold">Location:</span> {siteConfig.location}
          </p>
          <p>
            <span className="font-semibold">Availability:</span> Open to biotech,
            scientific software, and selected product collaborations.
          </p>
        </div>
      </div>
    </div>
  );
}
