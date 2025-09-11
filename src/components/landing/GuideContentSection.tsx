"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

export function GuideContentSection() {
  return (
    <section>
      <h2 className="text-3xl font-headline font-bold text-center text-foreground mb-12">
        O que você vai destravar com este guia:
      </h2>
      <Tabs defaultValue="culto" className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 h-auto">
          <TabsTrigger value="culto">Gestão de Culto</TabsTrigger>
          <TabsTrigger value="grupos">Pequenos Grupos</TabsTrigger>
          <TabsTrigger value="sermoes">Sermões e Conteúdo</TabsTrigger>
        </TabsList>
        <Card className="mt-4">
          <CardContent className="p-6 text-center">
            <TabsContent value="culto">
              <h3 className="font-bold text-xl mb-2 text-primary">
                Crie um Sistema de Gestão de Culto em Tempo Real
              </h3>
              <p className="text-muted-foreground">
                Aprenda o passo a passo para desenvolver um aplicativo simples,
                como o que usamos em nossa igreja, que organiza toda a ordem do
                culto, com cronômetros e instruções específicas para cada equipe
                (som, projeção, louvor), garantindo que todos os voluntários
                estejam perfeitamente alinhados.
              </p>
            </TabsContent>
            <TabsContent value="grupos">
              <h3 className="font-bold text-xl mb-2 text-primary">
                Gere Roteiros de Estudo para Pequenos Grupos em Minutos
              </h3>
              <p className="text-muted-foreground">
                Receba os prompts exatos que usamos para transformar a mensagem
                do sermão de domingo em um roteiro completo para os pequenos
                grupos da semana, com perguntas para debate, quebra-gelo e
                textos de apoio, economizando horas de trabalho.
              </p>
            </TabsContent>
            <TabsContent value="sermoes">
              <h3 className="font-bold text-xl mb-2 text-primary">
                Potencialize a Preparação de Sermões e Aulas
              </h3>
              <p className="text-muted-foreground">
                Descubra como usar a IA para fazer pesquisas teológicas,
                encontrar ilustrações, criar conteúdo para o ministério infantil
                e desenvolver materiais de discipulado, otimizando seu tempo
                para focar na essência da mensagem.
              </p>
            </TabsContent>
          </CardContent>
        </Card>
      </Tabs>
    </section>
  );
}
