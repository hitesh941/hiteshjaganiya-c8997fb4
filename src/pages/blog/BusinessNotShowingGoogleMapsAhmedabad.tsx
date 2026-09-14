import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CalendarDays, Clock, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorCard from "@/components/AuthorCard";
import BlogSidebar from "@/components/BlogSidebar";
import BlogBreadcrumbs from "@/components/BlogBreadcrumbs";
import { getPostBySlug, SITE_URL } from "@/data/blogPosts";

const post = getPostBySlug("business-not-showing-google-maps-ahmedabad")!;
const postUrl = `${SITE_URL}/blog/${post.slug}`;
const coverUrl = `${SITE_URL}${post.cover}`;
const workflowUrl = `${SITE_URL}/business-not-showing-google-maps-workflow.svg`;

const BusinessNotShowingGoogleMapsAhmedabad = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${postUrl}#article`,
    headline: post.title,
    description: post.description,
    image: [coverUrl, workflowUrl],
    url: postUrl,
    datePublished: "2026-09-14T18:00:00+05:30",
    dateModified: "2026-09-14T18:00:00+05:30",
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
        <title>Business Not Showing on Google Maps in Ahmedabad? 7 Fixes | Hitesh Jaganiya</title>
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
                <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline mb-7">
                  <ArrowLeft className="w-4 h-4" /> Back to blog
                </Link>

                <header className="mb-10">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                      Local SEO
                    </span>
                  </div>
                  <h1 className="max-w-4xl text-3xl md:text-5xl lg:text-[3.65rem] font-bold text-foreground leading-[1.08] tracking-tight text-balance mb-6">
                    {post.title}
                  </h1>
                  <p className="max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-7">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground mb-8">
                    <span className="inline-flex items-center gap-2"><CalendarDays className="w-4 h-4" />September 14, 2026</span>
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
                    <p className="text-xl md:text-2xl font-semibold leading-snug text-foreground mb-0">
                      If your business is not showing on Google Maps in Ahmedabad, first test your visibility like a customer. Then check verification, business information, categories, reviews, service-area setup, duplicate listings, and any suspension or suppression before changing everything at once.
                    </p>
                  </div>

                  <section>
                    <p>
                      This is one of the most common frustrations I hear from small business owners in Ahmedabad — they know their business is on Google Business Profile, they search for their own shop name or category, and either nothing shows up, a competitor three streets away shows up first, or worse, a completely different business appears in their spot. It feels random, but it almost never is. There&apos;s usually a specific, identifiable reason.
                    </p>
                    <p>
                      I&apos;m Hitesh Jaganiya, a digital marketing consultant with 11 years of experience, certified in Google Ads and Google Analytics. Local visibility issues like this come up constantly in my work, and most of the time the fix is more straightforward than people expect — it just requires knowing where to actually look. Here&apos;s how I&apos;d work through this problem systematically.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">First, Understand What You&apos;re Actually Testing</h2>
                    <p>
                      Before troubleshooting anything, it matters how you&apos;re checking. Searching for your own business name while logged into your own Google account, on a device that&apos;s regularly near your shop&apos;s location, gives Google every possible hint that it&apos;s you searching for yourself — which can make your listing appear even if it wouldn&apos;t for a genuine customer.
                    </p>
                    <p>
                      The more honest test is searching from an incognito browser window, ideally for a category term rather than your business name — &quot;bakery near me&quot; instead of your bakery&apos;s actual name, or &quot;digital marketing consultant Ahmedabad&quot; rather than searching your own brand. If you can, ask someone in a different part of the city (or use a VPN set to a different Ahmedabad location) to search the same term and tell you what they see. This tells you what a genuine potential customer actually experiences, which is the only test that really matters.
                    </p>
                  </section>

                  <figure className="my-2 overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                    <img src="/business-not-showing-google-maps-workflow.svg" alt="Google Maps visibility troubleshooting workflow for business verification, NAP consistency, categories, reviews and listing issues" width="1200" height="675" loading="lazy" className="w-full h-auto" />
                    <figcaption className="px-5 py-3 text-sm text-muted-foreground border-t border-border">A practical order for troubleshooting: start with the checks that can make a profile nearly invisible, then work down to ranking and maintenance issues.</figcaption>
                  </figure>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">Reason 1: Your Profile Isn&apos;t Actually Verified</h2>
                    <p>
                      This sounds basic, but it&apos;s genuinely one of the most common causes. An unverified Google Business Profile can sometimes appear in a very limited capacity, or not at all, particularly for competitive local searches. Verification (usually by postcard, phone, or email, depending on your business category) confirms to Google that a real business exists at that location, and it&apos;s a prerequisite for full visibility, not an optional extra step.
                    </p>
                    <p>
                      Check this in your Google Business Profile dashboard — it will clearly show if verification is pending, incomplete, or was somehow reversed (which can happen if Google flags something as suspicious, even mistakenly).
                    </p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">Reason 2: Inconsistent Business Information Across the Web</h2>
                    <p>
                      Google cross-references your business name, address, and phone number (often called NAP — Name, Address, Phone) against how it appears elsewhere online — your website, other directories like JustDial or Sulekha, social media pages, and old listings that might still be floating around from years ago. If your address is written slightly differently in different places — &quot;SG Highway&quot; in one, &quot;Sarkhej-Gandhinagar Highway&quot; in another, a shifted suite number, or an old address you moved away from a year ago but never updated everywhere — Google can lose confidence in which information is actually correct, which hurts how confidently it shows your listing.
                    </p>
                    <p>
                      This is worth checking directly: search your business name plus city, and see what address and phone number show up across the first two pages of results. If you find inconsistencies, correcting them everywhere you can find them is one of the more tedious but genuinely effective fixes available.
                    </p>
                    <p>
                      If you are also working on your website&apos;s organic visibility, my guide to <Link to="/blog/seo-for-real-estate-businesses-in-ahmedabad" className="font-semibold text-primary hover:underline">SEO for real estate businesses in Ahmedabad</Link> explains how local relevance, location signals and trust fit together for businesses serving specific areas.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">Reason 3: Category Selection Doesn&apos;t Match What People Actually Search</h2>
                    <p>
                      Choosing the right primary category matters more than most business owners realize. If you run a business that could reasonably fall under two or three category options, and you&apos;ve picked one that&apos;s too broad or slightly off from how people actually search, you&apos;re competing in the wrong pool entirely. A &quot;marketing agency&quot; categorized simply as &quot;Consultant&quot; instead of &quot;Marketing Agency&quot; or &quot;Advertising Agency&quot; is going to miss a meaningful share of relevant local search visibility, even with a perfectly optimized profile otherwise.
                    </p>
                    <p>
                      It&apos;s worth revisiting your primary and secondary category selections periodically — Google adds and refines categories over time, and a category that didn&apos;t exist when you first set up your profile might now describe your business far more precisely.
                    </p>
                    <p>
                      A useful way to check this: search a few of the terms you&apos;d expect your ideal customer to use, and look at what categories the businesses currently ranking well have chosen. If competitors ranking above you have consistently picked a category you haven&apos;t considered, that&apos;s a strong hint worth testing on your own profile.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">Reason 4: Not Enough (or No Recent) Reviews</h2>
                    <p>
                      Review count and review recency both factor into local visibility, and this is one area where I see genuine neglect constantly. A profile with 8 reviews from three years ago, none since, sends a weaker trust signal than a profile with 30 reviews, several from the past month. It&apos;s not just about the star rating — consistent, recent review activity signals to Google that the business is actively operating and engaging with real customers.
                    </p>
                    <p>
                      If you haven&apos;t asked a customer for a review in months, that&apos;s a completely free, immediate action worth taking today — a simple, direct ask after a good interaction works far better than a generic request sent out to everyone at once.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">Reason 5: Your Service Area Setup Doesn&apos;t Match Your Actual Business Model</h2>
                    <p>
                      If you&apos;re a service-based business — say, a home cleaning service, a repair technician, or a consultant like myself — that travels to customers rather than having them visit a fixed location, your Google Business Profile should generally be set up as a service-area business rather than a storefront with a public address. Getting this wrong in either direction — showing a fixed address for a business that doesn&apos;t actually receive walk-in customers, or failing to properly define your service area — can both confuse Google&apos;s understanding of who should see your listing and where.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">Reason 6: Duplicate Listings Competing Against Each Other</h2>
                    <p>
                      This happens more often than people realize, especially for businesses that have moved locations, rebranded, or had multiple people create listings independently over the years (a previous employee, an old marketing vendor, or an automated business listing service). If two profiles exist for the same business, Google may split attention, reviews, and ranking signals between them, weakening both rather than consolidating strength into one authoritative listing.
                    </p>
                    <p>
                      Search your business name carefully — including slight name variations and old addresses — to check for duplicates. Google provides a process for reporting and merging duplicate listings once found, though it can take some time to resolve.
                    </p>
                    <p>
                      This is also worth checking if your business has ever changed ownership, been listed by a previous management team, or had a franchise-style setup where a corporate office accidentally created a listing alongside your local one. These situations create duplicates far more often than business owners expect, and they can sit unnoticed for years, quietly splitting the very signals that would otherwise help a single, consolidated listing rank well.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">Reason 7: A Suspended or Suppressed Profile</h2>
                    <p>
                      Sometimes a profile has actually been suspended by Google, often without a particularly clear explanation, usually triggered by something that looks like a policy violation — even an accidental one, like a business name that includes marketing language (&quot;Best Digital Marketing Ahmedabad&quot; instead of just the actual business name), a mismatched address, or unusual account activity. If your profile has disappeared entirely rather than just ranking poorly, checking your Business Profile dashboard for any suspension notices should be the very first thing you do, before troubleshooting anything else on this list.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">A Systematic Way to Work Through This</h2>
                    <p>
                      Rather than guessing which of these applies to you, I&apos;d suggest working through them in this order: confirm verification status first, since nothing else matters if that&apos;s broken. Then check for suspension notices. After that, audit your NAP consistency and category selection, since these are the most common silent issues. Then look at review activity and duplicate listings. This order roughly reflects how severely each issue tends to affect visibility — verification and suspension can mean near-total invisibility, while category and consistency issues tend to cause partial, harder-to-notice underperformance.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">What Actually Helps Once the Basics Are Fixed</h2>
                    <p>
                      Beyond troubleshooting what&apos;s broken, a few ongoing habits genuinely help local visibility over time: posting regular updates through Google Business Profile&apos;s post feature (offers, events, updates — even simple ones), uploading real photos periodically rather than leaving old or stock imagery, and responding to every review, positive or negative, since response activity itself is a visible signal of an actively managed business. None of these fix an underlying technical problem, but they compound meaningfully once the fundamentals are actually in place.
                    </p>
                    <p>
                      It&apos;s also worth building a habit of checking your profile every few weeks rather than only when something feels wrong. A lot of these issues — a suggested edit slipping through, a review going unanswered for too long, a slow drift in NAP consistency after updating your website but forgetting a directory listing — are much easier to catch and fix early than to untangle months later once they&apos;ve compounded into a bigger visibility problem.
                    </p>
                    <p>
                      For a broader look at how to judge your website and search data yourself, you can also read <Link to="/blog/how-to-read-google-analytics-search-console-without-an-agency" className="font-semibold text-primary hover:underline">how to read Google Analytics and Search Console without an agency</Link>. The same principle applies here: look at the evidence before changing the strategy.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">Frequently Asked Questions</h2>
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">How long does it take for Google Maps changes to show up after fixing an issue?</h3>
                        <p>It varies, but most changes reflect within a few days to two weeks. Category changes and information corrections tend to update faster than recovering from something more serious like a suspension, which can take longer and sometimes requires an appeal.</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">Can a competitor cause my listing to disappear?</h3>
                        <p>It&apos;s rare but not impossible — false suggested edits or fraudulent flags can sometimes affect a listing. If you suspect this, check your profile&apos;s edit history in the dashboard and dispute any incorrect suggested changes directly with Google.</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">Should I create a new listing if my old one seems broken?</h3>
                        <p>Generally no — creating a duplicate usually makes things worse, not better. It&apos;s almost always better to fix or, if necessary, formally request reinstatement of an existing listing than to start fresh with a new one.</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">Does having a website help my Google Maps ranking?</h3>
                        <p>Yes, to a meaningful degree. A functioning, consistent website that matches your Business Profile information reinforces the trust signals Google uses, and it gives potential customers another place to confirm your business is legitimate before visiting or calling.</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">Is it worth paying for Google Ads if my Maps listing isn&apos;t showing organically?</h3>
                        <p>It can help in the short term for immediate visibility, but it doesn&apos;t fix the underlying organic issue. I&apos;d generally recommend fixing the root cause first — otherwise you&apos;re paying to compensate for a problem that a bit of profile cleanup could resolve for free.</p>
                      </div>
                    </div>
                  </section>

                  <div className="rounded-3xl border border-border bg-card p-7 md:p-8">
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary mb-3">One last thing</p>
                    <p className="text-xl font-semibold text-foreground leading-relaxed mb-5">
                      If your business is invisible on Maps, don&apos;t immediately create another listing or spend more money. Find out which signal is broken first.
                    </p>
                    <Link to="/#contact" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">
                      Talk to Hitesh <ArrowRight className="w-4 h-4" />
                    </Link>
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

export default BusinessNotShowingGoogleMapsAhmedabad;
