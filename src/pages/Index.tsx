import { PhoneFrame } from "@/components/phone-frame";
import { MockContent } from "@/components/mock-content";
import { ComprehensiveOverlay } from "@/components/comprehensive-overlay";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200">
      <PhoneFrame>
        {/* Mock app content in background */}
        <MockContent />
        
        {/* EpiHelp Comprehensive Overlay */}
        <ComprehensiveOverlay />
      </PhoneFrame>
      
      {/* Enhanced Info Panel */}
      <div className="fixed top-8 left-8 max-w-sm bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">EpiHelp Pro</h1>
        <p className="text-gray-600 mb-4 text-sm">
          Comprehensive photosensitive epilepsy protection with AI analysis, 
          health monitoring, and community safety features.
        </p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>AI pattern & flash detection</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Health monitoring & predictions</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span>Community safety database</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span>Emergency shield mode</span>
          </div>
        </div>
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <div className="text-xs text-red-700 font-medium mb-1">Emergency Features:</div>
          <div className="text-xs text-red-600">
            • Red button: Instant shield mode<br/>
            • Wearable heart rate monitoring<br/>
            • Auto emergency contact alerts
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
