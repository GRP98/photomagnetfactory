import { ReactNode } from "react";
import { containerClasses } from "@/lib/responsive-utils";

interface ResponsiveContainerProps {
  children: ReactNode;
  className?: string;
  variant?: "mobile" | "tablet" | "desktop" | "full";
}

/**
 * Responsive container component that handles padding across devices
 */
export const ResponsiveContainer = ({
  children,
  className = "",
  variant = "desktop",
}: ResponsiveContainerProps) => {
  return (
    <div className={`${containerClasses[variant]} ${className}`}>
      {children}
    </div>
  );
};
