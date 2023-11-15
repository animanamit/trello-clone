import { Footer } from "@/app/(marketing)/_components/footer";
import { NavBar } from "@/app/(marketing)/_components/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-zinc-900">
      <NavBar />
      <main className="pt-40 pb-20 bg-zinc-900">{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
