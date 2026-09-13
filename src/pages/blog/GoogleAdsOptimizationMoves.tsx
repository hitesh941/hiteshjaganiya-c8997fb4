import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CalendarDays, Clock, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorCard from "@/components/AuthorCard";
import BlogSidebar from "@/components/BlogSidebar";
import BlogBreadcrumbs from "@/components/BlogBreadcrumbs";
import { getPostBySlug, SITE_URL } from "@/data/blogPosts";

const post = getPostBySlug("google-ads-optimization-moves-experts")!;
const postUrl = `${SITE_URL}/blog/${post.slug}`;
const coverUrl = `${SITE_URL}${post.cover}`;
const workflowUrl = `${SITE_URL}/google-ads-optimization-workflow.svg`;

const GoogleAdsOptimizationMoves = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${postUrl}#article`,
    headline: post.title,
    description: post.description,
    image: [coverUrl, workflowUrl],
    url: postUrl,
    datePublished: "2026-09-13T18:00:00+05:30",
    dateModified: "2026-09-13T18:00:00+05:30",
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
        <title>10 Google Ads Optimization Moves Most Accounts Miss | Hitesh Jaganiya</title>
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
                    <span className="inline-flex items-center gap-2"><CalendarDays className="w-4 h-4" />September 13, 2026</span>
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
                    <p className="text-xl md:text-2xl font-semibold leading-snug text-foreground mb-0">The biggest Google Ads gains often come from small, repeated account reviews: search terms, negatives, match types, ad variations, impression share, competition, audiences, conversion values, schedules, devices and landing-page relevance.</p>
                  </div>

                  <section>
                    <p>I've audited more Google Ads accounts than I can count over the last 11 years, and a pattern shows up almost every single time: the account isn't broken, it's just half-managed. Campaigns are live, budgets are being spent, and something is technically “working” — but nobody's actually gone in and done the specific, unglamorous optimization work that separates a genuinely well-run account from one that's just switched on and left alone.</p>
                    <p>I'm Hitesh Jaganiya, a digital marketing consultant certified in Google Ads and Google Analytics, and this isn't a list of beginner tips you've already read a hundred times. These are the specific moves I actually look for when I open an account — the ones that quietly separate accounts run by a genuine Google Ads expert from ones that are just being kept alive.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">1. Mine the Search Terms Report Weekly, Not Occasionally</h2>
                    <p>This is the single most skipped optimization task in Google Ads, and it's honestly the most important one. Your keywords are what you <em>bid on</em> — your search terms report shows what people <em>actually typed</em> to trigger your ad. These are frequently very different things, especially with broad and phrase match keywords pulling in loosely related queries.</p>
                    <p>A genuine expert goes through this report weekly, adding irrelevant terms as negatives and, just as important, spotting new high-intent phrases worth turning into their own dedicated keywords or ad groups. Most accounts I audit haven't touched their negative keyword list in months, which means budget is quietly leaking into searches that were never going to convert.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">2. Structure Negative Keywords in Shared Lists, Not Just Per-Campaign</h2>
                    <p>Adding negatives one campaign at a time works, but it doesn't scale, and it's easy to forget to apply the same exclusion everywhere it's needed. A shared negative keyword list applied across all relevant campaigns means once you identify a genuinely irrelevant term — say, “free,” “jobs,” or “course” for a business that doesn't offer those — you block it everywhere at once instead of hoping you remember to add it campaign by campaign.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">3. Audit Match Type Behavior, Especially Broad Match</h2>
                    <p>Broad match has gotten significantly smarter with Google's AI-driven matching, but “smarter” doesn't mean it always understands your business the way you do. I regularly see broad match keywords pulling in traffic that's topically related but commercially useless — someone researching a topic, not someone ready to buy or inquire.</p>
                    <p>The fix isn't necessarily avoiding broad match entirely — it can perform very well when paired with strong negative keyword hygiene and solid conversion data feeding the algorithm. But running broad match blindly, without regularly checking what it's actually matching to, is one of the fastest ways to burn budget without realizing it.</p>
                    <p>A practical habit here: whenever you add a new broad match keyword, check back on its search terms after the first week or two of meaningful volume, not months later. Catching a mismatch early costs you far less than discovering it after a quarter of steadily leaking spend into searches that were never going to convert.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">4. Test Multiple RSAs Per Ad Group, Not Just One</h2>
                    <p>Responsive Search Ads let you input multiple headlines and descriptions, and Google mixes and matches them. The mistake I see constantly is running just one RSA per ad group and assuming that's enough “testing” because RSAs are inherently flexible. It isn't — you're still only testing one set of assets against itself.</p>
                    <p>Running two or three RSAs per ad group, with genuinely different angles — one benefit-led, one urgency-led, one social-proof-led, for example — gives you comparative data on what messaging actually resonates, rather than just letting one ad's internal combinations optimize in isolation.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">5. Check Search Impression Share Lost to Budget vs. Rank Separately</h2>
                    <p>This metric gets ignored constantly, and it tells you something crucial: is your budget too small, or is your ad quality or bid too weak? Google splits this into two separate numbers — impression share lost due to budget, and impression share lost due to rank. If it's mostly budget-related, you know more spend could capture more of the available demand. If it's mostly rank-related, throwing more budget at it won't help until you fix Quality Score, bidding strategy, or ad relevance first. Treating both as the same problem is a common, costly mistake.</p>
                  </section>

                  <figure className="my-2 overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                    <img src="/google-ads-optimization-workflow.svg" alt="Google Ads optimization workflow showing search terms, negative keywords, ads, bidding and landing-page relevance" width="1200" height="675" loading="lazy" className="w-full h-auto" />
                    <figcaption className="px-5 py-3 text-sm text-muted-foreground border-t border-border">A useful optimization loop: review what happened, find the leak or opportunity, then reallocate before scaling.</figcaption>
                  </figure>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">6. Review Auction Insights to Understand Real Competition</h2>
                    <p>Auction Insights shows you who else is bidding on the same auctions you are, how often you outrank them, and how often your ads show up together. This is one of the most underused reports in the platform. It tells you whether a new, aggressive competitor has entered your space, whether an established one has pulled back, and whether your visibility is genuinely shrinking or just fluctuating normally.</p>
                    <p>It's particularly useful for explaining sudden performance shifts that otherwise look mysterious. A cost-per-click that suddenly climbs, or a conversion rate that quietly drops, can have a simple explanation sitting in this report — a new competitor bidding aggressively, or an existing one significantly increasing their overlap rate with you. Without checking it, that kind of shift can easily get misattributed to something wrong with your own account when it's actually an external market change.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">7. Layer Audience Signals Without Restricting Reach Unnecessarily</h2>
                    <p>For Search campaigns specifically, audiences should usually be added in “Observation” mode, not “Targeting” mode, unless you have a very specific reason to fully restrict who sees your ads. Observation mode lets you see how different audience segments perform — remarketing lists, in-market audiences, custom segments — without cutting off the broader reach that Search campaigns generally need to work well. I regularly find accounts that accidentally restricted their entire campaign to a tiny audience segment, drastically limiting reach without anyone noticing why traffic dropped.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">8. Set Up Value-Based Bidding Correctly, Not Just Turn It On</h2>
                    <p>Smart Bidding strategies like Target ROAS or Maximize Conversion Value are powerful, but they're only as good as the conversion values feeding them. If every conversion is tracked with the same flat value regardless of what was actually purchased or how qualified the lead was, the algorithm is optimizing toward volume, not actual business value. A genuine optimization move is assigning realistic, differentiated values to different conversion types — a demo request isn't worth the same as a completed purchase — so Smart Bidding is actually chasing the outcomes that matter most to the business, not just the easiest ones to get.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">9. Use Ad Scheduling and Device Performance Based on Real Data</h2>
                    <p>Most accounts run 24/7 with no day-parting or device adjustments at all, simply because it's the default. But conversion data can show patterns — certain hours or days converting better, certain devices producing lower-quality leads. Pull up the Hour of Day and Day of Week segments alongside device performance breakdowns, and adjust allocation when the data gives you a reason. It doesn't require more budget, just smarter allocation of the budget already being spent.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">10. Match Landing Pages to Ad Groups, Not Just the Whole Campaign</h2>
                    <p>This one isn't strictly inside the Google Ads interface, but it directly affects Quality Score and conversion rate, so it belongs on this list. Sending every ad group in a campaign to the same generic landing page, regardless of what specific keyword or intent triggered the click, weakens both relevance and conversion likelihood.</p>
                    <p>A genuinely optimized account maps tighter ad groups to landing pages that speak directly to what that specific search was about — matching message-to-page as closely as message-to-ad. This single change can move Quality Score and conversion rate more than a bidding adjustment when the existing landing page is generic or mismatched.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">Why These Optimizations Get Skipped So Often</h2>
                    <p>None of these ten things are secret or advanced in a technical sense — they're all sitting right there in the Google Ads interface for anyone to use. What actually separates accounts where these are applied from accounts where they aren't usually comes down to time and attention, not knowledge. Managing an account properly means going back into it regularly and actually looking, not just checking that campaigns are still running and spending roughly on budget.</p>
                    <p>If you're managing your own account, I'd suggest picking two or three of these to focus on this month rather than trying to overhaul everything at once — the search terms report and impression share lost breakdown are usually the highest-leverage places to start, since they directly reveal wasted spend and missed opportunity in a way that's easy to act on immediately.</p>
                    <p>If you're deciding whether Google should be your first paid channel, my guide on <Link className="text-primary font-semibold hover:underline" to="/blog/google-ads-vs-meta-ads-ahmedabad">Google Ads vs Meta Ads for Ahmedabad businesses</Link> explains how customer intent, product type and budget change that decision.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">Frequently Asked Questions</h2>
                    <div className="space-y-8">
                      <div><h3 className="text-xl font-bold text-foreground">How often should I check my Google Ads search terms report?</h3><p>Weekly is a reasonable minimum for most active accounts. Waiting monthly or longer typically means irrelevant spend accumulates for weeks before it's caught and corrected.</p></div>
                      <div><h3 className="text-xl font-bold text-foreground">Is broad match keyword targeting bad for Google Ads campaigns?</h3><p>Not inherently. Broad match can perform well, but it needs strong negative keyword management and solid conversion tracking data to avoid wasting budget on loosely related searches.</p></div>
                      <div><h3 className="text-xl font-bold text-foreground">What's the difference between impression share lost to budget and rank?</h3><p>Lost to budget means your daily budget is limiting eligible impressions. Lost to rank means your ad quality or bid isn't competitive enough. They require different fixes.</p></div>
                      <div><h3 className="text-xl font-bold text-foreground">Should I use audience targeting or observation mode for Search campaigns?</h3><p>Observation mode is generally safer for most Search campaigns because it lets you collect audience performance data without restricting overall reach. Targeting should be deliberate.</p></div>
                      <div><h3 className="text-xl font-bold text-foreground">Do I need a Google Ads expert to implement these?</h3><p>Many of these tasks are learnable by a business owner. The real constraint for many founders is time and consistency — exactly why these optimizations get skipped even when the knowledge is available.</p></div>
                    </div>
                  </section>

                  <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary mb-3">Keep going</p>
                    <p className="text-xl font-semibold text-foreground mb-4">Good Google Ads optimization starts with knowing what the account is actually telling you.</p>
                    <p className="mb-0">If you want to connect campaign data with wider website performance, read <Link className="text-primary font-semibold hover:underline" to="/blog/how-to-read-google-analytics-search-console-without-an-agency">How to Read Google Analytics and Search Console Yourself</Link>.</p>
                  </div>

                  <AuthorCard />
                </div>
              </div>

              <BlogSidebar currentSlug={post.slug} />
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default GoogleAdsOptimizationMoves;
