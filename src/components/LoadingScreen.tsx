"use client";

import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (hasVisited) {
      setIsLoading(false); // Hide loading if user has visited before
    } else {
      setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem("hasVisited", "true"); // Set flag in localStorage
      }, 2000); // Simulated loading time
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-white text-2xl">
      Loading...
    </div>
  );
};

export default LoadingScreen;
