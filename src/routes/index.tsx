import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactElement } from "react";
import zaneAvatar from "@/assets/zane.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zane · @0xZane_ — Web3 Growth · Community Builder" },
      { name: "description", content: "Helping web3 projects grow through community, threads, raids and real influence on X." },
      { property: "og:title", content: "Zane · @0xZane_ — Web3 Growth" },
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
  bio: "",
};

const services = [
  { title: "Thread Campaigns", desc: "Narrative-driven threads that explain your protocol in plain language and convert lurkers into believers.", icon: "threads", color: "bg-accent-1" },
  { title: "Community Raids",  desc: "Coordinated engagement across X and Telegram to push your TGE, mainnet, or milestone to the top of the timeline.", icon: "raids", color: "bg-accent-2" },
  { title: "Spaces & AMAs",    desc: "Hosted Spaces and partner AMAs with founders — turning attention into trust and trust into holders.", icon: "spaces", color: "bg-accent-3 text-card" },
  { title: "Launch Support",   desc: "End-to-end web3 growth rounds: positioning, content calendar, and a vetted creator network to amplify day-one.", icon: "launch", color: "bg-card" },
];

const verticals = [
  { name: "RWA",          desc: "Real-world asset vaults & onchain yield." },
  { name: "AI × CRYPTO",  desc: "Agentic protocols and AI co-workers." },
  { name: "SECURITY",     desc: "Post-quantum, MPC, infra hardening." },
  { name: "L2 / INFRA",   desc: "Rollups, bridges, vault infrastructure." },
  { name: "DEFI",         desc: "Curated risk-adjusted yield products." },
  { name: "LAUNCHES",     desc: "TGE, mainnet, campaign go-to-market." },
];

const links = [
  { label: "X / TWITTER", handle: "@0xZane_",       href: "https://x.com/0xZane_",  color: "bg-accent-1" },
  { label: "TELEGRAM",    handle: "DM for collabs", href: "https://t.me/",          color: "bg-accent-2" },
  { label: "EMAIL",       handle: "gm@zane.web3",   href: "mailto:gm@zane.web3",    color: "bg-accent-3 text-card" },
];

