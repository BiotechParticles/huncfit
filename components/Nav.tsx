"use client";
import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{ backgroundColor: "#1a1a1a", borderBottom: "1px solid #2e2e2e" }}
      className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black tracking-widest uppercase"
          style={{ color: "#ff6b2b", letterSpacing: "0.15em" }}>
          HUNC<span style={{ color: "#f5f5f5" }}>FIT</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest">
          <Link href="/story" className="hover:text-orange-400 transition-colors" style={{ color: "#999" }}>
            The Story
          </Link>
          <Link href="/peptides" className="hover:text-orange-400 transition-colors" style={{ color: "#999" }}>
            Peptides 101
          </Link>
          <Link href="/about" className="hover:text-orange-400 transition-colors" style={{ color: "#999" }}>
            About
          </Link>
          <a href="https://biotechparticles.com" target="_blank" rel="noopener noreferrer"
            className="px-4 py-2 font-black uppercase tracking-wider text-sm transition-all"
            style={{ backgroundColor: "#ff6b2b", color: "#1a1a1a" }}>
            Get Peptides →
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="4" width="28" height="3" rx="1.5" fill="#f5f5f5"/>
            <rect y="12.5" width="28" height="3" rx="1.5" fill="#f5f5f5"/>
            <rect y="21" width="28" height="3" rx="1.5" fill="#f5f5f5"/>
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-4 text-sm font-bold uppercase tracking-widest"
          style={{ backgroundColor: "#1a1a1a" }}>
          <Link href="/story" style={{ color: "#999" }} onClick={() => setOpen(false)}>The Story</Link>
          <Link href="/peptides" style={{ color: "#999" }} onClick={() => setOpen(false)}>Peptides 101</Link>
          <Link href="/about" style={{ color: "#999" }} onClick={() => setOpen(false)}>About</Link>
          <a href="https://biotechparticles.com" target="_blank" rel="noopener noreferrer"
            className="text-center py-3 font-black"
            style={{ backgroundColor: "#ff6b2b", color: "#1a1a1a" }}>
            Get Peptides →
          </a>
        </div>
      )}
    </nav>
  );
}
