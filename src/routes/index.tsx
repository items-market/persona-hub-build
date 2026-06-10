import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import zaneAvatar from "@/assets/zane.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zane · @0xZane_ — Crypto KOL · Web3 Growth" },
      { name: "description", content: "Crypto KOL helping web3 projects grow through community, threads, raids and real influence on X." },
      { property: "og:title", content: "Zane · @0xZane_ — Crypto KOL" },
      { property: "og:description", content: "Helping web3 projects grow through community & influence." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@0xZane_" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500;600&display=swap" },
    ],
  }),
  component: Index,
});

const PROFILE = {
  name: "ZANE",
  handle: "@0xZane_",
  bio: "tech enthusiast · fulltimeonweb3 · vibe coder",
};

const services = [
  { title: "Thread Campaigns", desc: "Narrative-driven threads that explain your protocol in plain language and convert lurkers into believers.", icon: "✦" },
  { title: "Community Raids", desc: "Coordinated engagement across X and Telegram to push your TGE, mainnet, or milestone to the top of the timeline.", icon: "◇" },
  { title: "Spaces & AMAs", desc: "Hosted Spaces and partner AMAs with founders — turning attention into trust and trust into holders.", icon: "◎" },
  { title: "Launch Support", desc: "End-to-end web3 KOL rounds: positioning, content calendar, and a vetted creator network to amplify day-one.", icon: "▲" },
];

const verticals = [
  { name: "RWA", desc: "Real-world asset vaults & onchain yield." },
  { name: "AI × Crypto", desc: "Agentic protocols and AI co-workers." },
  { name: "Security", desc: "Post-quantum, MPC, infra hardening." },
  { name: "L2 / Infra", desc: "Rollups, bridges, vault infrastructure." },
  { name: "DeFi", desc: "Curated risk-adjusted yield products." },
  { name: "Launches", desc: "TGE, mainnet, campaign go-to-market." },
];

const testimonials = [
  { quote: "Brought us real holders, not bots. The thread alone moved volume.", who: "Web3 Founder" },
  { quote: "Talks to holders, not just charts. Rare.", who: "Growth Lead, RWA" },
  { quote: "Best ROI of our KOL round.", who: "CMO, L2 Protocol" },
];

const links = [
  { label: "X / Twitter", handle: "@0xZane_", href: "https://x.com/0xZane_" },
  { label: "Telegram", handle: "DM for collabs", href: "https://t.me/" },
  { label: "Email", handle: "gm@zane.web3", href: "mailto:gm@zane.web3" },
];

function useScrollReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); io.unobserve(el); } },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const heroReveal = useScrollReveal(0.05);
  const aboutReveal = useScrollReveal();
  const servicesReveal = useScrollReveal();
  const verticalsReveal = useScrollReveal();
  const contactReveal = useScrollReveal();

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMove = (e: React.MouseEvent) => {
    const el = heroRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
    const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
    setTilt({ x, y });
  };

  return (
    <div className="min-h-screen w-full bg-bg text-fg font-sans overflow-x-hidden antialiased">
      {/* ambient gradient orbs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-accent-1/30 blur-[120px]"
          style={{ transform: `translate3d(0, ${scrollY * 0.1}px, 0)` }}
        />
        <div
          className="absolute top-[40%] -right-40 h-[520px] w-[520px] rounded-full bg-accent-2/25 blur-[140px]"
          style={{ transform: `translate3d(0, ${scrollY * -0.08}px, 0)` }}
        />
        <div className="absolute inset-0 grid-bg opacity-[0.18]" />
      </div>

      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-bg/70 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
          <a href="#top" className="flex min-w-0 items-center gap-2.5">
            <span className="relative inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent-1 to-accent-2 text-bg font-bold text-sm shadow-glow">Z</span>
            <span className="font-display font-semibold tracking-tight text-sm sm:text-base truncate">
              Zane <span className="text-fg/40">/ {PROFILE.handle}</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-fg/70">
            <a href="#about" className="hover:text-fg transition-colors">About</a>
            <a href="#services" className="hover:text-fg transition-colors">Services</a>
            <a href="#verticals" className="hover:text-fg transition-colors">Verticals</a>
            <a href="#contact" className="hover:text-fg transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-2 shrink-0">
            <a href="https://x.com/0xZane_" target="_blank" rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-fg text-bg px-4 py-2 text-xs font-semibold hover:bg-accent-1 hover:text-bg transition-colors">
              Follow <span aria-hidden>→</span>
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden h-10 w-10 grid place-items-center rounded-lg border border-white/10 bg-white/5 text-fg"
            >
              <span className="text-lg leading-none">{menuOpen ? "✕" : "≡"}</span>
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="md:hidden border-t border-white/5 bg-bg/95 backdrop-blur-xl px-4 py-3 grid gap-1.5 text-sm animate-fade-in">
            {[
              ["About", "#about"],
              ["Services", "#services"],
              ["Verticals", "#verticals"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-colors">
                {label}
              </a>
            ))}
            <a href="https://x.com/0xZane_" target="_blank" rel="noreferrer"
              className="rounded-lg px-3 py-3 bg-fg text-bg text-center font-semibold">
              Follow @0xZane_ →
            </a>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section id="top" ref={heroRef} onMouseMove={handleMove} onMouseLeave={() => setTilt({ x: 0, y: 0 })} className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-16 sm:pb-24 grid md:grid-cols-[1.15fr_1fr] gap-10 md:gap-14 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-fg/80 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent-2 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-2" />
              </span>
              Online · Open for collabs
            </div>
            <h1 className="font-display font-semibold tracking-tight text-[clamp(2.1rem,7vw,4.25rem)] leading-[1.02]">
              Crypto KOL.<br />
              <span className="bg-gradient-to-r from-accent-1 via-accent-3 to-accent-2 bg-clip-text text-transparent">
                Growing web3
              </span>
              <br />through community.
            </h1>
            <p className="mt-6 max-w-xl text-base sm:text-lg text-fg/70 leading-relaxed">
              I'm <span className="text-fg font-medium">@0xZane_</span> — {PROFILE.bio}.
              I help builders win attention, trust, and real holders through threads, raids, Spaces, and a community that actually shows up.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://x.com/0xZane_" target="_blank" rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-fg text-bg px-5 sm:px-6 py-3 text-sm font-semibold hover:shadow-glow transition-shadow">
                Follow on X
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 sm:px-6 py-3 text-sm font-semibold hover:bg-white/10 transition-colors">
                Work with me
              </a>
            </div>
          </div>

          {/* avatar card with tilt */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div
              className="relative w-[min(82vw,340px)] sm:w-[360px] transition-transform duration-200 ease-out"
              style={{ transform: `perspective(1000px) rotateY(${tilt.x * 6}deg) rotateX(${-tilt.y * 6}deg)` }}
            >
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-accent-1 via-accent-3 to-accent-2 opacity-60 blur-2xl" />
              <div className="relative rounded-3xl border border-white/10 bg-card/80 backdrop-blur-xl p-3 shadow-2xl">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={zaneAvatar.url}
                    alt="Zane @0xZane_ profile"
                    className="w-full h-auto block"
                  />
                <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-bg/80 backdrop-blur px-2.5 py-1 text-[10px] font-mono text-fg/90 border border-white/10">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-2 animate-pulse" />
                  LIVE
                </div>
                <div className="absolute top-3 right-3 rounded-full bg-accent-1 text-bg px-2.5 py-1 text-[10px] font-semibold">
                  ✓ Verified
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between px-1.5">
                <div className="min-w-0">
                  <div className="font-display font-semibold text-sm truncate">{PROFILE.name}</div>
                  <div className="text-xs text-fg/50 truncate">{PROFILE.handle}</div>
                </div>
                <div className="text-right shrink-0">
                  <div className="font-mono text-sm text-accent-1">KOL</div>
                  <div className="text-[10px] uppercase tracking-wider text-fg/40">Web3 Growth</div>
                </div>
              </div>
            </div>
              {/* floating chips */}
              <div className="absolute -top-3 -right-3 rounded-full bg-card border border-white/10 px-3 py-1.5 text-[11px] font-mono text-accent-3 shadow-lg animate-float">
                #web3
              </div>
              <div className="absolute -bottom-3 -left-3 rounded-full bg-card border border-white/10 px-3 py-1.5 text-[11px] font-mono text-accent-2 shadow-lg animate-float" style={{ animationDelay: "1s" }}>
                +RWA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid md:grid-cols-[1fr_1.6fr] gap-10 md:gap-16">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-accent-1">// About</div>
            <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl leading-tight">
              Who is<br />Zane?
            </h2>
          </div>
          <div className="space-y-5 text-base sm:text-lg text-fg/75 leading-relaxed">
            <p>
              I'm <span className="text-fg font-medium">@0xZane_</span> — a crypto KOL on X covering
              web3, RWAs, AI × crypto, security and yield.
            </p>
            <p>
              I work with founders to shape narrative, drive attention, and bring{" "}
              <span className="text-accent-1 font-medium">real holders</span> instead of bots.
              Every campaign starts with the product — never the hype.
            </p>
            <p className="text-sm font-mono text-fg/50">
              "tech enthusiast · fulltimeonweb3 · vibe coder"
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-accent-1">// Services</div>
              <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl leading-tight">How I help you grow</h2>
            </div>
            <p className="text-sm sm:text-base text-fg/60 max-w-sm">
              Pick one or bundle them for a full launch. Every engagement is custom-scoped.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            {services.map((s, i) => (
              <article
                key={s.title}
                className="group relative rounded-2xl border border-white/10 bg-card/60 backdrop-blur-sm p-6 sm:p-7 overflow-hidden hover:border-accent-1/40 hover:-translate-y-1 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent-1/10 via-transparent to-accent-2/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent-1/20 to-accent-2/20 border border-white/10 text-accent-1 text-lg">
                      {s.icon}
                    </span>
                    <span className="font-mono text-xs text-fg/30">0{i + 1}</span>
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-2">{s.title}</h3>
                  <p className="text-fg/70 text-sm sm:text-base leading-relaxed">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VERTICALS */}
      <section id="verticals" className="relative border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="text-center mb-10 sm:mb-14">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-accent-1">// Coverage</div>
            <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl">Verticals I cover</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {verticals.map((v) => (
              <div key={v.name} className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] hover:border-accent-1/30 transition-colors">
                <div className="font-display font-semibold text-lg text-fg">{v.name}</div>
                <p className="mt-1.5 text-sm text-fg/60 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-3 sm:gap-4">
            {testimonials.map((t) => (
              <figure key={t.who} className="rounded-2xl border border-white/10 bg-card/60 backdrop-blur-sm p-6">
                <div className="text-accent-1 text-2xl leading-none">"</div>
                <blockquote className="mt-2 text-fg/80 text-sm sm:text-base leading-relaxed">{t.quote}</blockquote>
                <figcaption className="mt-4 text-xs font-mono uppercase tracking-wider text-fg/50">— {t.who}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="relative rounded-3xl border border-white/10 bg-card/60 backdrop-blur-xl p-8 sm:p-14 overflow-hidden">
            <div className="absolute inset-0 -z-0 opacity-60">
              <div className="absolute -top-20 left-1/4 h-64 w-64 rounded-full bg-accent-1/30 blur-3xl" />
              <div className="absolute -bottom-20 right-1/4 h-64 w-64 rounded-full bg-accent-2/30 blur-3xl" />
            </div>
            <div className="relative text-center max-w-2xl mx-auto">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-accent-1">// Let's talk</div>
              <h2 className="mt-3 font-display font-semibold text-3xl sm:text-5xl leading-tight">
                Ready to grow?
              </h2>
              <p className="mt-4 text-base sm:text-lg text-fg/70">
                Launching, scaling, or repositioning a web3 project? Slide into the DMs.
              </p>
            </div>
            <div className="relative mt-10 grid sm:grid-cols-3 gap-3 sm:gap-4">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-bg/40 hover:bg-bg/70 hover:border-accent-1/40 p-5 transition-all"
                >
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-fg/50">{l.label}</div>
                    <div className="mt-1 font-display font-semibold text-base truncate">{l.handle}</div>
                  </div>
                  <span className="shrink-0 grid place-items-center h-9 w-9 rounded-full bg-white/5 border border-white/10 text-fg/70 group-hover:bg-accent-1 group-hover:text-bg group-hover:translate-x-0.5 transition-all">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-fg/50">
          <span>© 2026 Zane · {PROFILE.handle}</span>
          <span className="flex items-center gap-2 font-mono">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-2 animate-pulse" />
            Community · Influence · Trust
          </span>
        </div>
      </footer>
    </div>
  );
}
