import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ClipboardList, Users, Handshake, Smile } from "lucide-react";

const painPoints = [
  {
    title: "Gestão do Culto",
    description:
      "Coordenar voluntários, som, projeção e louvor em tempo real é um desafio constante.",
    icon: <ClipboardList className="w-10 h-10 text-primary mb-4" />,
  },
  {
    title: "Pequenos Grupos",
    description:
      "Criar roteiros de estudo semanais consome horas preciosas de preparo.",
    icon: <Users className="w-10 h-10 text-primary mb-4" />,
  },
  {
    title: "Voluntariado",
    description:
      "Encontrar, escalar e comunicar-se com a equipe de voluntários é uma luta recorrente.",
    icon: <Handshake className="w-10 h-10 text-primary mb-4" />,
  },
  {
    title: "Ministério Infantil",
    description:
      "Preparar aulas criativas e gerenciar a equipe de professores exige um esforço enorme.",
    icon: <Smile className="w-10 h-10 text-primary mb-4" />,
  },
];

export function PainPointsSection() {
  return (
    <section>
      <h2 className="text-3xl font-headline font-bold text-center text-foreground mb-12">
        Sua rotina ministerial se parece com isso?
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {painPoints.map((point) => (
          <Card key={point.title} className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="items-center">
              {point.icon}
              <CardTitle>{point.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">{point.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="text-center text-muted-foreground mt-8">
        Se isso soa familiar, saiba que a culpa não é sua. O ministério moderno
        exige mais do que nunca.{" "}
        <strong className="text-foreground">Até agora.</strong>
      </p>
    </section>
  );
}