function PixelIcon({ type }: { type: string }) {
  // Outlined pixel-art icons on a 16x16 grid. Each string row = 16 chars.
  // "#" = filled pixel (currentColor), any other char = transparent.
  const MAPS: Record<string, string[]> = {
    threads: [
      "                ",
      "  ############  ",
      "  #          #  ",
      "  #  ######  #  ",
      "  #          #  ",
      "  #  ####    #  ",
      "  #          #  ",
      "  #  #######  # ",
      "  #          #  ",
      "  #  #####   #  ",
      "  #          #  ",
      "  #  ###     #  ",
      "  #          #  ",
      "  ############  ",
      "                ",
      "                ",
    ],
    raids: [
      "                ",
      "          ###   ",
      "         ###    ",
      "        ###     ",
      "       ###      ",
      "      #####     ",
      "     #######    ",
      "    ### ###     ",
      "        ###     ",
      "       ###      ",
      "      ###       ",
      "     ###        ",
      "    ###         ",
      "   ###          ",
      "                ",
      "                ",
    ],
    spaces: [
      "                ",
      "      ####      ",
      "     #    #     ",
      "     #    #     ",
      "     #    #     ",
      "     #    #     ",
      "   # #    # #   ",
      "   #  #  #  #   ",
      "   #   ##   #   ",
      "   #        #   ",
      "    #      #    ",
      "     ######     ",
      "       ##       ",
      "       ##       ",
      "     ######     ",
      "                ",
    ],
    launch: [
      "                ",
      "       ##       ",
      "      #  #      ",
      "      #  #      ",
      "     #    #     ",
      "     # ## #     ",
      "     # ## #     ",
      "     #    #     ",
      "     #    #     ",
      "    ##    ##    ",
      "   # #    # #   ",
      "   # #    # #   ",
      "   ###    ###   ",
      "       ##       ",
      "      #  #      ",
      "      ####      ",
    ],
  };
  const grid = MAPS[type];
  if (!grid) return null;
  const rects: ReactElement[] = [];
  for (let y = 0; y < 16; y++) {
    for (let x = 0; x < 16; x++) {
      if (grid[y][x] === "#") {
        rects.push(<rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill="currentColor" />);
      }
    }
  }
  return (
    <svg viewBox="0 0 16 16" className="h-10 w-10 sm:h-12 sm:w-12" shapeRendering="crispEdges">
      {rects}
    </svg>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const words = ["WEB3", "RWAs", "AI×CRYPTO", "L2s", "DEFI"];
  const [wordIdx, setWordIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setWordIdx((i) => (i + 1) % words.length), 1500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen w-full bg-bg text-fg font-sans overflow-x-hidden">
      {/* NAV — yellow pixel bar */}
      <header className="sticky top-0 z-40 bg-accent-1 border-b-[3px] border-fg">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 py-3 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
          <a href="#top" className="flex min-w-0 items-center gap-2 sm:gap-3">
            <span className="shrink-0 inline-block h-7 w-7 sm:h-8 sm:w-8 bg-accent-3 border-[3px] border-fg" />
            <span className="font-display text-[11px] sm:text-sm truncate">
              ZANE
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-7 font-display text-[11px] uppercase">
            <a href="#about" className="hover:text-accent-3">About</a>
            <a href="#services" className="hover:text-accent-3">Services</a>
            <a href="#verticals" className="hover:text-accent-3">Verticals</a>
            <a href="#contact" className="hover:text-accent-3">Contact</a>
          </nav>
          <div className="flex items-center gap-2 shrink-0">
            <a href="https://x.com/0xZane_" target="_blank" rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-fg text-card px-4 py-2 font-display text-[11px] border-[3px] border-fg shadow-[4px_4px_0_0_oklch(0.65_0.25_25)] hover:shadow-[2px_2px_0_0_oklch(0.65_0.25_25)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
              FOLLOW <span aria-hidden>→</span>
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden h-10 w-10 grid place-items-center bg-card border-[3px] border-fg"
            >
              <span className="text-xl leading-none">{menuOpen ? "✕" : "≡"}</span>
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="md:hidden border-t-[3px] border-fg bg-accent-1 px-3 py-3 grid gap-2 font-display text-[11px] uppercase">
            {[["About","#about"],["Services","#services"],["Verticals","#verticals"],["Contact","#contact"]].map(([l,h]) => (
              <a key={h} href={h} onClick={() => setMenuOpen(false)} className="bg-card border-[3px] border-fg px-3 py-3">{l}</a>
            ))}
            <a href="https://x.com/0xZane_" target="_blank" rel="noreferrer"
              className="bg-fg text-card border-[3px] border-fg px-3 py-3 text-center">FOLLOW @0xZane_ →</a>
          </nav>
        )}
      </header>



      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        {/* floating dots */}
        <span className="hidden sm:block absolute top-24 left-[28%] h-5 w-5 rounded-full bg-card border-[3px] border-fg animate-float" />
        <span className="hidden sm:block absolute top-40 right-[42%] h-12 w-12 rounded-full bg-accent-1 border-[3px] border-fg grid place-items-center font-display text-xs animate-float" style={{ animationDelay: "0.6s" }}>★</span>
        <span className="hidden md:block absolute top-[58%] right-[38%] h-10 w-10 rounded-full bg-accent-3 border-[3px] border-fg animate-float" style={{ animationDelay: "1.2s" }} />
        <span className="hidden md:block absolute top-[28%] right-[8%] h-12 w-12 rounded-full bg-accent-2 border-[3px] border-fg grid place-items-center font-display text-xs animate-float" style={{ animationDelay: "0.3s" }}>=</span>
        <span className="hidden md:block absolute bottom-16 right-[18%] h-9 w-9 rounded-full bg-accent-2 border-[3px] border-fg animate-float" style={{ animationDelay: "1s" }} />
        <span className="hidden md:block absolute top-[70%] right-[50%] h-3 w-3 rounded-full bg-card border-[3px] border-fg" />
        <span className="hidden lg:block absolute top-[55%] right-[2%] h-5 w-5 rounded-full bg-card border-[3px] border-fg" />

        <div className="max-w-6xl mx-auto px-3 sm:px-6 pt-10 sm:pt-16 pb-14 sm:pb-20 grid md:grid-cols-[1.15fr_1fr] gap-10 md:gap-12 items-center">
          <div className="order-2 md:order-1 relative z-10">
            <div className="inline-flex items-center gap-2 bg-fg text-card px-3 py-2 font-display text-[10px] sm:text-xs mb-6 border-[3px] border-fg">
              <span className="h-2 w-2 bg-accent-2 animate-blink" />
              ► ONLINE · OPEN FOR COLLABS
            </div>
            <h1 className="font-display text-[clamp(1.7rem,6.2vw,3.4rem)] leading-[1.15]">
              I GROW<br />
              <span className="inline-block bg-accent-3 text-card px-2 border-[3px] border-fg shadow-[5px_5px_0_0_var(--color-fg)] animate-wiggle" key={wordIdx}>
                {words[wordIdx]}
              </span><br />
              PROJECTS<span className="animate-blink text-accent-3">_</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg sm:text-xl leading-snug">
              I help builders win attention, trust, and real holders — through threads, raids, Spaces, and a community that actually shows up.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="https://x.com/0xZane_" target="_blank" rel="noreferrer"
                className="font-display text-xs sm:text-sm bg-accent-3 text-card px-5 sm:px-6 py-3 sm:py-4 border-[3px] border-fg shadow-[6px_6px_0_0_var(--color-fg)] hover:shadow-[2px_2px_0_0_var(--color-fg)] hover:translate-x-1 hover:translate-y-1 transition-all">
                ► FOLLOW ME
              </a>
              <a href="#contact"
                className="font-display text-xs sm:text-sm bg-card px-5 sm:px-6 py-3 sm:py-4 border-[3px] border-fg shadow-[6px_6px_0_0_var(--color-fg)] hover:shadow-[2px_2px_0_0_var(--color-fg)] hover:translate-x-1 hover:translate-y-1 transition-all">
                WORK WITH ME
              </a>
            </div>
          </div>

          {/* avatar window */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="w-[min(86vw,360px)] pixel-box p-0">
              {/* window chrome */}
              <div className="flex items-center justify-between gap-3 px-3 py-2 border-b-[3px] border-fg bg-card">
                <span className="font-mono text-sm">ZANE.PNG</span>
                <span className="flex items-center gap-1.5">
                  <span className="h-3 w-3 bg-accent-2 border-2 border-fg" />
                  <span className="h-3 w-3 bg-accent-1 border-2 border-fg" />
                  <span className="h-3 w-3 bg-accent-3 border-2 border-fg" />
                </span>
              </div>
              {/* image */}
              <div className="relative bg-bg p-3">
                <img src={zaneAvatar.url} alt="Zane @0xZane_ pixel avatar" className="block w-full h-auto border-[3px] border-fg" />
              </div>
              {/* chips row */}
              <div className="grid grid-cols-3 gap-2 p-3 pt-0">
                <span className="bg-accent-2 border-[3px] border-fg text-center font-display text-[10px] py-2">REACH</span>
                <span className="bg-accent-1 border-[3px] border-fg text-center font-display text-[10px] py-2">TRUST</span>
                <span className="bg-accent-3 text-card border-[3px] border-fg text-center font-display text-[10px] py-2">SIGNAL</span>
              </div>
              {/* footer */}
              <div className="flex items-center justify-between px-3 py-2 border-t-[3px] border-fg bg-card">
                <span className="font-mono text-base truncate">Zane</span>
                <span className="font-display text-[10px] bg-fg text-card px-2 py-1">GROWTH PARTNER</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT — cream band */}
      <section id="about" className="bg-cream border-y-[3px] border-fg">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 py-16 sm:py-24 grid md:grid-cols-[1fr_1.7fr] gap-10 md:gap-16">
          <div>
            <div className="inline-block bg-fg text-card font-display text-[10px] px-3 py-2 border-[3px] border-fg">// ABOUT</div>
            <h2 className="mt-5 font-display text-2xl sm:text-3xl leading-tight">WHO IS<br />ZANE?</h2>
          </div>
          <div className="space-y-5 text-lg sm:text-xl leading-snug">
            <p>
              I'm <span className="hl-yellow font-mono">Zane</span> — a{" "}
              <span className="hl-green font-mono">web3 growth partner on X</span> covering web3, RWAs, AI×crypto, security, and yield.
            </p>
            <p>
              I work with founders to shape narrative, drive attention, and bring{" "}
              <span className="hl-red font-mono">real holders</span> instead of bots. Every campaign starts with the product — never the hype.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-b-[3px] border-fg">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 py-16 sm:py-24">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
            <div>
              <div className="inline-block bg-fg text-card font-display text-[10px] px-3 py-2 border-[3px] border-fg">// SERVICES</div>
              <h2 className="mt-5 font-display text-2xl sm:text-3xl leading-tight">HOW I HELP<br />YOU GROW</h2>
            </div>
            <p className="text-lg sm:text-xl max-w-sm">Pick one or stack them for a full launch. Every engagement is custom-scoped.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-7">
            {services.map((s, i) => (
              <article key={s.title} className="pixel-box p-5 sm:p-6 hover:-translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0_0_var(--color-fg)] transition-all duration-150">
                <div className="flex items-center justify-between mb-4">
                  <PixelIcon type={s.icon} />
                  <span className="font-display text-xs opacity-60">0{i + 1}</span>
                </div>
                <h3 className="font-display text-sm sm:text-base mb-3">{s.title.toUpperCase()}</h3>
                <p className="text-lg leading-snug">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VERTICALS */}
      <section id="verticals" className="bg-cream border-b-[3px] border-fg">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 py-16 sm:py-24">
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-block bg-fg text-card font-display text-[10px] px-3 py-2 border-[3px] border-fg">// COVERAGE</div>
            <h2 className="mt-5 font-display text-2xl sm:text-3xl">VERTICALS I COVER</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {verticals.map((v) => (
              <div key={v.name} className="pixel-box-sm p-5 hover:-translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0_0_var(--color-fg)] transition-all duration-150">
                <div className="font-display text-sm text-accent-3">{v.name}</div>
                <p className="mt-2 text-lg leading-snug">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-b-[3px] border-fg relative overflow-hidden">
        <span className="hidden sm:block absolute top-10 left-[10%] h-8 w-8 rounded-full bg-accent-1 border-[3px] border-fg animate-float" />
        <span className="hidden sm:block absolute bottom-10 right-[12%] h-6 w-6 rounded-full bg-accent-3 border-[3px] border-fg animate-float" style={{ animationDelay: "0.5s" }} />
        <div className="max-w-6xl mx-auto px-3 sm:px-6 py-16 sm:py-24">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-block bg-fg text-card font-display text-[10px] px-3 py-2 border-[3px] border-fg">// LET'S TALK</div>
            <h2 className="mt-5 font-display text-2xl sm:text-4xl">READY PLAYER 2?</h2>
            <p className="mt-5 text-lg sm:text-xl">
              Launching, scaling, or repositioning a web3 project? Slide into the DMs.
            </p>
          </div>
          <div className="mt-10 grid sm:grid-cols-3 gap-5">
            {links.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
                className={`pixel-box p-5 hover:-translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0_0_var(--color-fg)] transition-all duration-150 ${l.color}`}>
                <div className="font-display text-[10px]">{l.label}</div>
                <div className="mt-3 font-mono text-xl truncate">{l.handle} →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-fg text-card">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 font-display text-[10px]">
          <span>© 2026 ZANE · {PROFILE.handle}</span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 bg-accent-2 animate-blink" />
            COMMUNITY · INFLUENCE · TRUST
          </span>
        </div>
      </footer>
    </div>
  );
}
