import { createFileRoute } from "@tanstack/react-router";
import avatarAsset from "@/assets/avatar.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "STRAWHAT.DEV — Crypto KOL & Tech Builder" },
      { name: "description", content: "Pixel-perfect bio for a crypto KOL, X creator, and tech builder. Alpha, threads, ships, and signal." },
      { property: "og:title", content: "STRAWHAT.DEV — Crypto KOL & Tech Builder" },
      { property: "og:description", content: "Alpha, threads, ships, and signal from a crypto KOL on X." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap" },
    ],
  }),
  component: Index,
});

const tickerItems = [
  "BTC $98,420 ▲2.1%",
  "ETH $3,540 ▲1.4%",
  "SOL $210 ▲4.8%",
  "GM ☀️",
  "WAGMI",
  "SHIPPING > SHILLING",
  "BUILD IN PUBLIC",
  "ALPHA LEAKS @ 9PM UTC",
];

const links = [
  { label: "X / TWITTER", handle: "@strawhat", href: "https://x.com", color: "bg-foreground text-background" },
  { label: "GITHUB", handle: "/strawhat", href: "https://github.com", color: "bg-card" },
  { label: "FARCASTER", handle: "@strawhat", href: "https://warpcast.com", color: "bg-accent" },
  { label: "TELEGRAM", handle: "ALPHA CHAT", href: "https://t.me", color: "bg-sky" },
  { label: "MIRROR", handle: "ESSAYS", href: "https://mirror.xyz", color: "bg-coin" },
  { label: "EMAIL", handle: "GM@STRAWHAT.DEV", href: "mailto:gm@strawhat.dev", color: "bg-mint" },
];

const stats = [
  { k: "FOLLOWERS", v: "128K" },
  { k: "THREADS", v: "412" },
  { k: "SHIPS", v: "27" },
  { k: "CYCLES", v: "3" },
];

const stack = [
  "Solidity", "Rust", "TypeScript", "Next.js", "Foundry", "Viem",
  "Postgres", "Tailwind", "Anchor", "Hardhat", "tRPC", "Bun",
];

const projects = [
  { name: "ALPHALEAK.XYZ", tag: "On-chain signal bot", year: "2025", color: "bg-hot text-primary-foreground" },
  { name: "DEGEN-DECK", tag: "Portfolio dashboard for L2s", year: "2024", color: "bg-coin" },
  { name: "THREADS.SH", tag: "AI thread composer for X", year: "2024", color: "bg-mint" },
  { name: "MEMEFOUNDRY", tag: "Token launchpad CLI", year: "2023", color: "bg-card" },
];

