import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";

import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const mainFont = Inter({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = () => {
  return (
    <div
      className={cn(
        "flex items-center justify-center flex-col",
        mainFont.className
      )}
    >
      <div className="flex items-center justify-center flex-col">
        <div className="mb-4 flex items-center border shadow-sm p-4 rounded-full uppercase bg-pink-300 text-pink-500">
          <Medal className="h-6 w-6 mr-2" />
          Task Management
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-300 mb-6">
          Taskify Helps Teams Move
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-2 p-2 rounded-md pb-4 w-fit">
          work forward.
        </div>
      </div>
      <div className="text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center w-auto">
        Collaborate, manage projects and reach new productivity peaks. From high
        rises to the home office, the way your team works is unique - accomplish
        it all.
      </div>
      <Button size={"lg"} className="mt-4">
        <Link href="/sign-up">Get Started for Free</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
