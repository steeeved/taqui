"use client";

import React from "react";
import CursorTrailCanvas from "@/components/Cursor-Trail-Canvas";
interface PageProps {
  children: React.ReactNode;
}

const ClientProviders: React.FC<PageProps> = ({ children }) => {
  return (
    <main>
      <CursorTrailCanvas
        className="pointer-events-none fixed inset-0 -z-10 h-[100%] w-full"
        color="#2f7df4"
      />
      {children}
    </main>
  );
};

export default ClientProviders;
