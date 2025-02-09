"use client";
import Terminal from "@/components/Terminal";
import LoadingScreen from '@/components/LoadingScreen';

export default function Home() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black text-green-400">
      <LoadingScreen />
      <Terminal />
    </div>
  );
}
