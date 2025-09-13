import { PhoneFrame } from "@/components/phone-frame";
import { MockContent } from "@/components/mock-content";
import { OverlayInterface } from "@/components/overlay-interface";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200">
      <PhoneFrame>
        {/* Mock app content in background */}
        <MockContent />
        
        {/* EpiHelp Overlay */}
        <OverlayInterface />
      </PhoneFrame>
      
      {/* Info Panel */}
      <div className="fixed top-8 left-8 max-w-md bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">EpiHelp Demo</h1>
        <p className="text-gray-600 mb-4">
          This shows how EpiHelp works as a mobile overlay, analyzing content in real-time 
          and filtering dangerous flashing patterns above 3Hz.
        </p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Safe content allowed through</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span>Dangerous content filtered</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Real-time frequency analysis</span>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-4">
          Tap the shield button to access overlay controls
        </p>
      </div>
    </div>
  );
};

export default Index;
