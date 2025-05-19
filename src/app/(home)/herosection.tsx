import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import Link from "next/link";

export function HeroSection() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <p className="text-center text-lg text-black dark:text-gray-200 z-20 mb-5">
        <Link
          href="https://legalgpt-1414892453258184.4.azure.databricksapps.com"
          className="underline cursor-pointer"
        >
          Open Streamlit version
        </Link>{" "}
        or continue on this website
      </p>
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:text-gray-300 text-4xl md:text-6xl lg:text-8xl font-sans pb-2 md:pb-10 relative z-20 font-bold tracking-tight">
        Make your contracts <br /> 10x Safer.
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        Spot risks, ensure compliance, and negotiate smarter—all with AI-powered
        contract analysis. 🚀
      </p>
    </BackgroundLines>
  );
}
