import { BREAKPOINTS, DeviceType } from './constants';

/**
 * Get responsive classes based on device type
 */
export const getResponsiveClasses = (
  mobile: string,
  tablet?: string,
  desktop?: string
): string => {
  const classes = [mobile];
  if (tablet) classes.push(`md:${tablet}`);
  if (desktop) classes.push(`lg:${desktop}`);
  return classes.join(' ');
};

/**
 * Get device type from window width
 */
export const getDeviceType = (width: number): DeviceType => {
  if (width < BREAKPOINTS.md) return 'mobile';
  if (width < BREAKPOINTS.lg) return 'tablet';
  return 'desktop';
};

/**
 * Responsive container classes - INCREASED PADDING for better spacing
 */
export const containerClasses = {
  mobile: 'px-6',
  tablet: 'px-6 md:px-8',
  desktop: 'px-6 md:px-8 lg:px-12',
  full: 'px-6 md:px-8 lg:px-12 xl:px-16',
};

/**
 * Responsive section padding - INCREASED for better spacing
 */
export const sectionPadding = {
  mobile: 'py-16',
  tablet: 'py-16 md:py-20',
  desktop: 'py-16 md:py-24 lg:py-32',
};

/**
 * Responsive grid columns
 */
export const gridColumns = {
  '1': 'grid-cols-1',
  '2': 'grid-cols-1 sm:grid-cols-2',
  '3': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  '4': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  'auto': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
};

/**
 * Responsive text sizes following industry standards
 * Industry standard: Body text 16px base, proper heading hierarchy
 */
export const textSizes = {
  // Hero/Display headings - Large and bold for impact
  h1: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight',
  // Section headings - Clear hierarchy
  h2: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-semibold leading-tight',
  // Subsection headings
  h3: 'text-xl sm:text-2xl md:text-3xl font-heading font-semibold leading-snug',
  // Card/Component headings
  h4: 'text-lg sm:text-xl md:text-2xl font-heading font-semibold leading-snug',
  // Body text - Industry standard 16px base (text-base)
  body: 'text-base md:text-lg font-sans leading-relaxed',
  // Small text - Labels, captions (14px base)
  small: 'text-sm md:text-base font-sans leading-normal',
  // Button text - Readable and clear
  button: 'text-sm md:text-base font-sans font-medium',
  // Navigation text
  nav: 'text-sm md:text-base font-sans font-medium',
};

