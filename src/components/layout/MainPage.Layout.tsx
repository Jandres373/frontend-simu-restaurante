import React from "react";
import { Sidebar } from "../widgets/sidebar";

type Props = {
  header?: React.ReactNode;
  children: React.ReactNode;
};

export function MainPageLayout({ header, children }: Props) {
  return (
    <main className="flex h-screen overflow-hidden">
      <nav className="w-1/12 fixed">
        <Sidebar />
      </nav>
      <div className="max-h-screen min-h-screen w-11/12 ml-auto overflow-hidden bg-accent">
        <div className="w-full h-[15dvh]">{header}</div>
        <div className="w-full h-[85dvh]">{children}</div>
      </div>
    </main>
  );
}
