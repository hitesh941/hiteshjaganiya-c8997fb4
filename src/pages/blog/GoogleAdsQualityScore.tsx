import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, CalendarDays, Clock, User, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorCard from "@/components/AuthorCard";
import BlogSidebar from "@/components/BlogSidebar";
import BlogBreadcrumbs from "@/components/BlogBreadcrumbs";
import { getPostBySlug, SITE_URL } from "@/data/blogPosts";

const post = getPostBySlug("google-ads-quality-score-explained")!;
const postUrl = `${SITE_URL}/blog/${post.slug}`;
const coverUrl = `${SITE_URL}${post.cover}`;
const infographicUrl = `${SITE_URL}/google-ads-quality-score-components.svg`;

const GoogleAdsQualityScore = () => {
  const articleSchema = {
    "@context": "https://schema.org", "@type": "BlogPosting", "@id": `${postUrl}#article`,
    headline: post.title, description: post.description, image: [coverUrl, infographicUrl], url: postUrl,
    datePublished: "2026-10-01T12:00:00+05:30", dateModified: "2026-10-01T12:00:00+05:30",
    inLanguage: "en-IN", articleSection: post.category, keywords: post.keywords.join(", "),
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
    author: { "@type": "Person", "@id": `${SITE_URL}/#person`, name: "Hitesh Jaganiya", url: `${SITE_URL}/`, jobTitle: "Digital Marketing Consultant" },
    publisher: { "@type": "Person", "@id": `${SITE_URL}/#person`, name: "Hitesh Jaganiya", url: `${SITE_URL}/` },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: postUrl },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "What is a good Google Ads Quality Score?", acceptedAnswer: { "@type": "Answer", text: "A Quality Score of 7 or above is generally healthy. A score of 5 or below is worth investigating for relevance or landing-page issues." } },
      { "@type": "Question", name: "Where do I find Quality Score in Google Ads?", acceptedAnswer: { "@type": "Answer", text: "In the Keywords view, open Columns and add Quality Score plus Expected CTR, Ad Relevance, and Landing Page Experience." } },
      { "@type": "Question", name: "Does Quality Score apply to Performance Max or Shopping?", acceptedAnswer: { "@type": "Answer", text: "The reported 1–10 Quality Score applies to Search keywords. Ad quality still influences auctions across campaign types, but the specific diagnostic column is not shown for Performance Max or Shopping." } },
      { "@type": "Question", name: "Does improving Quality Score guarantee lower costs?", acceptedAnswer: { "@type": "Answer", text: "Improving Quality Score usually helps reduce cost per click, but competition and other auction factors can still raise costs." } },
    ],
  };

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
        <link rel="alternate" hrefLang="x-default" href={postUrl} />
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
        <meta property="article:published_time" content="2026-10-01T12:00:00+05:30" />
        <meta property="article:modified_time" content="2026-10-01T12:00:00+05:30" />
        <meta property="article:section" content={post.category} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={coverUrl} />
        <meta name="twitter:image:alt" content={post.coverAlt} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Header />

      <main className="pt-28 md:pt-36">
        <article className="section-padding pt-0">
          <div className="container-custom">
            <BlogBreadcrumbs />

            <div className="w-full max-w-none grid lg:grid-cols-[minmax(0,1fr)_360px] gap-6 items-start">
              <div className="min-w-0">
                <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline mb-7">
                  <ArrowLeft className="w-4 h-4" /> Back to blog
                </Link>

                <header className="mb-10">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-primary">{post.category}</span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold text-muted-foreground">Google Ads • 2026</span>
                  </div>
                  <h1 className="max-w-5xl text-3xl md:text-5xl lg:text-[3.65rem] font-bold text-foreground leading-[1.08] tracking-tight text-balance mb-6">{post.title}</h1>
                  <p className="max-w-4xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-7">{post.excerpt}</p>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground mb-8">
                    <span className="inline-flex items-center gap-2"><CalendarDays className="w-4 h-4" />October 1, 2026</span>
                    <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4" />{post.readingTime}</span>
                    <span className="inline-flex items-center gap-2"><User className="w-4 h-4" />Hitesh Jaganiya</span>
                  </div>
                  <figure className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                    <img src={post.cover} alt={post.coverAlt} width="1200" height="630" className="w-full aspect-[16/7] object-cover" />
                  </figure>
                </header>

                <div className="max-w-4xl">
                  <details className="lg:hidden mb-8 rounded-2xl border border-border bg-card shadow-sm">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold text-foreground">
                      <span>On this page</span><ChevronDown className="w-4 h-4" />
                    </summary>
                    <nav aria-label="Article sections" className="border-t border-border px-5 py-4 space-y-1">
                      <a className="block py-2 text-sm text-primary hover:underline" href="#what-is-quality-score">What Quality Score actually is</a>
                      <a className="block py-2 text-sm text-primary hover:underline" href="#why-it-matters">Why it affects what you pay</a>
                      <a className="block py-2 text-sm text-primary hover:underline" href="#components">The three components</a>
                      <a className="block py-2 text-sm text-primary hover:underline" href="#how-to-improve">How to improve it</a>
                      <a className="block py-2 text-sm text-primary hover:underline" href="#what-doesnt-work">What doesn't improve it</a>
                      <a className="block py-2 text-sm text-primary hover:underline" href="#timeline">How long improvements take</a>
                      <a className="block py-2 text-sm text-primary hover:underline" href="#caveat">The caveat</a>
                      <a className="block py-2 text-sm text-primary hover:underline" href="#faq">FAQs</a>
                    </nav>
                  </details>

                  <div className="rounded-3xl border border-primary/20 bg-primary/[0.045] p-6 md:p-8 mb-10">
                    <div className="text-xs font-bold uppercase tracking-[0.16em] text-primary mb-3">Quick answer</div>
                    <p className="text-xl md:text-2xl font-semibold leading-snug text-foreground mb-0">
                      <strong>Google Ads Quality Score</strong> is a 1–10 keyword-level diagnostic. The useful work is improving Expected CTR, Ad Relevance and Landing Page Experience — not chasing the number itself.
                    </p>
                  </div>

                  <div className="space-y-10 text-[17px] md:text-[18px] text-muted-foreground leading-[1.82]">
                    <section id="intro" aria-labelledby="intro-heading">
                      <h2 id="intro-heading" className="text-3xl font-bold text-foreground tracking-tight">Google Ads Quality Score Explained</h2>
                      <p>I'm Hitesh Jaganiya, a digital marketing consultant certified in Google Ads and Google Analytics. <strong>Quality Score</strong> is one of those Google Ads metrics almost everyone has heard of, but surprisingly few advertisers know how to use properly.</p>
                      <p>It sits behind a column setting in the Google Ads interface, yet it can tell you where an account has relevance, ad-copy or landing-page problems. This guide explains what <strong>Quality Score</strong> actually measures, why it matters, and what genuinely moves it.</p>
                    </section>

                    <section id="what-is-quality-score" aria-labelledby="what-is-quality-score-heading">
                      <h2 id="what-is-quality-score-heading" className="text-3xl font-bold text-foreground tracking-tight">What Quality Score Actually Is</h2>
                      <p><strong>Quality Score</strong> is the 1–10 diagnostic rating Google assigns to each of your keywords, estimating how relevant and useful your ads and landing pages are to someone searching that keyword.</p>
                      <p>First, it's <strong>per keyword</strong>, not per campaign or account. You can have a keyword scoring 9 and another scoring 3 in the same ad group.</p>
                      <p>Second, the number in the interface is a <strong>diagnostic tool</strong>, not the actual score used in the auction. Google evaluates ad quality in real time for every auction using signals the reported number does not capture, including the exact query, device, location and time of day.</p>
                    </section>

                    <section id="why-it-matters" aria-labelledby="why-it-matters-heading">
                      <h2 id="why-it-matters-heading" className="text-3xl font-bold text-foreground tracking-tight">Why Quality Score Affects What You Pay</h2>
                      <p>Google's auction does not simply award the top position to whoever bids most. It uses <strong>Ad Rank</strong>, which combines your bid with ad quality and other auction factors.</p>
                      <p>The practical consequence is important: a competitor with better ad quality can win a higher position while paying less per click. Poor quality can mean paying a premium to reach the same people.</p>
                      <div className="my-10 rounded-3xl border border-border bg-card p-6 md:p-8 shadow-sm">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                          <div><p className="text-sm font-bold uppercase tracking-[0.14em] text-primary mb-2">Think of it this way</p><p className="text-2xl font-bold text-foreground mb-0">Better relevance → stronger ad quality → potentially more efficient auctions</p></div>
                          <div className="shrink-0 rounded-2xl bg-secondary px-5 py-4 text-sm font-semibold text-foreground">Bid ≠ Quality Score</div>
                        </div>
                      </div>
                    </section>

                    <section id="components" aria-labelledby="components-heading">
                      <h2 id="components-heading" className="text-3xl font-bold text-foreground tracking-tight">The Three Quality Score Components</h2>
                      <p><strong>Quality Score</strong> is built from three components, each rated Below Average, Average, or Above Average. Add these columns to your keyword view so you can see where the problem actually sits.</p>
                      <figure className="my-10 overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                        <img src="/google-ads-quality-score-components.svg" alt="The three Google Ads Quality Score components: Expected CTR, Ad Relevance and Landing Page Experience" width="1200" height="620" className="w-full h-auto" loading="lazy" />
                        <figcaption className="px-5 py-4 text-sm text-muted-foreground">The three diagnostic components behind the Quality Score shown in Google Ads.</figcaption>
                      </figure>

                      <h3 className="text-2xl font-bold text-foreground tracking-tight">Expected Click-Through Rate</h3>
                      <p><strong>Expected CTR</strong> estimates how likely someone is to click your ad when it shows for the keyword, relative to other advertisers in the same position. A below-average result often means the ad is too generic for the search.</p>

                      <h3 className="text-2xl font-bold text-foreground tracking-tight">Ad Relevance</h3>
                      <p><strong>Ad Relevance</strong> measures how closely the ad matches the intent behind the keyword. A common structural problem is an ad group holding many loosely related keywords, making genuinely specific ad copy difficult.</p>

                      <h3 className="text-2xl font-bold text-foreground tracking-tight">Landing Page Experience</h3>
                      <p><strong>Landing Page Experience</strong> assesses whether the page delivers what the ad promised, including relevance, navigation, load speed, mobile usability and transparency.</p>
                    </section>

                    <section id="how-to-improve" aria-labelledby="how-to-improve-heading">
                      <h2 id="how-to-improve-heading" className="text-3xl font-bold text-foreground tracking-tight">How to Actually Improve Quality Score</h2>
                      <p>Here's the order I'd work through the account.</p>

                      <div className="grid md:grid-cols-2 gap-5 my-8">
                        <div className="rounded-2xl border border-border bg-card p-6"><div className="text-sm font-bold text-primary mb-2">01</div><h3 className="text-xl font-bold text-foreground mb-2">Tighten ad groups</h3><p className="mb-0">Create tight thematic clusters where one ad can honestly address every keyword in the group.</p></div>
                        <div className="rounded-2xl border border-border bg-card p-6"><div className="text-sm font-bold text-primary mb-2">02</div><h3 className="text-xl font-bold text-foreground mb-2">Match the ad copy</h3><p className="mb-0">Reflect the keyword theme in the ad without turning the copy into keyword stuffing.</p></div>
                        <div className="rounded-2xl border border-border bg-card p-6"><div className="text-sm font-bold text-primary mb-2">03</div><h3 className="text-xl font-bold text-foreground mb-2">Test multiple RSAs</h3><p className="mb-0">Use two or three genuinely different responsive search ads to create comparative data.</p></div>
                        <div className="rounded-2xl border border-border bg-card p-6"><div className="text-sm font-bold text-primary mb-2">04</div><h3 className="text-xl font-bold text-foreground mb-2">Match landing pages</h3><p className="mb-0">Send each ad group to a relevant service or product page rather than the homepage by default.</p></div>
                        <div className="rounded-2xl border border-border bg-card p-6"><div className="text-sm font-bold text-primary mb-2">05</div><h3 className="text-xl font-bold text-foreground mb-2">Check mobile speed</h3><p className="mb-0">Run the actual landing page URL through PageSpeed Insights instead of assuming it is fast enough.</p></div>
                        <div className="rounded-2xl border border-border bg-card p-6"><div className="text-sm font-bold text-primary mb-2">06</div><h3 className="text-xl font-bold text-foreground mb-2">Review search terms</h3><p className="mb-0">Add negative keywords consistently so irrelevant searches do not keep triggering your ads.</p></div>
                      </div>

                      <p>If you're auditing a live account, my guide to <Link className="text-primary font-semibold hover:underline" to="/blog/google-ads-optimization-moves-experts">Google Ads optimization moves</Link> goes deeper into search-term mining, negatives, match types, impression share, audiences and landing-page relevance.</p>
                    </section>

                    <section id="what-doesnt-work" aria-labelledby="what-doesnt-work-heading">
                      <h2 id="what-doesnt-work-heading" className="text-3xl font-bold text-foreground tracking-tight">What Doesn't Improve Quality Score</h2>
                      <p>Several common tactics change account numbers without fixing the underlying problem.</p>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Raising your bid</strong> can buy position, but it does not improve Quality Score.</li>
                        <li><strong>Increasing your budget</strong> controls total spend, not quality or per-click cost.</li>
                        <li><strong>Pausing low-scoring keywords just to raise the average</strong> improves a dashboard number without necessarily improving the account.</li>
                        <li><strong>Waiting</strong> does not fix a relevance or landing-page problem by itself.</li>
                      </ul>
                      <div className="my-10 rounded-3xl bg-foreground p-7 md:p-9 text-background">
                        <p className="text-sm font-bold uppercase tracking-[0.14em] opacity-70 mb-3">Account audit rule</p>
                        <p className="text-2xl md:text-3xl font-bold leading-tight mb-0">Don't optimise Quality Score for its own sake. Optimise the inputs that make the customer journey more relevant.</p>
                      </div>
                    </section>

                    <section id="timeline" aria-labelledby="timeline-heading">
                      <h2 id="timeline-heading" className="text-3xl font-bold text-foreground tracking-tight">How Long Quality Score Improvements Take</h2>
                      <p>Structural changes such as restructuring ad groups, launching new ads or building new landing pages need time to gather performance data before the score reflects them.</p>
                      <p>Realistically, expect <strong>two to four weeks</strong> before numbers move, with longer timelines possible on low-volume keywords where data accumulates slowly.</p>
                      <p>That matters because checking three days after a restructure and seeing no change is not enough evidence that the work failed.</p>
                    </section>

                    <section id="caveat" aria-labelledby="caveat-heading">
                      <h2 id="caveat-heading" className="text-3xl font-bold text-foreground tracking-tight">A Caveat Worth Holding Onto</h2>
                      <p><strong>Quality Score is a diagnostic, not a goal.</strong> An account can have a beautiful average while its actual cost per acquisition gets worse if profitable but low-scoring keywords are removed.</p>
                      <p>The metric that matters is what a customer costs you. Quality Score is useful because improving its underlying signals can improve efficiency, but when the score and business outcome point in different directions, the business outcome deserves attention.</p>
                      <p>If CPC is the problem you're actually trying to solve, read <Link className="text-primary font-semibold hover:underline" to="/blog/why-is-google-ads-cpc-high">Why Is My Google Ads Cost Per Click So High?</Link> for eight causes worth checking.</p>
                    </section>

                    <section className="rounded-3xl border border-primary/20 bg-primary/[0.045] p-7 md:p-9">
                      <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary mb-3">Related guide</p>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-3">Want to understand the numbers behind your traffic?</h2>
                      <p className="mb-4">Quality Score tells you about ad relevance. Your analytics and Search Console data tell you what happens after the click.</p>
                      <Link className="inline-flex items-center rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground hover:opacity-90" to="/blog/how-to-read-google-analytics-search-console-without-an-agency">Read the Google Analytics & Search Console guide</Link>
                    </section>

                    <section id="faq" aria-labelledby="faq-heading">
                      <h2 id="faq-heading" className="text-3xl font-bold text-foreground tracking-tight">Frequently Asked Questions</h2>
                      <div className="space-y-7">
                        <div><h3 className="text-xl font-bold text-foreground">What is a good Google Ads Quality Score?</h3><p>7 or above is generally healthy. Anything at 5 or below is worth investigating, since it usually indicates a relevance or landing-page issue that's inflating costs.</p></div>
                        <div><h3 className="text-xl font-bold text-foreground">Where do I find Quality Score in Google Ads?</h3><p>In the Keywords view, click Columns and add Quality Score along with Expected CTR, Ad Relevance and Landing Page Experience. None appear by default.</p></div>
                        <div><h3 className="text-xl font-bold text-foreground">Does Quality Score affect Performance Max or Shopping?</h3><p>The reported 1–10 Quality Score applies to Search keywords. Ad quality still influences auctions across campaign types, but this specific diagnostic column is not shown for them.</p></div>
                        <div><h3 className="text-xl font-bold text-foreground">Can a new keyword have a low Quality Score with no data?</h3><p>New keywords can start with a provisional score based on related signals in the account. The score settles as real performance data accumulates.</p></div>
                        <div><h3 className="text-xl font-bold text-foreground">Does improving Quality Score guarantee lower costs?</h3><p>It usually helps reduce cost per click, but competition and other auction factors can still raise costs. Auction Insights is useful alongside Quality Score.</p></div>
                      </div>
                    </section>

                    <section aria-labelledby="sources-heading">
                      <h2 id="sources-heading" className="text-3xl font-bold text-foreground tracking-tight">The Bottom Line</h2>
                      <p><strong>Quality Score is useful when you treat it as a diagnostic.</strong> Find the weak component, fix the underlying relevance problem, give the account enough time to collect data, and judge the work against cost per acquisition rather than a dashboard number.</p>
                    </section>
                  </div>
                </div>

<p className="mt-10 text-base text-muted-foreground">For businesses looking to turn these ideas into a practical growth plan, I work as a <Link to="/" className="text-primary font-semibold hover:underline">Digital Marketing Consultant in Ahmedabad</Link>.</p>

                <div className="mt-14"><AuthorCard /></div>
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

export default GoogleAdsQualityScore;
