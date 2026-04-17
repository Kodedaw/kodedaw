import { ArrowUpRight, Palette, Code, Sparkles, TrendingUp, Search, Lightbulb } from 'lucide-react';

const services = [
  {
    title: 'Creative',
    description: 'Digital Content Creation & Management, Marketing Collateral Design, Branding Development, Asset Production, Graphic Design',
    icon: Palette,
  },
  {
    title: 'Engineering',
    description: 'Integration Services, Quality & Security Assurance, E-commerce Development, Backend or CMS Development, Mobile Development, Web Development',
    icon: Code,
  },
  {
    title: 'Experience',
    description: 'Experience Design, User Interface Design, Prototyping, Design Systems',
    icon: Sparkles,
  },
  {
    title: 'Growth',
    description: 'Loyalty Program Management, CRM Solution, CRO',
    icon: TrendingUp,
  },
  {
    title: 'SEO',
    description: 'SEO Audit, Media Placement Optimization, SEO Retainer',
    icon: Search,
  },
  {
    title: 'Strategy',
    description: 'UX Research, Digital Strategy, Market Analysis, User Testing',
    icon: Lightbulb,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-light to-dark" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-border to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-teal-light text-sm font-medium tracking-widest uppercase mb-3">Services</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">What we can do for you</h2>
          <p className="mt-4 text-gray-text max-w-xl mx-auto">
            Comprehensive digital solutions tailored to transform your business and elevate your brand.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => {
            const IconComp = service.icon;
            return (
              <div
                key={index}
                className="group relative p-6 md:p-8 rounded-2xl bg-dark-card/60 border border-gray-border hover:border-teal/50 transition-all duration-500 cursor-pointer overflow-hidden backdrop-blur-sm"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="absolute top-0 right-0 w-40 h-40 bg-teal/5 rounded-full -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-700" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal/20 to-teal-light/10 border border-teal/20 flex items-center justify-center mb-5 group-hover:shadow-lg group-hover:shadow-teal/10 transition-shadow duration-500">
                    <IconComp size={22} className="text-teal-light" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-foreground">
                    {service.title}
                    <ArrowUpRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-300 text-teal-light"
                    />
                  </h3>
                  <p className="text-gray-text text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
