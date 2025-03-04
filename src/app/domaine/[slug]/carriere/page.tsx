import { notFound } from "next/navigation";
import { fieldsData } from "@/data/engineering-fields";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Trophy, Wallet, Briefcase, ExternalLink } from "lucide-react";
import Link from "next/link";
import { RoadmapTimeline } from "@/components/roadmap-timeline";
// import { PodcastList } from "@/components/podcast-list";

// Remove the custom Props type and use the correct parameter typing
export default function CareerPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const domain = params.slug;
  const field = fieldsData[domain];
  
  if (!field) {
    notFound();
  }

  const careerParam = searchParams.career;
  if (!careerParam || Array.isArray(careerParam)) {
    notFound();
  }

  // Try to find the career by the slug from query params
  const careerSlug = careerParam;
  const career = field.careers[careerSlug];
  
  if (!career) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4 py-16">
        <Link href={`/domaine/${domain}`}>
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="w-4 h-4" /> Retour
          </Button>
        </Link>

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
            {career.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {career.description}
          </p>
        </div>

        {/* Salary Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wallet className="w-5 h-5" />
              Rémunération Indicative
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.entries(career.salary).map(([level, range]) => (
                <div key={level} className="text-center p-4">
                  <h3 className="font-semibold mb-2">
                    {level === "entry" ? "Débutant" : level === "mid" ? "Confirmé" : "Senior"}
                  </h3>
                  <p className="text-2xl font-bold text-primary">{range}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Requirements */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              Prérequis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              {career.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Roadmap Timeline */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Parcours de Formation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RoadmapTimeline steps={career.roadmap} />
          </CardContent>
        </Card>

        {/* External Resources */}
        {career.externalResources?.roadmaps && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Ressources Complémentaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {career.externalResources.roadmaps.map((resource, index) => (
                <a 
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <ExternalLink className="w-5 h-5" />
                        {resource.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Explorez ce parcours d&apos;apprentissage détaillé sur roadmap.sh
                      </p>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Other Career Opportunities */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Autres Débouchés</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(field.careers)
              .filter(([slug]) => slug !== careerSlug)
              .map(([slug, careerData], index) => (
                <Link 
                  key={index}
                  href={`/domaine/${domain}/carriere?career=${slug}`}
                >
                  <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Briefcase className="w-5 h-5" />
                        {careerData.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground line-clamp-2">
                        {careerData.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>

        {/* Add podcast list */}
        {/* {career.podcasts && <PodcastList podcasts={career.podcasts} />} */}
      </div>
    </div>
  );
} 