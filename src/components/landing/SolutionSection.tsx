import { Card, CardContent } from "@/components/ui/card";

export function SolutionSection() {
  return (
    <section>
      <Card className="p-8 md:p-12 shadow-xl bg-accent/50">
        <CardContent className="p-0">
          <h2 className="text-3xl font-headline font-bold text-center text-foreground mb-6">
            O Guia Prático "Otimizando Ministérios com IA" é o mapa que você
            precisava.
          </h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto">
            A Inteligência Artificial não veio para substituir o pastoreio, mas
            para potencializá-lo. Como na Parábola dos Talentos (Mateus
            25:14-30), a IA é uma ferramenta que, usada com sabedoria, nos torna
            mordomos mais eficazes do nosso tempo. Este guia vai direto ao
            ponto, mostrando como transformar a IA em sua maior aliada
            ministerial.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
