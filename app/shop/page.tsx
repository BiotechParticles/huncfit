"use client";
import Nav from "@/components/Nav";
import Image from "next/image";
import { useState } from "react";

const SIZES = ["S", "M", "L", "XL", "2XL"];

const COLORS = [
  { id: "black", label: "Black",  hex: "#1a1a1a", border: "#555" },
  { id: "white", label: "White",  hex: "#f5f5f5", border: "#aaa" },
  { id: "grey",  label: "Grey",   hex: "#9e9e9e", border: "#9e9e9e" },
  { id: "red",   label: "Red",    hex: "#c0392b", border: "#c0392b" },
];

const products = [
  {
    id: "unc-daddy",
    name: "Young Guys Call Me Unc",
    sub: "Their Girlfriends Call Me Daddy",
    price: 34.99,
    hasBack: false,
    tag: "Fan Favorite",
    tagColor: "#ff6b2b",
  },
  {
    id: "unc-season",
    name: "Unc Season",
    sub: "You already know.",
    price: 34.99,
    hasBack: false,
    tag: null,
    tagColor: "#00d4c8",
  },
  {
    id: "built-80s",
    name: "Built in the 80s",
    sub: "Still Under Construction.",
    price: 36.99,
    hasBack: true,
    tag: null,
    tagColor: "#00d4c8",
  },
  {
    id: "built-70s",
    name: "Built in the 70s",
    sub: "Still Under Construction.",
    price: 36.99,
    hasBack: true,
    tag: null,
    tagColor: "#00d4c8",
  },
  {
    id: "built-60s",
    name: "Built in the 60s",
    sub: "Still Under Construction.",
    price: 36.99,
    hasBack: true,
    tag: null,
    tagColor: "#00d4c8",
  },
  {
    id: "gray-hair",
    name: "Gray Hair. Heavy Weights.",
    sub: "Zero Apologies.",
    price: 36.99,
    hasBack: true,
    tag: null,
    tagColor: "#00d4c8",
  },
  {
    id: "dad-bod",
    name: "I Don't Have a Dad Bod.",
    sub: "I Have a Father Figure.",
    price: 36.99,
    hasBack: true,
    tag: null,
    tagColor: "#00d4c8",
  },
];

function mockupSrc(productId: string, color: string, side: "front" | "back") {
  if (side === "back") return `/images/mockups/${productId}-${color}-back.jpg`;
  return `/images/mockups/${productId}-${color}.jpg`;
}

