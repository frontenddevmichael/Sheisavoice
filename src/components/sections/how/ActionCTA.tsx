import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import MotionSection, { MotionChild } from "@/components/ui/Motion";

export default function ActionCTA() {
  return (
    <section className="w-full bg-primary text-on-primary py-space-3xl lg:py-space-5xl relative overflow-hidden">
      <div className="max-w-[var(--max-w-content)] mx-auto px-5 lg:px-12 relative z-10">
        <MotionSection preset="blur">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <Badge variant="gold" className="mb-space-md">Direct Family &amp; Clinical Inquiries</Badge>
            <h2 className="font-headline text-headline-lg text-surface leading-tight mb-space-xl">
              Ready to Begin the Journey?
            </h2>
            <p className="font-body text-body-lg text-on-primary/85 max-w-2xl leading-relaxed mb-space-2xl">
              Whether you are a family seeking structured care for a child with special needs or an
              accredited provider desiring to serve underserved students, we are ready to connect.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-space-md">
              <Button variant="gold" size="lg" href="/contact">Submit an Intake Application</Button>
              <Button variant="ghost" size="lg" href="/contact" className="text-on-primary hover:bg-on-primary/10">
                Partner as a Clinical Provider
              </Button>
            </div>
            <p className="font-body text-body-sm text-on-primary/60 mt-space-2xl max-w-xl">
              SHEISAVOICE operates in full alignment with international child protection and
              non-stigmatizing protocols. All applications are treated with strict confidentiality.
            </p>
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
