import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, CalendarDays, Clock, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorCard from "@/components/AuthorCard";
import BlogSidebar from "@/components/BlogSidebar";
import BlogBreadcrumbs from "@/components/BlogBreadcrumbs";
import { getPostBySlug, SITE_URL } from "@/data/blogPosts";

const post = getPostBySlug("what-is-competitive-benchmarking-beginners-guide")!;
const postUrl = `${SITE_URL}/blog/${post.slug}`;
const coverUrl = `${SITE_URL}${post.cover}`;

const faqItems = [
  {
    question: "How often should I run a competitive benchmarking analysis?",
    answer: "Twice a year is enough for most businesses. Monthly benchmarking tends to capture normal fluctuation rather than meaningful change, and it takes time away from actually acting on what you found last time.",
  },
  {
    question: "How many competitors should I benchmark against?",
    answer: "Three to five. Fewer than three and one outlier can distort the picture; more than five can make the exercise heavy enough that it does not get repeated.",
  },
  {
    question: "What's the difference between competitive benchmarking and competitor analysis?",
    answer: "Competitor analysis is broad and qualitative — understanding positioning, offers, and approach. Benchmarking is narrower and quantitative — comparing specific, measurable metrics side by side.",
  },
  {
    question: "Can I benchmark without paid SEO tools?",
    answer: "Yes, for a solid first pass. Google Search Console, PageSpeed Insights, Google Business Profile, and manual site checks cover most of what a beginner needs. Paid tools mainly add depth on keywords and backlinks.",
  },
  {
    question: "How do I benchmark PR results against competitors?",
    answer: "Set up Google Alerts for their brand names, check which publications cover them, and track mentions over a fixed period alongside your own. Look for patterns in which outlets cover your space and who they treat as a credible source — not raw mention counts.",
  },
];

