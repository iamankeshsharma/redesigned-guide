import { Outlet } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { DomainForSaleBanner } from "./DomainForSaleBanner";
// import { VisitorCounter } from "./VisitorCounter";

export function Root() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <DomainForSaleBanner />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      {/* <VisitorCounter /> */}
    </div>
  );
}
