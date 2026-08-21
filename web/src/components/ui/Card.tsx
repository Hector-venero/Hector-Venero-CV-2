import { cn } from "@/lib/utils";

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-surface-border bg-surface p-6",
        className,
      )}
    >
      {children}
    </div>
  );
}
