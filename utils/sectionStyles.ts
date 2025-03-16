/**
 * A utility to add standard classes to section components
 * 
 * This allows us to maintain consistent styles across all sections
 * while keeping the background elements full width and only applying
 * padding to content elements.
 */

export const sectionStyles = {
  // Main container with left padding for sidebar offset
  contentContainer: "container mx-auto px-4 pl-[calc(8vw+2rem)] relative",
  
  // Full width background elements
  fullWidthBackground: "absolute top-0 bottom-0 -left-10 right-0",
  
  // Section base styles
  section: "relative w-full",
}; 