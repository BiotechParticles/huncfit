import Nav from "@/components/Nav";
import EmailSignup from "@/components/EmailSignup";

const shirts = [
  {
    title: "Built in the 80s",
    desc: "For the guys who grew up with Reagan, cassette tapes, and no idea what a macronutrient was. Still built. Still standing.",
    tag: "Coming Soon",
    color: "#ff6b2b",
  },
  {
    title: "Built in the 70s",
    desc: "Old school doesn't mean outdated. It means proven.",
    tag: "Coming Soon",
    color: "#ff6b2b",
  },
  {
    title: "Built in the 60s",
    desc: "You've been through more than these kids will ever understand. And you look better for it.",
    tag: "Coming Soon",
    color: "#ff6b2b",
  },
  {
    title: "She Thinks I'm Her Personal Trainer",
    desc: "The original. The one that started it all.",
    tag: "Coming Soon",
    color: "#00d4c8",
  },
  {
    title: "Unc Season",
    desc: "No explanation needed.",
    tag: "Coming Soon",
    color: "#00d4c8",
  },
];

export default function Merch() {
  return (
    <main style={{ backgroundColor: "#1a1a1a", color: "#f5f5f5" }}>
      <Nav />

      <section className="pb-16 px-4" style={{ paddingTop: "120px" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-black uppercase tracking-[0.4em] mb-4 text-center" style={{ color: "#ff6b2b" }}>
            Merch
          </p>
          <h1 className="text-5xl md:text-7xl font-black uppercase mb-4 text-center" style={{ letterSpacing: "-0.02em" }}>
            Wear the <span style={{ color: "#ff6b2b" }}>Brand.</span>
          </h1>
          <p className="text-center text-lg mb-12" style={{ color: "#999" }}>
            Dropping soon. Shirts for guys who've put in the work.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {shirts.map((shirt) => (
              <div key={shirt.title} className="p-6" style={{ backgroundColor: "#242424", borderLeft: `3px solid ${shirt.color}` }}>
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-xl font-black uppercase">{shirt.title}</h2>
                  <span className="text-xs font-black uppercase tracking-widest px-2 py-1"
                    style={{ backgroundColor: shirt.color, color: "#1a1a1a" }}>
                    {shirt.tag}
                  </span>
                </div>
                <p style={{ color: "#999" }}>{shirt.desc}</p>
              </div>
            ))}
          </div>

          {/* Notify signup */}
          <div className="p-8 text-center" style={{ backgroundColor: "#242424", borderTop: "3px solid #ff6b2b" }}>
            <h2 className="text-2xl font-black uppercase mb-3">Get Notified When We Drop</h2>
            <p className="mb-6" style={{ color: "#999" }}>First batch will be limited. Get on the list.</p>
            <div className="flex justify-center">
              <EmailSignup />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
