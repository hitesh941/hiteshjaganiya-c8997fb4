import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, CalendarDays, Clock, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorCard from "@/components/AuthorCard";
import BlogSidebar from "@/components/BlogSidebar";
import BlogBreadcrumbs from "@/components/BlogBreadcrumbs";
import { getPostBySlug, SITE_URL } from "@/data/blogPosts";

const post = getPostBySlug("first-year-startup-marketing-budget")!;
const postUrl = `${SITE_URL}/blog/${post.slug}`;
const coverUrl = `${SITE_URL}${post.cover}`;

const FirstYearStartupMarketingBudget = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${postUrl}#article`,
    headline: post.title,
    description: post.description,
    image: [coverUrl],
    url: postUrl,
    datePublished: "2026-09-13T09:00:00+05:30",
    dateModified: "2026-09-13T09:00:00+05:30",
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
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Hitesh Jaganiya" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content={postUrl} />
        <meta property="og:image" content={coverUrl} />
        <meta property="og:image:alt" content={post.coverAlt} />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={coverUrl} />
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
                    <span className="rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-primary">Marketing Budget</span>
                  </div>
                  <h1 className="max-w-4xl text-3xl md:text-5xl lg:text-[3.65rem] font-bold text-foreground leading-[1.08] tracking-tight text-balance mb-6">{post.title}</h1>
                  <p className="max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-7">{post.excerpt}</p>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground mb-8">
                    <span className="inline-flex items-center gap-2"><CalendarDays className="w-4 h-4" />September 13, 2026</span>
                    <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4" />{post.readingTime}</span>
                    <span className="inline-flex items-center gap-2"><User className="w-4 h-4" />Hitesh Jaganiya</span>
                  </div>
                  <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm"><img src={post.cover} alt={post.coverAlt} className="w-full aspect-[16/7] object-cover" /></div>
                </header>

                <div className="max-w-4xl space-y-10 text-[17px] md:text-[18px] text-muted-foreground leading-[1.8]">
                  <div className="rounded-3xl border border-primary/20 bg-primary/[0.045] p-6 md:p-8">
                    <div className="text-xs font-bold uppercase tracking-[0.16em] text-primary mb-3">Quick answer</div>
                    <p className="text-xl md:text-2xl font-semibold leading-snug text-foreground mb-0">For a small first-year startup, a practical starting range is often <strong>₹3–8 lakh for the year</strong>, but the useful number comes from separating foundation, testing and scaling rather than applying a generic percentage of revenue.</p>
                  </div>

                  <section>
                    <p>Ask ten founders how much they've budgeted for marketing in year one, and you'll get ten completely different answers — some based on what a friend spent, some based on whatever's left over after everything else, and a few based on a percentage they read in a random article years ago. Almost none of them arrived at that number by actually thinking through what their business needs.</p>
                    <p>I'm Hitesh Jaganiya. I've spent 11 years working in digital marketing, mostly with founders in Ahmedabad trying to figure out exactly this question, and I'm certified in Google Ads and Google Analytics, with regular hands-on work using HubSpot and SEMrush. I want to walk through how I'd actually think about this budget question — not a generic percentage rule, but the real factors that should shape the number.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">Why the “Standard Percentage” Advice Doesn't Really Work Here</h2>
                    <p>You'll often come across advice suggesting startups spend somewhere between 7–12% of projected revenue on marketing. It's not wrong exactly, but it's built for businesses that already have revenue to calculate a percentage from. A first-year startup usually doesn't have that — you might have a small amount of seed funding, some personal savings, or early revenue that's barely covering operating costs. Applying a percentage-of-revenue rule to a business with little or no revenue yet just gives you a meaningless number.</p>
                    <p>What actually matters more in year one is a different question entirely: how much can you afford to spend on learning what works, without that spend threatening your runway? Marketing in the first year is less about scaling and more about testing — figuring out which channel, which message, and which audience actually responds to what you're offering.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">A More Useful Way to Think About It</h2>
                    <p>Rather than picking a single number, I'd break the budget into three separate buckets, because each one behaves differently and needs a different mindset.</p>
                    <h3 className="text-xl font-bold text-foreground">1. Foundation costs</h3>
                    <p>This is the one-time or occasional spend needed just to have a functioning presence — a decent website, basic branding, a Google Business Profile set up properly, maybe some initial photography or video for a product-based business. For most small startups, this lands somewhere between ₹30,000 and ₹1,50,000 as a one-time cost, depending heavily on how custom the website and branding work needs to be.</p>
                    <p>It's worth resisting the urge to over-invest here before you've validated anything about your business. A functional, clean foundation that you're willing to iterate on tends to serve a first-year startup better than a perfect one built before you've learned anything about how real customers respond.</p>
                    <h3 className="text-xl font-bold text-foreground">2. Testing budget</h3>
                    <p>This is the money you spend specifically to learn — small amounts across a couple of channels to see what actually generates interest or leads for your specific business. I'd generally suggest a minimum of ₹15,000–25,000 a month here for at least three to four months, purely for testing purposes. The goal isn't profitability yet; it's information.</p>
                    <p>If you're deciding between search intent and social discovery, my guide on <Link className="text-primary font-semibold hover:underline" to="/blog/google-ads-vs-meta-ads-ahmedabad">Google Ads vs Meta Ads for Ahmedabad businesses</Link> goes deeper into how customer intent, product type and budget should influence that decision.</p>
                    <h3 className="text-xl font-bold text-foreground">3. Scaling budget</h3>
                    <p>Once testing shows you something that's actually working — a channel with a reasonable cost per lead, a message that resonates, an audience that converts — this is where you start putting real money behind it. This number varies enormously depending on your business model, margins, and how aggressive your growth targets are, but it should always come after testing has told you something is worth scaling, not before.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">What a Realistic First-Year Budget Might Actually Look Like</h2>
                    <p>For a small startup — say, a service business or an early-stage D2C brand — I'd generally expect somewhere in the range of ₹3–8 lakhs total for the first year, spread unevenly across those three buckets. Foundation costs hit hardest in the first one to two months. Testing budget runs steadily through most of the year. Scaling budget, if it happens at all in year one, usually only kicks in during the back half, once you actually have data to justify it.</p>
                    <p>This is a wide range on purpose, because the honest answer depends heavily on your industry, your margins, and how competitive your specific market is. A B2B SaaS startup selling a ₹50,000/year subscription can justify spending considerably more to acquire a single customer than a low-margin local retail business selling a ₹500 product.</p>
                    <p>If you're comparing your planned spend with what agencies charge, my guide to <Link className="text-primary font-semibold hover:underline" to="/blog/digital-marketing-packages-in-ahmedabad">digital marketing packages in Ahmedabad</Link> explains what different monthly budgets actually tend to buy.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">The Mistake I See Most Often: Spending Too Little to Learn Anything</h2>
                    <p>Founders frequently underspend on the testing phase because it feels risky to spend money without guaranteed results. But spending ₹5,000 a month on ads doesn't actually test anything meaningfully — it's not enough data for a platform's algorithm to optimize properly, and it's not enough volume to draw real conclusions from. This often leads to a founder concluding “ads don't work for my business” when what actually happened is the budget was too thin to ever generate a fair test.</p>
                    <p>Ironically, spending slightly more for a shorter, focused testing period usually costs less overall than dragging out an underfunded campaign for months without ever getting a clear answer. If you can afford ₹20,000 a month for three months, that's generally more useful than ₹7,000 a month for nine months, because the former actually generates enough data to tell you something.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">The Opposite Mistake: Scaling Before You've Actually Tested Anything</h2>
                    <p>The other extreme happens just as often, usually right after a funding round. A startup raises money, feels pressure to show growth quickly, and puts a large budget behind a channel or message that was never properly validated. This can burn through cash fast with very little to show for it, simply because scaling amplifies whatever's already working — and if nothing was confirmed to be working yet, scaling just amplifies the uncertainty instead.</p>
                    <p>I'd always encourage founders, even ones with a healthy budget available, to run a genuine testing phase first — even a compressed one — before committing serious money to any single channel or campaign.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">Don't Forget the Cost of Your Own Time</h2>
                    <p>This gets left out of almost every budget conversation, but it's worth naming directly: if you're managing marketing yourself in year one to save money, your own time still has a cost, even if it doesn't show up as a line item anywhere. Hours spent figuring out ad platforms, writing content, or managing social media are hours not spent on product, sales, or whatever else is core to actually building the business.</p>
                    <p>There's no universal right answer here — some founders genuinely enjoy and are good at marketing execution, and doing it themselves early on makes sense. Others burn significant time on a learning curve that a modest budget for outside help could have shortened considerably.</p>
                    <p>A useful gut check: if it's taking you a full day to figure out something an experienced person would handle in an hour, and you're doing that repeatedly week after week, the “savings” from doing it yourself are often smaller than they appear.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">A Simple Way to Set Your Own Number</h2>
                    <p>If you want a starting point rather than a vague range, try this: figure out roughly what a new customer is worth to your business over their first year (revenue minus direct costs, not just the first sale). Then decide what percentage of that value you're willing to spend to acquire them during a testing phase — even a rough estimate is fine here. Multiply that by how many customers you'd realistically need to validate that your marketing is working, and that gives you a testing budget grounded in your own numbers rather than someone else's rule of thumb.</p>
                    <p>It won't be perfectly accurate in year one — nothing is, because you're still learning your own numbers as you go. But it gives you a defensible starting point instead of picking a figure out of thin air.</p>
                    <p>Once you have campaigns running, don't judge the budget only by ad-platform numbers. My guide on <Link className="text-primary font-semibold hover:underline" to="/blog/how-to-read-google-analytics-search-console-without-an-agency">how to read Google Analytics and Search Console without an agency</Link> shows how to connect traffic, enquiries and search performance to the bigger business picture.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">Frequently Asked Questions</h2>
                    <h3 className="text-xl font-bold text-foreground">Is there a standard percentage of revenue startups should spend on marketing?</h3>
                    <p>The commonly cited range is 7–12% of revenue, but this assumes you already have meaningful revenue to calculate from. For pre-revenue or very early-stage startups, budgeting based on testing needs and customer value makes more sense than a percentage rule.</p>
                    <h3 className="text-xl font-bold text-foreground">How much should I spend just to test if a marketing channel works?</h3>
                    <p>A minimum of ₹15,000–25,000 a month for three to four months is a practical starting point for a meaningful test, though this varies by industry and how competitive your specific keywords or audience segments are.</p>
                    <h3 className="text-xl font-bold text-foreground">Should I hire a consultant or agency in year one, or handle marketing myself?</h3>
                    <p>It depends on your own skills, available time, and how much runway you have to absorb a learning curve. Handling it yourself can save money short-term but often costs more time than expected; outside help can shorten that learning curve but adds to your monthly costs.</p>
                    <h3 className="text-xl font-bold text-foreground">What's a common mistake startups make with their first-year marketing budget?</h3>
                    <p>Underfunding the testing phase is one of the most common mistakes — spending too little to generate meaningful data, then wrongly concluding a channel doesn't work when the real issue was insufficient budget to test it properly.</p>
                    <h3 className="text-xl font-bold text-foreground">Should I spend more on marketing right after raising funding?</h3>
                    <p>Only once you've validated what's actually working. Scaling budget before running a genuine testing phase tends to amplify uncertainty rather than growth, regardless of how much capital is available to spend.</p>
                  </section>

                  <div className="rounded-3xl border border-border bg-card p-7 md:p-9">
                    <h2 className="text-2xl font-bold text-foreground mt-0">Need help deciding what your startup should spend?</h2>
                    <p className="mb-5">If you're building a marketing budget around your runway, customer value and growth goals, you can <Link className="text-primary font-semibold hover:underline" to="/#contact">talk to Hitesh about your plan</Link> rather than starting with an arbitrary percentage.</p>
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

export default FirstYearStartupMarketingBudget;
