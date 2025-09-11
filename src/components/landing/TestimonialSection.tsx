import { Card, CardContent } from "@/components/ui/card";

export function TestimonialSection() {
  return (
    <section>
      <h2 className="text-3xl font-headline font-bold text-center text-foreground mb-8">
        Veja o que líderes como você estão dizendo:
      </h2>
      <Card className="bg-accent/50 shadow-lg">
        <CardContent className="p-8">
          <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground">
            "Eu era cético, mas este guia mudou o jogo. Economizei cerca de 8
            horas na preparação do meu sermão logo na primeira semana. O tempo
            que ganhei para estar com as famílias da igreja não tem preço."
          </blockquote>
          <p className="text-right mt-4 font-bold text-foreground">
            - Pr. João Silva, Igreja Batista Esperança
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
