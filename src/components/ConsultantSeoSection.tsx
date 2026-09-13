import { Link } from "react-router-dom";

const ConsultantSeoSection = () => {
  return (
    <section
      className="section-padding bg-muted/30 border-y border-border/60"
      aria-labelledby="consultant-guide-heading"
    >
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mb-14">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Digital Marketing Consulting in Ahmedabad
            </span>
            <h2
              id="consultant-guide-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance"
            >
              What a Digital Marketing Consultant in Ahmedabad Actually Does
            </h2>
            <div className="mt-6 max-w-3xl space-y-2 text-lg md:text-xl leading-relaxed text-muted-foreground">
              <p>Most people picture ads and social posts.</p>
              <p>That&apos;s the output. It&apos;s not the job.</p>
              <p>
                The job is finding out where your business is losing customers, and fixing that
                before spending more to attract new ones.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 lg:gap-7">
            <article className="group rounded-2xl border border-border bg-background p-7 md:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-start justify-between gap-6 mb-6">
                <span className="text-sm font-semibold tracking-[0.18em] text-primary">01</span>
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  First two weeks
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                The first two weeks are not campaign weeks
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Before anything launches, I look at where your enquiries come from today,
                  what&apos;s being tracked and what isn&apos;t, what competitors are ranking for, and
                  what actually happens after someone lands on your site.
                </p>
                <p>
                  Something obvious almost always surfaces here. Ad spend going to search terms
                  that never convert. A landing page quietly losing most of its traffic. Call
                  enquiries that nobody is counting. A GA4 property that&apos;s been installed and
                  never looked at since. These aren&apos;t rare problems — they&apos;re the normal state of
                  most businesses I audit.
                </p>
                <p className="font-medium text-foreground">Fixing those usually beats increasing the budget.</p>
              </div>
            </article>

            <article className="group rounded-2xl border border-border bg-background p-7 md:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-start justify-between gap-6 mb-6">
                <span className="text-sm font-semibold tracking-[0.18em] text-primary">02</span>
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Test and learn
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Then we run the smallest useful test
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Not a full rebuild. Not every channel at once.</p>
                <p>
                  One change we can measure inside a month. If it works, it gets more budget. If
                  it doesn&apos;t, it gets dropped and we try the next thing.
                </p>
                <blockquote className="border-l-2 border-primary/30 pl-4 py-1 text-base italic text-muted-foreground">
                  Most businesses skip this step and launch five things at once. Then when results
                  move, nobody knows which one caused it.
                </blockquote>
                <p>
                  That loop is the whole method. It&apos;s unglamorous, and it&apos;s why the work
                  compounds instead of resetting every quarter.
                </p>
              </div>
            </article>

            <article className="group rounded-2xl border border-border bg-background p-7 md:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-start justify-between gap-6 mb-6">
                <span className="text-sm font-semibold tracking-[0.18em] text-primary">03</span>
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  No fixed package
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                The mix depends entirely on the business
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>There&apos;s no fixed package here.</p>
                <p>
                  A local service business usually needs local SEO and a lead-gen campaign that
                  actually converts calls. An e-commerce brand usually needs the leaks fixed
                  before more traffic goes in. A founder launching something new usually needs
                  positioning and clean measurement before spending a rupee on scale.
                </p>
                <p>
                  Across apparel, e-commerce, FMCG, real estate and local services, the pattern
                  holds: the businesses that grow are the ones that measure honestly and act on
                  what the numbers say — not the ones that spend the most.
                </p>
              </div>
            </article>

            <article className="group rounded-2xl border border-border bg-foreground text-background p-7 md:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-start justify-between gap-6 mb-6">
                <span className="text-sm font-semibold tracking-[0.18em] text-primary">04</span>
                <span className="text-xs font-medium uppercase tracking-wider text-background/60">
                  No empty promises
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-background mb-4">What I won&apos;t promise</h3>
              <div className="space-y-4 text-background/75 leading-relaxed">
                <p className="font-medium text-background">
                  Guaranteed rankings. Results in thirty days. A number I can&apos;t defend.
                </p>
                <p>
                  Anyone offering those is either new to this or hoping you won&apos;t check. What
                  you&apos;ll get from me instead is a plan you understand, reporting you can read
                  yourself, and a straight answer when something isn&apos;t working.
                </p>
              </div>
            </article>
          </div>

          <div className="mt-8 rounded-2xl border border-primary/20 bg-background p-7 md:p-8 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
                Need an honest second opinion?
              </p>
              <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed">
                Not sure what your business actually needs right now? Call or WhatsApp me on{" "}
                <a
                  href="tel:9998311492"
                  className="text-primary hover:underline whitespace-nowrap"
                >
                  9998311492
                </a>{" "}
                — happy to give you an honest read, even if the answer is that you don&apos;t need
                me yet.
              </p>
            </div>
            <Link
              to="/#contact"
              className="inline-flex shrink-0 items-center justify-center rounded-lg bg-primary px-6 py-3 mt-6 lg:mt-0 font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
            >
              Talk to Hitesh
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultantSeoSection;
