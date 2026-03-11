import Nav from "@/components/Nav";
import EmailSignup from "@/components/EmailSignup";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main style={{ backgroundColor: "#1a1a1a", color: "#f5f5f5" }}>
      <Nav />

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-32 pb-16"
        style={{ backgroundColor: "#1a1a1a" }}>
        <div className="w-full max-w-4xl mx-auto px-4">

          <p className="text-xs font-black uppercase tracking-[0.4em] mb-6" style={{ color: "#ff6b2b" }}>
            Started at 49 · Done by 50
          </p>

          <h1 className="text-5xl md:text-8xl font-black uppercase leading-none mb-6"
            style={{ letterSpacing: "-0.02em" }}>
            I Lost{" "}
            <span style={{ color: "#ff6b2b" }}>155 lbs</span>
            <br />
            of Fat.
          </h1>

          <h2 className="text-3xl md:text-5xl font-black uppercase leading-none mb-4"
            style={{ color: "#f5f5f5", letterSpacing: "-0.02em" }}>
            While Gaining{" "}
            <span style={{ color: "#00d4c8" }}>20 lbs</span>{" "}
            of Muscle.
          </h2>

          <p className="text-base md:text-lg font-black uppercase tracking-widest mb-2" style={{ color: "#00d4c8" }}>
            At the same time. That's a recomp.
          </p>

          <p className="text-lg md:text-xl font-bold uppercase tracking-widest mb-8" style={{ color: "#999" }}>
            16 months. Age 50. No shortcuts.
          </p>

          <div className="my-10 py-8 border-t border-b" style={{ borderColor: "#2e2e2e" }}>
            <p className="text-xl md:text-2xl font-black uppercase tracking-wide mb-2" style={{ color: "#f5f5f5" }}>
              I did it. I'll show you how.
            </p>
            <p className="text-base md:text-lg" style={{ color: "#999" }}>
              Online coaching, real training, and the tools most guys your age don't know exist.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/coaching"
              className="px-8 py-4 font-black uppercase tracking-widest text-sm transition-all hover:opacity-90"
              style={{ backgroundColor: "#ff6b2b", color: "#1a1a1a" }}>
              Work With Me →
            </Link>
            <Link href="/story"
              className="px-8 py-4 font-black uppercase tracking-widest text-sm transition-all"
              style={{ border: "2px solid #ff6b2b", color: "#ff6b2b" }}>
              My Story →
            </Link>
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
            <div className="relative">
              <div className="absolute top-4 left-4 z-10 px-3 py-1 text-xs font-black uppercase tracking-widest"
                style={{ backgroundColor: "#1a1a1a", color: "#999" }}>
                Before · Sept 2024
              </div>
              <Image src="/images/before-hero.jpg" alt="Tobin Titus before transformation"
                width={600} height={750} className="w-full object-cover"
                style={{ maxHeight: "550px", objectPosition: "top" }} />
            </div>
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

          <div className="grid grid-cols-3 gap-3">
            {["after-3.jpg", "after-2.jpg", "after-5.jpg"].map((img, i) => (
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
              <p className="text-3xl md:text-4xl font-black uppercase" style={{ color: "#1a1a1a" }}>{stat.num}</p>
              <p className="text-xs font-black uppercase tracking-widest mt-1" style={{ color: "#1a1a1a", opacity: 0.7 }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who this is for */}
      <section className="py-24 px-4" style={{ backgroundColor: "#1a1a1a" }}>
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
            Your recovery is slower. Your energy isn't what it was. But you haven't given up. 
            You just need the right system — and someone who's actually done it at your age.
          </p>
          <Link href="/coaching"
            className="inline-block px-8 py-4 font-black uppercase tracking-widest text-sm transition-all hover:opacity-90"
            style={{ backgroundColor: "#ff6b2b", color: "#1a1a1a" }}>
            Work With Me →
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-4" style={{ backgroundColor: "#242424" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-black uppercase tracking-[0.4em] mb-4" style={{ color: "#ff6b2b" }}>
              The System
            </p>
            <h2 className="text-4xl md:text-6xl font-black uppercase" style={{ letterSpacing: "-0.02em" }}>
              How I Did It
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { num: "01", title: "Training", desc: "7–10 miles walking daily. 5 days of lifting per week. Consistency over intensity — especially at our age.", color: "#ff6b2b" },
              { num: "02", title: "Nutrition", desc: "Stopped drinking. Started eating like someone who actually wanted results. No crash diets, no counting every calorie.", color: "#ff6b2b" },
              { num: "03", title: "Recovery", desc: "Sleep, stress management, and tools that helped me bounce back fast enough to keep showing up.", color: "#00d4c8" },
              { num: "04", title: "Advanced Tools", desc: "Peptides for recovery and energy when I needed an edge. The last piece of the puzzle — not the first.", color: "#00d4c8" },
            ].map((item) => (
              <div key={item.num} className="p-6" style={{ backgroundColor: "#1a1a1a", borderLeft: `3px solid ${item.color}` }}>
                <p className="text-5xl font-black mb-3" style={{ color: item.color, opacity: 0.3 }}>{item.num}</p>
                <h3 className="text-2xl font-black uppercase mb-2">{item.title}</h3>
                <p style={{ color: "#999" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Merch teaser */}
      <section className="py-24 px-4" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-black uppercase tracking-[0.4em] mb-4" style={{ color: "#ff6b2b" }}>
            Merch
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-6" style={{ letterSpacing: "-0.02em" }}>
            Wear the Brand
          </h2>
          <p className="text-lg mb-8" style={{ color: "#999" }}>
            Shirts for guys who've put in the work. Dropping soon.
          </p>
          <Link href="/merch"
            className="inline-block px-8 py-4 font-black uppercase tracking-widest text-sm"
            style={{ border: "2px solid #ff6b2b", color: "#ff6b2b" }}>
            See What's Coming →
          </Link>
        </div>
      </section>

      {/* Email CTA */}
      <section className="py-24 px-4 text-center" style={{ backgroundColor: "#242424" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-6" style={{ letterSpacing: "-0.02em" }}>
            Get the <span style={{ color: "#ff6b2b" }}>Protocol</span>
          </h2>
          <p className="text-lg mb-10" style={{ color: "#999" }}>
            The exact system I used — training, nutrition, recovery, and the advanced tools. Free.
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
          Peptide content is for educational purposes only. Research compounds sold separately via{" "}
          <a href="https://biotechparticles.com" target="_blank" rel="noopener noreferrer" style={{ color: "#555" }}>
            BioTech Particles
          </a>
          {" "}for research use only.
        </p>
      </footer>
    </main>
  );
}
