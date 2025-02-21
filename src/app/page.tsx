import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { engineeringFields } from "@/data/engineering-fields";
import { ArrowRight, Users, GraduationCap, Building } from "lucide-react";
import Link from "next/link";

const stats = [
  {
    title: "Étudiantes",
    value: "35%",
    description: "des étudiants en ingénierie",
    icon: Users
  },
  {
    title: "Diplômées",
    value: "5000+",
    description: "ingénieures par an",
    icon: GraduationCap
  },
  {
    title: "Entreprises",
    value: "250+",
    description: "partenaires",
    icon: Building
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
              Femmes Ingénieures au Maroc
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Découvrez les parcours inspirants des femmes dans l&apos;ingénierie et rejoignez la nouvelle génération d&apos;innovatrices
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/about">
                <Button size="lg" className="gap-2">
                  Découvrir <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Nous Contacter
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-none shadow-md bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-4xl font-bold text-primary">
                    {stat.value}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold mb-2">{stat.title}</h3>
                  <p className="text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Fields Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Domaines d&apos;Ingénierie</h2>
            <p className="text-muted-foreground">
              Explorez les différentes spécialités et trouvez votre voie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {engineeringFields.map((field) => (
              <Link href={`/domaine/${field.slug}`} key={field.slug}>
                <Card className="group hover:shadow-xl transition-all duration-300 border-primary/10 hover:border-primary/30 h-full">
                  <CardHeader>
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                      {field.icon}
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {field.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {field.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Voir les détails
                    </span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prête à commencer votre parcours ?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Rejoignez la communauté des femmes ingénieures au Maroc et façonnez l&apos;avenir de la technologie
          </p>
          <Link href="/contact">
            <Button size="lg" className="gap-2">
              Contactez-nous <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
