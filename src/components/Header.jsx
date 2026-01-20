import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-500 ${
        scrolled
          ? "bg-white/90 shadow-md"
          : "bg-white/60"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-3">

        {/* Branding */}
        <h1 className="font-extrabold text-2xl bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent">
          Satvedh Connect
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-blue-700 font-medium">
          <Link to="/" className="hover:text-sky-500">Home</Link>
          <Link to="/register-student" className="hover:text-sky-500">Student</Link>
          <Link to="/register-pro" className="hover:text-sky-500">Professional</Link>
          <Link to="/login" className="hover:text-sky-500">Login</Link>
          <Link to="/pros" className="hover:text-sky-500">Find Pros</Link>
          <Link to="/dashboard" className="hover:text-sky-500">Dashboard</Link>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden text-blue-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md py-4 px-6 space-y-4 text-blue-700 font-semibold">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/register-student" onClick={() => setOpen(false)}>Student</Link>
          <Link to="/register-pro" onClick={() => setOpen(false)}>Professional</Link>
          <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
          <Link to="/pros" onClick={() => setOpen(false)}>Find Pros</Link>
          <Link to="/dashboard" onClick={() => setOpen(false)}>Dashboard</Link>
        </div>
      )}
    </header>
  );
}
