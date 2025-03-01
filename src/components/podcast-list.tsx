import { Play } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

interface PodcastProps {
  podcasts: {
    title: string;
    description: string;
    duration: string;
    url: string;
    host: string;
    topics: string[];
  }[];
}

export function PodcastList({ podcasts }: PodcastProps) {
  if (!podcasts?.length) return null;

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Podcasts Recommandés</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {podcasts.map((podcast, index) => (
          <a
            key={index}
            href={podcast.url}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  {podcast.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {podcast.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground">
                    Par {podcast.host}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {podcast.duration}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {podcast.topics.map((topic, i) => (
                    <Badge key={i} variant="secondary">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
} 