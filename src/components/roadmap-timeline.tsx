"use client";

import { RoadmapStep } from "@/data/engineering-fields";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Timer, BookOpen, Trophy } from "lucide-react";

export function RoadmapTimeline({ steps }: { steps: RoadmapStep[] }) {
  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-primary/20 before:to-transparent">
      {steps.map((step, index) => (
        <div key={index} className="relative flex items-start">
          <div className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
            {index + 1}
          </div>

          <div className="ml-14 flex-grow">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{step.title}</span>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Timer className="w-3 h-3" />
                    {step.duration}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {step.description}
                </p>

                <div>
                  <h4 className="font-semibold flex items-center gap-2 mb-2">
                    <BookOpen className="w-4 h-4" />
                    Matières
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {step.subjects.map((subject, idx) => (
                      <Badge key={idx} variant="outline">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold flex items-center gap-2 mb-2">
                    <Trophy className="w-4 h-4" />
                    Compétences
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {step.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {step.certifications && (
                  <div>
                    <h4 className="font-semibold mb-2">Certifications Recommandées</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      {step.certifications.map((cert, idx) => (
                        <li key={idx}>{cert}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
} 