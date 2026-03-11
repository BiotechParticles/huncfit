import Nav from "@/components/Nav";
import EmailSignup from "@/components/EmailSignup";

export default function About() {
  return (
    <main style={{ backgroundColor: "#1a1a1a", color: "#f5f5f5" }}>
      <Nav />

      <section className="pb-24 px-4" style={{ paddingTop: "120px" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-black uppercase tracking-[0.4em] mb-4" style={{ color: "#ff6b2b" }}>
            About
          </p>
          <h1 className="text-5xl md:text-7xl font-black uppercase mb-10" style={{ letterSpacing: "-0.02em" }}>
            Tobin <span style={{ color: "#ff6b2b" }}>Titus</span>
          </h1>

          <div style={{ color: "#ccc" }}>
            <p className="text-xl leading-relaxed mb-6">
              I'm a 50-year-old guy from Llano, Texas who decided to stop accepting what I thought 
              was inevitable.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Over 16 months — from September 2024 to early 2026 — I transformed my body in a way 
              I didn't think was possible at my age. 155 pounds of fat gone. 20 pounds of muscle built. 
              DEXA scans and bloodwork documenting every step.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              I built Hunc Fit to share what I learned — honestly, without hype, without selling 
              you a miracle. The work is yours to do. I just want to give you the tools I wished 
              I'd known about sooner.
            </p>

            <p className="text-lg leading-relaxed mb-12">
              The peptides I used are available through <a href="https://biotechparticles.com" 
              target="_blank" rel="noopener noreferrer" style={{ color: "#ff6b2b" }}>BioTech Particles</a> — 
              research-grade compounds, sourced and sold for research use only.
            </p>

            <div className="p-6 mb-12" style={{ backgroundColor: "#242424", borderLeft: "4px solid #ff6b2b" }}>
              <p className="font-black uppercase tracking-wide mb-2" style={{ color: "#f5f5f5" }}>
                Interested in coaching?
              </p>
              <p style={{ color: "#999" }}>
                I'm exploring a limited coaching program for serious guys who want to go through 
                a similar transformation. Drop your email below and I'll reach out when it's ready.
              </p>
            </div>

            <div className="flex flex-col items-start gap-4">
              <p className="text-sm font-bold uppercase tracking-widest" style={{ color: "#999" }}>
                Get on the list
              </p>
              <EmailSignup />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
