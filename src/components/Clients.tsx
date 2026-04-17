type Client = {
  name: string;
  initials: string;
  url: string;
};

const clients: Client[] = [
  { name: 'Betampar', initials: '?', url: 'https://betampar.com' },
  { name: 'XXX', initials: 'XXX', url: 'https://example.com' },
  { name: 'XXX', initials: 'XXX', url: 'https://example.com' },
  { name: 'XXX', initials: 'XXX', url: 'https://example.com' },
  { name: 'XXX', initials: 'XXX', url: 'https://example.com' },
  { name: 'XXX', initials: 'XXX', url: 'https://example.com' },
  { name: 'XXX', initials: 'XXX', url: 'https://example.com' },
  { name: 'XXX', initials: 'XXX', url: 'https://example.com' },
  { name: 'XXX', initials: 'XXX', url: 'https://example.com' },
  { name: 'XXX', initials: 'XXX', url: 'https://example.com' },
  { name: 'XXX', initials: 'XXX', url: 'https://example.com' },
  { name: 'XXX', initials: 'XXX', url: 'https://example.com' },
];

export default function Clients() {
  return (
    <section id="clients" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-teal-light text-sm font-medium tracking-widest uppercase mb-3">Trusted By</p>
          <h2 className="text-3xl md:text-5xl font-bold max-w-3xl mx-auto text-foreground">
            Clients & Partners We've Met On Our Journey
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {clients.map((client, index) => {
            const isPlaceholder = client.name === 'XXX';

            if (isPlaceholder) {
              return (
                <div
                  key={index}
                  className="group flex items-center justify-center p-6 rounded-xl bg-dark-card/40 border border-gray-border/70 backdrop-blur-sm"
                  aria-label="Hidden client placeholder"
                >
                  <div className="text-center blur-[3px] opacity-80">
                    <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-gradient-to-br from-teal/20 to-dark-card border border-teal/15 flex items-center justify-center text-teal-light font-bold text-sm">
                      {client.initials}
                    </div>
                    <span className="text-sm text-gray-text font-medium">{client.name}</span>
                  </div>
                </div>
              );
            }

            return (
              <a
                key={index}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center p-6 rounded-xl bg-dark-card/50 border border-gray-border hover:border-teal/40 transition-all duration-300 cursor-pointer hover:bg-dark-card backdrop-blur-sm"
                aria-label={`Visit ${client.name}`}
              >
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-gradient-to-br from-teal/20 to-dark-card border border-teal/15 flex items-center justify-center text-teal-light font-bold text-sm group-hover:shadow-lg group-hover:shadow-teal/10 group-hover:border-teal/30 transition-all duration-300">
                    {client.initials}
                  </div>
                  <span className="text-sm text-gray-text group-hover:text-foreground transition-colors duration-300 font-medium">
                    {client.name}
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* See More Button */}
        <div className="mt-10 text-center">
          <button className="px-6 py-2.5 border border-gray-border text-gray-text text-sm font-medium rounded-full hover:border-teal/40 hover:text-foreground hover:bg-dark-card transition-all duration-300">
            + See More
          </button>
        </div>
      </div>
    </section>
  );
}
