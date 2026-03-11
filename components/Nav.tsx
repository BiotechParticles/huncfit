"use client";
import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{ backgroundColor: "#1a1a1a", borderBottom: "1px solid #2e2e2e" }}
      className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black uppercase tracking-widest"
          style={{ letterSpacing: "0.1em" }}>
          <span style={{ color: "#f5f5f5" }}>H</span>
          <span style={{ color: "#DC143C" }}>·unc</span>
          <span style={{ color: "#f5f5f5" }}>FIT</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest items-center">
          <Link href="/story" className="hover:text-orange-400 transition-colors" style={{ color: "#999" }}>
            The Story
          </Link>
          <Link href="/coaching" className="hover:text-orange-400 transition-colors" style={{ color: "#999" }}>
            Coaching
          </Link>
          <Link href="/merch" className="hover:text-orange-400 transition-colors" style={{ color: "#999" }}>
            Merch
          </Link>
          <Link href="/peptides" className="hover:text-orange-400 transition-colors" style={{ color: "#999" }}>
            Peptides
          </Link>
          <Link href="/coaching"
            className="px-4 py-2 font-black uppercase tracking-wider text-sm transition-all hover:opacity-90"
            style={{ backgroundColor: "#ff6b2b", color: "#1a1a1a" }}>
            Work With Me →
          </Link>
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
          <Link href="/coaching" style={{ color: "#999" }} onClick={() => setOpen(false)}>Coaching</Link>
          <Link href="/merch" style={{ color: "#999" }} onClick={() => setOpen(false)}>Merch</Link>
          <Link href="/peptides" style={{ color: "#999" }} onClick={() => setOpen(false)}>Peptides</Link>
          <Link href="/coaching"
            className="text-center py-3 font-black"
            style={{ backgroundColor: "#ff6b2b", color: "#1a1a1a" }}
            onClick={() => setOpen(false)}>
            Work With Me →
          </Link>
        </div>
      )}
    </nav>
  );
}
