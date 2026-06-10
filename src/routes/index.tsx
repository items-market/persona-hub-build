import { createFileRoute } from "@tanstack/react-router";
import avatarAsset from "@/assets/avatar.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "STRAWHAT — Crypto KOL · Community & Influence" },
      { name: "description", content: "Crypto KOL helping projects grow through community and influence. Threads, raids, AMAs, and launch support on X." },
      { property: "og:title", content: "STRAWHAT — Crypto KOL · Community & Influence" },
      { property: "og:description", content: "Crypto KOL helping projects grow through community and influence." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap" },
    ],
  }),
  component: Index,
});

const ticker = [
  "★ NOW BOOKING Q3 CAMPAIGNS",
  "GM ☀️",
  "WAGMI",
  "COMMUNITY > HYPE",
  "REAL REACH · REAL HOLDERS",
  "DM OPEN FOR COLLABS",
  "★ FEATURED ON 12+ LAUNCHES",
];

const stats = [
  { k: "FOLLOWERS", v: "128K" },
  { k: "PROJECTS", v: "40+" },
  { k: "IMPRESSIONS / MO", v: "8.4M" },
  { k: "AVG ENGAGEMENT", v: "6.2%" },
];

const services = [
  {
    title: "THREAD CAMPAIGNS",
    desc: "Narrative-driven threads that explain your project to the right audience and convert lurkers into believers.",
    color: "bg-coin",
  },
  {
    title: "COMMUNITY RAIDS",
    desc: "Coordinated engagement across X and Telegram to push your launch, TGE, or milestone to the top of the timeline.",
    color: "bg-mint",
  },
  {
    title: "SPACES & AMAs",
    desc: "Hosted Spaces, partner AMAs, and panel slots with founders — turning attention into trust.",
    color: "bg-hot text-primary-foreground",
  },
  {
    title: "LAUNCH SUPPORT",
    desc: "End-to-end KOL rounds: positioning, content calendar, and a vetted creator network to amplify day-one.",
    color: "bg-card",
  },
];

const partners = ["L2 PROTOCOL", "DEX AGGREGATOR", "MEMECOIN", "NFT MINT", "RESTAKING", "PERP DEX", "WALLET", "AI x CRYPTO"];

const testimonials = [
  { quote: "Brought us 6K real holders in a week. No bots, no noise — just signal.", who: "FOUNDER, L2 PROTOCOL" },
  { quote: "The thread alone did 1.2M impressions. Best ROI of the whole round.", who: "GROWTH LEAD, DEX" },
  { quote: "Real community guy. Talks to holders, not just charts.", who: "CMO, NFT PROJECT" },
];

const links = [
  { label: "X / TWITTER", handle: "@strawhat", href: "https://x.com", color: "bg-foreground text-background" },
  { label: "TELEGRAM", handle: "DM FOR COLLABS", href: "https://t.me", color: "bg-sky" },
  { label: "EMAIL", handle: "GM@STRAWHAT.XYZ", href: "mailto:gm@strawhat.xyz", color: "bg-mint" },
];

