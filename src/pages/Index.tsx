import { useEffect } from "react";
import tigersharkLogo from "@/assets/tigershark-logo.png";

const Index = () => {
  useEffect(() => {
    const w = "https://tally.so/widgets/embed.js";
    const v = () => {
      if (typeof (window as any).Tally !== "undefined") {
        (window as any).Tally.loadEmbeds();
      } else {
        document.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((e: any) => {
          e.src = e.dataset.tallySrc;
        });
      }
    };
    if (typeof (window as any).Tally !== "undefined") {
      v();
    } else if (!document.querySelector(`script[src="${w}"]`)) {
      const s = document.createElement("script");
      s.src = w;
      s.onload = v;
      s.onerror = v;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 py-8 sm:py-12">
      {/* Subtle gradient overlay */}
      <div className="fixed inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 0%, hsl(190 80% 45% / 0.06) 0%, transparent 60%)' }} />

      <div className="relative z-10 w-full max-w-lg flex flex-col items-center gap-6">
        {/* Logo */}
        <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-card border border-border glow-border flex items-center justify-center overflow-hidden p-2">
          <img src={tigersharkLogo} alt="Tigershark Pools Inc. logo" className="w-full h-full object-contain" />
        </div>

        {/* Tagline */}
        <p className="text-muted-foreground text-sm sm:text-base tracking-widest uppercase">
          Premium Pools & Pavers
        </p>

        {/* Accent line */}
        <div className="w-16 h-0.5 rounded-full" style={{ background: 'var(--gradient-accent)' }} />

        {/* Tally Iframe Container */}
        <div className="w-full rounded-xl bg-card border border-border glow-border overflow-hidden">
          <div className="p-1">
            <iframe
              data-tally-src="https://tally.so/embed/44jA2o?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height={862}
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Tigershark Project Intake"
              className="w-full rounded-lg"
            />
          </div>
        </div>

        {/* Footer */}
        <p className="text-muted-foreground text-xs mt-4 tracking-wide">
          © {new Date().getFullYear()} Tigershark — All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Index;
