import { Button } from "@/components/ui/button";
import Link from "next/link";

export const NavBar = () => {
  return (
    <div className="fixed top-0 w-full h-14 px-4 border-bottom shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <div className="space-x-4 flex items-center justify-between w-full">
          <Button size="lg" variant="outline" asChild>
            <Link href="/sign-in">Log In</Link>
          </Button>
          <Button size="lg" asChild>
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
