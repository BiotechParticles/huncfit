import Nav from "@/components/Nav";

export default function Peptides() {
  const compounds = [
    {
      name: "BPC-157",
      category: "Recovery",
      color: "#FF6B2B",
      description: "Body Protection Compound. Studied for its role in tissue repair and recovery. A cornerstone of any serious recovery protocol.",
      research: "Extensive preclinical research on tendon, muscle, and joint repair."
    },
    {
      name: "TB-500",
      category: "Recovery",
      color: "#FF6B2B",
      description: "Thymosin Beta-4 fragment. Works synergistically with BPC-157. Together these two changed my recovery timeline completely.",
      research: "Studied for cellular repair, flexibility, and inflammation response."
    },
    {
      name: "SS-31",
      category: "Mitochondrial",
      color: "#00D4C8",
      description: "Elamipretide. Targets mitochondria directly. If you feel perpetually depleted, this is worth understanding.",
      research: "Research focused on mitochondrial function and cellular energy production."
    },
    {
      name: "MOTS-C",
      category: "Mitochondrial",
      color: "#00D4C8",
      description: "Mitochondrial-derived peptide. Called a 'mitochondrial hormone.' Part of what got me off the couch.",
      research: "Studied for metabolic regulation and physical endurance."
    },
    {
      name: "NAD+",
      category: "Mitochondrial",
      color: "#00D4C8",
      description: "Not technically a peptide, but part of the stack. Cellular energy currency. Declines significantly with age.",
      research: "Extensive research on aging, cellular repair, and energy metabolism."
    },
    {
      name: "Glutathione",
      category: "Mitochondrial",
      color: "#00D4C8",
      description: "The master antioxidant. Supports detoxification and immune function. Foundational to everything else working properly.",
      research: "Well-studied antioxidant with broad research across multiple body systems."
    },
    {
      name: "Methylene Blue",
      category: "Mitochondrial",
      color: "#00D4C8",
      description: "One of the oldest compounds in medicine. Powerful mitochondrial electron carrier. Cognitive clarity and energy.",
      research: "Over 150 years of research. Currently studied for neuroprotection and mitochondrial support."
    },
  ];

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#111111' }}>
      <Nav />
      <div className="pt-24 max-w-4xl mx-auto px-4 py-16">
        <p className="text-[#FF6B2B] font-bold tracking-widest uppercase text-sm mb-4">Education</p>
        <h1 className="text-6xl md:text-7xl text-white mb-6 leading-none"
            style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 900, textTransform: 'uppercase' }}>
          Peptides <span style={{ color: '#FF6B2B' }}>101</span>
        </h1>
        <p className="text-gray-400 text-lg mb-4 max-w-2xl leading-relaxed">
          Peptides are short chains of amino acids — the building blocks of proteins. They act as signaling molecules, telling your body to do things it already knows how to do, just better and faster.
        </p>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl leading-relaxed">
          <strong className="text-white">Important:</strong> All information here is for educational purposes only. These compounds are sold for research purposes and are not intended for human consumption. Always consult a physician.
        </p>

        {/* Recovery Stack */}
        <h2 className="text-3xl text-white mb-6"
            style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, textTransform: 'uppercase' }}>
          <span style={{ color: '#FF6B2B' }}>Recovery</span> Stack
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {compounds.filter(c => c.category === "Recovery").map(compound => (
            <div key={compound.name} className="p-6 rounded"
                 style={{ backgroundColor: '#1a1a1a', borderLeft: `3px solid ${compound.color}` }}>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-black text-white"
                    style={{ fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase' }}>
                  {compound.name}
                </h3>
                <span className="text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider"
                      style={{ backgroundColor: compound.color + '20', color: compound.color }}>
                  {compound.category}
                </span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">{compound.description}</p>
              <p className="text-gray-500 text-xs italic">{compound.research}</p>
            </div>
          ))}
        </div>

        {/* Mitochondrial Stack */}
        <h2 className="text-3xl text-white mb-6"
            style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, textTransform: 'uppercase' }}>
          <span style={{ color: '#00D4C8' }}>Mitochondrial</span> Stack
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {compounds.filter(c => c.category === "Mitochondrial").map(compound => (
            <div key={compound.name} className="p-6 rounded"
                 style={{ backgroundColor: '#1a1a1a', borderLeft: `3px solid ${compound.color}` }}>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-black text-white"
                    style={{ fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase' }}>
                  {compound.name}
                </h3>
                <span className="text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider"
                      style={{ backgroundColor: compound.color + '20', color: compound.color }}>
                  {compound.category}
                </span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">{compound.description}</p>
              <p className="text-gray-500 text-xs italic">{compound.research}</p>
            </div>
          ))}
        </div>

        <div className="p-6 rounded text-center" style={{ backgroundColor: '#1a1a1a', border: '1px solid #FF6B2B40' }}>
          <p className="text-gray-400 mb-4">Ready to source research compounds?</p>
          <a href="https://biotechparticles.com"
            target="_blank" rel="noopener noreferrer"
            className="inline-block px-8 py-3 font-bold uppercase tracking-wider rounded transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#FF6B2B', color: '#111111' }}>
            Shop Biotech Particles →
          </a>
          <p className="text-gray-600 text-xs mt-4">Research purposes only. Not for human consumption.</p>
        </div>
      </div>
    </main>
  );
}
