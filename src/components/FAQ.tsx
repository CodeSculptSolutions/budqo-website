import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { FadeInUp, StaggerChildren, StaggerItem } from '@/components/AnimatedSection'
import { faq } from '@data/faq'

export function FAQ() {
  return (
    <section id="faq" className="bg-card py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <FadeInUp>
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-ink-subtle mb-4">
              FAQ
            </p>
            <h2
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground"
              style={{ fontFamily: '"General Sans", var(--font-manrope, ui-sans-serif)' }}
            >
              Good questions.
            </h2>
          </div>
        </FadeInUp>

        {/* Accordion */}
        <StaggerChildren staggerDelay={0.06}>
          <Accordion className="w-full">
            {faq.map((item) => (
              <StaggerItem key={item.id}>
                <AccordionItem
                  value={item.id}
                  className="border-b border-border last:border-0"
                >
                  <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:text-primary hover:no-underline py-5 transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </StaggerItem>
            ))}
          </Accordion>
        </StaggerChildren>
      </div>
    </section>
  )
}
