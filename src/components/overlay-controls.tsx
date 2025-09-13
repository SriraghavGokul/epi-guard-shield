import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Shield, Pause, Play, Settings2 } from "lucide-react";
import { useState } from "react";

export function OverlayControls() {
  const [isActive, setIsActive] = useState(true);
  const [sensitivity, setSensitivity] = useState([75]);
  const [preloadDepth, setPreloadDepth] = useState([5]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings2 className="w-5 h-5" />
          Overlay Controls
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-primary" />
            <Label htmlFor="protection-active">Protection Active</Label>
          </div>
          <Switch 
            id="protection-active"
            checked={isActive}
            onCheckedChange={setIsActive}
          />
        </div>

        <div className="space-y-2">
          <Label>Detection Sensitivity: {sensitivity[0]}%</Label>
          <Slider
            value={sensitivity}
            onValueChange={setSensitivity}
            max={100}
            min={25}
            step={5}
            className="w-full"
          />
          <p className="text-xs text-muted-foreground">
            Higher sensitivity detects more potential triggers
          </p>
        </div>

        <div className="space-y-2">
          <Label>Preload Depth: {preloadDepth[0]} screens</Label>
          <Slider
            value={preloadDepth}
            onValueChange={setPreloadDepth}
            max={10}
            min={1}
            step={1}
            className="w-full"
          />
          <p className="text-xs text-muted-foreground">
            How far ahead to analyze content before you scroll
          </p>
        </div>

        <div className="flex gap-2">
          <Button 
            variant={isActive ? "secondary" : "default"} 
            size="sm" 
            className="flex-1"
            onClick={() => setIsActive(!isActive)}
          >
            {isActive ? (
              <>
                <Pause className="w-4 h-4 mr-2" />
                Pause
              </>
            ) : (
              <>
                <Play className="w-4 h-4 mr-2" />
                Resume
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}