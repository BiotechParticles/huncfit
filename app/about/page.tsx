import Nav from "@/components/Nav";
import EmailSignup from "@/components/EmailSignup";

export default function About() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#111111' }}>
      <Nav />
      <div className="pt-24 max-w-3xl mx-auto px-4 py-16">
        <p className="text-[#FF6B2B] font-bold tracking-widest uppercase text-sm mb-4">The Man Behind Hunc</p>
        <h1 className="text-6xl md:text-7xl text-white mb-8 leading-none"
            style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 900, textTransform: 'uppercase' }}>
          Tobin <span style={{ color: '#FF6B2B' }}>Titus</span>
        </h1>

        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            I&apos;m a 50-year-old from Llano, Texas. I own 40 acres of land I&apos;m building a home on. I have a day job I&apos;m working my way out of. I started this transformation at 49 because I was tired of feeling like I was losing.
          </p>
          <p>
            I&apos;m not a doctor. I&apos;m not a certified trainer. I&apos;m a guy who lost 155 pounds of fat and gained 20 pounds of muscle in 16 months, documented every step with DEXA scans and bloodwork, and figured out what actually works for older men who want to get serious.
          </p>
          <p>
            Hunc Fit exists because I had nowhere to go when I was starting out. No community of older guys talking honestly about peptides, recovery, and what a real transformation looks like past 40. I&apos;m building that.
          </p>
          <p>
            Hunc is a play on &quot;unc&quot; — slang for the older guys in the room. We&apos;re not trying to be 22. We&apos;re trying to be the most impressive version of ourselves at whatever age we are. That&apos;s the whole thing.
          </p>
        </div>

        <div className="mt-12 p-6 rounded" style={{ backgroundColor: '#1a1a1a', borderLeft: '3px solid #FF6B2B' }}>
          <p className="text-[#FF6B2B] font-bold uppercase tracking-wider text-sm mb-2">Get The Hunc Protocol</p>
          <p className="text-gray-400 mb-6">The exact compounds, doses, and timeline from my 16-month transformation. Free.</p>
          <EmailSignup />
        </div>

        <div className="mt-12">
          <p className="text-gray-500 text-sm">
            Questions? Reach out: <a href="mailto:tobin@huncfit.com" className="text-[#FF6B2B] hover:underline">tobin@huncfit.com</a>
          </p>
        </div>
      </div>
    </main>
  );
}
