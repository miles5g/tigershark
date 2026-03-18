import tigersharkLogo from "@/assets/tigershark-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 py-8 sm:py-12">
      {/* Subtle gradient overlay */}
      <div className="fixed inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 0%, hsl(190 80% 45% / 0.06) 0%, transparent 60%)' }} />

      <div className="relative z-10 w-full max-w-lg flex flex-col items-center gap-6">
        {/* Logo */}
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-card border border-border glow-border flex items-center justify-center overflow-hidden p-3">
          <img src={tigersharkLogo} alt="Tigershark logo" className="w-full h-full object-contain" />
        </div>

        {/* Brand Name */}
        <div className="text-center space-y-2">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Tigershark
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base tracking-widest uppercase">
            Premium Pools & Hardscaping
          </p>
        </div>

        {/* Accent line */}
        <div className="w-16 h-0.5 rounded-full" style={{ background: 'var(--gradient-accent)' }} />

        {/* Iframe Container */}
        <div className="w-full rounded-xl bg-card border border-border glow-border overflow-hidden">
          <div className="p-1">
            <iframe
              src="about:blank"
              title="Intake Form"
              className="w-full rounded-lg bg-card"
              style={{ minHeight: '600px', border: 'none' }}
              allow="camera; microphone"
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
