import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Award, BookOpen, Heart, Sparkles, CheckCircle2, Globe, Lightbulb } from "lucide-react";

// const teamMembers = [
//   {
//     name: "Fatima Zahra",
//     role: "Fondatrice & CEO",
//     bio: "Ingénieure en informatique avec 10 ans d'expérience dans le développement de solutions technologiques pour l'éducation.",
//     image: "/team/fatima.jpg"
//   },
//   {
//     name: "Nadia Fathi",
//     role: "Directrice Pédagogique",
//     bio: "Docteure en sciences de l'éducation, spécialisée dans les parcours d'apprentissage pour les femmes en STEM.",
//     image: "/team/nadia.jpg"
//   },
//   {
//     name: "Salma Bennani",
//     role: "Responsable Partenariats",
//     bio: "MBA en gestion d'entreprise, elle développe des relations avec les écoles d'ingénieurs et les entreprises du secteur.",
//     image: "/team/salma.jpg"
//   }
// ];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Adjusted to prevent overlay issues */}
      <section className="relative bg-gradient-to-br from-primary to-primary/9 pt-16 pb-48 md:pt-24 md:pb-56">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,rgba(27, 25, 25, 0.8))]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Façonner l&apos;Avenir de l&apos;Ingénierie au Féminin
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-90 mb-6 md:mb-8">
              Notre mission est d&apos;inspirer, connecter et propulser la prochaine génération de femmes ingénieures au Maroc.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" variant="secondary" className="gap-2 text-primary font-medium w-full sm:w-auto">
                  Rejoignez-nous <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a href="#notre-histoire" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="gap-2 bg-white/10 text-white border-white/20 hover:bg-white/20 w-full sm:w-auto">
                  Notre Histoire
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Cards Section - Moved to its own section to fix overlay */}
      {/* <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 -mt-32 md:-mt-24 relative z-20">
            <Card className="bg-card shadow-xl border-0">
              <CardContent className="p-4 md:p-8">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-primary/10 p-2 md:p-3 rounded-full">
                    <Globe className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2">Impact National</h3>
                    <p className="text-sm md:text-base text-muted-foreground">
                      Présentes dans 12 villes et 24 établissements d&apos;enseignement supérieur au Maroc
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card shadow-xl border-0">
              <CardContent className="p-4 md:p-8">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-primary/10 p-2 md:p-3 rounded-full">
                    <Users className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2">Communauté</h3>
                    <p className="text-sm md:text-base text-muted-foreground">
                      Plus de 5,000 membres actifs et un réseau de 200+ mentors professionnels
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card shadow-xl border-0 sm:col-span-2 md:col-span-1">
              <CardContent className="p-4 md:p-8">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-primary/10 p-2 md:p-3 rounded-full">
                    <Lightbulb className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2">Innovation</h3>
                    <p className="text-sm md:text-base text-muted-foreground">
                      15 projets d&apos;innovation lancés par des femmes ingénieures accompagnées
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}
      
      {/* Mission Section - Adjusted for mobile */}
      <section className="py-20 md:py-32 bg-background mt-16 sm:mt-0">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div>
                <div className="inline-block bg-primary/10 px-3 py-1 md:px-4 md:py-2 rounded-full text-primary font-medium mb-4 md:mb-6 text-sm md:text-base">
                  Notre Mission
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Transformer le paysage de l&apos;ingénierie au Maroc</h2>
                <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
                  Nous œuvrons pour un avenir où les femmes sont équitablement représentées dans tous les domaines de l&apos;ingénierie, apportant leur perspective unique et leur talent pour résoudre les défis complexes de notre société.
                </p>
                
                <div className="space-y-3 md:space-y-4">
                  <div className="flex gap-2 md:gap-3">
                    <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm md:text-base"><span className="font-medium">Éducation</span> - Fournir des ressources pédagogiques adaptées et accessibles</p>
                  </div>
                  <div className="flex gap-2 md:gap-3">
                    <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm md:text-base"><span className="font-medium">Mentorat</span> - Connecter étudiantes et professionnelles expérimentées</p>
                  </div>
                  <div className="flex gap-2 md:gap-3">
                    <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm md:text-base"><span className="font-medium">Opportunités</span> - Faciliter l&apos;accès aux stages et emplois dans le secteur</p>
                  </div>
                </div>
              </div>
              
              <div className="relative mt-8 md:mt-0">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <Image 
                      src="/pexels-olia-danilevich-8145247.jpg" 
                      alt="Femmes ingénieures collaborant" 
                      width={800} 
                      height={500}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 bg-card p-3 md:p-4 rounded-xl shadow-lg">
                  <div className="bg-primary/10 p-2 md:p-3 rounded-full">
                    <Award className="h-6 w-6 md:h-10 md:w-10 text-primary" />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 md:-top-8 md:-right-8 bg-card p-3 md:p-4 rounded-xl shadow-lg">
                  <div className="bg-primary/10 p-2 md:p-3 rounded-full">
                    <BookOpen className="h-6 w-6 md:h-10 md:w-10 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Story Section - With timeline */}
      {/* <section id="notre-histoire" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-primary/10 px-4 py-2 rounded-full text-primary font-medium mb-6">
                Notre Histoire
              </div>
              <h2 className="text-4xl font-bold mb-6">Un parcours d&apos;engagement et d&apos;impact</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Depuis notre création, nous avons franchi des étapes importantes pour transformer le paysage de l&apos;ingénierie au Maroc.
              </p>
            </div>
            
            <div className="relative border-l-2 border-primary/20 pl-10 ml-6 space-y-12">
              <div className="absolute top-0 left-0 w-4 h-4 rounded-full bg-primary -translate-x-[9px]"></div>
              
              <div>
                <div className="absolute -left-[9px] w-4 h-4 rounded-full bg-primary"></div>
                <h3 className="text-2xl font-bold mb-2">2022 - Fondation</h3>
                <p className="text-muted-foreground">
                  Création de notre plateforme suite au constat de la sous-représentation des femmes dans les filières d&apos;ingénierie au Maroc.
                </p>
              </div>
              
              <div>
                <div className="absolute -left-[9px] w-4 h-4 rounded-full bg-primary"></div>
                <h3 className="text-2xl font-bold mb-2">2023 - Expansion</h3>
                <p className="text-muted-foreground">
                  Lancement de programmes de mentorat dans 5 grandes écoles d&apos;ingénieurs et partenariats avec 10 entreprises technologiques.
                </p>
              </div>
              
              <div>
                <div className="absolute -left-[9px] w-4 h-4 rounded-full bg-primary"></div>
                <h3 className="text-2xl font-bold mb-2">2024 - Innovation</h3>
                <p className="text-muted-foreground">
                  Création d&apos;un incubateur dédié aux projets technologiques portés par des femmes ingénieures et lancement de bourses d&apos;études.
                </p>
              </div>
              
              <div>
                <div className="absolute -left-[9px] w-4 h-4 rounded-full bg-primary"></div>
                <h3 className="text-2xl font-bold mb-2">2025 - Vision</h3>
                <p className="text-muted-foreground">
                  Notre objectif est d&apos;atteindre 10,000 membres actifs et d&apos;étendre notre présence dans toutes les régions du Maroc.
                </p>
              </div>
              
              <div className="absolute bottom-0 left-0 w-4 h-4 rounded-full bg-primary -translate-x-[9px]"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section - Colorful cards */}
      {/* <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-primary/10 px-4 py-2 rounded-full text-primary font-medium mb-6">
                Nos Valeurs
              </div>
              <h2 className="text-4xl font-bold mb-6">Les principes qui nous guident</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Ces valeurs fondamentales sont au cœur de chacune de nos actions et décisions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="h-2 bg-primary w-full"></div>
                <CardContent className="p-8">
                  <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Inclusion</h3>
                  <p className="text-muted-foreground">
                    Nous créons un environnement où chaque femme peut s&apos;épanouir, indépendamment de son origine, son parcours ou ses convictions. La diversité est notre force.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="h-2 bg-primary w-full"></div>
                <CardContent className="p-8">
                  <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Innovation</h3>
                  <p className="text-muted-foreground">
                    Nous encourageons la créativité et l&apos;esprit d&apos;innovation, essentiels pour relever les défis complexes de notre monde en constante évolution.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="h-2 bg-primary w-full"></div>
                <CardContent className="p-8">
                  <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Collaboration</h3>
                  <p className="text-muted-foreground">
                    Nous favorisons l&apos;entraide et le partage de connaissances, convaincus que le succès collectif repose sur la force de notre communauté.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="h-2 bg-primary w-full"></div>
                <CardContent className="p-8">
                  <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Excellence</h3>
                  <p className="text-muted-foreground">
                    Nous visons l&apos;excellence dans tout ce que nous entreprenons, en offrant des ressources et des services de la plus haute qualité.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section> */}
      
      {/* Team Section - Modern cards with hover effects */} 
      {/* <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-primary/10 px-4 py-2 rounded-full text-primary font-medium mb-6">
                Notre Équipe
              </div>
              <h2 className="text-4xl font-bold mb-6">Les visionnaires derrière notre mission</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Une équipe passionnée et déterminée à transformer le paysage de l&apos;ingénierie au Maroc.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group">
                <div className="relative overflow-hidden rounded-xl shadow-lg mb-4 bg-muted aspect-[3/4]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-muted-foreground">Photo: Fatima Zahra</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <p className="font-light">Ingénieure en informatique avec 10 ans d&apos;expérience dans le développement de solutions technologiques pour l&apos;éducation.</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold">Fatima Zahra</h3>
                <p className="text-primary">Fondatrice & CEO</p>
              </div>
              
              <div className="group">
                <div className="relative overflow-hidden rounded-xl shadow-lg mb-4 bg-muted aspect-[3/4]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-muted-foreground">Photo: Nadia Fathi</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <p className="font-light">Docteure en sciences de l&apos;éducation, spécialisée dans les parcours d&apos;apprentissage pour les femmes en STEM.</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold">Nadia Fathi</h3>
                <p className="text-primary">Directrice Pédagogique</p>
              </div>
              
              <div className="group">
                <div className="relative overflow-hidden rounded-xl shadow-lg mb-4 bg-muted aspect-[3/4]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-muted-foreground">Photo: Salma Bennani</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <p className="font-light">MBA en gestion d&apos;entreprise, elle développe des relations avec les écoles d&apos;ingénieurs et les entreprises du secteur.</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold">Salma Bennani</h3>
                <p className="text-primary">Responsable Partenariats</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      
      {/* CTA Section - Adjusted for mobile */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/9 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Rejoignez Notre Mouvement
            </h2>
            <p className="text-base md:text-xl opacity-90 mb-8 md:mb-10 max-w-2xl mx-auto">
              Ensemble, nous pouvons transformer le paysage de l&apos;ingénierie au Maroc et créer un avenir où les femmes ingénieures brillent par leur talent et leur innovation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" variant="secondary" className="gap-2 text-primary font-medium w-full sm:w-auto">
                  Contactez-nous <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="gap-2 bg-white/10 text-white border-white/20 hover:bg-white/20 w-full sm:w-auto">
                  Explorer les Domaines
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 