import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { CalendarDays, Clock, User, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorCard from "@/components/AuthorCard";
import BlogSidebar from "@/components/BlogSidebar";
import { Button } from "@/components/ui/button";
import { getPostBySlug, SITE_URL } from "@/data/blogPosts";

const post = getPostBySlug("top-8-digital-marketing-agencies-in-ahmedabad")!;
const postUrl = `${SITE_URL}/blog/${post.slug}`;
const coverUrl = post.cover.startsWith("http") ? post.cover : `${SITE_URL}${post.cover}`;

const comparison = [
  ["SmartFish Designs", "Branding + web-led businesses", "Premium design + end-to-end digital execution"],
  ["Zero Gravity Communications", "Mid-size to enterprise brands", "Integrated branding & campaigns"],
  ["The Red Eyes", "Startups & ecommerce", "Performance marketing + AI adoption"],
  ["Digital Yudh", "Small businesses, early-stage", "Lean, hands-on execution"],
  ["Communication Crafts", "Enterprise & corporate brands", "Large-scale campaign management"],
  ["Digipple", "Lead-gen focused businesses", "ROI-driven ad campaigns"],
  ["Hitz Digital Marketing", "SMEs & local businesses", "Sustainable SEO growth + strong client retention"],
  ["Ocean Creasta", "Brand-first businesses wanting full-funnel execution", "Branding + performance marketing under one roof"],
];

const faqs = [
  {
    q: "Which is the best digital marketing agency in Ahmedabad?",
    a: "There isn't a single \"best\" — it depends on your stage and needs. For branding and web design that builds long-term trust, SmartFish Designs is a strong choice. For sustainable SEO and local visibility with a team that retains clients for years, Hitz Digital Marketing stands out. Startups wanting performance-driven growth may prefer agencies like The Red Eyes or Digipple.",
  },
  {
    q: "Which agency is best for startups specifically?",
    a: "Startups generally do better with lean, hands-on agencies (like Digital Yudh) or performance-focused ones (like The Red Eyes) rather than large enterprise-scale agencies, simply because of how budgets and attention are allocated at each size.",
  },
  {
    q: "How do I know if an agency is right for my business?",
    a: "Ask about their reporting process, request to see real (not just vanity-metric) case studies, and make sure their team size and process match your business stage — not the other way around.",
  },
  {
    q: "Do these agencies use AI tools?",
    a: "Most agencies in Ahmedabad now incorporate some AI into campaign optimization, reporting, or content systems as of 2026. It's worth asking each agency specifically how, rather than assuming based on their marketing copy.",
  },
  {
    q: "Is SEO or paid ads better for a startup in Ahmedabad?",
    a: "It depends on timeline. Paid ads generate faster visibility but stop the moment you stop spending. SEO takes longer to show results but builds compounding, long-term visibility. Most founders benefit from doing both, with the ratio shifting based on runway and goals.",
  },
  {
    q: "How long should I give an agency before judging results?",
    a: "For paid ads, you should see directional signals (cost per lead, click-through trends) within 4-6 weeks. For SEO, give it a minimum of 3-4 months before drawing conclusions — switching agencies too early usually just resets the clock rather than fixing the problem.",
  },
];

const agencies = [
  {
    name: "SmartFish Designs",
    body: [
      "SmartFish Designs has spent over a decade becoming one of Ahmedabad's most respected design-led digital agencies. What started as a branding and web design studio has matured into a full-service digital marketing team handling SEO, social media, advertising, and brand strategy under one roof. Their real edge is that they don't treat design and marketing as separate departments — they build brands that look premium and then use digital channels to drive actual business results from that foundation.",
      "From what I've observed in the market, SmartFish consistently delivers polished, high-converting websites and brand identities that hold up well against larger agencies. They're a strong choice if you believe — as I do — that your website and visual identity should do some of the selling for you before a single ad rupee is spent.",
    ],
    notes: [
      ["Best for", "Founders and business owners who want a brand that looks established and trustworthy from day one, backed by SEO and social media execution that builds on that design foundation."],
      ["Consultant observation", "In my experience, businesses that invest in proper brand identity and web design upfront often see better ad performance later, because the same traffic converts at a higher rate. SmartFish's design-first approach can pay off across every channel you use afterward."],
      ["What to ask them directly", "Ask to see live examples of websites they've designed and how those sites perform in organic search or paid campaigns post-launch — this tells you whether the design work translates into measurable growth."],
    ],
  },
  {
    name: "Zero Gravity Communications",
    body: [
      "Zero Gravity Communications is one of the more established integrated agencies operating out of Ahmedabad, with a presence in Mumbai as well, and over a decade in branding and digital campaigns. They work across brand strategy, content, performance marketing, and web development, and they've picked up industry recognition for social media and influencer campaigns for known consumer brands.",
    ],
    notes: [
      ["Best for", "Businesses that need a full-service partner — branding, content, and paid media under one roof — rather than piecing together multiple vendors. This tends to suit mid-size to larger brands more than very early-stage startups, given the scale they typically operate at."],
      ["Consultant observation", "Full-service agencies like this are efficient if your brand strategy and performance marketing genuinely need to move together. If you only need one piece — say, just paid ads — you may be paying for capabilities you won't fully use."],
    ],
  },
  {
    name: "The Red Eyes",
    body: [
      "The Red Eyes has been positioning itself around performance marketing combined with AI-driven marketing systems — SEO, Google Ads, Meta Ads, and ecommerce growth, aimed largely at startups and local businesses that want measurable, conversion-focused execution rather than brand-building for its own sake.",
    ],
    notes: [
      ["Best for", "Startups and ecommerce founders who want to see a direct line between marketing spend and leads or sales, and who are comfortable working with a newer, more aggressively growth-oriented agency."],
      ["Consultant observation", "Agencies leaning into AI-marketing positioning are increasingly common in 2026 — worth asking specifically how AI is used in your account (automation, reporting, targeting) rather than accepting it as a buzzword on a homepage."],
    ],
  },
  {
    name: "Digital Yudh",
    body: [
      "Digital Yudh operates at a smaller scale than some of the bigger names on this list, which can actually work in a founder's favor — you're more likely to deal directly with the people doing the work rather than being routed through several account layers. This suits early-stage businesses that need someone hands-on rather than a large retainer-driven setup.",
    ],
    notes: [
      ["Best for", "Very early-stage businesses or solo founders who want a lean, direct working relationship and don't yet need enterprise-scale campaign infrastructure."],
      ["What to verify", "With smaller teams, always ask who specifically will be managing your account day-to-day, and get clarity on reporting cadence upfront — it matters more here than with larger agencies that have process built in by default."],
    ],
  },
  {
    name: "Communication Crafts",
    body: [
      "Communication Crafts is one of Ahmedabad's more established names when it comes to enterprise-level branding and integrated campaigns — corporate communication, large-scale advertising, and social media for bigger organizations.",
    ],
    notes: [
      ["Best for", "Established businesses and corporate brands running large, multi-channel campaigns that need coordination across departments — not typically the right fit for an early-stage startup with a lean budget."],
      ["Consultant observation", "Larger, process-heavy agencies are worth it when your organization itself has that scale of complexity. If you're a 5-person startup, this level of infrastructure will usually cost more than it delivers at your current stage."],
    ],
  },
  {
    name: "Digipple",
    body: [
      "Digipple has built visibility specifically in performance marketing — Meta Ads, Google Ads, lead generation, and funnel-focused campaigns, aimed at businesses that want ROI-focused advertising over brand-awareness plays.",
    ],
    notes: [
      ["Best for", "Businesses — particularly real estate, coaching, and ecommerce — that already have decent landing pages and some conversion tracking in place and want an agency to scale paid acquisition on top of that foundation."],
      ["Consultant observation", "This is worth flagging clearly for founders: performance marketing agencies can only work with what you give them. If your landing pages, offer, or CRM aren't in reasonable shape, even a well-run ad account will underperform. Fix the foundation before scaling spend, regardless of which agency you choose."],
    ],
  },
  {
    name: "Hitz Digital Marketing",
    body: [
      "Hitz Digital Marketing has been operating in Ahmedabad since 2015, which in this industry means they've already outlasted most agencies that open and close within a few years. Their work centers on SEO, social media marketing, local SEO, Google Ads, and web design — with a clear focus on helping SMEs and local businesses grow sustainably rather than chasing short-term viral moments.",
      "What genuinely stands out about Hitz is the pattern of long-term client relationships. In SEO especially, repeat engagements are one of the strongest trust signals you can find, because organic growth takes consistent effort and clients don't renew unless they're seeing progress. That kind of stability is hard to fake and suggests a team that delivers steady, compounding visibility over time.",
    ],
    notes: [
      ["Best for", "SMEs, local businesses, and founders who want a reliable, long-term partner for SEO, local search visibility, and performance-driven social media — without the overhead of a large agency."],
      ["Consultant observation", "I've always believed that sustainable SEO growth beats quick wins. Hitz's focus on long-term relationships aligns well with how real organic growth works — small, consistent improvements that build into a durable competitive advantage."],
      ["What to verify", "Ask for specific examples of local SEO or organic ranking improvements they've achieved for businesses similar to yours, and how they report progress month to month."],
    ],
  },
  {
    name: "Ocean Creasta",
    body: [
      "Ocean Creasta is a branding and digital marketing agency that positions itself around full-funnel execution — brand strategy and identity work on one side, and performance marketing, Google and Meta Ads, CRM, and marketing automation on the other. It's a newer name compared to some of the more established agencies on this list, but the founding team's background traces back to more established Ahmedabad branding shops, which shows in how design-led their positioning still is even with performance services layered on top.",
    ],
    notes: [
      ["Best for", "Startups and businesses that want brand identity and paid acquisition to be handled by the same team rather than split across two vendors — useful when you don't want your brand messaging to feel disconnected from what your ads are actually saying."],
      ["Consultant observation", "Agencies that pair branding with performance marketing under one roof can be genuinely efficient, but it's worth checking the depth of the team on both sides — some agencies are strong in design and comparatively thinner on the ad-operations side, or vice versa. Ask to see recent work in both categories before assuming both are equally solid."],
    ],
  },
];

const advice = [
  ["Match the agency to your stage, not their size.", "A large, process-heavy agency isn't automatically \"better\" — if you're pre-revenue, a lean team that moves fast will usually serve you better than a big agency built for enterprise scale."],
  ["Ask for reporting details before signing, not after.", "How often will you get updates, and will they show you actual numbers (leads, conversions, cost per acquisition) or just impressions and reach?"],
  ["Fix your foundation first.", "No agency — however good — can make a weak landing page, unclear offer, or untracked website convert well. That part is on the business, not the agency."],
  ["Be wary of guaranteed rankings or unrealistic promises.", "Nobody can guarantee a #1 Google ranking or a fixed number of leads. Agencies that promise this are usually setting expectations they can't control."],
  ["Ask about AI adoption specifically, not generically.", "In 2026, most agencies will mention AI somewhere on their site. Ask what it actually changes in your account — automation, reporting, or targeting — rather than taking it as a given."],
  ["Start with a short trial period or smaller scope, not a full annual retainer.", "A 2-3 month working period tells you far more about how an agency communicates, reports, and adapts than any pitch deck will. Most reputable agencies are open to this; the ones who insist on long lock-ins upfront are worth a second look."],
  ["Don't confuse a good sales call with good execution.", "The person pitching you often isn't the person who'll be running your account day-to-day. Ask directly who will actually manage your campaigns once you sign, and how often you'll be able to reach them."],
];

const Top8AgenciesAhmedabad = () => {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      image: coverUrl,
      url: postUrl,
      articleSection: post.category,
      datePublished: post.datePublished,
      dateModified: post.dateModified,
      inLanguage: "en-IN",
      mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
      keywords: post.keywords.join(", "),
      author: {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Hitesh Jaganiya",
        url: `${SITE_URL}/`,
        jobTitle: "Digital Marketing Consultant",
      },
      publisher: {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Hitz Digital Marketing",
        url: "https://www.hitzdigitalmarketing.com/",
        logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.ico` },
      },
      about: { "@type": "Place", name: "Ahmedabad, Gujarat, India" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: postUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: post.title,
      itemListOrder: "https://schema.org/ItemListUnordered",
      numberOfItems: agencies.length,
      itemListElement: agencies.map((agency, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: agency.name,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{post.title} (2026 Guide)</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={post.keywords.join(", ")} />
        <meta name="author" content="Hitesh Jaganiya" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="alternate" hrefLang="en-IN" href={postUrl} />
        <meta property="article:published_time" content={post.datePublished} />
        <meta property="article:modified_time" content={post.dateModified} />
        <meta property="article:section" content={post.category} />
        <link rel="canonical" href={postUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content={postUrl} />
        <meta property="og:image" content={coverUrl} />
        <meta property="og:image:alt" content={post.coverAlt} />
        <meta property="og:site_name" content="Hitesh Jaganiya" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={coverUrl} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <Header />

      <main className="pt-28 md:pt-36">
        <article className="section-padding pt-0">
          <div className="container-custom">
            <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-12 items-start">
              <div className="max-w-3xl">
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
                <ol className="flex flex-wrap items-center gap-2">
                  <li>
                    <Link to="/" className="hover:text-foreground">Home</Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li>
                    <Link to="/blog" className="hover:text-foreground">Blog</Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li className="text-foreground font-medium">Top 8 Agencies in Ahmedabad</li>
                </ol>
              </nav>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Top 8 Digital Marketing Agencies in Ahmedabad
              </h1>

              <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground mb-8">
                <span className="inline-flex items-center gap-1.5">
                  <User className="w-4 h-4" /> By Hitesh Jaganiya
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="w-4 h-4" /> 9 Sep 2026
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-4 h-4" /> {post.readingTime}
                </span>
              </div>

              <img
                src={post.cover}
                alt={post.coverAlt}
                width={1712}
                height={936}
                className="w-full rounded-2xl border border-border mb-10"
              />

              <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                <p>
                  If you're a founder in Ahmedabad trying to shortlist a digital marketing
                  agency, you've probably already noticed the problem: everyone claims to
                  be "the best," half the "top 10" lists online are written by agencies
                  ranking themselves, and it's genuinely hard to tell who actually does
                  the work versus who's just good at marketing themselves.
                </p>
                <p>
                  I'm{" "}
                  <Link to="/" className="text-primary font-semibold hover:underline">
                    Hitesh Jaganiya
                  </Link>
                  . I've spent the last 11 years working in digital marketing in Ahmedabad
                  — SEO, Google Ads, and building growth strategies for businesses across
                  different stages. I'm Google Ads and Google Analytics certified, and
                  I've also worked with HubSpot and SEMrush on the strategy and reporting
                  side. This is meant to be a straightforward reference for founders who
                  are deciding where to invest their marketing budget, based on how these
                  agencies actually position themselves in the market.
                </p>
                <p>
                  Ahmedabad's digital marketing scene has changed a lot even in the last
                  few years. It used to be dominated by a handful of web design shops that
                  added "SEO" and "social media" to their service list almost as an
                  afterthought. That's not the case anymore — there's real specialization
                  now, with agencies clearly leaning into either branding, performance
                  marketing, or SEO as their core identity, and building teams around that
                  focus. That's actually good news for founders, because it means you can
                  match an agency to what you specifically need instead of hiring a
                  generalist and hoping for the best.
                </p>
                <p>
                  A quick note on how I approached this: I looked at each agency's core
                  service focus, who they're built to serve, publicly available client
                  feedback, and how long they've been operating in the market — longevity
                  matters more in this industry than people realize, since agencies that
                  don't deliver tend not to last long on repeat business. I haven't
                  included pricing because it varies too much by scope, industry, and
                  campaign size to be useful in a list like this — that's a conversation
                  you should have directly with any agency you shortlist, and I'd be
                  cautious of anyone who quotes a number before understanding your
                  business.
                </p>
              </div>

              {/* Comparison table */}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-14 mb-6">
                Quick comparison
              </h2>
              <div className="overflow-x-auto rounded-2xl border border-border">
                <table className="w-full text-left text-sm md:text-base">
                  <thead className="bg-secondary/50">
                    <tr>
                      <th scope="col" className="px-5 py-4 font-semibold text-foreground">Agency</th>
                      <th scope="col" className="px-5 py-4 font-semibold text-foreground">Best for</th>
                      <th scope="col" className="px-5 py-4 font-semibold text-foreground">Core strength</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map(([name, best, strength]) => (
                      <tr key={name} className="border-t border-border">
                        <td className="px-5 py-4 font-semibold text-foreground">{name}</td>
                        <td className="px-5 py-4 text-muted-foreground">{best}</td>
                        <td className="px-5 py-4 text-muted-foreground">{strength}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Agencies */}
              {agencies.map((agency, index) => (
                <section key={agency.name} className="mt-14">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                    {index + 1}. {agency.name}
                  </h2>
                  <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                    {agency.body.map((paragraph) => (
                      <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-6 space-y-4">
                    {agency.notes.map(([label, text]) => (
                      <div
                        key={label}
                        className="p-5 bg-secondary/40 rounded-xl border border-border"
                      >
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">{label}:</strong> {text}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              ))}

              {/* Advice */}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-16 mb-6">
                What I'd actually tell a founder before hiring any of these
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A few things I've seen matter more than agency reputation, after 11 years
                of doing this:
              </p>
              <ul className="space-y-5">
                {advice.map(([heading, text]) => (
                  <li key={heading} className="text-lg text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">{heading}</strong> {text}
                  </li>
                ))}
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                None of this is unique to Ahmedabad — it's the same due diligence I'd
                suggest to a founder anywhere in India. But it matters more here simply
                because the market has grown fast enough that quality varies widely
                between agencies that look almost identical on paper.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-5">
                This list isn't exhaustive, and it isn't a ranking — Ahmedabad has a
                genuinely active digital marketing scene, and "best" depends entirely on
                your stage, budget, and what you're trying to achieve. If it's useful, you
                can see{" "}
                <Link to="/#services" className="text-primary font-semibold hover:underline">
                  the services I offer
                </Link>{" "}
                and{" "}
                <Link to="/#results" className="text-primary font-semibold hover:underline">
                  the results I've delivered
                </Link>{" "}
                for businesses in Ahmedabad.
              </p>

              <div className="mt-12 p-6 bg-secondary/40 rounded-2xl border border-border">
                <p className="text-sm font-semibold text-foreground mb-2">Related reading</p>
                <p className="text-muted-foreground">
                  Comparing agencies is only half the decision. Read the guide to <Link to="/blog/digital-marketing-packages-in-ahmedabad" className="text-primary font-semibold hover:underline">digital marketing package pricing in Ahmedabad</Link> before you request quotes.
                </p>
              </div>

              {/* FAQ */}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-16 mb-6">
                Frequently asked questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div key={faq.q} className="p-6 bg-card rounded-xl border border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </div>
                ))}
              </div>

              <AuthorCard />

              {/* CTA */}
              <div className="mt-12 p-8 bg-secondary/40 rounded-2xl border border-border text-center">
                <h2 className="text-2xl font-bold text-foreground mb-3">
                  Still not sure who to hire?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Tell me where your business is right now and I'll tell you honestly
                  whether you need an agency, a consultant, or just a better foundation.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg">
                    <Link to="/#contact">
                      Let's talk <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/blog">Read more articles</Link>
                  </Button>
                </div>
              </div>
              </div>
              <BlogSidebar />
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Top8AgenciesAhmedabad;
