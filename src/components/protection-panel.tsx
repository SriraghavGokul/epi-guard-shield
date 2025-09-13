import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Shield, Eye, Brain, Pause, Play, Zap } from "lucide-react";

export function ProtectionPanel() {
  const [isActive, setIsActive] = useState(true);
  const [aiMode, setAiMode] = useState(true);
  const [flashSensitivity, setFlashSensitivity] = useState([75]);
  const [contrastSensitivity, setContrastSensitivity] = useState([60]);
  const [motionSensitivity, setMotionSensitivity] = useState([80]);

  return (
    <div className="space-y-4">
      {/* Main Status */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Protection Status
            </span>
            <Badge variant={isActive ? "default" : "secondary"}>
              {isActive ? "Active" : "Paused"}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label>Real-time Protection</Label>
            <Switch checked={isActive} onCheckedChange={setIsActive} />
          </div>
          
          <div className="flex items-center justify-between">
            <Label className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              AI Analysis Mode
            </Label>
            <Switch checked={aiMode} onCheckedChange={setAiMode} />
          </div>

          <Button 
            className="w-full" 
            variant={isActive ? "secondary" : "default"}
            onClick={() => setIsActive(!isActive)}
          >
            {isActive ? (
              <>
                <Pause className="w-4 h-4 mr-2" />
                Pause Protection
              </>
            ) : (
              <>
                <Play className="w-4 h-4 mr-2" />
                Resume Protection
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Detection Stats */}
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-muted/50 rounded-lg p-3 text-center">
          <div className="text-lg font-bold text-success">0</div>
          <div className="text-xs text-muted-foreground">Flashes Blocked</div>
        </div>
        <div className="bg-muted/50 rounded-lg p-3 text-center">
          <div className="text-lg font-bold text-warning">2</div>
          <div className="text-xs text-muted-foreground">Patterns Filtered</div>
        </div>
        <div className="bg-muted/50 rounded-lg p-3 text-center">
          <div className="text-lg font-bold text-primary">847</div>
          <div className="text-xs text-muted-foreground">Items Scanned</div>
        </div>
      </div>

      {/* AI Detection Settings */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <Zap className="w-4 h-4" />
            AI Detection Sensitivity
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label className="text-sm">Flash Detection: {flashSensitivity[0]}%</Label>
            <Slider
              value={flashSensitivity}
              onValueChange={setFlashSensitivity}
              max={100}
              min={25}
              step={5}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm">Contrast Patterns: {contrastSensitivity[0]}%</Label>
            <Slider
              value={contrastSensitivity}
              onValueChange={setContrastSensitivity}
              max={100}
              min={25}
              step={5}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm">Motion Analysis: {motionSensitivity[0]}%</Label>
            <Slider
              value={motionSensitivity}
              onValueChange={setMotionSensitivity}
              max={100}
              min={25}
              step={5}
              className="w-full"
            />
          </div>
        </CardContent>
      </Card>

      {/* Pre-screening Mode */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <Eye className="w-4 h-4" />
            Pre-screening Buffer
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-2">
            <Label className="text-sm">Content Buffer</Label>
            <Badge variant="outline">5 screens ahead</Badge>
          </div>
          <p className="text-xs text-muted-foreground">
            Content is analyzed before it appears on your screen
          </p>
        </CardContent>
      </Card>
    </div>
  );
}