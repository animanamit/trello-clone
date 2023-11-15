import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full px-4 border-top border-zinc-100 bg-zinc-900 text-white">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <div className="space-x-4 flex items-center justify-between w-full">
          <Button size="lg" variant="ghost">
            Privacy Policy
          </Button>
          <Button size="lg" variant="ghost">
            Terms of Service
          </Button>
        </div>
      </div>
    </div>
  );
};
