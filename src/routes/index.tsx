import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import zaneAvatar from "@/assets/zane.jpg.asset.json";
import pixelAvatar from "@/assets/avatar.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zane · @0xZane_ — Crypto KOL · Web3 Growth" },
      { name: "description", content: "tech enthusiast | fulltimeonweb3 | vibe coder. I help web3 projects grow through community, threads, and real influence on X." },
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
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap" },
    ],
  }),
  component: Index,
});

const PROFILE = {
  name: "ZANE",
  handle: "@0xZane_",
  bio: "tech enthusiast · fulltimeonweb3 · vibe coder",
  followers: "14.6K",
  verified: true,
};


const stats = [
  { k: "FOLLOWERS", v: "14.6K" },
  { k: "VERIFIED", v: "✓" },
  { k: "PROJECTS", v: "20+" },
  { k: "FOCUS", v: "WEB3" },
];

const services = [
  { title: "THREAD CAMPAIGNS", desc: "Narrative-driven threads that explain your protocol in plain language and convert lurkers into believers.", color: "bg-coin" },
  { title: "COMMUNITY RAIDS", desc: "Coordinated engagement across X and Telegram to push your TGE, mainnet, or milestone to the top of the timeline.", color: "bg-mint" },
  { title: "SPACES & AMAs", desc: "Hosted Spaces and partner AMAs with founders — turning attention into trust and trust into holders.", color: "bg-hot text-primary-foreground" },
  { title: "LAUNCH SUPPORT", desc: "End-to-end web3 KOL rounds: positioning, content calendar, and a vetted creator network to amplify day-one.", color: "bg-card" },
];

const covered = [
  { name: "FLINT RWA", tag: "Real estate vaults · ~10% APR" },
  { name: "LAGOON FINANCE", tag: "ERC-7540 vault infra" },
  { name: "QUIP NETWORK", tag: "Post-quantum security · WOTS+/SPHINCS+" },
  { name: "ALTURA × JUMPER", tag: "AVLT · F1 Silverstone campaign" },
  { name: "WORKCLAW", tag: "AI co-workers for companies" },
  { name: "9SUMMITS", tag: "Curated risk-adjusted vaults" },
];


const testimonials = [
  { quote: "Brought us real holders, not bots. The thread alone moved volume.", who: "WEB3 FOUNDER" },
  { quote: "Talks to holders, not just charts. Rare.", who: "GROWTH LEAD, RWA" },
  { quote: "Best ROI of our KOL round.", who: "CMO, L2 PROTOCOL" },
];

