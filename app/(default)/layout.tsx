import { Navbar } from "@/components/layout/navbar";
import { SheetSide } from "@/components/layout/sheetProvider";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SheetSide />
      <Navbar />
      {children}
    </>
  );
}
