import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { StatusIndicator } from "@/components/ui/status-indicator";
import { Clock, AlertTriangle, CheckCircle, Image } from "lucide-react";

interface AnalysisEntry {
  id: string;
  timestamp: string;
  content: string;
  status: "safe" | "warning" | "danger";
  frequency?: number;
  action: string;
}

export function AnalysisFeed() {
  const entries: AnalysisEntry[] = [
    {
      id: "1",
      timestamp: "14:32:15",
      content: "Video content analyzed",
      status: "safe",
      frequency: 2.1,
      action: "Allowed"
    },
    {
      id: "2", 
      timestamp: "14:31:58",
      content: "Image carousel detected",
      status: "warning",
      frequency: 3.8,
      action: "Filtered"
    },
    {
      id: "3",
      timestamp: "14:31:45",
      content: "Static image content",
      status: "safe",
      action: "Allowed"
    },
    {
      id: "4",
      timestamp: "14:31:20",
      content: "GIF animation analyzed",
      status: "safe",
      frequency: 1.5,
      action: "Allowed"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "safe":
        return <CheckCircle className="w-4 h-4 text-success" />;
      case "warning":
        return <AlertTriangle className="w-4 h-4 text-warning" />;
      case "danger":
        return <AlertTriangle className="w-4 h-4 text-destructive" />;
      default:
        return <CheckCircle className="w-4 h-4 text-success" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="w-5 h-5" />
          Analysis Feed
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-80">
          <div className="space-y-3">
            {entries.map((entry) => (
              <div key={entry.id} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <StatusIndicator status={entry.status} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium text-foreground">
                      {entry.content}
                    </span>
                    {entry.frequency && (
                      <Badge variant="outline" className="text-xs">
                        {entry.frequency}Hz
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {entry.timestamp}
                    <span>•</span>
                    <span className={entry.action === "Allowed" ? "text-success" : "text-warning"}>
                      {entry.action}
                    </span>
                  </div>
                </div>
                {getStatusIcon(entry.status)}
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}