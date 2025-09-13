import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Users, Flag, Share, ThumbsUp, AlertTriangle, TrendingUp } from "lucide-react";

interface CommunityReport {
  id: string;
  platform: string;
  content: string;
  reporter: string;
  timestamp: string;
  severity: "low" | "medium" | "high";
  verified: boolean;
  reports: number;
}

export function CommunityPanel() {
  const [reports] = useState<CommunityReport[]>([
    {
      id: "1",
      platform: "Instagram",
      content: "Flashing ad in Stories",
      reporter: "Sarah M.",
      timestamp: "2 hours ago",
      severity: "high",
      verified: true,
      reports: 12
    },
    {
      id: "2",
      platform: "YouTube",
      content: "Gaming video with rapid cuts",
      reporter: "Alex K.",
      timestamp: "4 hours ago",
      severity: "medium",
      verified: false,
      reports: 3
    },
    {
      id: "3",
      platform: "TikTok",
      content: "Transition effect with strobing",
      reporter: "Jamie L.",
      timestamp: "1 day ago",
      severity: "high",
      verified: true,
      reports: 8
    }
  ]);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "text-destructive";
      case "medium": return "text-warning";
      case "low": return "text-success";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div className="space-y-4">
      {/* Community Stats */}
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-muted/50 rounded-lg p-3 text-center">
          <div className="text-lg font-bold text-primary">1,247</div>
          <div className="text-xs text-muted-foreground">Active Users</div>
        </div>
        <div className="bg-muted/50 rounded-lg p-3 text-center">
          <div className="text-lg font-bold text-warning">23</div>
          <div className="text-xs text-muted-foreground">Reports Today</div>
        </div>
        <div className="bg-muted/50 rounded-lg p-3 text-center">
          <div className="text-lg font-bold text-success">89%</div>
          <div className="text-xs text-muted-foreground">Accuracy Rate</div>
        </div>
      </div>

      {/* Report Something */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <Flag className="w-4 h-4" />
            Report Unsafe Content
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Help protect the community by reporting dangerous content
          </p>
          <Button className="w-full" size="sm">
            <Flag className="w-4 h-4 mr-2" />
            Report Current Content
          </Button>
        </CardContent>
      </Card>

      {/* Community Database */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <TrendingUp className="w-4 h-4" />
            Trending Warnings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 rounded bg-muted/30">
              <span className="text-sm">Instagram Stories ads</span>
              <Badge variant="destructive">High Risk</Badge>
            </div>
            <div className="flex items-center justify-between p-2 rounded bg-muted/30">
              <span className="text-sm">Gaming livestreams</span>
              <Badge variant="secondary">Medium Risk</Badge>
            </div>
            <div className="flex items-center justify-between p-2 rounded bg-muted/30">
              <span className="text-sm">Music videos</span>
              <Badge variant="secondary">Medium Risk</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Reports */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <Users className="w-4 h-4" />
            Community Reports
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-48">
            <div className="space-y-3">
              {reports.map((report) => (
                <div key={report.id} className="border border-border rounded-lg p-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm">{report.content}</span>
                    <div className="flex items-center gap-1">
                      {report.verified && (
                        <div className="w-2 h-2 bg-success rounded-full"></div>
                      )}
                      <Badge variant={report.severity === "high" ? "destructive" : "secondary"}>
                        {report.severity}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{report.platform} • {report.reporter}</span>
                    <span>{report.timestamp}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Flag className="w-3 h-3" />
                      {report.reports} reports
                    </div>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="sm" className="h-6 px-2">
                        <ThumbsUp className="w-3 h-3" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-6 px-2">
                        <Share className="w-3 h-3" />
                      </Button>
                    </div>
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