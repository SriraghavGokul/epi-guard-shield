import { Shield, Settings, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatusIndicator } from "@/components/ui/status-indicator";

export function Header() {
  return (
    <header className="bg-card border-b border-border px-6 py-4">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
            <Shield className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-foreground">EpiHelp</h1>
            <p className="text-sm text-muted-foreground">Photosensitive Protection</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <StatusIndicator status="safe" />
            <span className="text-sm text-foreground">Protected</span>
          </div>
          
          <Button variant="ghost" size="sm">
            <Activity className="w-4 h-4 mr-2" />
            Monitor
          </Button>
          
          <Button variant="ghost" size="sm">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>
    </header>
  );
}