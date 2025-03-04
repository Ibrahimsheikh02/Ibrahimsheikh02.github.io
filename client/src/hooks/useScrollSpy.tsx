import { useState, useEffect } from 'react';

const useScrollSpy = (sectionIds: string[], offset: number = 0) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const scrollHandler = () => {
      // Get current scroll position
      const scrollY = window.scrollY;
      
      // Find all section elements
      const sections = sectionIds.map(id => {
        const element = document.getElementById(id);
        if (!element) return { id, top: 0, bottom: 0 };
        
        const rect = element.getBoundingClientRect();
        return {
          id,
          top: rect.top + scrollY - offset,
          bottom: rect.bottom + scrollY - offset
        };
      });
      
      // Find the current section
      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollY >= sections[i].top) {
          setActiveSection(sections[i].id);
          return;
        }
      }
      
      // If we get here, we're at the top of the page
      setActiveSection(sections[0].id);
    };
    
    // Initial check
    scrollHandler();
    
    // Add scroll event listener
    window.addEventListener('scroll', scrollHandler);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [sectionIds, offset]);
  
  return activeSection;
};

export default useScrollSpy;
