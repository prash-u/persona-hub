import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function HashScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const id = location.hash.slice(1);

    const scrollToTarget = () => {
      const element = document.getElementById(id);
      if (!element) {
        return false;
      }

      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      return true;
    };

    if (scrollToTarget()) {
      return;
    }

    const timeout = window.setTimeout(scrollToTarget, 120);
    return () => window.clearTimeout(timeout);
  }, [location.hash, location.pathname]);

  return null;
}
