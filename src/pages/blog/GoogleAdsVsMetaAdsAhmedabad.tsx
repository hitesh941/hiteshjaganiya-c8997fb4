import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Clock, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorCard from "@/components/AuthorCard";
import BlogSidebar from "@/components/BlogSidebar";
import BlogBreadcrumbs from "@/components/BlogBreadcrumbs";
import { Button } from "@/components/ui/button";
import { getPostBySlug, SITE_URL } from "@/data/blogPosts";

const post = getPostBySlug("google-ads-vs-meta-ads-ahmedabad")!;
const postUrl = `${SITE_URL}/blog/${post.slug}`;
const coverUrl = post.cover.startsWith("http") ? post.cover : `${SITE_URL}${post.cover}`;

const faqs = [
  { q: "Which is cheaper, Google Ads or Meta Ads, in Ahmedabad?", a: "Meta Ads generally have a lower cost per click and cost per impression across most categories, but \"cheaper\" doesn't automatically mean better ROI — Google's higher cost per click often comes with higher purchase intent, which can make it more efficient per actual sale despite the higher click price." },
  { q: "Should a brand-new business with no website start with Google or Meta?", a: "Neither platform will perform well without at least a basic landing page to send traffic to. If forced to choose before a website exists, Meta can build initial awareness and a following, but investing in a simple, functional website should happen before serious ad spend on either platform." },
  { q: "How long before I know if a campaign is working?", a: "Give Google Ads at least 3-4 weeks and enough spend to generate meaningful click data before judging performance. Give Meta Ads a similar window, ideally allowing the algorithm to exit its learning phase, which usually needs a reasonable volume of conversions within the first week or two of a campaign." },
  { q: "Can small businesses in Ahmedabad really compete with bigger brands on these platforms?", a: "Yes, particularly on Meta, where precise audience targeting often matters more than budget size. On Google, competing for broad, expensive keywords is harder for smaller budgets, but targeting specific, local, lower-competition search terms can still work well against much bigger competitors." },
  { q: "Do I need a digital marketing consultant to run these, or can I do it myself?", a: "Both platforms are accessible enough to learn on a small budget, and there's real value in understanding the basics yourself even if you eventually hand it off. That said, the learning curve costs real money in wasted spend while you figure out targeting, bidding, and creative — so many founders find it more efficient to bring in someone experienced once budgets grow past the testing stage." },
];

