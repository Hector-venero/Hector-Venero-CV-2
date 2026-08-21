import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  tone?: "default" | "accent";
  className?: string;
};

export function Badge({ children, tone = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        tone === "default" && "border-surface-border text-muted",
        tone === "accent" && "border-accent/30 bg-accent-soft text-accent",
        className,
      )}
    >
      {children}
    </span>
  );
}
