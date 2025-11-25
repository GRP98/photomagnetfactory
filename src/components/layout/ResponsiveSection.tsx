import { ReactNode } from "react";
import { sectionPadding } from "@/lib/responsive-utils";

interface ResponsiveSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  variant?: "mobile" | "tablet" | "desktop";
}

/**
 * Responsive section component with proper padding for all devices
 */
export const ResponsiveSection = ({
  children,
  id,
  className = "",
  variant = "desktop",
}: ResponsiveSectionProps) => {
  const paddingClass =
    variant === "mobile"
      ? sectionPadding.mobile
      : variant === "tablet"
      ? sectionPadding.tablet
      : sectionPadding.desktop;

  return (
    <section id={id} className={`${paddingClass} ${className}`}>
      {children}
    </section>
  );
};