function Index() {
  return (
    <div className="min-h-screen w-full bg-sky scanlines">
      {/* TICKER */}
      <div className="border-b-4 border-foreground bg-foreground text-background overflow-hidden">
        <div className="flex anim-ticker whitespace-nowrap py-2 pixel text-[10px] md:text-xs">
          {[...ticker, ...ticker, ...ticker, ...ticker].map((t, i) => (
            <span key={i} className="px-6 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-accent" /> {t}
            </span>
          ))}
        </div>
      </div>

      {/* NAV */}
      <header className="border-b-4 border-foreground bg-coin">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-hot pixel-border-sm" />
            <span className="pixel text-xs md:text-sm">STRAWHAT</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 pixel text-[10px]">
            <a href="#about" className="hover:text-hot">ABOUT</a>
            <a href="#services" className="hover:text-hot">SERVICES</a>
            <a href="#partners" className="hover:text-hot">PARTNERS</a>
            <a href="#contact" className="hover:text-hot">CONTACT</a>
          </nav>
          <a href="#contact" className="pixel text-[10px] bg-foreground text-background px-3 py-2 pixel-border-sm">WORK WITH ME →</a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 clouds opacity-70 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center relative">
          <div>
            <div className="inline-block bg-foreground text-background pixel text-[10px] px-3 py-2 mb-6 anim-blink">
              ◆ BOOKING Q3 — 2 SLOTS LEFT
            </div>
            <h1 className="pixel text-2xl md:text-5xl leading-[1.3] mb-6">
              CRYPTO KOL.<br />
              <span className="text-hot">I GROW PROJECTS</span><br />
              WITH COMMUNITY.
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-md">
              I help crypto projects win attention, trust, and real holders — through
              threads, raids, Spaces, and a community that actually shows up.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="pixel text-xs bg-hot text-primary-foreground px-5 py-4 pixel-border">▶ WORK WITH ME</a>
              <a href="#services" className="pixel text-xs bg-card px-5 py-4 pixel-border">WHAT I DO</a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10">
              {stats.map((s) => (
                <div key={s.k} className="bg-card pixel-border-sm p-3 text-center">
                  <div className="pixel text-sm md:text-base text-hot">{s.v}</div>
                  <div className="pixel text-[8px] mt-1 text-muted-foreground">{s.k}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute -top-4 -left-4 w-14 h-14 bg-coin rounded-full pixel-border-sm flex items-center justify-center anim-float pixel text-base">★</div>
            <div className="absolute top-10 -right-2 w-12 h-12 bg-mint rounded-full pixel-border-sm flex items-center justify-center anim-float pixel text-sm" style={{ animationDelay: "0.6s" }}>♥</div>
            <div className="absolute bottom-8 -left-6 w-10 h-10 bg-hot rounded-full pixel-border-sm flex items-center justify-center anim-float text-primary-foreground pixel text-xs" style={{ animationDelay: "1.2s" }}>◆</div>

            <div className="bg-card pixel-border p-4 w-[280px] md:w-[340px]">
              <div className="flex justify-between items-center mb-3 pixel text-[10px]">
                <span>KOL_01.PNG</span>
                <span className="flex gap-1">
                  <span className="w-3 h-3 bg-mint" />
                  <span className="w-3 h-3 bg-coin" />
                  <span className="w-3 h-3 bg-hot" />
                </span>
              </div>
              <div className="bg-sky pixel-border-sm overflow-hidden">
                <img
                  src={avatarAsset.url}
                  alt="Pixel portrait of crypto KOL"
                  className="w-full h-auto block"
                  style={{ imageRendering: "pixelated" }}
                />
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 pixel text-[8px]">
                <div className="bg-mint p-2 text-center pixel-border-sm">REACH</div>
                <div className="bg-coin p-2 text-center pixel-border-sm">TRUST</div>
                <div className="bg-hot text-primary-foreground p-2 text-center pixel-border-sm">SIGNAL</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-y-4 border-foreground bg-card">
        <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="pixel text-[10px] bg-foreground text-background inline-block px-3 py-2">// ABOUT</div>
            <h2 className="pixel text-xl md:text-2xl mt-4 leading-snug">WHO IS<br/>BEHIND THE HAT?</h2>
          </div>
          <div className="md:col-span-2 space-y-4 text-xl">
            <p>
              I'm a <strong className="bg-coin px-1">crypto KOL on X</strong> focused on one thing —
              helping projects grow through <strong className="bg-mint px-1">community and influence</strong>.
            </p>
            <p>
              Over the last few cycles I've worked with L1s, L2s, DEXes, NFT mints, and memecoins.
              The playbook is the same: clear narrative, honest takes, and a community that actually
              cares — not a botted timeline.
            </p>
            <p className="pixel text-xs leading-relaxed text-hot">
              "ATTENTION IS EASY. TRUST IS THE EDGE."
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-sky">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <div className="pixel text-[10px] bg-foreground text-background inline-block px-3 py-2">// SERVICES</div>
              <h2 className="pixel text-xl md:text-2xl mt-4">HOW I HELP PROJECTS GROW</h2>
            </div>
            <p className="text-lg max-w-sm">Pick a quest. Bundles and custom campaigns available for serious launches.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {services.map((s) => (
              <div key={s.title} className={`${s.color} pixel-border p-6 hover:-translate-y-1 transition-transform`}>
                <div className="pixel text-sm md:text-base mb-3">{s.title}</div>
                <p className="text-lg">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="border-y-4 border-foreground bg-foreground text-background">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <div className="pixel text-[10px] bg-coin text-foreground inline-block px-3 py-2">// TRUSTED BY</div>
              <h2 className="pixel text-xl md:text-2xl mt-4">PROJECTS I'VE GROWN</h2>
            </div>
            <p className="text-lg max-w-sm opacity-80">A snapshot of categories I've supported across the last cycle.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-12">
            {partners.map((p, i) => (
              <div key={p} className={`pixel-border-sm p-4 pixel text-[10px] text-center text-foreground ${i % 3 === 0 ? "bg-coin" : i % 3 === 1 ? "bg-mint" : "bg-card"}`}>
                {p}
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((t) => (
              <div key={t.who} className="bg-card text-foreground pixel-border-sm p-5">
                <p className="text-lg leading-snug">"{t.quote}"</p>
                <div className="pixel text-[10px] mt-4 text-hot">— {t.who}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-mint">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="text-center mb-10">
            <div className="pixel text-[10px] bg-foreground text-background inline-block px-3 py-2">// LET'S TALK</div>
            <h2 className="pixel text-xl md:text-3xl mt-4">READY TO GROW?</h2>
            <p className="text-xl mt-4 max-w-xl mx-auto">
              If you're launching, scaling, or repositioning a crypto project — slide into the DMs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className={`${l.color} pixel-border p-5 flex items-center justify-between hover:-translate-y-1 transition-transform`}
              >
                <div>
                  <div className="pixel text-xs">{l.label}</div>
                  <div className="text-lg mt-1">{l.handle}</div>
                </div>
                <span className="pixel text-base">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t-4 border-foreground bg-coin">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-wrap items-center justify-between gap-4">
          <span className="pixel text-[10px]">© 2026 STRAWHAT — GM ☀️</span>
          <span className="pixel text-[10px] flex items-center gap-2">
            <span className="w-2 h-2 bg-hot anim-blink" /> COMMUNITY · INFLUENCE · TRUST
          </span>
        </div>
      </footer>
    </div>
  );
}
