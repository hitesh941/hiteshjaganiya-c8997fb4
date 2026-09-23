import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CalendarDays, Clock, User, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorCard from "@/components/AuthorCard";
import BlogSidebar from "@/components/BlogSidebar";
import BlogBreadcrumbs from "@/components/BlogBreadcrumbs";
import { getPostBySlug, SITE_URL } from "@/data/blogPosts";

const post = getPostBySlug("why-is-google-ads-cpc-high")!;
const postUrl = `${SITE_URL}/blog/${post.slug}`;
const coverUrl = `${SITE_URL}${post.cover}`;
const diagnosisUrl = `${SITE_URL}/google-ads-cpc-diagnosis.svg`;

const GoogleAdsCpcHigh = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${postUrl}#article`,
    headline: post.title,
    description: post.description,
    image: [coverUrl, diagnosisUrl],
    url: postUrl,
    datePublished: "2026-09-23T12:00:00+05:30",
    dateModified: "2026-09-23T12:00:00+05:30",
    inLanguage: "en-IN",
    articleSection: post.category,
    keywords: post.keywords.join(", "),
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
    author: { "@type": "Person", "@id": `${SITE_URL}/#person`, name: "Hitesh Jaganiya", url: `${SITE_URL}/`, jobTitle: "Digital Marketing Consultant" },
    publisher: { "@type": "Person", "@id": `${SITE_URL}/#person`, name: "Hitesh Jaganiya", url: `${SITE_URL}/` },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: postUrl },
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
        <meta property="article:published_time" content="2026-09-23T12:00:00+05:30" />
        <meta property="article:modified_time" content="2026-09-23T12:00:00+05:30" />
        <meta property="article:section" content={post.category} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={coverUrl} />
        <meta name="twitter:image:alt" content={post.coverAlt} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Header />
      <main className="pt-28 md:pt-36">
        <article className="section-padding pt-0">
          <div className="container-custom">
            <BlogBreadcrumbs />
            <div className="grid lg:grid-cols-[minmax(0,1fr)_360px] gap-6 items-start">
              <div className="min-w-0">
                <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline mb-7"><ArrowLeft className="w-4 h-4" /> Back to blog</Link>
                <header className="mb-10">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-primary">Paid Advertising</span>
                  </div>
                  <h1 className="max-w-4xl text-3xl md:text-5xl lg:text-[3.65rem] font-bold text-foreground leading-[1.08] tracking-tight text-balance mb-6">{post.title}</h1>
                  <p className="max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-7">{post.excerpt}</p>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground mb-8">
                    <span className="inline-flex items-center gap-2"><CalendarDays className="w-4 h-4" />September 23, 2026</span>
                    <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4" />{post.readingTime}</span>
                    <span className="inline-flex items-center gap-2"><User className="w-4 h-4" />Hitesh Jaganiya</span>
                  </div>
                  <figure className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                    <img src={post.cover} alt={post.coverAlt} width="1200" height="630" className="w-full aspect-[16/7] object-cover" />
                  </figure>
                </header>

                <div className="max-w-4xl space-y-10 text-[17px] md:text-[18px] text-muted-foreground leading-[1.8]">
                  <div className="rounded-3xl border border-primary/20 bg-primary/[0.045] p-6 md:p-8">
                    <div className="text-xs font-bold uppercase tracking-[0.16em] text-primary mb-3">Quick answer</div>
                    <p className="text-xl md:text-2xl font-semibold leading-snug text-foreground mb-0">High CPC is not automatically a bidding problem. Actual CPC comes from the auction and can be affected by bid, ad quality, competition, Ad Rank thresholds, search context and other auction-time factors. Diagnose those inputs before simply lowering bids.</p>
                  </div>

                  <section>
                    <p>High CPC is usually treated as a bidding problem, and that's why many attempts to fix it don't work. Someone lowers the max bid, impressions collapse, and they end up with a slightly cheaper click that is no longer reaching the people worth reaching.</p>
                    <p>Cost per click is an output, not a single setting. It's what falls out of the auction after Google evaluates your bid alongside ad quality, competition, context and other factors. So the fix often sits somewhere other than the bid field.</p>
                    <p>I'm Hitesh Jaganiya, a digital marketing consultant certified in Google Ads and Google Analytics. Here are the eight causes I check when an account has a CPC problem, roughly in the order I would investigate them.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">1. Your Quality Score Signals May Be Weak</h2>
                    <p>Quality Score is a keyword-level diagnostic tool from 1–10. Google says it is not itself an input into the ad auction; instead, it helps you understand three important areas of ad quality: expected click-through rate, ad relevance and landing page experience. Those quality signals can affect Ad Rank and actual CPC.</p>
                    <p>Add the Quality Score column in your keyword view, then add the three component columns — Expected CTR, Ad Relevance and Landing Page Experience. Look for “Below average” signals first, rather than treating the 1–10 score as a target to maximize.</p>
                    <p><strong>The fix:</strong> work on the component that is weakest. If ad relevance is below average, the next section is often where the problem begins.</p>
                    <p><a className="inline-flex items-center gap-1 text-primary font-semibold hover:underline" href="https://support.google.com/google-ads/answer/6167118?hl=en" target="_blank" rel="noreferrer noopener">Google's Quality Score documentation <ExternalLink className="w-4 h-4" /></a></p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">2. Your Ad Groups Are Too Broad</h2>
                    <p>A single ad group with thirty loosely related keywords makes it harder to write ads that speak precisely to the searches you're targeting. Relevance can suffer, and the account becomes harder to diagnose.</p>
                    <p>I see this often in accounts built quickly — one ad group called “Services” holding every keyword the business could think of.</p>
                    <p><strong>The fix:</strong> split keywords into tight themes where a single ad genuinely addresses the search intent. Google itself recommends splitting ad groups when different keywords cannot be easily addressed by the same ad.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">3. You're Competing in an Expensive Auction Without Realising It</h2>
                    <p>Some categories are simply competitive. In Ahmedabad, real estate, education, legal and financial services can have multiple advertisers competing for valuable searches. If more advertisers compete for the same demand, auction conditions can become more expensive.</p>
                    <p>Open <strong>Auction Insights</strong> under the relevant campaign's Insights section. It can show which advertisers overlap with you and how your visibility changes relative to them.</p>
                    <p><strong>The fix:</strong> you cannot control competitors' bids, but you can control where you compete. More specific, intent-rich keywords can be a useful way to target narrower demand rather than fighting over only the broadest head terms.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">4. Broad Match Is Pulling You Into Auctions You Never Chose</h2>
                    <p>Broad match can be useful, but it can also surface searches that are only loosely related to what you sell. The important question is not whether broad match is “good” or “bad”; it is whether the actual searches it produces are commercially relevant for your business.</p>
                    <p>Check the <strong>Search terms</strong> report. If you're paying for clicks on queries that are not relevant to your offer, your average CPC can be inflated by traffic you would not have deliberately targeted.</p>
                    <p><strong>The fix:</strong> add relevant negative keywords, review search terms regularly, and consider tighter match types for areas where you need more control while your conversion and negative-keyword data matures.</p>
                  </section>

                  <figure className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                    <img src="/google-ads-cpc-diagnosis.svg" alt="Google Ads high CPC diagnosis checklist covering Quality Score, ad group structure, competition, match types, landing pages, competitor terms, bid strategy and conversion tracking" width="1200" height="675" loading="lazy" className="w-full h-auto" />
                    <figcaption className="px-5 py-3 text-sm text-muted-foreground border-t border-border">A practical high-CPC checklist: work through these eight areas before changing bids simply to make the CPC number smaller.</figcaption>
                  </figure>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">5. Your Landing Page Is Hurting You</h2>
                    <p>Landing page experience is one of the three Quality Score components, and Google also considers the quality and relevance of the landing page in its auction-time ad quality assessment.</p>
                    <p>The common version of this problem is simple: every ad group points to the homepage. Someone searches for a specific service, clicks an ad about that service, and lands on a generic page where they have to hunt for what they came for.</p>
                    <p><strong>The fix:</strong> match landing pages to ad groups where practical. Keep the promise in the keyword and ad aligned with the page, and check the mobile experience specifically.</p>
                    <p>For a broader account workflow, see my guide to <Link className="text-primary font-semibold hover:underline" to="/blog/google-ads-optimization-moves-experts">10 Google Ads optimization moves most accounts miss</Link>.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">6. You're Bidding on Competitors' Brand Names</h2>
                    <p>Competitor-brand bidding can be legitimate and sometimes commercially useful, but it can also be inefficient. A search for another company's name may be less relevant to your ad and landing page than a search for your own service, which can make the traffic harder to justify financially.</p>
                    <p><strong>The fix:</strong> judge these keywords by qualified conversions and cost per acquisition, not clicks alone. If they generate clicks without producing enough business value, they deserve a closer look.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">7. Your Bid Strategy Is Optimising for Something You Don't Want</h2>
                    <p>Google Ads bidding strategies optimize toward the goal you select. A click-focused strategy is designed around clicks; conversion-focused strategies use conversion signals to pursue conversions. If the business goal is qualified leads or revenue but the campaign is effectively optimized toward cheap traffic, the account can spend money on outcomes that do not matter enough.</p>
                    <p><strong>The fix:</strong> make sure the bidding strategy matches the actual business objective and that conversion actions are correctly configured. If you have enough reliable conversion data, evaluate conversion-focused bidding; if you do not, fix measurement first.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">8. Your Conversion Tracking Is Broken or Missing</h2>
                    <p>This underpins everything above. Without accurate conversion data, you have less information about which clicks create business value, and automated bidding has less reliable feedback to optimize against.</p>
                    <p>I've seen this in self-managed accounts where tracking was set up once, then quietly broke after a website change and nobody noticed.</p>
                    <p><strong>The fix:</strong> verify in Google Ads under Goals → Conversions that your important conversion actions are recording recently and at a plausible volume. If tracking stopped, fix measurement before making major bidding changes.</p>
                    <p>My guide on <Link className="text-primary font-semibold hover:underline" to="/blog/how-to-read-google-analytics-search-console-without-an-agency">reading Google Analytics and Search Console without an agency</Link> can help with the measurement side of the wider marketing system.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">A Note on What “High” Actually Means</h2>
                    <p>Before you spend weeks optimizing, ask whether your CPC is genuinely high or simply higher than you expected. A ₹90 click that converts at 8% into a customer worth ₹40,000 can be economically different from a ₹12 click that never produces a qualified lead.</p>
                    <p>The metric that matters is not CPC in isolation. Cost per acquisition, conversion rate, lead quality and customer value tell you whether the traffic is economically useful. Chasing the lowest possible CPC can reduce volume or quality if you cut the auctions that actually produce customers.</p>
                    <p>If you're deciding how to allocate your first paid-ad budget, my guide on <Link className="text-primary font-semibold hover:underline" to="/blog/google-ads-vs-meta-ads-ahmedabad">Google Ads vs Meta Ads for Ahmedabad businesses</Link> covers intent, product type and budget considerations.</p>
                  </section>

                  <section className="rounded-3xl border border-border bg-card p-7 md:p-9">
                    <h2 className="text-3xl font-bold text-foreground tracking-tight mb-4">The 8-Point High CPC Checklist</h2>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li>Review Quality Score components as diagnostics.</li>
                      <li>Check whether ad groups are tightly themed.</li>
                      <li>Review Auction Insights and competitive changes.</li>
                      <li>Mine Search terms and add relevant negatives.</li>
                      <li>Match landing pages to search intent.</li>
                      <li>Evaluate competitor-brand traffic by conversions and CPA.</li>
                      <li>Confirm the bid strategy matches the business goal.</li>
                      <li>Verify conversion tracking before changing bids.</li>
                    </ol>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">Frequently Asked Questions</h2>
                    <div className="space-y-8">
                      <div><h3 className="text-xl font-bold text-foreground">Does lowering my bid reduce my cost per click?</h3><p>It can, but it can also reduce eligibility, position or traffic volume. Actual CPC is determined by the auction, so reducing the bid is not the only lever available.</p></div>
                      <div><h3 className="text-xl font-bold text-foreground">What's a good cost per click in India?</h3><p>There is no single useful number. CPC varies widely by industry, query, location, competition and campaign setup. Compare CPC with conversion rate, CPA and customer value instead of using one national benchmark.</p></div>
                      <div><h3 className="text-xl font-bold text-foreground">How quickly can I bring my CPC down?</h3><p>Search-term exclusions, keyword restructuring and landing-page improvements can affect performance relatively quickly, but the timing varies by account volume and the type of change. Avoid judging a structural change from only a few clicks.</p></div>
                      <div><h3 className="text-xl font-bold text-foreground">Does a higher budget lower my CPC?</h3><p>Not directly. Budget controls how much traffic you can buy; it does not automatically make individual clicks cheaper.</p></div>
                      <div><h3 className="text-xl font-bold text-foreground">Is a high CPC always a problem?</h3><p>No. A high CPC can still be economically sensible if the resulting traffic produces enough qualified conversions and customer value. Evaluate the whole acquisition funnel.</p></div>
                    </div>
                  </section>

                  <section className="rounded-3xl bg-foreground p-8 md:p-10 text-primary-foreground">
                    <h2 className="text-3xl font-bold mb-4">Want to find what's driving your Google Ads costs?</h2>
                    <p className="text-primary-foreground/75 mb-6">If your CPC has climbed and you're not sure whether the problem is competition, relevance, search terms, landing pages or tracking, an account-level review can make the cause much easier to isolate.</p>
                    <Link to="/#contact" className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground hover:opacity-90 transition-opacity">Talk about your Google Ads account <ArrowRight className="w-4 h-4" /></Link>
                  </section>
                </div>

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

export default GoogleAdsCpcHigh;
