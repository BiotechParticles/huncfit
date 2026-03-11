import Nav from "@/components/Nav";
import EmailSignup from "@/components/EmailSignup";

export default function Coaching() {
  return (
    <main style={{ backgroundColor: "#1a1a1a", color: "#f5f5f5" }}>
      <Nav />

      <section className="pb-16 px-4" style={{ paddingTop: "120px" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-black uppercase tracking-[0.4em] mb-4" style={{ color: "#ff6b2b" }}>
            Online Coaching
          </p>
          <h1 className="text-5xl md:text-7xl font-black uppercase mb-6" style={{ letterSpacing: "-0.02em" }}>
            I'll Show You <span style={{ color: "#ff6b2b" }}>How.</span>
          </h1>

          <p className="text-xl leading-relaxed mb-6" style={{ color: "#f5f5f5" }}>
            I lost 155 lbs of fat and gained 20 lbs of muscle at 50 years old. No surgery. 
            No magic. Just the right system, applied consistently.
          </p>

          <p className="text-lg leading-relaxed mb-10" style={{ color: "#ccc" }}>
            I'm building a limited coaching program for serious men who are ready to make 
            the same kind of transformation. Not a generic plan. Not an app. 
            A real program built around your life, your body, and your goals.
          </p>

          {/* What's included */}
          <div className="mb-12">
            <h2 className="text-2xl font-black uppercase mb-6" style={{ color: "#f5f5f5" }}>
              What Coaching Includes
            </h2>
            <div className="flex flex-col gap-4">
              {[
                { icon: "🏋️", title: "Custom Training Program", desc: "Built for your schedule, equipment, and current fitness level. Progressive and sustainable." },
                { icon: "🥩", title: "Nutrition Framework", desc: "Not a diet. A framework you can actually live with. Based on what worked for me at 50." },
                { icon: "😴", title: "Recovery & Sleep Optimization", desc: "The stuff nobody talks about. Sleep, stress, and recovery are where transformations are made or broken." },
                { icon: "💊", title: "Supplement & Peptide Guidance", desc: "What I actually used, when, and why. The advanced tools — when you're ready for them." },
                { icon: "📱", title: "Direct Access", desc: "Weekly check-ins. Real feedback. Not a bot, not a template — me." },
              ].map(item => (
                <div key={item.title} className="flex gap-4 p-5" style={{ backgroundColor: "#242424" }}>
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-black uppercase mb-1">{item.title}</p>
                    <p style={{ color: "#999" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Waitlist */}
          <div className="p-8 text-center" style={{ backgroundColor: "#242424", borderTop: "3px solid #ff6b2b" }}>
            <p className="text-xs font-black uppercase tracking-[0.4em] mb-3" style={{ color: "#ff6b2b" }}>
              Limited Spots
            </p>
            <h2 className="text-3xl font-black uppercase mb-4">Join the Waitlist</h2>
            <p className="mb-6" style={{ color: "#999" }}>
              Coaching isn't open yet. Drop your email and you'll be first to know — 
              and first in line when spots open.
            </p>
            <div className="flex justify-center">
              <EmailSignup />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
