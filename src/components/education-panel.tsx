import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BookOpen, Heart, Phone, Info, Video, FileText } from "lucide-react";

export function EducationPanel() {
  const resources = [
    {
      title: "Understanding Photosensitive Epilepsy",
      description: "Learn about triggers, symptoms, and management strategies",
      icon: Info,
      type: "Guide"
    },
    {
      title: "Family & Friends Support Guide",
      description: "How to help someone with photosensitive epilepsy",
      icon: Heart,
      type: "Guide"
    },
    {
      title: "Seizure First Aid Steps",
      description: "Emergency response and what to do during a seizure",
      icon: Phone,
      type: "Emergency"
    },
    {
      title: "Screen Safety Tips",
      description: "Best practices for safe device usage",
      icon: Video,
      type: "Tips"
    }
  ];

  const emergencySteps = [
    "Stay calm and time the seizure",
    "Clear the area of dangerous objects",
    "Place something soft under their head",
    "Turn them on their side if possible",
    "Do NOT put anything in their mouth",
    "Call emergency services if seizure lasts >5 minutes"
  ];

  return (
    <div className="space-y-4">
      {/* Quick Emergency Guide */}
      <Card className="border-destructive/20 bg-destructive/5">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base text-destructive">
            <Phone className="w-4 h-4" />
            Emergency First Aid
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-32">
            <ol className="space-y-1 text-sm">
              {emergencySteps.map((step, index) => (
                <li key={index} className="flex gap-2">
                  <span className="font-medium text-destructive">{index + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </ScrollArea>
          <Button variant="outline" className="w-full mt-3" size="sm">
            Emergency Contacts: 911
          </Button>
        </CardContent>
      </Card>

      {/* Educational Resources */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <BookOpen className="w-4 h-4" />
            Education & Resources
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {resources.map((resource, index) => (
              <div key={index} className="flex items-start gap-3 p-2 rounded border border-border">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <resource.icon className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium text-sm">{resource.title}</h4>
                    <span className="text-xs bg-muted px-2 py-0.5 rounded">
                      {resource.type}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">{resource.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Tips */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Daily Safety Tips</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="bg-muted/30 rounded p-2">
            <div className="text-sm font-medium mb-1">💡 Screen Breaks</div>
            <div className="text-xs text-muted-foreground">
              Take a 20-second break every 20 minutes
            </div>
          </div>
          <div className="bg-muted/30 rounded p-2">
            <div className="text-sm font-medium mb-1">🌙 Evening Mode</div>
            <div className="text-xs text-muted-foreground">
              Reduce brightness and avoid fast-moving content before bed
            </div>
          </div>
          <div className="bg-muted/30 rounded p-2">
            <div className="text-sm font-medium mb-1">⚡ Know Your Triggers</div>
            <div className="text-xs text-muted-foreground">
              Keep track of patterns that affect you personally
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Support Links */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Get Support</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button variant="outline" className="w-full justify-start" size="sm">
            <Heart className="w-4 h-4 mr-2" />
            Join Support Community
          </Button>
          <Button variant="outline" className="w-full justify-start" size="sm">
            <Phone className="w-4 h-4 mr-2" />
            Find Local Specialists
          </Button>
          <Button variant="outline" className="w-full justify-start" size="sm">
            <FileText className="w-4 h-4 mr-2" />
            Download Emergency Card
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}