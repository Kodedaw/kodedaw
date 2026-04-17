import { ArrowUpRight } from 'lucide-react';

const insights = [
  {
    title: 'The Era of Artificial Everything: Balancing AI and Human Creativity',
    category: 'Experience',
    date: 'Jan 2026',
    gradient: 'from-[#0B2B36] via-[#1D4D54] to-[#0f3640]',
    icon: (
      <svg viewBox="0 0 60 60" fill="none" className="w-16 h-16 text-white opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700">
        <circle cx="30" cy="30" r="20" stroke="currentColor" strokeWidth="1.5" />
        <path d="M22 30h16M30 22v16" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="30" cy="30" r="6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="30" cy="30" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Navigating SEO Trends in 2026 and Predictions for the Future',
    category: 'SEO, Strategy',
    date: 'Dec 2025',
    gradient: 'from-[#1D4D54] via-[#0f3640] to-[#0B2B36]',
    icon: (
      <svg viewBox="0 0 60 60" fill="none" className="w-16 h-16 text-white opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700">
        <path d="M10 45L20 30L30 35L40 20L50 25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="50" cy="25" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 15v35h40" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: 'Meet Invisible UI: The UX Trick that Makes Apps Feel Effortless',
    category: 'Design',
    date: 'Nov 2025',
    gradient: 'from-[#0f3640] via-[#0B2B36] to-[#1D4D54]',
    icon: (
      <svg viewBox="0 0 60 60" fill="none" className="w-16 h-16 text-white opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700">
        <rect x="12" y="15" width="36" height="30" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="22" cy="28" r="4" stroke="currentColor" strokeWidth="1.5" />
        <line x1="30" y1="25" x2="42" y2="25" stroke="currentColor" strokeWidth="1.5" />
        <line x1="30" y1="31" x2="38" y2="31" stroke="currentColor" strokeWidth="1.5" />
        <line x1="16" y1="38" x2="44" y2="38" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default function Insights() {
  return (
    <section id="insights" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-light to-dark" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-border to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-teal-light text-sm font-medium tracking-widest uppercase mb-3">Blog</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">Featured Insights</h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 text-gray-text hover:text-foreground transition-colors text-sm group"
          >
            + View All
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((insight, index) => (
            <article key={index} className="group cursor-pointer">
              <div
                className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${insight.gradient} relative overflow-hidden mb-5 border border-gray-border group-hover:border-teal/40 transition-all duration-500`}
              >
                {/* Pattern */}
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                    backgroundSize: '20px 20px',
                  }}
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  {insight.icon}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#041016]/40 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-teal/25 backdrop-blur-sm rounded-full text-xs font-medium text-white/90 border border-teal/15">
                    {insight.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 w-9 h-9 bg-teal/25 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 border border-teal/15">
                  <ArrowUpRight size={14} className="text-white" />
                </div>
              </div>
              <div className="px-1">
                <p className="text-gray-text text-xs mb-2">{insight.date}</p>
                <h3 className="text-lg font-semibold leading-snug text-foreground group-hover:text-teal-light transition-colors duration-300">
                  {insight.title}
                </h3>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <a href="#" className="inline-flex items-center gap-2 text-gray-text hover:text-foreground transition-colors text-sm">
            + View All <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