const sections = [
  {
    heading: "The Core Difference That Actually Matters",
    paragraphs: [
      "Before comparing features, it helps to understand what each platform is fundamentally built to do, because that's what drives everything else.",
      "Google Ads shows up when someone is actively searching for something — \"digital marketing consultant near me,\" \"best AC repair Ahmedabad,\" \"buy running shoes online India.\" The person is already looking. You're just making sure they find you instead of a competitor.",
      "Meta Ads (Facebook and Instagram) work differently. Nobody's searching for your product on Instagram — you're interrupting their scroll and creating interest in something they weren't necessarily looking for. This is often called \"demand capture\" versus \"demand generation,\" and it's the single biggest reason the same budget performs completely differently depending on which platform you choose and what your product actually is.",
      "If your business solves a problem people already know they have, Google Ads usually wins. If your business is something people need to be shown before they realize they want it, Meta usually does more of the heavy lifting.",
    ],
  },
  {
    heading: "When Google Ads Should Be Your First Move",
    paragraphs: [
      "You sell something people actively search for. Plumbers, doctors, lawyers, real estate agents, coaching institutes, repair services — if there's meaningful search volume for what you do plus \"Ahmedabad\" or \"near me,\" Google Ads puts you in front of people at the exact moment they're deciding. That's about as close to a warm lead as advertising gets.",
      "Your sales cycle is short and the intent is high. Someone searching \"emergency locksmith Ahmedabad\" is going to call within the hour. That immediacy is Google's biggest strength — you're not building awareness, you're catching a decision already in progress.",
      "You have a decent, functioning website already. Google Ads sends people who are ready to act, but a slow or confusing website will waste that intent fast. If your site isn't in reasonable shape, fixing that should honestly come before spending on either platform.",
      "The catch with Google Ads in Ahmedabad specifically: certain categories (real estate, education, legal, financial services) have gotten expensive because a lot of local businesses are bidding on the same limited keyword pool. A single click on a competitive term can run ₹40-100+, so your budget needs to be realistic about how many clicks that actually buys you in a month.",
    ],
  },
  {
    heading: "When Meta Ads Should Be Your First Move",
    paragraphs: [
      "You're selling something visual or impulse-driven. Fashion, home decor, food and beverage, fitness studios, beauty and wellness — anything that looks good in a photo or video benefits from Meta's format. People don't search \"trendy kurti Ahmedabad,\" but they'll absolutely stop scrolling for one that catches their eye.",
      "You need to build awareness before anyone's ready to buy. New brands with no existing search demand have a real problem on Google — nobody's typing your business name because they've never heard of it. Meta lets you manufacture that first moment of awareness at a lower cost per impression than Google typically allows.",
      "Your targeting is more about who someone is than what they're looking for. Meta's strength is demographic and interest-based targeting — age, location, interests, behaviors. If your ideal customer is \"women aged 25-40 in Ahmedabad interested in fitness,\" Meta can find that audience far more precisely than Google can, since Google is built around keywords, not personas.",
      "Your budget is genuinely limited. Meta's cost per click is usually lower than Google's for most categories in Ahmedabad, which means a smaller budget goes further in terms of raw reach and impressions, even if the intent behind each click is softer.",
    ],
  },
  {
    heading: "What I'd Actually Tell a Founder With a Limited Budget",
    paragraphs: [
      "If you can only run one platform right now, ask yourself this: does a customer need to be found, or do they need to be shown something?",
      "A service business solving an immediate, known problem — plumbing, appliance repair, consulting, medical care — should generally start with Google Ads. The intent is already there; you just need visibility at the right moment.",
      "A product business selling something people don't yet know they want, or a brand still building recognition, generally gets more out of Meta first. You're creating the want, not catching it.",
      "There's a middle category too, and it's genuinely common in Ahmedabad: ecommerce and D2C brands. These businesses often do best running both, but if forced to pick one first, I'd usually lean toward Meta for a brand-new product line with no search history, and toward Google once there's enough brand recognition that people are starting to search for you by name.",
      "It also helps to think about where your customer actually is in their decision process. Someone who already knows exactly what they want and is comparing options is closer to a Google-style search behavior, even on a product they'd normally discover on Instagram. Someone who doesn't yet know a solution like yours exists is squarely in Meta territory, regardless of industry. This is why the same business — say, a furniture brand — might use Meta to introduce a new collection and Google to capture people who saw that collection somewhere and are now searching the brand name directly to buy.",
    ],
  },
  {
    heading: "A Mistake I See Constantly",
    paragraphs: [
      "Founders often judge a platform's performance in the first two to three weeks and abandon it if it's not converting immediately. Both platforms need a learning period — Meta's algorithm typically needs 50+ conversions in a week to exit the \"learning phase\" and start optimizing properly, and Google Ads needs enough search volume and click data to refine targeting and Quality Score. Pulling the plug in week two, before either system has enough data, usually means you never find out what the platform could have actually done for you.",
      "Another common mistake: running both platforms with the same ad creative and messaging. What works as a Google search ad (text-based, intent-driven, answering a specific query) rarely works well as a Meta ad (visual, scroll-stopping, benefit-led). Copy-pasting the same approach across both is one of the fastest ways to waste budget on either platform.",
      "There's also a tendency to over-focus on cost per click as the deciding metric, when cost per acquisition is what actually matters. A ₹5 click on Meta that never converts is more expensive than a ₹60 click on Google that turns into a customer. I'd encourage founders to track what happens after the click — not just how cheap the click itself was — before deciding a platform \"isn't working.\"",
    ],
  },
  {
    heading: "Budget Realities for Ahmedabad Businesses",
    paragraphs: [
      "For Google Ads to generate meaningful data, I'd suggest a minimum of ₹15,000-20,000 a month in actual ad spend for most local service categories — below that, you're often getting too few clicks to draw real conclusions, especially in competitive niches.",
      "For Meta Ads, you can technically start testing with less — ₹8,000-10,000 a month can generate useful early signals for a well-targeted, well-designed campaign, simply because cost per click and cost per impression tend to run lower than Google's in most Ahmedabad-relevant categories.",
      "Neither number is a guarantee of results. They're rough thresholds below which it becomes genuinely hard to tell whether a strategy is failing or simply under-resourced.",
    ],
  },
  {
    heading: "Can You Just Do Both?",
    paragraphs: [
      "Eventually, yes — and for many businesses, running both platforms together, each doing what it's naturally good at, produces better results than either alone. Google catches people who are already searching; Meta builds the awareness that eventually turns into those searches. Businesses that run Meta for awareness often see their branded search volume on Google increase over time, which is a sign the two channels are reinforcing each other rather than competing for the same budget.",
      "But \"eventually\" is the key word. If your budget forces a choice right now, pick based on your actual product and how your customer behaves — not based on which platform sounds more advanced or which one a friend's business happens to be using.",
    ],
  },
];

