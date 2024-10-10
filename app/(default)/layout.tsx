"use client";

import Sidebar from "@/components/layout/sidebar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[auto,_1fr] w-full">
      {/* Sidebar */}
      <Sidebar />
      {/* Children */}
      <div className=" bg-white p-4">{children}</div>
    </div>
  );
}
