import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  const styles = cn(
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors",
    variant === "primary" &&
      "bg-accent text-accent-foreground hover:bg-accent/90",
    variant === "secondary" &&
      "border border-surface-border text-foreground hover:border-accent/60 hover:text-accent",
    className,
  );

  if (isExternal) {
    return (
      <a href={href} className={styles} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  );
}
