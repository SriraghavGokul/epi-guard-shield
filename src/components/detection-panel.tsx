import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, Zap, Eye, Shield } from "lucide-react";

interface DetectionStats {
  flashesDetected: number;
  contentFiltered: number;
  frequencyAnalyzed: number;
  safetyScore: number;
}

export function DetectionPanel() {
  const stats: DetectionStats = {
    flashesDetected: 0,
    contentFiltered: 3,
    frequencyAnalyzed: 847,
    safetyScore: 98
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <Zap className="w-4 h-4 text-warning" />
            Flashes Detected
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground">{stats.flashesDetected}</div>
          <Badge variant="secondary" className="mt-1">Last hour</Badge>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <Eye className="w-4 h-4 text-primary" />
            Content Filtered
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground">{stats.contentFiltered}</div>
          <Badge variant="secondary" className="mt-1">Today</Badge>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <Activity className="w-4 h-4 text-accent" />
            Frequency Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground">{stats.frequencyAnalyzed}</div>
          <Badge variant="secondary" className="mt-1">Items scanned</Badge>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <Shield className="w-4 h-4 text-success" />
            Safety Score
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-success">{stats.safetyScore}%</div>
          <Badge variant="secondary" className="mt-1">Excellent</Badge>
        </CardContent>
      </Card>
    </div>
  );
}