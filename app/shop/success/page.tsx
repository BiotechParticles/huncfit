import Nav from "@/components/Nav";
import Link from "next/link";

export default function Success() {
  return (
    <main style={{ backgroundColor: "#1a1a1a", color: "#f5f5f5" }}>
      <Nav />
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4" style={{ paddingTop: "80px" }}>
        <div className="max-w-xl mx-auto">
          <p className="text-6xl mb-6">🎉</p>
          <h1 className="text-4xl md:text-5xl font-black uppercase mb-4" style={{ letterSpacing: "-0.02em" }}>
            Order <span style={{ color: "#ff6b2b" }}>Confirmed.</span>
          </h1>
          <p className="text-lg mb-4" style={{ color: "#ccc" }}>
            Your shirt is being printed and will ship in 3–5 business days.
            You'll get a tracking email when it's on its way.
          </p>
          <p className="text-base mb-10" style={{ color: "#999" }}>
            Thanks for repping the brand. Unc Season never ends.
          </p>
          <Link href="/shop"
            className="inline-block px-8 py-4 font-black uppercase tracking-widest text-sm hover:opacity-90"
            style={{ backgroundColor: "#ff6b2b", color: "#1a1a1a" }}>
            Back to Shop →
          </Link>
        </div>
      </section>
    </main>
  );
}
