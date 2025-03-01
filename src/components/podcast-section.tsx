"use client"

// import { useState } from "react";
import { ExternalLink, Music } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

interface Podcast {
  title: string;
  description: string;
  host: string;
  topics: string[];
  spotifyEpisodeId: string;
}

// Featured podcast with Spotify episode ID
const featuredPodcast: Podcast = {
  title: "Marie Curie: Pionnière de la Radioactivité",
  description: "Marie Curie était une physicienne et chimiste franco-polonaise, pionnière dans l'étude de la radioactivité. Elle a découvert deux éléments, le polonium et le radium, avec son mari Pierre Curie. Ses recherches ont permis des avancées majeures dans la physique nucléaire et la médecine, notamment en radiothérapie. Elle est la première femme à avoir reçu un prix Nobel et la seule à en avoir obtenu deux dans des disciplines scientifiques différentes (physique en 1903 et chimie en 1911).",
  host: "Dina",
  topics: ["Physique", "Chimie", "Femmes Scientifiques", "Prix Nobel", "Radioactivité"],
  spotifyEpisodeId: "44Iks6PlAF7IB562A8eVLe"
};

export function PodcastSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Femmes Pionnières en Sciences</h2>
          <p className="text-muted-foreground text-lg">
            Découvrez les histoires inspirantes des femmes qui ont révolutionné le monde scientifique
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Music className="h-5 w-5 text-primary" />
                {featuredPodcast.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <p className="text-muted-foreground mb-4">
                  {featuredPodcast.description}
                </p>
                <div className="mb-4">
                  <span className="text-sm text-muted-foreground">
                    Par <span className="font-medium">{featuredPodcast.host}</span>
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPodcast.topics.map((topic, i) => (
                    <Badge key={i} variant="secondary">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Spotify Embedded Player */}
              <div className="w-full rounded-lg overflow-hidden">
                <iframe 
                  style={{ borderRadius: "12px" }} 
                  src={`https://open.spotify.com/embed/episode/${featuredPodcast.spotifyEpisodeId}?utm_source=generator&theme=0&t=0`} 
                  width="100%" 
                  height="152" 
                  frameBorder="0" 
                  allowFullScreen 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                ></iframe>
              </div>
              
              {/* Full Spotify Link */}
              <div className="mt-4 text-center">
                <a 
                  href={`https://open.spotify.com/episode/${featuredPodcast.spotifyEpisodeId}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-green-600 hover:text-green-700"
                >
                  Écouter l&apos;épisode complet sur Spotify
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 