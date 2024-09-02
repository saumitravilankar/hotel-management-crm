"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  selectCurrentSidebarState,
  toggleSidebar,
} from "@/lib/features/theme/themeSlice";
import { useDispatch, useSelector } from "react-redux";

export function SheetSide() {
  const dispatch = useDispatch();
  const currentSidebarState = useSelector(selectCurrentSidebarState);

  return (
    <div className="grid grid-cols-2 gap-2">
      <Sheet
        open={currentSidebarState}
        onOpenChange={() => {
          dispatch(toggleSidebar(!currentSidebarState));
        }}
      >
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4"></div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
