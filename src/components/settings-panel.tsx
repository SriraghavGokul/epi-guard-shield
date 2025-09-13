import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Settings, Palette, Clock, Smartphone } from "lucide-react";

export function SettingsPanel() {
  const [safeMode, setSafeMode] = useState("blur");
  const [brightness, setBrightness] = useState([70]);
  const [autoTimer, setAutoTimer] = useState(false);
  const [timerDuration, setTimerDuration] = useState([60]);

  return (
    <div className="space-y-4">
      {/* Personalization */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <Palette className="w-4 h-4" />
            Safe Mode Options
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label className="text-sm">When unsafe content detected:</Label>
            <Select value={safeMode} onValueChange={setSafeMode}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="blur">Blur content</SelectItem>
                <SelectItem value="grayscale">Convert to grayscale</SelectItem>
                <SelectItem value="dim">Reduce brightness</SelectItem>
                <SelectItem value="replace">Show safe thumbnail</SelectItem>
                <SelectItem value="block">Block completely</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-sm">Screen Brightness Limit: {brightness[0]}%</Label>
            <Slider
              value={brightness}
              onValueChange={setBrightness}
              max={100}
              min={10}
              step={5}
              className="w-full"
            />
          </div>
        </CardContent>
      </Card>

      {/* Timer Settings */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <Clock className="w-4 h-4" />
            Safe Mode Timer
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label className="text-sm">Auto-enable extra protection</Label>
            <Switch checked={autoTimer} onCheckedChange={setAutoTimer} />
          </div>

          {autoTimer && (
            <div className="space-y-2">
              <Label className="text-sm">Duration: {timerDuration[0]} minutes</Label>
              <Slider
                value={timerDuration}
                onValueChange={setTimerDuration}
                max={180}
                min={15}
                step={15}
                className="w-full"
              />
            </div>
          )}

          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" size="sm">
              Night Mode
            </Button>
            <Button variant="outline" size="sm">
              Gaming Mode
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* App Integration */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <Smartphone className="w-4 h-4" />
            App Integration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm">Social Media</span>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Video Streaming</span>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Gaming Apps</span>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Web Browsers</span>
              <Switch defaultChecked />
            </div>
          </div>

          <Button variant="outline" className="w-full" size="sm">
            Configure System-wide Protection
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}