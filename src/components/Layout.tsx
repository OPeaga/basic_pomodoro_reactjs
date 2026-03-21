import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export function Layout() {
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-slate-50">
      <Navbar />
      <main className="flex-1 overflow-hidden relative">
        <Outlet />
      </main>
    </div>
  );
}
