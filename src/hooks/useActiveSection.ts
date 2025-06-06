import { useEffect, useState } from "react";
import {navigationList} from "@/app/data/config";

export const useActiveSection = (): string => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    };

    const observers: IntersectionObserver[] = [];
    const sectionIds = navigationList.map((section) => section.href.slice(1));

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        }, observerOptions);

        observer.observe(section);
        observers.push(observer);
      }
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return activeSection;
};
