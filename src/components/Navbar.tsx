import { Brain } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navLink = "hover:text-blue-400 transition-colors cursor-pointer";
  const navLinkSelected =
    "text-blue-900 transition-colors cursor-pointer underline";

  return (
    <header className="w-full bg-slate-900 text-white shadow-md py-2">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2 font-semibold text-lg">
          <Brain className="w-6 h-6 text-blue-400" />
          <span>PomodoroApp</span>
        </div>

        {/* Rotas */}
        <div className="flex items-center gap-8 text-sm font-medium">
          <NavLink
            className={({ isActive }) => (isActive ? navLinkSelected : navLink)}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? navLinkSelected : navLink)}
            to="/about"
          >
            About
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? navLinkSelected : navLink)}
            to="/contact"
          >
            Contact
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? navLinkSelected : navLink)}
            to="/records"
          >
            Records
          </NavLink>

        </div>
      </nav>
    </header>
  );
}
