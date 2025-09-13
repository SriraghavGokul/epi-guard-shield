import { useState } from "react";
import { Shield, Zap, AlertTriangle, Settings, Users, BookOpen, Activity, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProtectionPanel } from "@/components/protection-panel";
import { SettingsPanel } from "@/components/settings-panel";
import { HealthPanel } from "@/components/health-panel";
import { TriggerLogPanel } from "@/components/trigger-log-panel";
import { CommunityPanel } from "@/components/community-panel";
import { EducationPanel } from "@/components/education-panel";
import { EmergencyButton } from "@/components/emergency-button";

export function ComprehensiveOverlay() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState("protection");
  const [isEmergencyMode, setIsEmergencyMode] = useState(false);

  return (
    <>
      {/* Emergency Shield Mode Overlay */}
      {isEmergencyMode && (
        <div className="fixed inset-0 bg-gray-900/95 z-[100] flex items-center justify-center backdrop-blur-lg">
          <div className="text-center p-8">
            <Shield className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h2 className="text-white text-2xl font-bold mb-2">Shield Mode Active</h2>
            <p className="text-gray-300 mb-6">Screen is safely protected</p>
            <Button 
              onClick={() => setIsEmergencyMode(false)}
              className="bg-green-600 hover:bg-green-700"
            >
              Exit Shield Mode
            </Button>
          </div>
        </div>
      )}

      {/* Emergency Button - Always Visible */}
      <EmergencyButton onActivate={() => setIsEmergencyMode(true)} />

      {/* Floating Control Button */}
      {!isExpanded && !isEmergencyMode && (
        <div className="fixed bottom-20 right-4 z-50">
          <Button
            onClick={() => setIsExpanded(true)}
            className="w-14 h-14 rounded-full shadow-lg bg-primary hover:bg-primary/90"
            size="sm"
          >
            <Shield className="w-6 h-6 text-primary-foreground" />
          </Button>
          <div className="absolute -top-2 -right-2">
            <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      )}

      {/* Expanded Overlay Panel */}
      {isExpanded && !isEmergencyMode && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="w-full bg-card rounded-t-3xl p-4 max-h-[85vh] overflow-hidden">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  EpiHelp Pro
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsExpanded(false)}
                >
                  ×
                </Button>
              </div>

              <TabsList className="grid w-full grid-cols-6 mb-4">
                <TabsTrigger value="protection" className="p-2">
                  <Shield className="w-4 h-4" />
                </TabsTrigger>
                <TabsTrigger value="settings" className="p-2">
                  <Settings className="w-4 h-4" />
                </TabsTrigger>
                <TabsTrigger value="health" className="p-2">
                  <Activity className="w-4 h-4" />
                </TabsTrigger>
                <TabsTrigger value="logs" className="p-2">
                  <Zap className="w-4 h-4" />
                </TabsTrigger>
                <TabsTrigger value="community" className="p-2">
                  <Users className="w-4 h-4" />
                </TabsTrigger>
                <TabsTrigger value="education" className="p-2">
                  <BookOpen className="w-4 h-4" />
                </TabsTrigger>
              </TabsList>

              <div className="h-[60vh] overflow-y-auto">
                <TabsContent value="protection">
                  <ProtectionPanel />
                </TabsContent>
                <TabsContent value="settings">
                  <SettingsPanel />
                </TabsContent>
                <TabsContent value="health">
                  <HealthPanel />
                </TabsContent>
                <TabsContent value="logs">
                  <TriggerLogPanel />
                </TabsContent>
                <TabsContent value="community">
                  <CommunityPanel />
                </TabsContent>
                <TabsContent value="education">
                  <EducationPanel />
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      )}

      {/* Always-on Status Indicator */}
      {!isEmergencyMode && (
        <div className="fixed top-11 left-4 z-40 pointer-events-none">
          <div className="bg-success/90 text-success-foreground px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-2 backdrop-blur-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            AI Protection Active
          </div>
        </div>
      )}
    </>
  );
}