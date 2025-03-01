import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Award, BookOpen, Heart, Sparkles } from "lucide-react";

const teamMembers = [
  {
    name: "Fatima Zahra",
    role: "Fondatrice & CEO",
    bio: "Ingénieure en informatique avec 10 ans d'expérience dans le développement de solutions technologiques pour l'éducation.",
    image: "/team/fatima.jpg"
  },
  {
    name: "Nadia Fathi",
    role: "Directrice Pédagogique",
    bio: "Docteure en sciences de l'éducation, spécialisée dans les parcours d'apprentissage pour les femmes en STEM.",
    image: "/team/nadia.jpg"
  },
  {
    name: "Salma Bennani",
    role: "Responsable Partenariats",
    bio: "MBA en gestion d'entreprise, elle développe des relations avec les écoles d'ingénieurs et les entreprises du secteur.",
    image: "/team/salma.jpg"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
              Notre Mission
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Inspirer et accompagner la prochaine génération de femmes ingénieures au Maroc
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-background/60 backdrop-blur-sm border-primary/10 hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="mb-4 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Communauté</h3>
                <p className="text-muted-foreground">
                  Créer un réseau solide de femmes ingénieures pour partager expériences et opportunités
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background/60 backdrop-blur-sm border-primary/10 hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="mb-4 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Éducation</h3>
                <p className="text-muted-foreground">
                  Fournir des ressources pédagogiques adaptées aux différents domaines de l'ingénierie
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background/60 backdrop-blur-sm border-primary/10 hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="mb-4 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  Promouvoir l'excellence et l'innovation dans tous les domaines de l'ingénierie
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>
              <p className="text-muted-foreground mb-4">
                Fondée en 2022, notre plateforme est née d'un constat simple : les femmes sont encore sous-représentées dans les filières d'ingénierie au Maroc, malgré leur talent et leur potentiel.
              </p>
              <p className="text-muted-foreground mb-4">
                Notre équipe, composée d'ingénieures passionnées et d'experts en éducation, s'est donnée pour mission de changer cette réalité en créant un écosystème complet d'information, de formation et de mise en réseau.
              </p>
              <p className="text-muted-foreground">
                Aujourd'hui, nous accompagnons des milliers d'étudiantes et de professionnelles dans leur parcours, contribuant ainsi à façonner un avenir où la diversité est synonyme d'innovation.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 z-10 rounded-lg"></div>
              <Image 
                src="/about/team-working.jpg" 
                alt="Notre équipe au travail" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nos Valeurs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ces principes guident chacune de nos actions et décisions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="mt-1">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Inclusion</h3>
                <p className="text-muted-foreground">
                  Nous croyons en la force de la diversité et nous nous engageons à créer un environnement où chacune peut s'épanouir, quels que soient son origine, son parcours ou ses convictions.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="mt-1">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  Nous encourageons la créativité et l'esprit d'innovation, essentiels pour relever les défis complexes de notre monde en constante évolution.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="mt-1">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
                <p className="text-muted-foreground">
                  Nous favorisons l'entraide et le partage de connaissances, convaincus que le succès collectif repose sur la force de notre communauté.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="mt-1">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  Nous visons l'excellence dans tout ce que nous entreprenons, en offrant des ressources et des services de la plus haute qualité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Notre Équipe</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Des professionnelles passionnées qui œuvrent chaque jour pour notre mission
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all">
                <div className="relative h-64">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Rejoignez Notre Communauté
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ensemble, construisons un avenir où les femmes ingénieures marocaines brillent par leur talent et leur innovation
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