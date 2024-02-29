import { Outlet } from "react-router-dom";

import { Banner } from "@/components/banner";
import Footer from "@/components/footer";
import { Header } from "@/components/header";

export function AppLayout() {
  return (
    <div className="antialiased">
      <Header />
      <Banner />

      <div className="flex justify-center items-center mt-2">
        <Outlet />
      </div>
      <div className="mt-7">
        <Footer />
      </div>
    </div>
  );
}
