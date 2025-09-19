import { useEffect, useState } from 'react';

export const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px -100px 0px'
      }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return isVisible;
};

export const useScrollReveal = (threshold = 0.1) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            entry.target.classList.remove('animate-out');
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const animateElements = document.querySelectorAll('.scroll-reveal');
    animateElements.forEach((element) => {
      element.classList.add('opacity-0', 'translate-y-8');
      observer.observe(element);
    });

    return () => {
      animateElements.forEach((element) => observer.unobserve(element));
    };
  }, [threshold]);
};