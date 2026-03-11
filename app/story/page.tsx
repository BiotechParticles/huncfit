import Nav from "@/components/Nav";
import Link from "next/link";
import Image from "next/image";

export default function Story() {
  return (
    <main style={{ backgroundColor: "#1a1a1a", color: "#f5f5f5" }}>
      <Nav />

      <section className="pt-40 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-black uppercase tracking-[0.4em] mb-4" style={{ color: "#ff6b2b" }}>
            The Story
          </p>
          <h1 className="text-5xl md:text-7xl font-black uppercase mb-8" style={{ letterSpacing: "-0.02em" }}>
            Started at 49.<br />
            <span style={{ color: "#ff6b2b" }}>Done by 50.</span>
          </h1>

          <div className="prose max-w-none" style={{ color: "#ccc" }}>
            <p className="text-xl leading-relaxed mb-8" style={{ color: "#f5f5f5" }}>
              September 1, 2024. That's when I decided I was done waiting to feel ready.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              I was 49 years old, overweight, tired all the time, and telling myself the same story 
              a lot of guys tell themselves at that age: "It's just how it is now. You're not 25 anymore."
            </p>

            <p className="text-lg leading-relaxed mb-6">
              I stopped believing that story. And over the next 16 months, I lost 155 pounds of fat 
              <em> while simultaneously gaining 20 pounds of muscle</em>. That's called a body recomposition — 
              and most people will tell you it's impossible, especially at 50. I have the DEXA scans 
              and bloodwork to prove otherwise.
            </p>

            {/* Before/After inline */}
            <div className="grid grid-cols-2 gap-4 my-10">
              <div className="relative">
                <div className="absolute top-3 left-3 z-10 px-2 py-1 text-xs font-black uppercase tracking-widest"
                  style={{ backgroundColor: "#1a1a1a", color: "#999" }}>Before</div>
                <Image src="/images/before-hero.jpg" alt="Before" width={500} height={600}
                  className="w-full object-cover" style={{ maxHeight: "400px", objectPosition: "top" }} />
              </div>
              <div className="relative">
                <div className="absolute top-3 left-3 z-10 px-2 py-1 text-xs font-black uppercase tracking-widest"
                  style={{ backgroundColor: "#ff6b2b", color: "#1a1a1a" }}>After</div>
                <Image src="/images/after-1.jpg" alt="After" width={500} height={600}
                  className="w-full object-cover" style={{ maxHeight: "400px", objectPosition: "top" }} />
              </div>
            </div>

            <h2 className="text-3xl font-black uppercase mt-12 mb-6" style={{ color: "#f5f5f5" }}>
              What I Actually Did
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              I'm going to be straight with you: peptides didn't do this. <em>I</em> did this.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              I walked 7–10 miles every single day. I trained 5 days a week. I stopped drinking. 
              I started eating like someone who gave a damn about their body. That's what moved the needle.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              But here's the thing about being nearly 50 — recovery is brutal. You push hard 
              one day and your body sends you a bill for three days. Most guys in my situation 
              would've quit. I almost did.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              That's where peptides changed everything.
            </p>

            <h2 className="text-3xl font-black uppercase mt-12 mb-6" style={{ color: "#f5f5f5" }}>
              The Recovery Stack
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              <strong style={{ color: "#ff6b2b" }}>BPC-157 and TB-500</strong> gave me back my recovery. 
              When I should've been on the bench for a week nursing a shoulder, I was back in two days. 
              I could train again. And again. And again. That consistency is where the results come from.
            </p>

            <h2 className="text-3xl font-black uppercase mt-12 mb-6" style={{ color: "#f5f5f5" }}>
              The Energy Stack
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              The mitochondrial stack — <strong style={{ color: "#00d4c8" }}>SS-31, MOTS-C, NAD+, 
              Glutathione, and Methylene Blue</strong> — addressed something I didn't even know had a name. 
              I was tired all the time. Not "need a nap" tired. 
              "Want to lie in bed all day" tired. Cellular fatigue.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Within a few weeks on this stack, that changed. I had energy to put in the work 
              that I simply didn't have before. Not artificial stimulant energy — real, sustained output.
            </p>

            <h2 className="text-3xl font-black uppercase mt-12 mb-6" style={{ color: "#f5f5f5" }}>
              The Numbers
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              {[
                { num: "155 lbs", label: "Fat Lost" },
                { num: "20 lbs", label: "Muscle Gained" },
                { num: "16 mo", label: "Total Time" },
                { num: "50", label: "Age When Done" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4" style={{ backgroundColor: "#242424" }}>
                  <p className="text-3xl font-black uppercase" style={{ color: "#ff6b2b" }}>{stat.num}</p>
                  <p className="text-xs font-bold uppercase tracking-widest mt-1" style={{ color: "#666" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-lg leading-relaxed mb-6">
              These aren't estimates. I have DEXA scans at multiple points throughout the journey. 
              Body composition, bone density, lean mass — all documented. I'll be sharing those here.
            </p>

            <h2 className="text-3xl font-black uppercase mt-12 mb-6" style={{ color: "#f5f5f5" }}>
              Why Hunc?
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              "Unc" is slang for the older guy. The one who's been around, knows what's up, 
              commands respect. I built this for him — for us.
            </p>

            <p className="text-lg leading-relaxed mb-10">
              If you're sitting at 45, 50, 55 thinking you've missed your window — you haven't. 
              I'm proof. And I'm going to share everything I know.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-12">
            <Link href="/peptides"
              className="px-8 py-4 font-black uppercase tracking-widest text-sm text-center transition-all hover:opacity-90"
              style={{ backgroundColor: "#ff6b2b", color: "#1a1a1a" }}>
              Peptides 101 →
            </Link>
            <a href="https://biotechparticles.com" target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 font-black uppercase tracking-widest text-sm text-center"
              style={{ border: "2px solid #ff6b2b", color: "#ff6b2b" }}>
              Shop the Stack →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
