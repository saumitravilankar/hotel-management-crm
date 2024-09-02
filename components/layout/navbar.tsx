"use client";
import { LucideMenu } from "lucide-react";
import { Button } from "../ui/button";
import {
  selectCurrentSidebarState,
  toggleSidebar,
} from "@/lib/features/theme/themeSlice";
import { useDispatch, useSelector } from "react-redux";

export function Navbar() {
  const dispatch = useDispatch();
  const currentSidebarState = useSelector(selectCurrentSidebarState);

  const handleMenuToggle = () => {
    dispatch(toggleSidebar(!currentSidebarState));
  };

  return (
    <div className="flex items-center justify-between w-full bg-slate-50 p-4">
      <Button onClick={handleMenuToggle} variant={"outline"}>
        <LucideMenu className="h-4 w-4" />
      </Button>
    </div>
  );
}