const links = [
  { label: "X / TWITTER", handle: "@0xZane_", href: "https://x.com/0xZane_", color: "bg-foreground text-background" },
  { label: "TELEGRAM", handle: "DM FOR COLLABS", href: "https://t.me/", color: "bg-sky" },
  { label: "EMAIL", handle: "GM@ZANE.WEB3", href: "mailto:gm@zane.web3", color: "bg-mint" },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen w-full bg-sky overflow-x-hidden">


      {/* NAV */}
      <header className="border-b-4 border-foreground bg-coin sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 py-3 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 sm:flex sm:justify-between">
          <a href="#top" className="flex min-w-0 items-center gap-2 sm:gap-3">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-hot pixel-border-sm shrink-0" />
            <span className="pixel text-[11px] sm:text-sm truncate">ZANE · @0xZane_</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 pixel text-[10px]">
            <a href="#about" className="hover:text-hot transition-colors">ABOUT</a>
            <a href="#services" className="hover:text-hot transition-colors">SERVICES</a>
            
            <a href="#projects" className="hover:text-hot transition-colors">PROJECTS</a>
            <a href="#contact" className="hover:text-hot transition-colors">CONTACT</a>
          </nav>
          <div className="flex items-center gap-2 shrink-0">
            <a href="https://x.com/0xZane_" target="_blank" rel="noreferrer" className="hidden sm:inline-block pixel text-[10px] bg-foreground text-background px-3 py-2 pixel-border-sm hover:-translate-y-0.5 transition-transform">FOLLOW →</a>
            <button
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden w-9 h-9 bg-foreground text-background pixel-border-sm flex items-center justify-center"
            >
              <span className="pixel text-sm">{menuOpen ? "✕" : "≡"}</span>
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="md:hidden border-t-4 border-foreground bg-coin px-4 py-3 grid gap-2 pixel text-[11px]">
            {[
              ["ABOUT", "#about"],
              ["SERVICES", "#services"],
              
              ["PROJECTS", "#projects"],
              ["CONTACT", "#contact"],
            ].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="bg-card pixel-border-sm px-3 py-3">
                {label}
              </a>
            ))}
            <a href="https://x.com/0xZane_" target="_blank" rel="noreferrer" className="bg-foreground text-background pixel-border-sm px-3 py-3 text-center">
              FOLLOW @0xZane_ →
            </a>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 clouds opacity-70 pointer-events-none" style={{ transform: `translateY(${scrollY * 0.15}px)` }} />
        <div className="max-w-6xl mx-auto px-4 py-10 sm:py-14 md:py-20 grid md:grid-cols-2 gap-8 md:gap-10 items-center relative">
          <div className="order-2 md:order-1">
            <div className="inline-block bg-foreground text-background pixel text-[9px] sm:text-[10px] px-3 py-2 mb-5 anim-blink">
              ◆ ONLINE · OPEN FOR COLLABS
            </div>
            <h1 className="pixel text-[22px] leading-[1.35] sm:text-3xl md:text-5xl md:leading-[1.3] mb-5 sm:mb-6 break-words">
              CRYPTO KOL.<br />
              <span className="text-hot">I GROW WEB3</span><br />
              PROJECTS.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-md leading-snug">
              {PROFILE.bio}. I help builders win attention, trust, and real holders — through threads, raids, Spaces, and a community that actually shows up.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://x.com/0xZane_" target="_blank" rel="noreferrer" className="pixel text-[11px] sm:text-xs bg-hot text-primary-foreground px-4 sm:px-5 py-3 sm:py-4 pixel-border hover:-translate-y-0.5 active:translate-y-0 transition-transform">▶ FOLLOW ME</a>
              <a href="#contact" className="pixel text-[11px] sm:text-xs bg-card px-4 sm:px-5 py-3 sm:py-4 pixel-border hover:-translate-y-0.5 active:translate-y-0 transition-transform">WORK WITH ME</a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mt-8 sm:mt-10">
              {stats.map((s) => (
                <div key={s.k} className="bg-card pixel-border-sm p-3 text-center">
                  <div className="pixel text-sm md:text-base text-hot">{s.v}</div>
                  <div className="pixel text-[8px] mt-1 text-muted-foreground truncate">{s.k}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center order-1 md:order-2">
            <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-12 h-12 sm:w-14 sm:h-14 bg-coin rounded-full pixel-border-sm flex items-center justify-center anim-float pixel text-sm sm:text-base">★</div>
            <div className="absolute top-8 -right-1 sm:-right-2 w-10 h-10 sm:w-12 sm:h-12 bg-mint rounded-full pixel-border-sm flex items-center justify-center anim-float pixel text-xs sm:text-sm" style={{ animationDelay: "0.6s" }}>Ξ</div>
            <div className="absolute bottom-6 -left-4 sm:-left-6 w-9 h-9 sm:w-10 sm:h-10 bg-hot rounded-full pixel-border-sm flex items-center justify-center anim-float text-primary-foreground pixel text-[10px] sm:text-xs" style={{ animationDelay: "1.2s" }}>₿</div>
            <div className="absolute -bottom-2 right-2 sm:right-4 w-11 h-11 sm:w-12 sm:h-12 bg-accent rounded-full pixel-border-sm flex items-center justify-center anim-float pixel text-xs" style={{ animationDelay: "1.8s" }}>◎</div>

            <div className="bg-card pixel-border p-3 sm:p-4 w-[260px] sm:w-[300px] md:w-[340px]">
              <div className="flex justify-between items-center mb-3 pixel text-[9px] sm:text-[10px]">
                <span className="truncate">ZANE.PNG</span>
                <span className="flex gap-1 shrink-0">
                  <span className="w-3 h-3 bg-mint" />
                  <span className="w-3 h-3 bg-coin" />
                  <span className="w-3 h-3 bg-hot" />
                </span>
              </div>
              <div className="bg-sky pixel-border-sm overflow-hidden relative">
                <img
                  src={zaneAvatar.url}
                  alt="Zane @0xZane_ profile"
                  className="w-full h-auto block"
                  style={{ imageRendering: "pixelated" }}
                />
                <div className="absolute top-2 right-2 bg-foreground text-background pixel text-[8px] px-2 py-1">✓ VERIFIED</div>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 pixel text-[8px]">
                <div className="bg-mint p-2 text-center pixel-border-sm">REACH</div>
                <div className="bg-coin p-2 text-center pixel-border-sm">TRUST</div>
                <div className="bg-hot text-primary-foreground p-2 text-center pixel-border-sm">SIGNAL</div>
              </div>
              <div className="mt-3 pixel text-[9px] flex items-center justify-between">
                <span className="truncate">{PROFILE.handle}</span>
                <span className="bg-foreground text-background px-2 py-1">{PROFILE.followers}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-y-4 border-foreground bg-card">
        <div className="max-w-6xl mx-auto px-4 py-12 sm:py-14 grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="md:col-span-1">
            <div className="pixel text-[10px] bg-foreground text-background inline-block px-3 py-2">// ABOUT</div>
            <h2 className="pixel text-lg sm:text-xl md:text-2xl mt-4 leading-snug">WHO IS<br/>ZANE?</h2>
          </div>
          <div className="md:col-span-2 space-y-4 text-lg sm:text-xl">
            <p>
              I'm <strong className="bg-coin px-1">@0xZane_</strong> — a
              <strong className="bg-mint px-1"> crypto KOL on X</strong> covering web3,
              RWAs, AI×crypto, security, and yield.
            </p>
            <p>
              I work with founders to shape narrative, drive attention, and bring
              <strong className="bg-hot text-primary-foreground px-1"> real holders</strong>
              instead of bots. Every campaign starts with the product — never the hype.
            </p>
            <p className="pixel text-[11px] sm:text-xs leading-relaxed text-hot">
              "TECH ENTHUSIAST · FULLTIMEONWEB3 · VIBE CODER"
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-sky">
        <div className="max-w-6xl mx-auto px-4 py-12 sm:py-14">
          <div className="flex items-end justify-between mb-6 sm:mb-8 flex-wrap gap-4">
            <div>
              <div className="pixel text-[10px] bg-foreground text-background inline-block px-3 py-2">// SERVICES</div>
              <h2 className="pixel text-lg sm:text-xl md:text-2xl mt-4">HOW I HELP YOU GROW</h2>
            </div>
            <p className="text-base sm:text-lg max-w-sm">Pick a quest. Bundles available for serious launches.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {services.map((s) => (
              <div key={s.title} className={`${s.color} pixel-border p-5 sm:p-6 hover:-translate-y-1 active:translate-y-0 transition-transform`}>
                <div className="pixel text-[12px] sm:text-sm md:text-base mb-3">{s.title}</div>
                <p className="text-base sm:text-lg leading-snug">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* PROJECTS COVERED */}
      <section id="projects" className="border-y-4 border-foreground bg-sky">
        <div className="max-w-6xl mx-auto px-4 py-12 sm:py-14">
          <div className="text-center mb-8 sm:mb-10">
            <div className="pixel text-[10px] bg-foreground text-background inline-block px-3 py-2">// COVERED RECENTLY</div>
            <h2 className="pixel text-lg sm:text-xl md:text-3xl mt-4">PROJECTS I'VE AMPLIFIED</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {covered.map((p, i) => (
              <div key={p.name} className={`pixel-border p-4 sm:p-5 hover:-translate-y-1 transition-transform ${i % 3 === 0 ? "bg-coin" : i % 3 === 1 ? "bg-mint" : "bg-card"}`}>
                <div className="pixel text-[11px] sm:text-xs mb-2 break-words">{p.name}</div>
                <p className="text-base sm:text-lg leading-snug">{p.tag}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-3 sm:gap-4 mt-10">
            {testimonials.map((t) => (
              <div key={t.who} className="bg-card pixel-border-sm p-4 sm:p-5">
                <p className="text-base sm:text-lg leading-snug">"{t.quote}"</p>
                <div className="pixel text-[9px] sm:text-[10px] mt-4 text-hot">— {t.who}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t-4 border-foreground bg-mint">
        <div className="max-w-6xl mx-auto px-4 py-12 sm:py-14">
          <div className="text-center mb-8 sm:mb-10">
            <div className="pixel text-[10px] bg-foreground text-background inline-block px-3 py-2">// LET'S TALK</div>
            <h2 className="pixel text-xl sm:text-2xl md:text-3xl mt-4">READY TO GROW?</h2>
            <p className="text-base sm:text-xl mt-4 max-w-xl mx-auto leading-snug">
              Launching, scaling, or repositioning a web3 project? Slide into the DMs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className={`${l.color} pixel-border p-4 sm:p-5 flex items-center justify-between gap-3 hover:-translate-y-1 active:translate-y-0 transition-transform`}
              >
                <div className="min-w-0">
                  <div className="pixel text-[11px] sm:text-xs">{l.label}</div>
                  <div className="text-base sm:text-lg mt-1 truncate">{l.handle}</div>
                </div>
                <span className="pixel text-base shrink-0">→</span>
              </a>
            ))}
          </div>

          {/* easter egg pixel avatar */}
          <div className="mt-12 flex justify-center">
            <div className="bg-card pixel-border-sm p-2 inline-flex flex-col items-center">
              <img src={pixelAvatar.url} alt="" className="w-20 h-20" style={{ imageRendering: "pixelated" }} />
              <span className="pixel text-[8px] mt-2">PIXEL_MODE.ON</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t-4 border-foreground bg-coin">
        <div className="max-w-6xl mx-auto px-4 py-5 sm:py-6 flex flex-wrap items-center justify-between gap-3">
          <span className="pixel text-[9px] sm:text-[10px]">© 2026 ZANE · @0xZane_ · GM ☀️</span>
          <span className="pixel text-[9px] sm:text-[10px] flex items-center gap-2">
            <span className="w-2 h-2 bg-hot anim-blink shrink-0" /> COMMUNITY · INFLUENCE · TRUST
          </span>
        </div>
      </footer>
    </div>
  );
}
