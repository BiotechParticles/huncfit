import Nav from "@/components/Nav";

export default function Peptides() {
  const compounds = [
    {
      name: "BPC-157",
      category: "Recovery",
      color: "#ff6b2b",
      tagline: "The one that keeps you in the game.",
      description: "Body Protection Compound-157 is one of the most researched peptides for tissue repair and recovery. Studies have examined its role in healing tendons, ligaments, muscles, and even gut tissue.",
      researchNotes: "Research suggests potential benefits for musculoskeletal repair, gut healing, and reducing inflammation. Used extensively in sports recovery research.",
    },
    {
      name: "TB-500",
      category: "Recovery",
      color: "#ff6b2b",
      tagline: "Soft tissue repair, accelerated.",
      description: "Thymosin Beta-4 is a naturally occurring peptide found in all human and animal cells. Research has focused on its role in wound healing, muscle recovery, and reducing inflammation in soft tissue.",
      researchNotes: "Studies suggest TB-500 may promote the growth of new blood vessels and muscle tissue while reducing inflammation. Often studied alongside BPC-157.",
    },
    {
      name: "SS-31",
      category: "Mitochondrial",
      color: "#00d4c8",
      tagline: "Fix your energy at the source.",
      description: "SS-31 (Elamipretide) is a mitochondria-targeted peptide that has been studied for its ability to protect and restore mitochondrial function — the cellular engines that produce your energy.",
      researchNotes: "Research has explored SS-31 for age-related mitochondrial decline, cardiac function, and fatigue. One of the most promising compounds in longevity research.",
    },
    {
      name: "MOTS-C",
      category: "Mitochondrial",
      color: "#00d4c8",
      tagline: "Metabolic performance at the cellular level.",
      description: "MOTS-C is a mitochondria-derived peptide that plays a role in regulating metabolism, insulin sensitivity, and cellular stress responses. Research has shown interesting effects on exercise performance and metabolic health.",
      researchNotes: "Studies indicate MOTS-C may influence fat metabolism, glucose regulation, and physical performance. Considered a key longevity-related compound.",
    },
    {
      name: "NAD+",
      category: "Longevity",
      color: "#9b59b6",
      tagline: "The coenzyme your cells can't do without.",
      description: "NAD+ (Nicotinamide Adenine Dinucleotide) is a coenzyme found in every cell in your body. It declines significantly with age. Supplementation via precursors has become one of the most studied interventions in longevity research.",
      researchNotes: "Research suggests NAD+ restoration may support DNA repair, mitochondrial function, and healthy aging. Declines ~50% between ages 40 and 60.",
    },
    {
      name: "Glutathione",
      category: "Longevity",
      color: "#9b59b6",
      tagline: "Your body's master antioxidant.",
      description: "Glutathione is the body's most powerful antioxidant, produced naturally but declining significantly with age, stress, and illness. It plays a central role in detoxification, immune function, and cellular protection.",
      researchNotes: "Studies have examined glutathione's role in reducing oxidative stress, supporting immune function, and protecting against cellular damage. Also declines with age.",
    },
  ];

  return (
    <main style={{ backgroundColor: "#1a1a1a", color: "#f5f5f5" }}>
      <Nav />

      <section className="pt-32 pb-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-black uppercase tracking-[0.4em] mb-4" style={{ color: "#ff6b2b" }}>
            Education
          </p>
          <h1 className="text-5xl md:text-7xl font-black uppercase mb-6" style={{ letterSpacing: "-0.02em" }}>
            Peptides 101
          </h1>
          <p className="text-xl mb-6" style={{ color: "#999" }}>
            What they are, what the research says, and what I actually used.
          </p>
          <div className="p-4 text-sm" style={{ backgroundColor: "#2e2e2e", color: "#999", border: "1px solid #3e3e3e" }}>
            <strong style={{ color: "#ff6b2b" }}>Research Disclaimer:</strong> All content on this page is for educational and informational purposes only. 
            Peptides are discussed in the context of scientific research. They are not approved for human use by the FDA 
            and are sold for research purposes only. Nothing here is medical advice.
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Category: Recovery */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1" style={{ backgroundColor: "#ff6b2b" }}></div>
              <h2 className="text-sm font-black uppercase tracking-[0.3em]" style={{ color: "#ff6b2b" }}>
                Recovery Stack
              </h2>
              <div className="h-px flex-1" style={{ backgroundColor: "#ff6b2b" }}></div>
            </div>

            <div className="flex flex-col gap-6">
              {compounds.filter(c => c.category === "Recovery").map(compound => (
                <div key={compound.name} className="p-6" style={{ backgroundColor: "#242424", borderLeft: `4px solid ${compound.color}` }}>
                  <h3 className="text-3xl font-black uppercase mb-1">{compound.name}</h3>
                  <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: compound.color }}>
                    {compound.tagline}
                  </p>
                  <p className="text-base leading-relaxed mb-4" style={{ color: "#ccc" }}>{compound.description}</p>
                  <p className="text-sm" style={{ color: "#777" }}>
                    <strong style={{ color: "#999" }}>Research notes:</strong> {compound.researchNotes}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Category: Mitochondrial */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1" style={{ backgroundColor: "#00d4c8" }}></div>
              <h2 className="text-sm font-black uppercase tracking-[0.3em]" style={{ color: "#00d4c8" }}>
                Mitochondrial Stack
              </h2>
              <div className="h-px flex-1" style={{ backgroundColor: "#00d4c8" }}></div>
            </div>

            <div className="flex flex-col gap-6">
              {compounds.filter(c => c.category === "Mitochondrial").map(compound => (
                <div key={compound.name} className="p-6" style={{ backgroundColor: "#242424", borderLeft: `4px solid ${compound.color}` }}>
                  <h3 className="text-3xl font-black uppercase mb-1">{compound.name}</h3>
                  <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: compound.color }}>
                    {compound.tagline}
                  </p>
                  <p className="text-base leading-relaxed mb-4" style={{ color: "#ccc" }}>{compound.description}</p>
                  <p className="text-sm" style={{ color: "#777" }}>
                    <strong style={{ color: "#999" }}>Research notes:</strong> {compound.researchNotes}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Category: Longevity */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1" style={{ backgroundColor: "#9b59b6" }}></div>
              <h2 className="text-sm font-black uppercase tracking-[0.3em]" style={{ color: "#9b59b6" }}>
                Longevity Stack
              </h2>
              <div className="h-px flex-1" style={{ backgroundColor: "#9b59b6" }}></div>
            </div>

            <div className="flex flex-col gap-6">
              {compounds.filter(c => c.category === "Longevity").map(compound => (
                <div key={compound.name} className="p-6" style={{ backgroundColor: "#242424", borderLeft: `4px solid ${compound.color}` }}>
                  <h3 className="text-3xl font-black uppercase mb-1">{compound.name}</h3>
                  <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: compound.color }}>
                    {compound.tagline}
                  </p>
                  <p className="text-base leading-relaxed mb-4" style={{ color: "#ccc" }}>{compound.description}</p>
                  <p className="text-sm" style={{ color: "#777" }}>
                    <strong style={{ color: "#999" }}>Research notes:</strong> {compound.researchNotes}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center py-12" style={{ backgroundColor: "#242424" }}>
            <p className="text-sm uppercase tracking-widest mb-4" style={{ color: "#999" }}>
              Ready to source these compounds?
            </p>
            <a href="https://biotechparticles.com" target="_blank" rel="noopener noreferrer"
              className="inline-block px-8 py-4 font-black uppercase tracking-widest text-sm transition-all hover:opacity-90"
              style={{ backgroundColor: "#ff6b2b", color: "#1a1a1a" }}>
              Shop BioTech Particles →
            </a>
            <p className="text-xs mt-4" style={{ color: "#555" }}>
              For research use only.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
