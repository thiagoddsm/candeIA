import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <header className="text-center">
      <div className="mx-auto mb-6 flex h-[150px] w-[150px] items-center justify-center rounded-full bg-foreground">
        <span className="font-headline text-8xl font-bold text-background">
          C
        </span>
      </div>
      <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4 leading-tight">
        Gaste Menos Tempo com Tarefas e Mais Tempo com Vidas.
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
        O guia prático para líderes de igreja que desejam usar Inteligência
        Artificial com sabedoria para otimizar a gestão, aprofundar o
        discipulado e focar no que realmente importa.
      </p>
      <Button
        asChild
        size="lg"
        className="mt-10 rounded-full text-xl font-bold shadow-lg transition-transform hover:scale-105"
      >
        <Link href="https://pay.hotmart.com/T101524050N?off=epqjz7n9&bid=1756325471976">
          QUERO O MEU GUIA PRÁTICO AGORA <ArrowRight />
        </Link>
      </Button>
      <p className="text-muted-foreground text-sm mt-2">
        Acesso imediato por apenas 12x de R$9,99
      </p>
    </header>
  );
}
