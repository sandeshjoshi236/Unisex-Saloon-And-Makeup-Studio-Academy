import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "outline";
};

export function Button({ children, className = "", variant = "primary", ...props }: ButtonProps) {
  const variantClass =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:bg-primary/90"
      : "border border-primary/30 bg-background text-foreground hover:bg-secondary";

  return (
    <button
      className={`inline-flex min-h-11 items-center justify-center rounded-full px-6 text-sm font-semibold transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}