function Index() {
  return (
    <div className="min-h-screen w-full bg-sky scanlines">
      {/* TICKER */}
      <div className="border-b-4 border-foreground bg-foreground text-background overflow-hidden">
        <div className="flex anim-ticker whitespace-nowrap py-2 pixel text-[10px] md:text-xs">
          {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((t, i) => (
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
            <span className="pixel text-xs md:text-sm">STRAWHAT.DEV</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 pixel text-[10px]">
            <a href="#about" className="hover:text-hot">ABOUT</a>
            <a href="#stack" className="hover:text-hot">STACK</a>
            <a href="#ships" className="hover:text-hot">SHIPS</a>
            <a href="#links" className="hover:text-hot">LINKS</a>
          </nav>
          <a href="#links" className="pixel text-[10px] bg-foreground text-background px-3 py-2 pixel-border-sm">FOLLOW →</a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 clouds opacity-70 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center relative">
          <div>
            <div className="inline-block bg-foreground text-background pixel text-[10px] px-3 py-2 mb-6 anim-blink">
              ◆ ONLINE — SHIPPING NOW
            </div>
            <h1 className="pixel text-2xl md:text-5xl leading-[1.3] mb-6">
              CRYPTO KOL.<br />
              <span className="text-hot">TECH BUILDER.</span><br />
              FULL DEGEN.
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-md">
              I post threads on X, ship products on-chain, and trade the cycle.
              Welcome to my corner of the internet — press START.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#links" className="pixel text-xs bg-hot text-primary-foreground px-5 py-4 pixel-border">▶ FOLLOW ME</a>
              <a href="#ships" className="pixel text-xs bg-card px-5 py-4 pixel-border">SEE MY SHIPS</a>
            </div>
            <div className="grid grid-cols-4 gap-3 mt-10">
              {stats.map((s) => (
                <div key={s.k} className="bg-card pixel-border-sm p-3 text-center">
                  <div className="pixel text-sm md:text-base text-hot">{s.v}</div>
                  <div className="pixel text-[8px] mt-1 text-muted-foreground">{s.k}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center">
            {/* Coins floating */}
            <div className="absolute -top-4 -left-4 w-14 h-14 bg-coin rounded-full pixel-border-sm flex items-center justify-center anim-float pixel text-base">₿</div>
            <div className="absolute top-10 -right-2 w-12 h-12 bg-mint rounded-full pixel-border-sm flex items-center justify-center anim-float pixel text-sm" style={{ animationDelay: "0.6s" }}>Ξ</div>
            <div className="absolute bottom-8 -left-6 w-10 h-10 bg-hot rounded-full pixel-border-sm flex items-center justify-center anim-float text-primary-foreground pixel text-xs" style={{ animationDelay: "1.2s" }}>◎</div>

            <div className="bg-card pixel-border p-4 w-[280px] md:w-[340px]">
              <div className="flex justify-between items-center mb-3 pixel text-[10px]">
                <span>PLAYER_01.PNG</span>
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
                <div className="bg-mint p-2 text-center pixel-border-sm">LVL 99</div>
                <div className="bg-coin p-2 text-center pixel-border-sm">HP 100</div>
                <div className="bg-hot text-primary-foreground p-2 text-center pixel-border-sm">XP MAX</div>
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
              I'm a <strong className="bg-coin px-1">crypto KOL</strong> on X, a
              <strong className="bg-mint px-1"> full-stack engineer</strong>, and a
              <strong className="bg-hot text-primary-foreground px-1"> founder</strong> who
              loves shipping at the intersection of finance and software.
            </p>
            <p>
              By day I write Solidity, design dashboards, and prototype tools that make
              on-chain life less painful. By night I post threads, share alpha, and argue
              about market structure with strangers.
            </p>
            <p className="pixel text-xs leading-relaxed text-hot">
              "STAY HUMBLE. STACK SATS. SHIP CODE."
            </p>
          </div>
        </div>
      </section>

      {/* STACK */}
      <section id="stack" className="bg-sky">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <div className="pixel text-[10px] bg-foreground text-background inline-block px-3 py-2">// INVENTORY</div>
              <h2 className="pixel text-xl md:text-2xl mt-4">TECH STACK</h2>
            </div>
            <p className="text-lg max-w-sm">Tools I equip when shipping. Battle-tested across mainnets, L2s, and side quests.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {stack.map((s, i) => (
              <div key={s} className={`pixel-border-sm p-4 pixel text-[10px] text-center ${i % 3 === 0 ? "bg-coin" : i % 3 === 1 ? "bg-mint" : "bg-card"}`}>
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="ships" className="border-y-4 border-foreground bg-foreground text-background">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <div className="pixel text-[10px] bg-coin text-foreground inline-block px-3 py-2">// QUESTS COMPLETED</div>
              <h2 className="pixel text-xl md:text-2xl mt-4">RECENT SHIPS</h2>
            </div>
            <p className="text-lg max-w-sm opacity-80">A few of the things I built, broke, or sold the domain of.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {projects.map((p) => (
              <div key={p.name} className={`${p.color} text-foreground pixel-border p-6 hover:-translate-y-1 transition-transform`}>
                <div className="flex justify-between items-start mb-4">
                  <span className="pixel text-sm md:text-base">{p.name}</span>
                  <span className="pixel text-[10px] bg-foreground text-background px-2 py-1">{p.year}</span>
                </div>
                <p className="text-lg">{p.tag}</p>
                <div className="mt-6 pixel text-[10px] flex items-center gap-2">PRESS A ▶</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LINKS */}
      <section id="links" className="bg-mint">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="text-center mb-10">
            <div className="pixel text-[10px] bg-foreground text-background inline-block px-3 py-2">// SOCIAL MENU</div>
            <h2 className="pixel text-xl md:text-3xl mt-4">FIND ME ONLINE</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
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
          <span className="pixel text-[10px]">© 2026 STRAWHAT.DEV — GM ☀️</span>
          <span className="pixel text-[10px] flex items-center gap-2">
            <span className="w-2 h-2 bg-hot anim-blink" /> INSERT COIN TO CONTINUE
          </span>
        </div>
      </footer>
    </div>
  );
}
