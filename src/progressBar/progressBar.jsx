import React, { useEffect, useState } from "react";
import "./ProgressBar.css";

const ProgressBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="progress-bar"
      style={{ width: `${(scrollPosition / (document.body.scrollHeight - window.innerHeight)) * 100}%` }}
    />
  );
};

export default ProgressBar;
