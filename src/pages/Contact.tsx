import { useState } from "react";
import { Mail, Send, Github, Linkedin } from "lucide-react";
import { Seo } from "@/components/Seo";
import { SectionHeader } from "@/components/SectionHeader";
import { siteConfig } from "@/config/site";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // For Netlify Forms this submits to the host normally.
    // In environments without a form handler, fall back to mailto.
    const form = e.currentTarget;
    const isLocalOrPreview =
      typeof window !== "undefined" &&
      (window.location.hostname === "localhost" ||
        window.location.hostname.endsWith("lovable.app") ||
        window.location.hostname.endsWith("lovableproject.com"));

    if (isLocalOrPreview) {
      e.preventDefault();
      setSubmitting(true);
      const data = new FormData(form);
      const subject = encodeURIComponent(`[Portfolio] ${data.get("subject") || "Hello"}`);
      const body = encodeURIComponent(
        `From: ${data.get("name")} <${data.get("email")}>\n\n${data.get("message")}`
      );
      window.location.href = `mailto:${siteConfig.author.email}?subject=${subject}&body=${body}`;
      toast({
        title: "Opening your mail app",
        description: "We're using mailto in preview. On the deployed site this submits via Netlify Forms.",
      });
      setTimeout(() => setSubmitting(false), 800);
    }
  };

  const contactLinks = [
    {
      icon: <Mail className="h-4 w-4" />,
      title: "Email",
      value: siteConfig.author.email,
      href: `mailto:${siteConfig.author.email}`,
    },
    {
      icon: <Github className="h-4 w-4" />,
      title: "GitHub",
      value: siteConfig.social.github.replace(/^https?:\/\//, ""),
      href: siteConfig.social.github,
    },
    siteConfig.social.linkedin
      ? {
          icon: <Linkedin className="h-4 w-4" />,
          title: "LinkedIn",
          value: siteConfig.social.linkedin.replace(/^https?:\/\//, ""),
          href: siteConfig.social.linkedin,
        }
      : null,
  ].filter(Boolean) as Array<{
    icon: React.ReactNode;
    title: string;
    value: string;
    href: string;
  }>;

  return (
    <>
      <Seo
        title="Contact"
        path="/contact"
        description="Get in touch about research, products, or collaborations."
      />

      <section className="container-editorial pb-10 pt-16 md:pt-24">
        <SectionHeader
          eyebrow="Say hello"
          title="Let's talk"
          description="For research collaborations, freelance work, or just to share something interesting."
        />
      </section>

      <section className="container-editorial pb-24">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={onSubmit}
            className="rounded-2xl border border-border bg-card p-6 md:p-10 shadow-soft"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don't fill this out: <input name="bot-field" />
              </label>
            </p>

            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <div className="mt-5">
              <Field label="Subject" name="subject" />
            </div>
            <div className="mt-5">
              <label className="text-mono text-xs uppercase tracking-widest text-muted-foreground">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={6}
                className="mt-2 w-full resize-y rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-accent focus:ring-2 focus:ring-accent/20"
                placeholder="What are you working on?"
              />
            </div>

            <div className="mt-8 flex items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground">
                Or email directly at{" "}
                <a className="link-underline" href={`mailto:${siteConfig.author.email}`}>
                  {siteConfig.author.email}
                </a>
              </p>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-floating disabled:opacity-60"
              >
                <Send className="h-4 w-4" /> Send message
              </button>
            </div>
          </form>

          <aside className="space-y-3">
            {contactLinks.map((item) => (
              <ContactCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                value={item.value}
                href={item.href}
              />
            ))}

            <div className="mt-6 rounded-2xl border border-dashed border-border p-6">
              <div className="text-mono text-xs uppercase tracking-widest text-muted-foreground">
                Currently
              </div>
              <p className="mt-2 text-sm leading-relaxed text-foreground">
                Open to selected freelance and research work. Response time within 2–3 business days.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-mono text-xs uppercase tracking-widest text-muted-foreground">
        {label}
        {required && <span className="text-accent"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-accent focus:ring-2 focus:ring-accent/20"
      />
    </label>
  );
}

function ContactCard({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-soft"
    >
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/15 text-accent">
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="text-mono block text-[10px] uppercase tracking-widest text-muted-foreground">
          {title}
        </span>
        <span className="block truncate text-sm text-foreground">{value}</span>
      </span>
    </a>
  );
}
