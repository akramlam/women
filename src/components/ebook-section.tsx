"use client";

import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Book, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function EbookSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Ressources Éducatives Gratuites
          </h2>
          <p className="text-muted-foreground text-lg">
            Téléchargez notre eBook pour approfondir vos connaissances sur les femmes en ingénierie
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden border-0 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* eBook Cover Image */}
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 flex items-center justify-center">
                <div className="relative w-full max-w-[250px] aspect-[3/4] shadow-xl rounded-lg overflow-hidden transform rotate-3 transition-transform hover:rotate-0">
                  <Image
                    src="/image.png"
                    alt="Couverture de l'eBook"
                    fill
                    className="object-cover"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      const target = e.target as HTMLImageElement;
                      target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='150' viewBox='0 0 100 150'%3E%3Crect width='100' height='150' fill='%23f0f0f0'/%3E%3Ctext x='50' y='75' font-family='Arial' font-size='12' text-anchor='middle' fill='%23888888'%3EMra w 9ada%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
              </div>
              
              {/* eBook Details */}
              <div className="p-6 md:p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Book className="h-6 w-6 text-primary" />
                    Mra w 9ada: Femmes Ingénieures au Maroc
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0 space-y-4">
                  <p className="text-muted-foreground">
                    Découvrez les parcours inspirants de femmes ingénieures marocaines qui ont brisé les barrières et transformé le paysage de l&apos;ingénierie au Maroc. Ce guide présente des histoires de réussite, des conseils pratiques et des ressources pour les futures ingénieures.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Leadership Féminin", "Ingénierie", "Éducation", "Carrières STEM", "Inspiration"].map((topic, i) => (
                      <Badge key={i} variant="secondary">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><span className="font-medium">Format:</span> PDF, 24 pages</p>
                    <p><span className="font-medium">Langue:</span> Français</p>
                    <p><span className="font-medium">Publié:</span> 2023</p>
                  </div>
                  
                  <div className="pt-4">
                    <Link href="/Mra w 9ada.pdf" target="_blank">
                      <Button className="w-full sm:w-auto gap-2">
                        <Download className="h-4 w-4" />
                        Télécharger l&apos;eBook Gratuit
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
} 