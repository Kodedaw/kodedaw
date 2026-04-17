import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Web Development',
    category: 'Web Development',
    description: 'Digital platform for Compass real estate',
    gradient: 'from-[#0B2B36] via-[#1D4D54] to-[#0f3640]',
    icon: (
      <svg viewBox="0 0 80 80" fill="none" className="w-20 h-20 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
        <rect x="10" y="20" width="60" height="45" rx="4" stroke="currentColor" strokeWidth="2" />
        <path d="M10 30h60" stroke="currentColor" strokeWidth="2" />
        <rect x="20" y="38" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <line x1="48" y1="40" x2="62" y2="40" stroke="currentColor" strokeWidth="1.5" />
        <line x1="48" y1="46" x2="58" y2="46" stroke="currentColor" strokeWidth="1.5" />
        <line x1="48" y1="52" x2="55" y2="52" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: 'Future Creative Network',
    category: 'Branding & Web',
    description: 'Creative network platform development',
    gradient: 'from-[#1D4D54] via-[#27696e] to-[#0B2B36]',
    icon: (
      <svg viewBox="0 0 80 80" fill="none" className="w-20 h-20 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
        <circle cx="40" cy="40" r="25" stroke="currentColor" strokeWidth="2" />
        <circle cx="40" cy="40" r="12" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="40" cy="40" r="4" fill="currentColor" opacity="0.5" />
        <line x1="40" y1="15" x2="40" y2="28" stroke="currentColor" strokeWidth="1.5" />
        <line x1="40" y1="52" x2="40" y2="65" stroke="currentColor" strokeWidth="1.5" />
        <line x1="15" y1="40" x2="28" y2="40" stroke="currentColor" strokeWidth="1.5" />
        <line x1="52" y1="40" x2="65" y2="40" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: 'Mobile App',
    category: 'Mobile App',
    description: 'Telecommunications digital experience',
    gradient: 'from-[#0f3640] via-[#0B2B36] to-[#1D4D54]',
    icon: (
      <svg viewBox="0 0 80 80" fill="none" className="w-20 h-20 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
        <rect x="25" y="10" width="30" height="60" rx="6" stroke="currentColor" strokeWidth="2" />
        <rect x="30" y="18" width="20" height="35" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="40" cy="62" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: 'Web3 / NFT',
    category: 'Web3 / NFT',
    description: 'Tools Web3 Blockchain and community platform',
    gradient: 'from-[#1D4D54] via-[#0f3640] to-[#27696e]',
    icon: (
      <svg viewBox="0 0 80 80" fill="none" className="w-20 h-20 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
        <path d="M40 10L65 25v30L40 70 15 55V25L40 10z" stroke="currentColor" strokeWidth="2" />
        <path d="M40 25L52.5 32.5v15L40 55 27.5 47.5v-15L40 25z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="40" cy="40" r="5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default function FeaturedWork() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-teal-light text-sm font-medium tracking-widest uppercase mb-3">Portfolio</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">Our Featured Work</h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 text-gray-text hover:text-foreground transition-colors text-sm group"
          >
            View All Projects
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl cursor-pointer border border-gray-border hover:border-teal/40 transition-all duration-500"
            >
              <div className={`aspect-[4/3] bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                {/* Pattern overlay */}
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                    backgroundSize: '24px 24px',
                  }}
                />

                {/* Icon */}
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="group-hover:scale-110 transition-transform duration-700">
                    {project.icon}
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#041016]/90 via-[#041016]/35 to-transparent" />

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="inline-block px-3 py-1 bg-teal/30 backdrop-blur-sm rounded-full text-xs font-medium mb-3 text-white border border-teal/20 shadow-[0_0_18px_rgba(4,16,22,0.45)]">
                    {project.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-1 text-white drop-shadow-[0_4px_18px_rgba(4,16,22,0.65)]">{project.title}</h3>
                  <p className="text-white/90 text-sm drop-shadow-[0_4px_12px_rgba(4,16,22,0.65)]">{project.description}</p>
                </div>

                {/* Hover arrow */}
                <div className="absolute top-6 right-6 w-11 h-11 bg-teal/30 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 border border-teal/20">
                  <ArrowUpRight size={18} className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <a href="#" className="inline-flex items-center gap-2 text-gray-text hover:text-foreground transition-colors text-sm">
            View All Projects <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
