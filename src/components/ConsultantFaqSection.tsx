const faqs = [
  {
    question: "What does a digital marketing consultant do?",
    answer:
      "A digital marketing consultant helps a business decide where marketing effort and budget should go, then turns that strategy into practical work across SEO, Google Ads, content, analytics and conversion optimization. The goal is not simply more traffic; it is better-qualified enquiries, customers and measurable growth.",
  },
  {
    question: "Why hire a digital marketing consultant in Ahmedabad?",
    answer:
      "A consultant based in Ahmedabad can understand the local business environment while still applying broader digital marketing practices. For businesses targeting Ahmedabad, this can be useful for local SEO, Google Business Profile visibility, location-based search intent, paid advertising and choosing channels that fit the market and customer journey.",
  },
  {
    question: "How much does digital marketing consulting cost in Ahmedabad?",
    answer:
      "There is no sensible single price for every business. Cost depends on the business model, competition, goals, existing assets and how much execution is required. A good starting point is to define the business objective first and then decide which strategy, channels and level of support are actually needed.",
  },
  {
    question: "Should a business start with SEO or Google Ads?",
    answer:
      "It depends on the customer journey, urgency, competition and available budget. Google Ads can provide faster testing and demand capture, while SEO can build a longer-term acquisition channel. My comparison of Google Ads and Meta Ads explains how I think about paid-channel selection, and the SEO guides on this site go deeper into organic growth.",
  },
];

const ConsultantFaqSection = () => {
  return (
    <section className="section-padding bg-background" aria-labelledby="consultant-faq-heading">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Common Questions
            </span>
            <h2 id="consultant-faq-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Questions Before Hiring a Digital Marketing Consultant
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-10">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultantFaqSection;
