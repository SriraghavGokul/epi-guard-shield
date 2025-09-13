import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Calendar, MapPin, Clock, Zap, AlertTriangle, TrendingUp } from "lucide-react";

interface TriggerEntry {
  id: string;
  timestamp: string;
  platform: string;
  triggerType: string;
  frequency?: number;
  severity: "low" | "medium" | "high";
  location: string;
  action: string;
}

export function TriggerLogPanel() {
  const triggers: TriggerEntry[] = [
    {
      id: "1",
      timestamp: "Today, 2:34 PM",
      platform: "Instagram",
      triggerType: "Rapid flashing",
      frequency: 4.2,
      severity: "high",
      location: "Stories feed",
      action: "Blocked"
    },
    {
      id: "2",
      timestamp: "Today, 1:15 PM", 
      platform: "TikTok",
      triggerType: "Striped pattern",
      severity: "medium",
      location: "Video feed",
      action: "Filtered"
    },
    {
      id: "3",
      timestamp: "Yesterday, 8:45 PM",
      platform: "YouTube",
      triggerType: "Bright flash",
      frequency: 3.8,
      severity: "medium",
      location: "Video content",
      action: "Dimmed"
    },
    {
      id: "4",
      timestamp: "Yesterday, 3:22 PM",
      platform: "Twitter/X",
      triggerType: "GIF animation",
      frequency: 5.1,
      severity: "high",
      location: "Timeline",
      action: "Replaced"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "text-destructive";
      case "medium": return "text-warning";
      case "low": return "text-success";
      default: return "text-muted-foreground";
    }
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "high": return "destructive";
      case "medium": return "secondary";
      case "low": return "outline";
      default: return "outline";
    }
  };

  return (
    <div className="space-y-4">
      {/* Analytics Summary */}
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-muted/50 rounded-lg p-3 text-center">
          <div className="text-lg font-bold text-destructive">4</div>
          <div className="text-xs text-muted-foreground">This Week</div>
        </div>
        <div className="bg-muted/50 rounded-lg p-3 text-center">
          <div className="text-lg font-bold text-warning">2</div>
          <div className="text-xs text-muted-foreground">Today</div>
        </div>
        <div className="bg-muted/50 rounded-lg p-3 text-center">
          <div className="text-lg font-bold text-primary">Instagram</div>
          <div className="text-xs text-muted-foreground">Top Source</div>
        </div>
      </div>

      {/* Trigger Insights */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <TrendingUp className="w-4 h-4" />
            Trigger Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Most common time:</span>
              <span className="font-medium">2-4 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Riskiest platform:</span>
              <span className="font-medium">Social media</span>
            </div>
            <div className="flex justify-between">
              <span>Average frequency:</span>
              <span className="font-medium">4.3 Hz</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Trigger Log */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <Calendar className="w-4 h-4" />
            Recent Triggers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-64">
            <div className="space-y-3">
              {triggers.map((trigger) => (
                <div key={trigger.id} className="border border-border rounded-lg p-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Zap className={`w-4 h-4 ${getSeverityColor(trigger.severity)}`} />
                      <span className="font-medium text-sm">{trigger.triggerType}</span>
                    </div>
                    <Badge variant={getSeverityBadge(trigger.severity) as any}>
                      {trigger.severity}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {trigger.timestamp}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {trigger.platform}
                    </div>
                  </div>

                  {trigger.frequency && (
                    <div className="text-xs">
                      <span className="text-muted-foreground">Frequency: </span>
                      <span className="font-medium">{trigger.frequency}Hz</span>
                    </div>
                  )}

                  <div className="flex justify-between items-center text-xs">
                    <span className="text-muted-foreground">{trigger.location}</span>
                    <span className={trigger.action === "Blocked" ? "text-destructive" : "text-warning"}>
                      {trigger.action}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}