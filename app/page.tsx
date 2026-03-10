import Nav from "@/components/Nav";
import EmailSignup from "@/components/EmailSignup";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main style={{ backgroundColor: "#1a1a1a", color: "#f5f5f5" }}>
      <Nav />

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20"
        style={{ backgroundColor: "#1a1a1a" }}>
        <div className="max-w-4xl mx-auto">

          {/* Eyebrow */}
          <p className="text-xs font-black uppercase tracking-[0.4em] mb-6" style={{ color: "#ff6b2b" }}>
            Started at 49 · Done by 50
          </p>

          {/* Headline */}
          <h1 className="text-5xl md:text-8xl font-black uppercase leading-none mb-6"
            style={{ letterSpacing: "-0.02em" }}>
            I Lost{" "}
            <span style={{ color: "#ff6b2b" }}>155 lbs</span>
            <br />
            of Fat.
          </h1>

          <h2 className="text-3xl md:text-5xl font-black uppercase leading-none mb-8"
            style={{ color: "#f5f5f5", letterSpacing: "-0.02em" }}>
            Then I Put On{" "}
            <span style={{ color: "#00d4c8" }}>20 lbs</span>{" "}
            of Muscle.
          </h2>

          <p className="text-lg md:text-xl font-bold uppercase tracking-widest mb-4" style={{ color: "#999" }}>
            16 months. No surgery. No shortcuts.
          </p>

          {/* The tagline */}
          <div className="my-10 py-8 border-t border-b" style={{ borderColor: "#2e2e2e" }}>
            <p className="text-xl md:text-2xl font-black uppercase tracking-wide" style={{ color: "#f5f5f5" }}>
              "Peptides don't do the work.
            </p>
            <p className="text-xl md:text-2xl font-black uppercase tracking-wide" style={{ color: "#ff6b2b" }}>
              They let you keep doing it."
            </p>
          </div>

          {/* Email CTA */}
          <div className="flex flex-col items-center gap-4 mb-10">
            <p className="text-sm font-bold uppercase tracking-widest" style={{ color: "#999" }}>
              Get the exact protocol I used — free
            </p>
            <EmailSignup />
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/story"
              className="px-8 py-4 font-black uppercase tracking-widest text-sm transition-all hover:opacity-90"
              style={{ backgroundColor: "#ff6b2b", color: "#1a1a1a" }}>
              Read the Full Story →
            </Link>
            <a href="https://biotechparticles.com" target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 font-black uppercase tracking-widest text-sm transition-all"
              style={{ border: "2px solid #ff6b2b", color: "#ff6b2b" }}>
              Shop Peptides →
            </a>
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="py-20 px-4" style={{ backgroundColor: "#242424" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-black uppercase tracking-[0.4em] mb-3" style={{ color: "#ff6b2b" }}>
              The Proof
            </p>
            <h2 className="text-4xl md:text-5xl font-black uppercase" style={{ letterSpacing: "-0.02em" }}>
              Before &amp; After
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {/* Before */}
            <div className="relative">
              <div className="absolute top-4 left-4 z-10 px-3 py-1 text-xs font-black uppercase tracking-widest"
                style={{ backgroundColor: "#1a1a1a", color: "#999" }}>
                Before · Sept 2024
              </div>
              <Image src="/images/before-1.jpg" alt="Tobin Titus before transformation"
                width={600} height={750} className="w-full object-cover"
                style={{ maxHeight: "550px", objectPosition: "top" }} />
            </div>

            {/* After */}
            <div className="relative">
              <div className="absolute top-4 left-4 z-10 px-3 py-1 text-xs font-black uppercase tracking-widest"
                style={{ backgroundColor: "#ff6b2b", color: "#1a1a1a" }}>
                After · 16 Months Later
              </div>
              <Image src="/images/after-1.jpg" alt="Tobin Titus after transformation"
                width={600} height={750} className="w-full object-cover"
                style={{ maxHeight: "550px", objectPosition: "top" }} />
            </div>
          </div>

          {/* More after photos */}
          <div className="grid grid-cols-3 gap-3">
            {["after-2.jpg", "after-3.jpg", "after-5.jpg"].map((img, i) => (
              <Image key={i} src={`/images/${img}`} alt={`Tobin Titus transformation photo ${i + 2}`}
                width={400} height={500} className="w-full object-cover"
                style={{ maxHeight: "280px", objectPosition: "top" }} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ backgroundColor: "#ff6b2b" }} className="py-8">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: "155 lbs", label: "Fat Lost" },
            { num: "20 lbs", label: "Muscle Gained" },
            { num: "16 mo", label: "Total Time" },
            { num: "Age 50", label: "When Done" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl md:text-4xl font-black uppercase" style={{ color: "#1a1a1a" }}>
                {stat.num}
              </p>
              <p className="text-xs font-black uppercase tracking-widest mt-1" style={{ color: "#1a1a1a", opacity: 0.7 }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* What is Hunc */}
      <section className="py-24 px-4" style={{ backgroundColor: "#242424" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-black uppercase tracking-[0.4em] mb-4" style={{ color: "#00d4c8" }}>
            Who This Is For
          </p>
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-8" style={{ letterSpacing: "-0.02em" }}>
            You're the <span style={{ color: "#ff6b2b" }}>Unc</span>.
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: "#ccc" }}>
            You've been around. You know what hard work looks like. 
            You're not trying to look like a 22-year-old — you're trying to be 
            the most impressive version of yourself at whatever age you are right now.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-10" style={{ color: "#ccc" }}>
            Your body doesn't recover the way it used to. Your energy isn't what it was. 
            But you haven't given up. You just need the right tools to keep showing up.
          </p>
          <Link href="/story"
            className="inline-block px-8 py-4 font-black uppercase tracking-widest text-sm"
            style={{ border: "2px solid #00d4c8", color: "#00d4c8" }}>
            My Story →
          </Link>
        </div>
      </section>

      {/* What are peptides */}
      <section className="py-24 px-4" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-black uppercase tracking-[0.4em] mb-4" style={{ color: "#ff6b2b" }}>
              The Tools
            </p>
            <h2 className="text-4xl md:text-6xl font-black uppercase" style={{ letterSpacing: "-0.02em" }}>
              What I Actually Used
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "BPC-157",
                category: "Recovery",
                desc: "Body Protection Compound. Used for injury recovery and reducing inflammation. Kept me training through the setbacks.",
                color: "#ff6b2b",
              },
              {
                name: "TB-500",
                category: "Recovery",
                desc: "Thymosin Beta-4. Accelerated soft tissue repair. When I should've been resting for a week, I was back in 2 days.",
                color: "#ff6b2b",
              },
              {
                name: "SS-31 + MOTS-C",
                category: "Energy",
                desc: "Mitochondrial support stack. The energy difference was noticeable within weeks. Less fatigue, more output.",
                color: "#00d4c8",
              },
              {
                name: "NAD+ + Glutathione",
                category: "Longevity",
                desc: "Cellular repair and antioxidant support. Part of the foundation that made everything else work better.",
                color: "#00d4c8",
              },
            ].map((item) => (
              <div key={item.name} className="p-6" style={{ backgroundColor: "#242424", borderLeft: `3px solid ${item.color}` }}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-black uppercase tracking-widest px-2 py-1"
                    style={{ backgroundColor: item.color, color: "#1a1a1a" }}>
                    {item.category}
                  </span>
                </div>
                <h3 className="text-2xl font-black uppercase mb-2">{item.name}</h3>
                <p style={{ color: "#999" }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/peptides"
              className="inline-block px-8 py-4 font-black uppercase tracking-widest text-sm transition-all hover:opacity-90"
              style={{ backgroundColor: "#ff6b2b", color: "#1a1a1a" }}>
              Full Peptides 101 Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-4 text-center" style={{ backgroundColor: "#242424" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-6" style={{ letterSpacing: "-0.02em" }}>
            Ready to <span style={{ color: "#ff6b2b" }}>Start?</span>
          </h2>
          <p className="text-lg mb-10" style={{ color: "#999" }}>
            Get the exact protocol Tobin used — the peptides, the stack, the timing — delivered to your inbox for free.
          </p>
          <div className="flex flex-col items-center gap-4">
            <EmailSignup />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center" style={{ backgroundColor: "#1a1a1a", borderTop: "1px solid #2e2e2e" }}>
        <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#555" }}>
          © 2026 HuncFit. All rights reserved.
        </p>
        <p className="text-xs" style={{ color: "#444" }}>
          Content on this site is for educational and informational purposes only. 
          Peptides are sold for research use only. Not for human consumption. 
          Not intended to diagnose, treat, or prevent any condition.
        </p>
      </footer>
    </main>
  );
}
