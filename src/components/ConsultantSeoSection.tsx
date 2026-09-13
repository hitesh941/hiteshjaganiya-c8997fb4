import { Link } from "react-router-dom";

const ConsultantSeoSection = () => {
  return (
    <section className="section-padding bg-background" aria-labelledby="consultant-guide-heading">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Digital Marketing Consulting in Ahmedabad
          </span>
          <h2 id="consultant-guide-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-7 text-balance">
            What a Digital Marketing Consultant in Ahmedabad Actually Does
          </h2>

          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              A digital marketing consultant is not simply someone who manages ads or posts on social media. The real job is to understand how a business acquires customers, identify where marketing is losing opportunities, and build a practical plan around the channels most likely to create profitable growth.
            </p>
            <p>
              As a <strong className="text-foreground">digital marketing consultant in Ahmedabad</strong>, I work across SEO, Google Ads, analytics, conversion optimization, content and broader digital strategy. The exact mix depends on the business. A local service company may need stronger local SEO and lead-generation campaigns, while a startup may first need positioning, measurement and a controlled testing budget before scaling acquisition.
            </p>
            <p>
              My approach starts with the business rather than a fixed package. We look at the target customer, existing visibility, competitors, conversion journey, available budget and the numbers that matter. From there, the work can include search strategy, Google Ads, SEO, landing-page improvements, analytics and ongoing performance analysis. This is also why I prefer clear reporting and realistic expectations over promises of instant rankings or guaranteed results.
            </p>
            <p>
              If you are comparing channels, you can read my practical guide on <Link className="text-primary font-medium hover:underline" to="/blog/google-ads-vs-meta-ads-ahmedabad">Google Ads vs Meta Ads for Ahmedabad businesses</Link>. For businesses in property and real estate, I have also documented a more specific <Link className="text-primary font-medium hover:underline" to="/blog/seo-for-real-estate-businesses-in-ahmedabad">SEO approach for Ahmedabad real estate businesses</Link>. And if you are deciding what level of marketing support you actually need, my guide to <Link className="text-primary font-medium hover:underline" to="/blog/digital-marketing-packages-in-ahmedabad">digital marketing packages in Ahmedabad</Link> breaks down the practical differences between lower and higher levels of investment.
            </p>
            <p>
              The important thing is not to hire more marketing simply because competitors are doing it. Start with the business objective, choose the smallest sensible test, measure what happened and then invest more where the evidence supports it. That is the principle I use when advising founders and established businesses alike.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultantSeoSection;
