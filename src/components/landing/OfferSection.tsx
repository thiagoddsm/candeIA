import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";

export function OfferSection() {
  return (
    <section>
      <Card className="p-8 md:p-12 shadow-xl bg-accent/50">
        <CardContent className="p-0">
          <h2 className="text-3xl font-headline font-bold text-center text-foreground mb-8">
            Aqui está tudo o que você recebe hoje:
          </h2>
          <div className="space-y-4 text-center max-w-md mx-auto">
            <p className="text-lg flex items-center justify-center gap-2">
              <Check className="text-primary w-5 h-5" />O Guia Prático "Otimizando Ministérios com IA"
            </p>
            <p className="text-lg flex items-center justify-center gap-2">
              <Check className="text-primary w-5 h-5" />
              <span className="font-bold">BÔNUS #1:</span> Aplicativo de gestão de culto (Valor R$ 297,00)
            </p>
            <p className="text-lg flex items-center justify-center gap-2">
              <Check className="text-primary w-5 h-5" />
              <span className="font-bold">BÔNUS #2:</span> Prompt para criação de roteiro para Pequenos Grupos (Valor R$ 39,90)
            </p>
            <p className="text-lg flex items-center justify-center gap-2">
              <Check className="text-primary w-5 h-5" />
              <span className="font-bold">BÔNUS #3:</span> Grupo no WhatsApp para tirar dúvidas (Valor R$ 59,90)
            </p>

            <div className="pt-6">
              <p className="text-lg text-muted-foreground">De <span className="line-through">R$ 516,68</span> por apenas:</p>
              <p className="text-3xl font-bold text-primary mt-2">
                12x de R$9,99
              </p>
              <p className="text-muted-foreground text-sm">Ou R$ 119,88 à vista</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button
              asChild
              size="lg"
              className="rounded-full text-xl font-bold shadow-lg transition-transform hover:scale-105"
            >
              <Link href="https://pay.hotmart.com/T101524050N?off=epqjz7n9&bid=1756325471976">
                QUERO MEU ACESSO IMEDIATO <ArrowRight />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
