import { Header } from "@/components/header";
import { DetectionPanel } from "@/components/detection-panel";
import { OverlayControls } from "@/components/overlay-controls";
import { AnalysisFeed } from "@/components/analysis-feed";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Brain, Smartphone, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-xl mx-auto mb-4">
            <Shield className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Advanced Photosensitive Epilepsy Protection
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Real-time flash detection and content filtering to keep you safe while browsing. 
            EpiHelp analyzes content before you see it, blocking triggers above 3Hz.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="gap-2">
              <Shield className="w-5 h-5" />
              Enable Protection
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>

        {/* Detection Stats */}
        <DetectionPanel />

        {/* Main Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* How It Works */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  How EpiHelp Protects You
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Smartphone className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Overlay Analysis</h3>
                    <p className="text-sm text-muted-foreground">
                      Creates an invisible overlay that analyzes content as you scroll
                    </p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Zap className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-semibold mb-2">Flash Detection</h3>
                    <p className="text-sm text-muted-foreground">
                      Advanced algorithms detect flashing patterns above 3Hz frequency
                    </p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-6 h-6 text-success" />
                    </div>
                    <h3 className="font-semibold mb-2">Instant Protection</h3>
                    <p className="text-sm text-muted-foreground">
                      Blocks or filters dangerous content before it reaches your eyes
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Analysis Feed */}
            <AnalysisFeed />
          </div>

          <div className="space-y-6">
            {/* Overlay Controls */}
            <OverlayControls />

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Protection Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Flash Detection</span>
                  <span className="text-success font-medium">Active</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Content Analysis</span>
                  <span className="text-success font-medium">Running</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Overlay Status</span>
                  <span className="text-success font-medium">Protected</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Battery Impact</span>
                  <span className="text-muted-foreground">Low</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
