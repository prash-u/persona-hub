import { ContactForm } from "@/components/contact-form";
import { Seo } from "@/components/seo";
import { SectionHeader } from "@/components/section-header";

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact"
        description="Professional contact page with static-friendly form support."
        path="/contact"
        breadcrumbLabel="Contact"
      />
      <div className="shell section-space space-y-8">
        <section className="route-hero">
          <SectionHeader
            eyebrow="Contact"
            title="A premium, trustworthy contact surface for opportunities and collaborations."
            description="Use the form for project enquiries, biotech collaboration ideas, speaking invitations, or selective creative partnerships. The form is static-host friendly and includes a direct mail fallback."
          />
          <div className="page-panel">
            <p className="eyebrow">Best fit</p>
            <p className="text-sm leading-7 text-muted-foreground">
              The strongest conversations usually sit at the overlap of biotech operations, scientific software, data-rich interfaces, and technically literate product storytelling.
            </p>
          </div>
        </section>
        <ContactForm />
      </div>
    </>
  );
}
