import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const codeStreams = [
    {
      left: '6%',
      delay: '0s',
      duration: '22s',
      text: 'const brand = "kodedaw";\nrender(<Experience />);\noptimize(customerJourney);',
    },
    {
      left: '18%',
      delay: '1.8s',
      duration: '20s',
      text: 'if (needsGrowth) {\n  launchCampaign();\n}\nmeasureImpact();',
    },
    {
      left: '33%',
      delay: '3s',
      duration: '24s',
      text: 'type Product = {\n  strategy: string;\n  execution: string;\n};',
    },
    {
      left: '48%',
      delay: '0.9s',
      duration: '21s',
      text: 'api.get("/insight");\ncache.revalidate("home");\nship();',
    },
    {
      left: '62%',
      delay: '2.7s',
      duration: '23s',
      text: 'while (innovation) {\n  design();\n  iterate();\n}',
    },
    {
      left: '78%',
      delay: '4s',
      duration: '19s',
      text: 'const ux = compose(\n  empathy,\n  data,\n  engineering\n);',
    },
    {
      left: '90%',
      delay: '1.2s',
      duration: '25s',
      text: 'deploy({\n  region: "global",\n  quality: "premium"\n});',
    },
  ];

  const codeRows = [
    {
      top: '20%',
      delay: '0.4s',
      duration: '18s',
      text: 'function buildSeamlessExperience() { return strategy + design + engineering; } // kodedaw',
    },
    {
      top: '36%',
      delay: '2.2s',
      duration: '16s',
      text: 'const growth = audience.map((user) => personalize(user)).filter(Boolean).join(" -> ");',
    },
    {
      top: '52%',
      delay: '1.1s',
      duration: '20s',
      text: 'SELECT * FROM customer_journey WHERE friction < 1 ORDER BY conversion_rate DESC;',
    },
    {
      top: '68%',
      delay: '3.1s',
      duration: '17s',
      text: 'git commit -m "craft better digital experiences" && git push origin production',
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-light to-dark" />

        {/* Moving gradients to give depth behind the hero copy */}
        <div className="absolute -top-36 -left-24 h-[32rem] w-[32rem] rounded-full bg-teal/20 blur-[130px] animate-aurora-one" />
        <div className="absolute -bottom-48 right-[-8rem] h-[34rem] w-[34rem] rounded-full bg-accent/25 blur-[140px] animate-aurora-two" />
        <div className="absolute top-1/2 left-1/2 h-[44rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal/8 blur-[170px] animate-breathe" />

        <div className="hero-grid-motion absolute inset-0 opacity-35" />
        <div className="hero-vignette absolute inset-0" />

        {/* Code-themed animated layer */}
        <div className="hero-code-layer absolute inset-0 overflow-hidden">
          {codeStreams.map((stream) => (
            <pre
              key={`${stream.left}-${stream.delay}`}
              className="hero-code-stream"
              style={{
                left: stream.left,
                animationDelay: stream.delay,
                animationDuration: stream.duration,
              }}
            >
              {stream.text}
            </pre>
          ))}

          {codeRows.map((row) => (
            <p
              key={`${row.top}-${row.delay}`}
              className="hero-code-row"
              style={{
                top: row.top,
                animationDelay: row.delay,
                animationDuration: row.duration,
              }}
            >
              {row.text}
            </p>
          ))}
        </div>

        {/* Light streaks */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="hero-beam left-[12%]" />
          <div className="hero-beam left-[28%]" style={{ animationDelay: '1.4s' }} />
          <div className="hero-beam left-[52%]" style={{ animationDelay: '0.8s' }} />
          <div className="hero-beam left-[73%]" style={{ animationDelay: '2s' }} />
          <div className="hero-beam left-[88%]" style={{ animationDelay: '1.1s' }} />
        </div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 right-20 h-2 w-2 rounded-full bg-teal opacity-40 animate-pulse-slow" />
      <div className="absolute top-40 left-32 h-1.5 w-1.5 rounded-full bg-teal-light opacity-30 animate-pulse-slow" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 right-40 h-3 w-3 rounded-full bg-teal/30 animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-60 left-20 h-2 w-2 rounded-full bg-dark-card opacity-50 animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
      <div className="hero-particle top-[18%] left-[24%]" style={{ animationDelay: '0.7s' }} />
      <div className="hero-particle top-[28%] right-[19%]" style={{ animationDelay: '1.9s' }} />
      <div className="hero-particle bottom-[24%] right-[28%]" style={{ animationDelay: '2.6s' }} />
      <div className="hero-particle bottom-[32%] left-[14%]" style={{ animationDelay: '1.3s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 md:pt-36 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-border bg-dark-card/50 backdrop-blur-sm mb-8">
            <div className="w-2 h-2 bg-teal-light rounded-full animate-pulse" />
            <p className="text-gray-text text-xs sm:text-sm font-medium tracking-widest uppercase">
              Digital Customer Experience & Development Agency
            </p>
          </div>
        </div>

        <h1 className="animate-fade-in-up delay-100 opacity-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl font-bold leading-[1.1] tracking-tight max-w-5xl mx-auto">
          Defining the Standard for{' '}
          <span className="relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-light via-[#3a9da5] to-[#4ec6c9]">
              Seamless Digital Excellence.
            </span>
          </span>
        </h1>

        <p className="animate-fade-in-up delay-200 opacity-0 mt-8 text-gray-text text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
          Through technological mastery, we deliver digital solutions that transform your strategic visions into reality.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up delay-300 opacity-0 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#work"
            className="px-8 py-3.5 bg-gradient-to-r from-teal to-teal-light text-white font-semibold rounded-full hover:shadow-xl hover:shadow-teal/25 transition-all duration-300 hover:scale-105"
          >
            See Our Work
          </a>
          <a
            href="#services"
            className="px-8 py-3.5 border border-gray-border text-foreground font-semibold rounded-full hover:bg-dark-card hover:border-teal/40 transition-all duration-300"
          >
            Our Services
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in-up delay-500 opacity-0 mt-20 flex flex-col items-center gap-2">
          <span className="text-gray-text text-xs tracking-[0.2em] uppercase">Scroll to Explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-teal to-transparent mt-2" />
          <div className="animate-bounce mt-1">
            <ArrowDown size={16} className="text-teal-light" />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark to-transparent" />
    </section>
  );
}
