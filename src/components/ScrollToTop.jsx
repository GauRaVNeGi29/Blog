// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Try scrolling window first
    window.scrollTo({ top: 0, behavior: "smooth" });

    // If your main content is a scrollable div, scroll it too
    const mainContent = document.querySelector(".main-content"); // give your scrollable wrapper this class
    if (mainContent) {
      mainContent.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
