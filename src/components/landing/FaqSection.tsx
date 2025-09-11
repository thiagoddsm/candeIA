"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Preciso saber de tecnologia ou programação?",
    answer:
      "Não! O guia foi feito para líderes de igreja, não para programadores. Todas as ferramentas são apresentadas de forma simples e o foco está em estratégias que qualquer pessoa pode aplicar, usando prompts de texto que você pode copiar e colar.",
  },
  {
    question: 'Usar IA não vai "esfriar" o ministério?',
    answer:
      "Pelo contrário. A proposta do guia é exatamente o oposto: usar a IA para automatizar tarefas operacionais e burocráticas, liberando mais tempo e energia para o que realmente importa: o cuidado pastoral, o discipulado, a oração e o relacionamento com as pessoas.",
  },
  {
    question: "As ferramentas ensinadas são pagas?",
    answer:
      "A grande maioria das estratégias e ferramentas ensinadas no guia pode ser aplicada usando as versões gratuitas das plataformas de IA, como o ChatGPT. Incluímos um bônus com uma lista selecionada de ferramentas gratuitas e poderosas para você começar sem custos.",
  },
];

export function FaqSection() {
  return (
    <section>
      <h2 className="text-3xl font-headline font-bold text-center text-foreground mb-12">
        Perguntas Frequentes (FAQ)
      </h2>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="bg-card border-none rounded-lg shadow-sm">
              <AccordionTrigger className="p-5 text-left font-semibold text-lg hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="p-5 pt-0 text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
