import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Briefcase, School, Trophy, Users } from "lucide-react";
import Link from "next/link";
import { fieldsData } from "@/data/engineering-fields";

// Helper function to create URL-friendly slugs
function createSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .trim();
}

// Helper function to map opportunity titles to career slugs
function getCareerSlug(domain: string, opportunity: string): string {
  // For Génie Énergétique, map the opportunities to the correct career slugs
  if (domain === 'energetique') {
    const opportunityMap: Record<string, string> = {
      "Ingénieure en Efficacité Énergétique": "ingenieure-efficacite-energetique",
      "Conceptrice de Systèmes Solaires": "conceptrice-systemes-solaires",
      // Add mappings for other opportunities as they are implemented
      "Spécialiste en Énergie Éolienne": "ingenieure-efficacite-energetique", // Fallback for now
      "Consultante en Transition Énergétique": "ingenieure-efficacite-energetique", // Fallback for now
      "Responsable de Projets Énergies Renouvelables": "conceptrice-systemes-solaires", // Fallback for now
      "Ingénieure en Réseaux Intelligents": "ingenieure-efficacite-energetique" // Fallback for now
    };
    
    return opportunityMap[opportunity] || createSlug(opportunity);
  }
  
  // For other domains, use the default slug creation
  return createSlug(opportunity);
}

export default function DomainePage({ params }: { params: { slug: string } }) {
  const domain = params.slug;
  const fieldData = fieldsData[domain];

  if (!fieldData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4 py-16">
        <Link href="/">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="w-4 h-4" /> Retour
          </Button>
        </Link>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16"> 
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
            {fieldData.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {fieldData.description}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-3xl text-primary">
                {fieldData.stats.employmentRate}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Taux d&apos;emploi</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-3xl text-primary">
                {fieldData.stats.averageSalary}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Salaire moyen</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-3xl text-primary">
                {fieldData.stats.femalePercentage}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Ingénieures</p>
            </CardContent>
          </Card>
        </div>

        {/* Career Opportunities Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Débouchés Professionnels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fieldData.opportunities.map((opportunity, index) => {
              const careerSlug = getCareerSlug(domain, opportunity);
              return (
                <Link 
                  key={index}
                  href={`/domaine/${domain}/carriere?career=${careerSlug}`}
                >
                  <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Briefcase className="w-5 h-5" />
                        {opportunity}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Découvrez le parcours et les compétences requises
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Schools */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <School className="w-5 h-5 text-primary" />
              Meilleures Écoles
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {fieldData.rankings.map((school, index) => (
                <div key={index} className="p-4 rounded-lg bg-secondary/5">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant="outline">{school.rank}</Badge>
                    <span className="font-medium">{school.school}</span>
                  </div>
                  {school.details && (
                    <p className="text-sm text-muted-foreground ml-9">
                      {school.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Success Stories */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-primary" />
              Parcours Inspirants
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              {fieldData.successStories.map((story, index) => (
                <div key={index} className="p-6 rounded-lg bg-secondary/5 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{story.name}</h3>
                      <p className="text-muted-foreground">
                        {story.role} - {story.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">
                    &quot;{story.achievement}&quot;
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-primary/5 border-none">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4">
                Intéressée par {fieldData.title} ?
              </h3>
              <p className="text-muted-foreground mb-6">
                Contactez-nous pour en savoir plus sur les opportunités dans ce domaine
              </p>
              <Link href="/contact">
                <Button size="lg" className="gap-2">
                  Nous Contacter <ArrowLeft className="w-4 h-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 