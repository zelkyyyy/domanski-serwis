import React from "react";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-950 overflow-x-hidden">
      <Hero />
    </div>
  );
}
