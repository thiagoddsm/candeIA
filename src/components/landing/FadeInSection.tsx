"use client";

import { useRef, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function FadeInSection({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (domRef.current) {
            observer.unobserve(domRef.current);
          }
        }
      });
    }, { threshold: 0.1 });

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <section
      ref={domRef}
      className={cn(
        "transition-opacity duration-700 ease-out motion-safe:transform motion-safe:translate-y-5",
        isVisible ? "opacity-100 motion-safe:translate-y-0" : "opacity-0",
        className
      )}
    >
      {children}
    </section>
  );
}
