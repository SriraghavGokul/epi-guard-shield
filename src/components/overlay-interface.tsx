import { useState } from "react";
import { Shield, Settings, Activity, X, Pause, Play, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatusIndicator } from "@/components/ui/status-indicator";
import { Badge } from "@/components/ui/badge";

export function OverlayInterface() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isActive, setIsActive] = useState(true);

  return (
    <>
      {/* Floating Control Button */}
      {!isExpanded && (
        <div className="fixed bottom-6 right-4 z-50">
          <Button
            onClick={() => setIsExpanded(true)}
            className="w-14 h-14 rounded-full shadow-lg bg-primary hover:bg-primary/90"
            size="sm"
          >
            <Shield className="w-6 h-6 text-primary-foreground" />
          </Button>
          <div className="absolute -top-2 -right-2">
            <StatusIndicator status="safe" size="sm" />
          </div>
        </div>
      )}

      {/* Expanded Overlay Panel */}
      {isExpanded && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="w-full bg-card rounded-t-3xl p-6 max-h-[70vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                  <Shield className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-foreground">EpiHelp</h2>
                  <div className="flex items-center gap-2">
                    <StatusIndicator status="safe" size="sm" />
                    <span className="text-sm text-muted-foreground">Protected</span>
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(false)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-muted/50 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-success">0</div>
                <div className="text-xs text-muted-foreground">Flashes Blocked</div>
              </div>
              <div className="bg-muted/50 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-primary">1</div>
                <div className="text-xs text-muted-foreground">Items Filtered</div>
              </div>
              <div className="bg-muted/50 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-accent">98%</div>
                <div className="text-xs text-muted-foreground">Safety Score</div>
              </div>
            </div>

            {/* Controls */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Protection Status</span>
                <Button
                  variant={isActive ? "default" : "secondary"}
                  size="sm"
                  onClick={() => setIsActive(!isActive)}
                  className="gap-2"
                >
                  {isActive ? (
                    <>
                      <Pause className="w-4 h-4" />
                      Active
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      Paused
                    </>
                  )}
                </Button>
              </div>

              {/* Recent Activity */}
              <div>
                <h3 className="text-sm font-medium mb-3">Recent Activity</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-2 rounded bg-muted/30">
                    <StatusIndicator status="warning" size="sm" />
                    <div className="flex-1">
                      <div className="text-sm">Flashing content filtered</div>
                      <div className="text-xs text-muted-foreground">4.2Hz detected • 2 min ago</div>
                    </div>
                    <Badge variant="outline" className="text-xs">Blocked</Badge>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded bg-muted/30">
                    <StatusIndicator status="safe" size="sm" />
                    <div className="flex-1">
                      <div className="text-sm">Video content scanned</div>
                      <div className="text-xs text-muted-foreground">1.8Hz safe • 5 min ago</div>
                    </div>
                    <Badge variant="outline" className="text-xs">Allowed</Badge>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Activity className="w-4 h-4 mr-2" />
                  Monitor
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Status Bar Overlay */}
      <div className="fixed top-11 left-4 right-4 z-40 pointer-events-none">
        <div className="bg-success/90 text-success-foreground px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-2 backdrop-blur-sm">
          <Eye className="w-3 h-3" />
          Scanning content • Protected
        </div>
      </div>
    </>
  );
}