function ProductCard({ p }: { p: typeof products[0] }) {
  const [color, setColor] = useState("black");
  const [size, setSize] = useState("");
  const [view, setView] = useState<"front" | "back">("back");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleBuy() {
    if (!size) { setError("Select a size"); return; }
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: p.id, size, color }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else setError("Something went wrong. Try again.");
    } catch {
      setError("Something went wrong. Try again.");
    }
    setLoading(false);
  }

  const imgSrc = p.hasBack ? mockupSrc(p.id, color, view) : mockupSrc(p.id, color, "front");

  return (
    <div className="flex flex-col rounded-sm overflow-hidden" style={{ backgroundColor: "#242424" }}>
      {/* Image */}
      <div className="relative" style={{ backgroundColor: "#e8e8e8", aspectRatio: "3/4" }}>
        {p.tag && (
          <div className="absolute top-3 left-3 z-10 px-2 py-1 text-xs font-black uppercase tracking-wider"
            style={{ backgroundColor: p.tagColor, color: "#1a1a1a" }}>
            {p.tag}
          </div>
        )}
        {/* Front/Back toggle */}
        {p.hasBack && (
          <div className="absolute bottom-3 right-3 z-10 flex gap-1">
            {(["back", "front"] as const).map(v => (
              <button key={v} onClick={() => setView(v)}
                className="px-2 py-1 text-xs font-black uppercase"
                style={{
                  backgroundColor: view === v ? "#ff6b2b" : "rgba(0,0,0,0.5)",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                }}>
                {v === "back" ? "Design" : "Logo"}
              </button>
            ))}
          </div>
        )}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgSrc}
          alt={`${p.name} - ${color}`}
          className="w-full object-contain"
          style={{ height: "100%", padding: "16px" }}
          onError={(e) => {
            (e.target as HTMLImageElement).src = `/images/shirt-${p.id}.png`;
          }}
        />
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <h2 className="font-black uppercase text-lg leading-tight mb-1">{p.name}</h2>
        <p className="text-sm mb-3" style={{ color: "#999" }}>{p.sub}</p>
        <p className="text-2xl font-black mb-4" style={{ color: "#ff6b2b" }}>${p.price.toFixed(2)}</p>

        {/* Color swatches */}
        <div className="flex gap-3 mb-4 items-center">
          <span className="text-xs uppercase font-black tracking-widest" style={{ color: "#666" }}>Color:</span>
          <div className="flex gap-2">
            {COLORS.map(c => (
              <button key={c.id} onClick={() => setColor(c.id)}
                title={c.label}
                style={{
                  width: 28, height: 28,
                  backgroundColor: c.hex,
                  border: color === c.id ? "3px solid #ff6b2b" : `2px solid ${c.border}`,
                  borderRadius: "50%",
                  cursor: "pointer",
                  flexShrink: 0,
                }} />
            ))}
          </div>
          <span className="text-xs font-bold uppercase" style={{ color: "#999" }}>
            {COLORS.find(c => c.id === color)?.label}
          </span>
        </div>

        {/* Size selector */}
        <div className="mb-2">
          <span className="text-xs uppercase font-black tracking-widest block mb-2" style={{ color: "#666" }}>Size:</span>
          <div className="flex gap-2 flex-wrap">
            {SIZES.map(s => (
              <button key={s} onClick={() => setSize(s)}
                className="font-black uppercase transition-all"
                style={{
                  minWidth: 48, height: 48,
                  fontSize: 14,
                  backgroundColor: size === s ? "#ff6b2b" : "#333",
                  color: size === s ? "#1a1a1a" : "#f5f5f5",
                  border: "none",
                  cursor: "pointer",
                  padding: "0 8px",
                }}>
                {s}
              </button>
            ))}
          </div>
        </div>

        {error && <p className="text-xs mt-2" style={{ color: "#ff4444" }}>{error}</p>}

        {/* Buy button */}
        <button onClick={handleBuy} disabled={loading}
          className="mt-4 w-full font-black uppercase tracking-widest transition-all"
          style={{
            backgroundColor: "#ff6b2b",
            color: "#1a1a1a",
            border: "none",
            height: 56,
            fontSize: 16,
            cursor: loading ? "wait" : "pointer",
            opacity: loading ? 0.7 : 1,
          }}>
          {loading ? "Loading..." : `Buy Now — $${p.price.toFixed(2)}`}
        </button>
      </div>
    </div>
  );
}

export default function Shop() {
  return (
    <main style={{ backgroundColor: "#1a1a1a", color: "#f5f5f5" }}>
      <Nav />
      <section className="pb-20 px-4" style={{ paddingTop: "120px" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-black uppercase tracking-[0.4em] mb-4" style={{ color: "#ff6b2b" }}>HuncFit Merch</p>
            <h1 className="text-5xl md:text-7xl font-black uppercase mb-4" style={{ letterSpacing: "-0.02em" }}>
              Wear the <span style={{ color: "#ff6b2b" }}>Brand.</span>
            </h1>
            <p style={{ color: "#999" }} className="text-lg">
              Bella+Canvas tees. 4 colors. Ships to your door.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(p => <ProductCard key={p.id} p={p} />)}
          </div>

          <p className="text-center mt-12 text-sm" style={{ color: "#555" }}>
            Print-on-demand. Ships within 3-5 business days. Unisex Bella+Canvas 3001.
          </p>
        </div>
      </section>
    </main>
  );
}
