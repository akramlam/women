"use client";

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

// Featured podcasts with Spotify episode IDs
const featuredPodcasts: Podcast[] = [
  {
    title: "Marie Curie: Pionnière de la Radioactivité",
    description:
      "Marie Curie était une physicienne et chimiste franco-polonaise, pionnière dans l'étude de la radioactivité. Elle a découvert deux éléments, le polonium et le radium, avec son mari Pierre Curie. Ses recherches ont permis des avancées majeures dans la physique nucléaire et la médecine, notamment en radiothérapie. Elle est la première femme à avoir reçu un prix Nobel et la seule à en avoir obtenu deux dans des disciplines scientifiques différentes (physique en 1903 et chimie en 1911).",
    host: "Dina",
    topics: [
      "Physique",
      "Chimie",
      "Femmes Scientifiques",
      "Prix Nobel",
      "Radioactivité",
    ],
    spotifyEpisodeId: "44Iks6PlAF7IB562A8eVLe"
  },
  {
    title: "Leïla Benali: Pionnière de la Transition Énergétique au Maroc",
    description:
      "Leïla Benali est une ingénieure et experte en énergie et développement durable, qui a marqué le secteur par son expertise et son engagement. Ancienne ministre de la Transition énergétique et du Développement durable du Maroc, elle a joué un rôle clé dans l'élaboration et la mise en œuvre de la politique énergétique du pays. Elle a notamment contribué à faire du Maroc un leader en matière d'énergies renouvelables, notamment dans les domaines du solaire et de l'éolien. Sa vision stratégique et son leadership ont permis de renforcer la position du pays dans la transition énergétique mondiale. Son parcours incarne l'excellence et l'innovation, et elle est une source d'inspiration pour les femmes dans les secteurs scientifiques et technologiques.",
    host: "Fatima Zahra",
    topics: [
      "Transition Énergétique",
      "Leadership Féminin",
      "Énergies Renouvelables",
      "Politique Énergétique",
      "Développement Durable"
    ],
    spotifyEpisodeId: "6TBzYaIma2zb1WGuPml3Hv"
  },
  {
    title: "Ada Lovelace: La Première Programmeuse de l'Histoire",
    description:
      "Ada Lovelace (1815-1852) est souvent considérée comme la première programmeuse informatique de l'histoire. Elle a montré dès son jeune âge un talent exceptionnel pour les mathématiques. Elle est surtout connue pour ses travaux sur la machine analytique de Charles Babbage, un précurseur de l'ordinateur moderne. Bien que la machine analytique n'ait jamais été construite de son vivant, Ada Lovelace a écrit des notes détaillées sur son fonctionnement, comprenant un algorithme destiné à être exécuté par la machine. Cet algorithme est souvent cité comme le premier programme informatique jamais conçu. Elle a aussi anticipé plusieurs concepts fondamentaux de l'informatique moderne, notamment l'idée que les machines pourraient être utilisées pour manipuler des symboles et non simplement effectuer des calculs numériques. Ada Lovelace a non seulement révolutionné la façon dont nous percevons les machines, mais elle a aussi ouvert la voie aux femmes dans les domaines des mathématiques et de l'informatique. Son héritage perdure et continue d'inspirer des générations de scientifiques et de programmeurs, et son nom est désormais associé à un langage de programmation informatique, \"Ada\", en son honneur.",
    host: "Sarah",
    topics: [
      "Informatique",
      "Mathématiques",
      "Algorithmes",
      "Histoire des Sciences",
      "Femmes Pionnières"
    ],
    spotifyEpisodeId: "5Xc4hrYCsEROh0viDcoVjG"
  }
];

export function PodcastSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Femmes Pionnières en Sciences
          </h2>
          <p className="text-muted-foreground text-lg">
            Découvrez les histoires inspirantes des femmes qui ont révolutionné
            le monde scientifique
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {featuredPodcasts.map((podcast, index) => (
            <Card key={index} className="transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Music className="h-5 w-5 text-primary" />
                  {podcast.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <p className="text-muted-foreground mb-4">
                    {podcast.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-sm text-muted-foreground">
                      Par{" "}
                      <span className="font-medium">{podcast.host}</span>
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {podcast.topics.map((topic, i) => (
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
                    src={`https://open.spotify.com/embed/episode/${podcast.spotifyEpisodeId}?utm_source=generator&theme=0&t=0`}
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
                    href={`https://open.spotify.com/episode/${podcast.spotifyEpisodeId}`}
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
          ))}
        </div>
      </div>
    </section>
  );
}
