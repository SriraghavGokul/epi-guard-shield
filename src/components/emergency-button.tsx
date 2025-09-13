import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmergencyButtonProps {
  onActivate: () => void;
}

export function EmergencyButton({ onActivate }: EmergencyButtonProps) {
  return (
    <div className="fixed top-20 right-4 z-[60]">
      <Button
        onClick={onActivate}
        className="w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 shadow-lg animate-pulse"
        size="sm"
      >
        <AlertTriangle className="w-6 h-6 text-white" />
      </Button>
    </div>
  );
}