import { cn } from "@/lib/utils";

interface StatusIndicatorProps {
  status: "safe" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function StatusIndicator({ status, size = "md", className }: StatusIndicatorProps) {
  const sizeClasses = {
    sm: "w-2 h-2",
    md: "w-3 h-3",
    lg: "w-4 h-4"
  };

  const statusClasses = {
    safe: "bg-success",
    warning: "bg-warning",
    danger: "bg-destructive"
  };

  return (
    <div 
      className={cn(
        "rounded-full",
        sizeClasses[size],
        statusClasses[status],
        className
      )}
      aria-label={`Status: ${status}`}
    />
  );
}