"use client";

import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Always show loading screen on refresh
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Increased loading time

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-white text-2xl">
      Loading...
    </div>
  );
};

export default LoadingScreen;
