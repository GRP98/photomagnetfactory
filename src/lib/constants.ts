/**
 * Breakpoint constants for responsive design
 * These match Tailwind's default breakpoints
 */
export const BREAKPOINTS = {
  sm: 640,   // Small devices (landscape phones)
  md: 768,   // Medium devices (tablets)
  lg: 1024,  // Large devices (desktops)
  xl: 1280,  // Extra large devices (large desktops)
  '2xl': 1536, // 2X large devices (larger desktops)
} as const;

/**
 * Device type definitions
 */
export type DeviceType = 'mobile' | 'tablet' | 'desktop';

/**
 * Responsive spacing scale
 */
export const SPACING = {
  mobile: {
    section: 'py-12',
    container: 'px-4',
    gap: 'gap-4',
  },
  tablet: {
    section: 'py-16',
    container: 'px-6',
    gap: 'gap-6',
  },
  desktop: {
    section: 'py-24',
    container: 'px-8',
    gap: 'gap-8',
  },
} as const;

/**
 * Typography scale for responsive design
 */
export const TYPOGRAPHY = {
  mobile: {
    h1: 'text-3xl',
    h2: 'text-2xl',
    h3: 'text-xl',
    body: 'text-base',
    small: 'text-sm',
  },
  tablet: {
    h1: 'text-4xl',
    h2: 'text-3xl',
    h3: 'text-2xl',
    body: 'text-lg',
    small: 'text-base',
  },
  desktop: {
    h1: 'text-5xl md:text-6xl lg:text-7xl',
    h2: 'text-4xl md:text-5xl',
    h3: 'text-2xl md:text-3xl',
    body: 'text-lg md:text-xl',
    small: 'text-sm md:text-base',
  },
} as const;