const WhatIsCompetitiveBenchmarking = () => {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${postUrl}#article`,
      headline: post.title,
      description: post.description,
      image: [coverUrl],
      url: postUrl,
      datePublished: `${post.datePublished}T09:00:00+05:30`,
      dateModified: `${post.dateModified}T09:00:00+05:30`,
      inLanguage: "en-IN",
      articleSection: post.category,
      keywords: post.keywords.join(", "),
      mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
      author: {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Hitesh Jaganiya",
        url: `${SITE_URL}/`,
        jobTitle: "Digital Marketing Consultant",
      },
      publisher: {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Hitesh Jaganiya",
        url: `${SITE_URL}/`,
      },
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
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{post.title} | Hitesh Jaganiya</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={post.keywords.join(", ")} />
        <meta name="author" content="Hitesh Jaganiya" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href={postUrl} />
        <link rel="alternate" hrefLang="en-IN" href={postUrl} />
        <meta property="article:published_time" content={post.datePublished} />
        <meta property="article:modified_time" content={post.dateModified} />
        <meta property="article:section" content={post.category} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Hitesh Jaganiya" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content={postUrl} />
        <meta property="og:image" content={coverUrl} />
        <meta property="og:image:alt" content={post.coverAlt} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={coverUrl} />
        <meta name="twitter:image:alt" content={post.coverAlt} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <Header />
      <main className="pt-28 md:pt-36">
        <article className="section-padding pt-0">
          <div className="container-custom">
            <BlogBreadcrumbs />

            <div className="grid lg:grid-cols-[minmax(0,1fr)_360px] gap-6 items-start">
              <div className="min-w-0">
                <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline mb-7">
                  <ArrowLeft className="w-4 h-4" /> Back to blog
                </Link>

                <header className="mb-10">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                      Digital Strategy
                    </span>
                  </div>

                  <h1 className="max-w-4xl text-3xl md:text-5xl lg:text-[3.65rem] font-bold text-foreground leading-[1.08] tracking-tight text-balance mb-6">
                    {post.title}
                  </h1>

                  <p className="max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-7">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground mb-8">
                    <span className="inline-flex items-center gap-2"><CalendarDays className="w-4 h-4" />August 9, 2026</span>
                    <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4" />8 min read</span>
                    <span className="inline-flex items-center gap-2"><User className="w-4 h-4" />Hitesh Jaganiya</span>
                  </div>

                  <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                    <img
                      src={post.cover}
                      alt={post.coverAlt}
                      width="1200"
                      height="630"
                      className="w-full aspect-[16/7] object-cover"
                    />
                  </div>
                </header>

                <div className="max-w-4xl space-y-10 text-[17px] md:text-[18px] text-muted-foreground leading-[1.8]">
                  <section>
                    <p>Most business owners already do a rough version of this without calling it anything. You check what a competitor is posting, notice their website looks faster than yours, or hear they're ranking above you for a search term you care about. That's the instinct behind competitive benchmarking — it just isn't benchmarking yet, because there's no measurement and no decision attached to it.</p>
                    <p>I'm Hitesh Jaganiya, a digital marketing consultant with 11 years of experience. This is a beginner's guide to what competitive benchmarking actually is, how to run one properly, and — the part most guides skip — where it stops being useful.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">What Competitive Benchmarking Actually Means</h2>
                    <p><strong className="text-foreground">Competitive benchmarking</strong> is the practice of measuring your own performance against specific competitors on specific, comparable metrics, so you can tell whether a number is genuinely good or just feels good.</p>
                    <p>That last part matters more than people expect. A 3% conversion rate means nothing on its own. If your closest competitors are converting at 1.5%, you're doing well. If they're at 7%, you have a problem you didn't know about. The number didn't change — the context did. That's the entire value of benchmarking.</p>
                    <p>It's different from general competitor research, which tends to be qualitative and open-ended ("what are they doing?"). Benchmarking is narrower and comparative ("how do we measure against them on this one thing?").</p>

                    <figure className="my-10 overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                      <img
                        src="/competitive-benchmarking-framework.svg"
                        alt="Competitive benchmarking framework showing the three steps: measure, compare and act"
                        width="1200"
                        height="675"
                        loading="lazy"
                        className="w-full h-auto"
                      />
                      <figcaption className="px-6 py-4 text-sm text-muted-foreground">The useful benchmarking loop: measure a comparable metric, compare the right competitors, and act on the gap.</figcaption>
                    </figure>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">What You Can Actually Benchmark</h2>
                    <p>Not everything is worth measuring. These are the areas where comparison genuinely tells you something:</p>
                    <h3 className="text-xl font-bold text-foreground">Search visibility</h3>
                    <p>Which keywords your competitors rank for that you don't, their estimated organic traffic, and how many domains link to them versus you.</p>
                    <h3 className="text-xl font-bold text-foreground">Website performance</h3>
                    <p>Page load speed, mobile usability, and how many steps their checkout or enquiry process takes compared to yours.</p>
                    <h3 className="text-xl font-bold text-foreground">Paid advertising</h3>
                    <p>Which keywords they're bidding on, roughly how aggressive their spend looks, and what messaging their ads lead with.</p>
                    <h3 className="text-xl font-bold text-foreground">Social and content</h3>
                    <p>Posting frequency, engagement rate relative to follower count (not raw follower numbers, which are easy to inflate), and what content formats they invest in.</p>
                    <h3 className="text-xl font-bold text-foreground">PR and earned media</h3>
                    <p>This is the most overlooked category for small businesses. <strong className="text-foreground">Benchmarking PR results against competitors</strong> means tracking how often they're mentioned in industry publications, whether they're quoted as sources, and what kind of publications cover them. If a competitor appears in trade press regularly and you never do, that's a visibility gap that quietly affects everything else — including how search engines and AI systems assess authority in your space.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">A Competitor Benchmarking Example</h2>
                    <p>Abstract explanations of this rarely land, so here's a concrete <strong className="text-foreground">competitor benchmarking example</strong>.</p>
                    <p>Say you run a mid-sized furniture retailer in Ahmedabad and you want to understand why your online enquiries are flat. You pick three genuine competitors — businesses of roughly your size, selling to roughly your customers. Not the national chains, because their scale makes the comparison meaningless.</p>
                    <p>You measure four things across all four businesses, including yourself:</p>

                    <figure className="my-10 overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                      <img
                        src="/competitive-benchmarking-scorecard.svg"
                        alt="Competitor benchmarking scorecard comparing organic keywords, mobile load time, Google reviews and blog output"
                        width="1200"
                        height="675"
                        loading="lazy"
                        className="w-full h-auto"
                      />
                      <figcaption className="px-6 py-4 text-sm text-muted-foreground">A side-by-side scorecard makes the gaps visible enough to act on.</figcaption>
                    </figure>

                    <div className="overflow-x-auto rounded-2xl border border-border bg-card my-8">
                      <table className="w-full min-w-[680px] text-left text-sm">
                        <caption className="sr-only">Competitor benchmarking example for a mid-sized furniture retailer</caption>
                        <thead className="bg-muted/60 text-foreground">
                          <tr><th className="px-4 py-3 font-semibold">Metric</th><th className="px-4 py-3 font-semibold">You</th><th className="px-4 py-3 font-semibold">Competitor A</th><th className="px-4 py-3 font-semibold">Competitor B</th><th className="px-4 py-3 font-semibold">Competitor C</th></tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                          <tr><td className="px-4 py-3">Organic keywords ranking top 10</td><td className="px-4 py-3">42</td><td className="px-4 py-3">180</td><td className="px-4 py-3">65</td><td className="px-4 py-3">38</td></tr>
                          <tr><td className="px-4 py-3">Homepage load time (mobile)</td><td className="px-4 py-3">6.1s</td><td className="px-4 py-3">2.8s</td><td className="px-4 py-3">3.4s</td><td className="px-4 py-3">5.9s</td></tr>
                          <tr><td className="px-4 py-3">Google reviews</td><td className="px-4 py-3">24</td><td className="px-4 py-3">210</td><td className="px-4 py-3">88</td><td className="px-4 py-3">31</td></tr>
                          <tr><td className="px-4 py-3">Blog posts published last 6 months</td><td className="px-4 py-3">2</td><td className="px-4 py-3">24</td><td className="px-4 py-3">9</td><td className="px-4 py-3">0</td></tr>
                        </tbody>
                      </table>
                    </div>

                    <p>Now the picture is specific rather than vague. You're competitive with Competitor C. Competitor A is meaningfully ahead on every axis, and the review gap is the starkest — 210 versus your 24 is not a small difference, and it directly affects both local search ranking and whether someone chooses to visit you.</p>
                    <p>That table turns "we should do more marketing" into three actual decisions: fix the site speed, start asking customers for reviews systematically, and publish content consistently rather than twice in six months.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">How to Run a Competitor Benchmarking Analysis</h2>
                    <p>The process itself is simple enough that most businesses can do a first pass without hiring anyone.</p>
                    <h3 className="text-xl font-bold text-foreground">1. Pick three to five real competitors</h3>
                    <p>Real means: similar size, similar customers, similar market. The most common mistake here is benchmarking against a company so much larger that nothing you learn is actionable.</p>
                    <h3 className="text-xl font-bold text-foreground">2. Choose metrics tied to a decision</h3>
                    <p>If you won't change anything based on a number, don't collect it. This keeps the exercise from turning into a report nobody reads.</p>
                    <h3 className="text-xl font-bold text-foreground">3. Collect the data</h3>
                    <p>Free sources get you surprisingly far — Google Search Console for your own numbers, PageSpeed Insights for load times, Google Business Profile for review counts, and manual checks of their site and social. Paid tools like SEMrush or Ahrefs add keyword and backlink depth if you have access.</p>
                    <h3 className="text-xl font-bold text-foreground">4. Put it in one table</h3>
                    <p>A single side-by-side view, like the one above, does more than pages of written analysis.</p>
                    <h3 className="text-xl font-bold text-foreground">5. Pick two things to act on</h3>
                    <p>Not ten. A <strong className="text-foreground">competitor benchmarking analysis</strong> that produces a long list of gaps usually produces no change at all, because nothing gets prioritised.</p>
                    <h3 className="text-xl font-bold text-foreground">6. Re-run it in six months</h3>
                    <p>A single snapshot tells you where you stand. Repeating it tells you whether you're catching up or falling behind, which is the more useful question.</p>

                    <figure className="my-10 overflow-hidden rounded-3xl border border-border shadow-sm">
                      <img
                        src="/competitive-benchmarking-cycle.svg"
                        alt="Six-month competitive benchmarking cycle from choosing competitors and metrics to acting on gaps and repeating the measurement"
                        width="1200"
                        height="675"
                        loading="lazy"
                        className="w-full h-auto"
                      />
                      <figcaption className="px-6 py-4 bg-card text-sm text-muted-foreground">Keep the process small enough to repeat: benchmark, act, then measure again six months later.</figcaption>
                    </figure>

                    <p>If you are measuring digital performance, my guide to <Link to="/blog/how-to-read-google-analytics-search-console-without-an-agency" className="font-semibold text-primary hover:underline">reading Google Analytics and Search Console without an agency</Link> can help you separate useful signals from dashboard noise.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">Where Benchmarking Goes Wrong</h2>
                    <p>This is the part I'd want a beginner to read most carefully, because benchmarking has a failure mode that looks like success.</p>
                    <h3 className="text-xl font-bold text-foreground">Copying instead of learning</h3>
                    <p>If a competitor posts daily on Instagram, that tells you they post daily. It doesn't tell you it's working, or that it would work for you. You're seeing their activity, not their results — and matching someone else's activity is not a strategy.</p>
                    <h3 className="text-xl font-bold text-foreground">Benchmarking outcomes you can't control</h3>
                    <p>It's tempting to compare revenue or market share, but those are downstream of dozens of factors. Comparing capabilities — how fast your site is, how consistently you publish, how systematically you collect reviews — is more useful, because those are things you can actually change.</p>
                    <h3 className="text-xl font-bold text-foreground">Treating parity as the goal</h3>
                    <p>Matching your competitors means being equivalent to them. That's a floor, not an ambition. The genuinely useful benchmarking insights are usually the gaps nobody is filling, not the ones everyone has already closed.</p>
                    <p>There's a real research angle to this last point that goes deeper than a beginner's guide needs — I've written separately about <Link to="/blog/smart-objectives-competitive-benchmarking" className="font-semibold text-primary hover:underline">what the academic research actually says about benchmarking KPIs against competitors</Link>, including the evidence on when competitor-focused measurement helps and when it backfires.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">Is Competitive Benchmarking Worth Doing?</h2>
                    <p>For most small and mid-sized businesses, yes — with the caveat that it's a diagnostic tool, not a strategy. Benchmarking tells you where you stand and where the obvious gaps are. It doesn't tell you what to do about them, and it will never tell you what your competitors haven't thought of yet.</p>
                    <p>Do it once, act on two things, and repeat it in six months. That's genuinely enough to get most of the value.</p>
                    <p>If your benchmarking identifies paid-media gaps, you can also compare them with my practical guide to <Link to="/blog/google-ads-optimization-moves-experts" className="font-semibold text-primary hover:underline">Google Ads optimization</Link>. For local businesses, the guide to <Link to="/blog/business-not-showing-google-maps-ahmedabad" className="font-semibold text-primary hover:underline">Google Maps visibility in Ahmedabad</Link> covers another useful competitive visibility check.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">Frequently Asked Questions</h2>
                    <div className="space-y-7">
                      {faqItems.map((item) => (
                        <div key={item.question}>
                          <h3 className="text-xl font-bold text-foreground">{item.question}</h3>
                          <p>{item.answer}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <div className="rounded-3xl border border-border bg-card p-7 md:p-9">
                    <h2 className="text-2xl font-bold text-foreground mt-0">Want to turn competitor gaps into a practical marketing plan?</h2>
                    <p className="mb-0">Use benchmarking to find the gaps first, then decide what deserves your time and budget. You can <Link to="/#contact" className="font-semibold text-primary hover:underline">talk to Hitesh about your marketing plan</Link> if you want a second pair of eyes on the numbers.</p>
                  </div>
                </div>

                <div className="mt-12"><AuthorCard /></div>
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

export default WhatIsCompetitiveBenchmarking;