const schema = [
  { "@context": "https://schema.org", "@type": "BlogPosting", headline: post.title, description: post.description, image: coverUrl, url: postUrl, datePublished: post.datePublished, dateModified: post.dateModified, inLanguage: "en-IN", articleSection: post.category, keywords: post.keywords.join(", "), mainEntityOfPage: { "@type": "WebPage", "@id": postUrl }, author: { "@type": "Person", "@id": `${SITE_URL}/#person`, name: "Hitesh Jaganiya", url: `${SITE_URL}/`, jobTitle: "Digital Marketing Consultant" }, publisher: { "@type": "Person", "@id": `${SITE_URL}/#person`, name: "Hitesh Jaganiya", url: `${SITE_URL}/`, jobTitle: "Digital Marketing Consultant" } },
  { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [ { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` }, { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` }, { "@type": "ListItem", position: 3, name: post.title, item: postUrl } ] },
  { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) },
];

const GoogleAdsVsMetaAdsAhmedabad = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>{post.title}</title>
      <meta name="description" content={post.description} />
      <meta name="keywords" content={post.keywords.join(", ")} />
      <meta name="author" content="Hitesh Jaganiya" />
      <meta name="publisher" content="Hitesh Jaganiya" />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href={postUrl} />
      <link rel="alternate" hrefLang="en-IN" href={postUrl} />
      <meta property="article:publisher" content={`${SITE_URL}/`} />
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
          <BlogBreadcrumbs />
          <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-12 items-start">
            <div className="max-w-3xl">
              <Link to="/blog" className="inline-flex items-center text-sm font-semibold text-primary hover:underline mb-8">← Back to blog</Link>
              <header>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6"><span className="inline-flex items-center gap-1.5"><CalendarDays className="w-4 h-4" />{new Date(post.datePublished).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span><span className="inline-flex items-center gap-1.5"><Clock className="w-4 h-4" />{post.readingTime}</span><span className="inline-flex items-center gap-1.5"><User className="w-4 h-4" />Hitesh Jaganiya</span></div>
                <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">{post.category}</span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance mb-6">{post.title}</h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">{post.excerpt}</p>
                <img src={post.cover} alt={post.coverAlt} className="w-full aspect-[16/9] object-cover rounded-2xl border border-border mb-10" />
              </header>
              <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
                <p>Almost every founder I talk to in Ahmedabad asks some version of the same question when they're ready to spend on advertising for the first time: Google or Meta? Usually they've heard both are "essential," their budget only stretches to one right now, and nobody's given them a straight answer on which to start with.</p>
                <p>I'm Hitesh Jaganiya. I've spent 11 years in digital marketing here in Ahmedabad, and I'm certified in Google Ads and Google Analytics, with additional hands-on work using HubSpot and SEMrush for strategy and reporting. This isn't going to be a "it depends" non-answer — it does depend on a few specific things, but I'll walk you through exactly what those things are so you can actually decide for your own business, not just take my word for it.</p>
                {sections.map((section) => <section key={section.heading}><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">{section.heading}</h2>{section.paragraphs.map((paragraph, index) => <p key={index} className={index ? "mt-5" : ""}>{paragraph}</p>)}</section>)}
                <section className="border-t border-border pt-8"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">Frequently Asked Questions</h2><div className="space-y-5">{faqs.map((faq) => <div key={faq.q} className="p-6 bg-card rounded-xl border border-border"><h3 className="text-lg font-semibold text-foreground mb-2">{faq.q}</h3><p className="text-base">{faq.a}</p></div>)}</div></section>
              </div>
              <AuthorCard />
              <div className="mt-12 p-8 bg-secondary/40 rounded-2xl border border-border text-center"><h2 className="text-2xl font-bold text-foreground mb-3">Need help choosing between Google Ads and Meta Ads?</h2><p className="text-muted-foreground mb-6">Tell me what you sell, who you target, and your starting budget, and I can help you decide where to put your first advertising rupee.</p><div className="flex flex-wrap justify-center gap-4"><Button asChild size="lg"><Link to="/#contact">Let’s talk <ArrowRight className="w-4 h-4 ml-1" /></Link></Button><Button asChild size="lg" variant="outline"><Link to="/blog">Read more articles</Link></Button></div></div>
            </div>
            <BlogSidebar />
          </div>
        </div>
      </article>
    </main>
    <Footer />
  </div>
);

export default GoogleAdsVsMetaAdsAhmedabad;
