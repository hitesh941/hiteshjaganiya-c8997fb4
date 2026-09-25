import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CalendarDays, Clock, User, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorCard from "@/components/AuthorCard";
import BlogSidebar from "@/components/BlogSidebar";
import BlogBreadcrumbs from "@/components/BlogBreadcrumbs";
import { getPostBySlug, SITE_URL } from "@/data/blogPosts";

const post = getPostBySlug("seo-strategy-2027")!;
const postUrl = `${SITE_URL}/blog/${post.slug}`;
const coverUrl = `${SITE_URL}${post.cover}`;

const SeoStrategy2027 = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${postUrl}#article`,
    headline: post.title,
    description: post.description,
    image: [coverUrl],
    url: postUrl,
    datePublished: "2026-09-25T12:00:00+05:30",
    dateModified: "2026-09-25T12:00:00+05:30",
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
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Is SEO still worth investing in with AI Overviews taking clicks?", acceptedAnswer: { "@type": "Answer", text: "Yes, but the distribution of value has shifted. Informational queries can lose clicks to AI summaries, while commercial and bottom-of-funnel queries still require sources, comparisons and decision support." } },
      { "@type": "Question", name: "What are commodity keywords?", acceptedAnswer: { "@type": "Answer", text: "Commodity keywords are broad, definitional, high-volume searches such as what is digital marketing or types of SEO that can often be answered directly in search results." } },
      { "@type": "Question", name: "How can a small business create original data?", acceptedAnswer: { "@type": "Answer", text: "Count or survey something you already have access to, such as customer questions, enquiry patterns, pricing ranges or seasonal demand, and publish the methodology and results honestly." } },
      { "@type": "Question", name: "Does this SEO advice apply to local businesses?", acceptedAnswer: { "@type": "Answer", text: "Yes. Local and specific searches give smaller businesses opportunities to demonstrate first-hand experience and address needs that generic content does not." } },
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
        <meta property="article:published_time" content="2026-09-25T12:00:00+05:30" />
        <meta property="article:modified_time" content="2026-09-25T12:00:00+05:30" />
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
            <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_360px] gap-8 xl:gap-10 items-start">
              <div className="min-w-0">
                <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline mb-7"><ArrowLeft className="w-4 h-4" /> Back to blog</Link>

                <header className="mb-10">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-primary">SEO Strategy</span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold text-muted-foreground">2027 Outlook</span>
                  </div>
                  <h1 className="max-w-4xl text-3xl md:text-5xl lg:text-[3.65rem] font-bold text-foreground leading-[1.08] tracking-tight text-balance mb-6">{post.title}</h1>
                  <p className="max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-7">{post.excerpt}</p>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground mb-8">
                    <span className="inline-flex items-center gap-2"><CalendarDays className="w-4 h-4" />September 25, 2026</span>
                    <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4" />{post.readingTime}</span>
                    <span className="inline-flex items-center gap-2"><User className="w-4 h-4" />Hitesh Jaganiya</span>
                  </div>
                  <figure className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                    <img src={post.cover} alt={post.coverAlt} width="1200" height="630" className="w-full aspect-[16/7] object-cover" />
                  </figure>
                </header>

                <div className="grid lg:grid-cols-[minmax(0,1fr)_230px] gap-10 items-start">
                  <div className="min-w-0 max-w-3xl">
                    <details className="lg:hidden mb-8 rounded-2xl border border-border bg-card shadow-sm">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold text-foreground">
                        <span>On this page</span><ChevronDown className="w-4 h-4" />
                      </summary>
                      <nav aria-label="Article sections" className="border-t border-border px-5 py-4">
                        <a className="block py-2 text-sm text-primary hover:underline" href="#shift-1">1. Human-first content</a>
                        <a className="block py-2 text-sm text-primary hover:underline" href="#shift-2">2. Commodity keywords</a>
                        <a className="block py-2 text-sm text-primary hover:underline" href="#shift-3">3. Bottom-of-funnel searches</a>
                        <a className="block py-2 text-sm text-primary hover:underline" href="#shift-4">4. Multiple jobs for content</a>
                        <a className="block py-2 text-sm text-primary hover:underline" href="#shift-5">5. Original data assets</a>
                        <a className="block py-2 text-sm text-primary hover:underline" href="#priority">What to prioritize</a>
                        <a className="block py-2 text-sm text-primary hover:underline" href="#faq">FAQs</a>
                      </nav>
                    </details>

                    <div className="rounded-3xl border border-primary/20 bg-primary/[0.045] p-6 md:p-8 mb-10">
                      <div className="text-xs font-bold uppercase tracking-[0.16em] text-primary mb-3">Quick answer</div>
                      <p className="text-xl md:text-2xl font-semibold leading-snug text-foreground mb-4">The biggest practical change for 2027 is not a new technical trick. It is a shift toward <strong>first-hand experience, specific search intent and original information</strong> as generic AI-assisted content becomes easier to produce.</p>
                      <p className="text-sm md:text-base text-muted-foreground mb-0">Primary keyword: <strong>SEO strategy 2027</strong> • Audience: Indian small and mid-sized businesses</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 mb-12">
                      {[
                        ["01", "Human-first", "Publish what you know from real customers, tests and operations."],
                        ["02", "Specific intent", "Trade broad commodity keywords for searches that need a click."],
                        ["03", "Bottom-of-funnel", "Prioritize pricing, comparisons and “how to choose” content."],
                        ["04", "Multiple jobs", "Make one useful page work for search, AI, social and sales."],
                        ["05", "Original data", "Count, survey or publish numbers nobody else has locally."],
                      ].map(([num, title, text]) => (
                        <div key={num} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                          <div className="text-xs font-bold tracking-[0.16em] text-primary mb-2">{num}</div>
                          <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
                          <p className="text-sm leading-relaxed text-muted-foreground mb-0">{text}</p>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-10 text-[17px] md:text-[18px] text-muted-foreground leading-[1.82]">
                      <section aria-labelledby="intro">
                        <h2 id="intro" className="text-3xl font-bold text-foreground tracking-tight">What Is Changing in SEO for 2027?</h2>
                        <p>Brian Dean, founder of Backlinko and Exploding Topics, has been discussing how SEO needs to adapt as AI changes search and content production. His broader work on <a className="text-primary font-semibold hover:underline" href="https://explodingtopics.com/author/brian-dean" target="_blank" rel="noreferrer noopener">modern SEO strategy</a> is useful context for the five shifts below. I watched the five-strategy discussion and compared it with what I've been seeing in client accounts over the past year.</p>
                        <p>I'm Hitesh Jaganiya, a digital marketing consultant with 11 years of experience. The goal here is not to repeat advice written for American SaaS companies with large content teams. It is to translate these shifts for <strong>small and mid-sized businesses in India</strong>, where budgets, teams and local competition are different.</p>
                      </section>

                      <section id="shift-1" aria-labelledby="shift-1-heading" className="scroll-mt-28">
                        <h2 id="shift-1-heading" className="text-3xl font-bold text-foreground tracking-tight">1. Human-First Content Beats SEO-First Content</h2>
                        <p>The core idea is simple: content written primarily to satisfy a search algorithm is losing its advantage against content written primarily for a reader. AI can now produce unlimited competent, SEO-optimised, generic content. When that becomes cheap and infinite, generic execution stops being a differentiator.</p>
                        <p>What remains valuable is <strong>actual testing, actual opinions and actual experience</strong>. Dean points to Housefresh as an example of a site built around genuine hands-on product testing rather than desk-based summaries.</p>
                        <p><strong>For an Indian business, this is an opportunity.</strong> You have real customer conversations, real failures and real numbers from your own operations. A post explaining what you actually learned running a campaign — with specific figures and context — can be more useful than ten generic posts explaining what a campaign is.</p>
                        <p>I've written about this in <Link className="text-primary font-semibold hover:underline" to="/blog/can-ai-content-rank-on-google"><strong>whether AI content can rank on Google</strong></Link>, including the disclosure and editorial side of AI-assisted publishing.</p>
                      </section>

                      <section id="shift-2" aria-labelledby="shift-2-heading" className="scroll-mt-28">
                        <h2 id="shift-2-heading" className="text-3xl font-bold text-foreground tracking-tight">2. Stop Chasing Commodity Keywords</h2>
                        <p><strong>Commodity keywords</strong> are broad, definitional, high-volume terms such as “what is digital marketing,” “types of SEO” and “social media marketing benefits.” These are increasingly vulnerable to direct answers in search results, so the user can get the basic definition without clicking.</p>
                        <p>This is hard to sell because commodity terms look attractive in a keyword tool: high volume, moderate difficulty and a familiar topic. But <strong>search volume that never becomes a visit is not the same as useful demand</strong>.</p>
                        <p>The practical adjustment is to ask whether the person searching needs to click to get what they want. “What is competitive benchmarking?” is partly answerable in a snippet. “How do I benchmark my PR results against three specific competitors?” requires context, examples and a useful page.</p>
                        <p>For Indian small businesses, this reinforces a long-standing advantage: <strong>local and specific beats broad and generic</strong>. You were never going to own “what is SEO” against national publishers. You can build authority around a problem such as <Link className="text-primary font-semibold hover:underline" to="/blog/business-not-showing-google-maps-ahmedabad"><strong>why a business is not showing on Google Maps in Ahmedabad</strong></Link>.</p>
                      </section>

                      <section id="shift-3" aria-labelledby="shift-3-heading" className="scroll-mt-28">
                        <h2 id="shift-3-heading" className="text-3xl font-bold text-foreground tracking-tight">3. Move Toward Bottom-of-Funnel Searches</h2>
                        <p><strong>Bottom-of-funnel searches</strong> come from people closer to a decision: comparison searches, pricing searches, alternative searches and “best X for Y” searches. These queries often need more than a generic summary because the searcher is evaluating options.</p>
                        <p>For a small business with limited content capacity, this is one of the most actionable shifts. If you can publish only four posts this year, four useful commercial-intent posts can be more aligned with enquiries than four broad “ultimate guides.”</p>
                        <div className="rounded-2xl border border-border bg-card p-6 md:p-7">
                          <h3 className="text-xl font-bold text-foreground mb-4">High-value formats to test</h3>
                          <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Pricing and cost:</strong> what does X actually cost in 2027?</li>
                            <li><strong>Comparisons:</strong> X vs Y, agency vs consultant, tool A vs tool B.</li>
                            <li><strong>Decision guides:</strong> how to choose a service or provider.</li>
                            <li><strong>Local versions:</strong> combine commercial intent with city, area or market context.</li>
                          </ul>
                        </div>
                        <p>The traffic numbers may look small next to a viral awareness post. The important metric is what happens after the visit. My <Link className="text-primary font-semibold hover:underline" to="/blog/google-ads-vs-meta-ads-ahmedabad"><strong>Google Ads vs Meta Ads comparison for Ahmedabad businesses</strong></Link> is an example of a decision-stage topic rather than a broad advertising definition.</p>
                      </section>

                      <section id="shift-4" aria-labelledby="shift-4-heading" className="scroll-mt-28">
                        <h2 id="shift-4-heading" className="text-3xl font-bold text-foreground tracking-tight">4. Every Piece of Content Needs Multiple Jobs</h2>
                        <p>This is a mindset change more than a tactic. A piece of content used to have one obvious job: rank in Google and get clicks. Now a strong page should be structured so it can <strong>rank in traditional search, answer clearly in AI-driven search, support citations, and work when shared on LinkedIn or WhatsApp</strong>.</p>
                        <p>That changes how you write: use clear question-shaped headings, put direct answers near the top of sections, make specific claims easy to quote and structure the page so useful excerpts still make sense when separated from the full article.</p>
                        <p>There is a practical benefit for small businesses: <strong>one page can do more work</strong>. That suits a business owner publishing twice a month much better than a content mill publishing daily.</p>
                        <p>For measurement, connect this approach to the basics in my guide to <Link className="text-primary font-semibold hover:underline" to="/blog/how-to-read-google-analytics-search-console-without-an-agency"><strong>reading Google Analytics and Search Console without an agency</strong></Link>.</p>
                      </section>

                      <section id="shift-5" aria-labelledby="shift-5-heading" className="scroll-mt-28">
                        <h2 id="shift-5-heading" className="text-3xl font-bold text-foreground tracking-tight">5. Build Original Data Assets</h2>
                        <p>The argument here is that simple pages built around <strong>original data</strong> can be highly useful because a model or journalist looking for a specific statistic needs a clean, findable and attributable number — not necessarily a 60-page industry report.</p>
                        <p>Original data does not require a research department. It requires counting something nobody else has counted, then documenting how you collected it.</p>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="rounded-2xl border border-border bg-card p-5"><h3 className="font-bold text-foreground mb-2">Customer questions</h3><p className="text-sm mb-0">Publish what buyers actually ask before purchasing, including frequencies where appropriate.</p></div>
                          <div className="rounded-2xl border border-border bg-card p-5"><h3 className="font-bold text-foreground mb-2">Real cost ranges</h3><p className="text-sm mb-0">Share anonymised ranges from your own work with clear methodology and caveats.</p></div>
                          <div className="rounded-2xl border border-border bg-card p-5"><h3 className="font-bold text-foreground mb-2">Seasonal demand</h3><p className="text-sm mb-0">Turn booking, enquiry or sales patterns into a useful local insight.</p></div>
                          <div className="rounded-2xl border border-border bg-card p-5"><h3 className="font-bold text-foreground mb-2">Small surveys</h3><p className="text-sm mb-0">Survey 40 customers and publish the result honestly — small and real beats large and borrowed.</p></div>
                        </div>
                        <p><strong>Forty responses is not a national study.</strong> It is still forty more data points than a competitor who publishes only generic commentary, provided you are transparent about the sample and methodology.</p>
                      </section>

                      <section id="priority" aria-labelledby="priority-heading" className="scroll-mt-28">
                        <h2 id="priority-heading" className="text-3xl font-bold text-foreground tracking-tight">What I'd Actually Prioritise</h2>
                        <p>If you're a small business owner wondering where to start, I would focus first on <strong>bottom-of-funnel content</strong> and <strong>original data</strong>. The other three shifts are largely about how you write and distribute content once you've decided what is worth publishing.</p>
                        <p>Bottom-of-funnel pages can support enquiries from people ready to buy. Original data can make your site more useful as a source that other pages, journalists and AI systems can cite. Your broader <Link className="text-primary font-semibold hover:underline" to="/blog/smart-objectives-competitive-benchmarking"><strong>competitive benchmarking work</strong></Link> can also become an original data asset if you publish your methodology and findings rather than only general advice.</p>
                        <div className="rounded-3xl bg-foreground p-7 md:p-9 text-primary-foreground">
                          <div className="text-xs font-bold uppercase tracking-[0.16em] text-primary mb-3">A practical 2027 content plan</div>
                          <h3 className="text-2xl font-bold mb-4">4 decision-stage posts + 1 original-data asset</h3>
                          <p className="text-primary-foreground/75 mb-0">For a small team, that gives you a manageable publishing system: answer commercial questions, document real experience, collect one useful dataset and update what you learn.</p>
                        </div>
                      </section>

                      <section aria-labelledby="caveat">
                        <h2 id="caveat" className="text-3xl font-bold text-foreground tracking-tight">One Honest Caveat About 2027 SEO Predictions</h2>
                        <p>These are predictions about 2027 made in 2026, in a search landscape that has changed direction more than once. Specific tactics may age. The underlying logic — that generic, easily generated content loses differentiation as production becomes cheaper, while genuine experience and original information become relatively more valuable — is a more durable principle to build around.</p>
                      </section>

                      <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-28">
                        <h2 id="faq-heading" className="text-3xl font-bold text-foreground tracking-tight">Frequently Asked Questions</h2>
                        <div className="space-y-7 mt-6">
                          <div><h3 className="text-xl font-bold text-foreground">Is SEO still worth investing in with AI Overviews taking clicks?</h3><p>Yes, but the distribution of value has shifted. Informational, definitional queries can lose clicks to AI summaries. Commercial and bottom-of-funnel queries still require people to evaluate sources, compare options and decide what to do next.</p></div>
                          <div><h3 className="text-xl font-bold text-foreground">What are commodity keywords and why avoid them?</h3><p>They are broad, definitional terms with high search volume that can often be answered directly in the results page. They are not automatically useless; the issue is treating volume alone as the measure of business value.</p></div>
                          <div><h3 className="text-xl font-bold text-foreground">How do I create original data if I'm a small business?</h3><p>Count something you already have access to — enquiry patterns, customer questions, pricing ranges or seasonal demand — and publish it honestly with the methodology and limitations stated.</p></div>
                          <div><h3 className="text-xl font-bold text-foreground">Does this advice apply to local businesses or only online ones?</h3><p>It applies strongly to local businesses. Local and specific queries give smaller companies room to demonstrate first-hand experience and solve problems that generic content cannot fully address.</p></div>
                          <div><h3 className="text-xl font-bold text-foreground">How long before these shifts affect rankings?</h3><p>There is no reliable fixed timeline. Content changes can take months to show meaningful ranking movement, and the timing depends on the site, query, competition, crawl frequency and the scale of the change.</p></div>
                        </div>
                      </section>

                      <section className="rounded-3xl border border-primary/20 bg-primary/[0.045] p-7 md:p-9">
                        <h2 className="text-3xl font-bold text-foreground mb-4">Want to turn these SEO shifts into a practical plan?</h2>
                        <p>Start with the searches your customers use when they are close to a decision, then add first-hand evidence and useful data. If you want to discuss how that could fit your business, you can <Link to="/#contact" className="text-primary font-semibold hover:underline">talk to me about your SEO strategy</Link>.</p>
                      </section>
                    </div>
                  </div>

                  <aside className="hidden lg:block sticky top-28 self-start">
                    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                      <div className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground mb-4">On this page</div>
                      <nav aria-label="Article sections" className="space-y-2">
                        <a className="block text-sm text-muted-foreground hover:text-primary transition-colors" href="#shift-1">1. Human-first content</a>
                        <a className="block text-sm text-muted-foreground hover:text-primary transition-colors" href="#shift-2">2. Commodity keywords</a>
                        <a className="block text-sm text-muted-foreground hover:text-primary transition-colors" href="#shift-3">3. Bottom-of-funnel searches</a>
                        <a className="block text-sm text-muted-foreground hover:text-primary transition-colors" href="#shift-4">4. Multiple jobs for content</a>
                        <a className="block text-sm text-muted-foreground hover:text-primary transition-colors" href="#shift-5">5. Original data assets</a>
                        <a className="block text-sm text-muted-foreground hover:text-primary transition-colors" href="#priority">What to prioritize</a>
                        <a className="block text-sm text-muted-foreground hover:text-primary transition-colors" href="#faq">FAQs</a>
                      </nav>
                    </div>
                  </aside>
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

export default SeoStrategy2027;
