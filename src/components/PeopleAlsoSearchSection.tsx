const searchTerms = [
  "Digital Marketing Consultant in Ahmedabad",
  "SEO Expert in Ahmedabad",
  "SEO Consultant in Ahmedabad",
  "Google Ads Expert in Ahmedabad",
  "Google Ads Consultant in Ahmedabad",
  "PPC Expert in Ahmedabad",
  "Local SEO Expert in Ahmedabad",
  "Performance Marketing Consultant in Ahmedabad",
];

const PeopleAlsoSearchSection = () => {
  return (
    <section className="border-t border-border/60 bg-background py-12 md:py-16">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.18em] text-primary mb-3">
            Related Expertise
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-3">
            People Also Search For — Hitesh Jaganiya
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mb-8">
            Looking for help with SEO, Google Ads, or digital marketing in Ahmedabad? Explore the areas I work in.
          </p>

          <div className="flex flex-wrap justify-center gap-x-3 gap-y-3">
            {searchTerms.map((term) => (
              <span
                key={term}
                className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2.5 text-sm text-foreground"
              >
                {term}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeopleAlsoSearchSection;
