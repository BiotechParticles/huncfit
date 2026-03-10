"use client";
import { useState } from "react";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to Mailchimp/Resend
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-4">
        <p className="text-xl font-black uppercase tracking-widest" style={{ color: "#00d4c8" }}>
          ✓ You're in. Check your inbox.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-lg">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className="flex-1 px-4 py-3 text-sm font-bold uppercase tracking-wider outline-none"
        style={{
          backgroundColor: "#2e2e2e",
          color: "#f5f5f5",
          border: "1px solid #444",
        }}
      />
      <button
        type="submit"
        className="px-6 py-3 font-black uppercase tracking-widest text-sm transition-all hover:opacity-90"
        style={{ backgroundColor: "#ff6b2b", color: "#1a1a1a", whiteSpace: "nowrap" }}
      >
        Get The Protocol →
      </button>
    </form>
  );
}
