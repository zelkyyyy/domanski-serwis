import React from "react";
import Hero from "./components/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
   alternates: {
    canonical: "https://domanski.lukow.pl/",
  },
}
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-950 overflow-x-hidden">
      <Hero />
    </div>
  );
}
