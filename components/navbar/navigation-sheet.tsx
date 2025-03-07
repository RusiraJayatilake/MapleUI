import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu } from "lucide-react";
// import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import Link from "next/link";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <VisuallyHidden>
        <SheetTitle>Navigation Drawer</SheetTitle>
      </VisuallyHidden>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        {/* <Logo /> */}
        <h1 className="text-2xl">SubscriFlow</h1>
        <NavMenu orientation="vertical" className="mt-12" />

        <div className="mt-8 space-y-4">
          <Link href={"/signup"}>
            <Button variant="outline" className="w-full sm:hidden">
              Sign Up
            </Button>
          </Link>
          <Button className="w-full xs:hidden">Get Started</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
