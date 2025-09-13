import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Heart, Watch, Phone, AlertCircle, TrendingUp } from "lucide-react";

export function HealthPanel() {
  const [wearableConnected, setWearableConnected] = useState(true);
  const [emergencyContacts, setEmergencyContacts] = useState(true);

  return (
    <div className="space-y-4">
      {/* Health Monitoring */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <Heart className="w-4 h-4" />
            Health Monitoring
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-success">72</div>
              <div className="text-xs text-muted-foreground">Heart Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">Low</div>
              <div className="text-xs text-muted-foreground">Risk Level</div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <Label className="flex items-center gap-2 text-sm">
              <Watch className="w-4 h-4" />
              Wearable Connected
            </Label>
            <Badge variant={wearableConnected ? "default" : "secondary"}>
              {wearableConnected ? "Connected" : "Disconnected"}
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Seizure Prediction */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <TrendingUp className="w-4 h-4" />
            Seizure Risk Prediction
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm">Screen Time Today</span>
              <span className="text-sm font-medium">4.2 hours</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Light Exposure</span>
              <span className="text-sm font-medium">Moderate</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Sleep Quality</span>
              <span className="text-sm font-medium">Good</span>
            </div>
          </div>

          <div className="bg-success/10 border border-success/20 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span className="text-sm font-medium text-success">Low Risk Period</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Your patterns suggest minimal seizure risk for the next 2 hours
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Emergency Features */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <AlertCircle className="w-4 h-4" />
            Emergency Features
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label className="text-sm">Emergency Contacts</Label>
            <Switch checked={emergencyContacts} onCheckedChange={setEmergencyContacts} />
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 p-2 rounded bg-muted/30">
              <Phone className="w-4 h-4 text-primary" />
              <div className="flex-1">
                <div className="text-sm font-medium">Emergency Contact 1</div>
                <div className="text-xs text-muted-foreground">Mom - (555) 123-4567</div>
              </div>
            </div>
            <div className="flex items-center gap-2 p-2 rounded bg-muted/30">
              <Phone className="w-4 h-4 text-primary" />
              <div className="flex-1">
                <div className="text-sm font-medium">Emergency Contact 2</div>
                <div className="text-xs text-muted-foreground">Dr. Smith - (555) 987-6543</div>
              </div>
            </div>
          </div>

          <Button variant="outline" className="w-full" size="sm">
            Add Emergency Contact
          </Button>
        </CardContent>
      </Card>

      {/* Recovery Mode */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Recovery Assistance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" size="sm">
              Calming Sounds
            </Button>
            <Button variant="outline" size="sm">
              Dim Screen
            </Button>
            <Button variant="outline" size="sm">
              Breathing Guide
            </Button>
            <Button variant="outline" size="sm">
              Grounding Exercises
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}