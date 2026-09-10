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

const post = getPostBySlug("digital-marketing-packages-in-ahmedabad")!;
const postUrl = `${SITE_URL}/blog/${post.slug}`;
const coverUrl = post.cover.startsWith("http") ? post.cover : `${SITE_URL}${post.cover}`;

const faqs = [
  { q: "What is the minimum budget for digital marketing in Ahmedabad?", a: "Most legitimate packages start around ₹15,000–20,000 per month, though this typically covers only basic maintenance rather than active growth. For measurable lead generation, ₹30,000+ is a more realistic starting point." },
  { q: "Is a higher budget always better for results?", a: "Not necessarily. A higher budget generally buys more channels, more testing, and senior attention, but results still depend heavily on whether the strategy fits your specific business and whether the team executing it is genuinely experienced." },
  { q: "Should ad spend be included in the package price, or separate?", a: "It is usually separate, and it should be. You want visibility into exactly how much of your money is reaching your audience directly through ads versus going toward the agency or consultant’s management fee." },
  { q: "How long before I see results from a digital marketing package?", a: "Paid ads can show directional signals within 2–4 weeks. SEO-driven results typically take 3–6 months to show meaningfully, regardless of budget tier. A bigger package speeds up execution but does not bypass how search engines actually work." },
  { q: "Should I choose a fixed monthly package or a performance-based model?", a: "Both have trade-offs. Fixed packages offer predictability and are common for SEO and ongoing management. Performance-based models can work well for certain industries but require very clear definitions of what counts as a qualified lead." },
];

const schema = [
  { "@context": "https://schema.org", "@type": "BlogPosting", headline: post.title, description: post.description, image: coverUrl, url: postUrl, datePublished: post.datePublished, dateModified: post.dateModified, inLanguage: "en-IN", articleSection: post.category, keywords: post.keywords.join(", "), mainEntityOfPage: { "@type": "WebPage", "@id": postUrl }, author: { "@type": "Person", "@id": `${SITE_URL}/#person`, name: "Hitesh Jaganiya", url: `${SITE_URL}/`, jobTitle: "Digital Marketing Consultant" }, publisher: { "@type": "Person", "@id": `${SITE_URL}/#person`, name: "Hitesh Jaganiya", url: `${SITE_URL}/`, jobTitle: "Digital Marketing Consultant" } },
  { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [ { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` }, { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` }, { "@type": "ListItem", position: 3, name: post.title, item: postUrl } ] },
  { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) },
];

const DigitalMarketingPackagesAhmedabad = () => (
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
      <meta property="article:published_time" content={post.datePublished} />
      <meta property="article:modified_time" content={post.dateModified} />
      <meta property="article:section" content={post.category} />
      <meta property="article:publisher" content="https://www.hiteshjaganiya.com/" />
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
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span className="inline-flex items-center gap-1.5"><CalendarDays className="w-4 h-4" />{new Date(post.datePublished).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
                  <span className="inline-flex items-center gap-1.5"><Clock className="w-4 h-4" />{post.readingTime}</span>
                  <span className="inline-flex items-center gap-1.5"><User className="w-4 h-4" />Hitesh Jaganiya</span>
                </div>
                <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">{post.category}</span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance mb-6">{post.title}</h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">{post.excerpt}</p>
                <img src={post.cover} alt={post.coverAlt} className="w-full aspect-[16/9] object-cover rounded-2xl border border-border mb-10" />
              </header>
              <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
                <p>If you have asked three different agencies in Ahmedabad for a quote, you have probably gotten three very different numbers for what sounds like the same thing. One quotes ₹15,000 a month. Another says ₹50,000 will not be enough. A third throws around ₹1 lakh+ like it is the obvious starting point.</p>
                <p>I am Hitesh Jaganiya, and I have been working in digital marketing in Ahmedabad for 11 years now—SEO, Google Ads, and growth strategy for businesses at very different stages. What I want to do here is something most pricing pages will not: walk through what changes as the budget goes up, so you know what you are paying for instead of just comparing three numbers on a WhatsApp quote.</p>
                <section><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">Why the same “package” can cost ₹15,000 or ₹1,00,000</h2><p>The honest answer is that “digital marketing” is not one service. It is a bundle of very different jobs stitched together, and packages differ based on which jobs are actually being done, how much time a real person spends on them, and how experienced that person is.</p><p className="mt-5">A ₹15,000 package usually buys you a junior executive’s time split across five or six clients. A ₹1,00,000+ package usually buys you a small team, senior oversight, and enough ad spend or content volume to actually move numbers. The service names on the invoice might look identical. What is different is depth, frequency, and who is actually doing the work.</p></section>
                <section><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">The three broad tiers</h2><div className="overflow-x-auto rounded-xl border border-border"><table className="w-full min-w-[640px] text-left text-base"><thead className="bg-secondary/50 text-foreground"><tr><th className="p-4 font-semibold">Budget range</th><th className="p-4 font-semibold">Best suited for</th><th className="p-4 font-semibold">What you are really paying for</th></tr></thead><tbody><tr className="border-t border-border"><td className="p-4 font-semibold text-foreground">₹15,000–₹25,000/month</td><td className="p-4">Very early-stage or single-location small businesses</td><td className="p-4">Basic maintenance and visibility, not aggressive growth</td></tr><tr className="border-t border-border"><td className="p-4 font-semibold text-foreground">₹30,000–₹60,000/month</td><td className="p-4">Growing startups and SMEs ready to scale</td><td className="p-4">Active management, testing, and measurable lead flow</td></tr><tr className="border-t border-border"><td className="p-4 font-semibold text-foreground">₹1,00,000+/month</td><td className="p-4">Funded startups and established businesses</td><td className="p-4">Multi-channel strategy, senior involvement, and scale</td></tr></tbody></table></div></section>
                <section><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">₹15,000–₹25,000: The “keep the lights on” package</h2><p>At this level, you are typically getting one or two services, not a full strategy. Most commonly it is basic social media posting, some light on-page SEO work, and perhaps a monthly report that nobody reads properly. Google or Meta ad spend, if included at all, is usually just enough to test the waters—think ₹5,000–10,000 in actual ad budget, which barely gives an algorithm enough data to optimize properly.</p><p className="mt-5">This is not a bad package for a very small, single-location business that just needs some presence online. But if you are expecting consistent leads or a real jump in traffic from this tier, you are likely to be disappointed. There simply are not enough hours or spend built into the price for that. Think of it as maintenance, not growth.</p><p className="mt-5">Watch whether the person managing your account is junior staff learning on your account or genuinely experienced. Agencies rarely put their best people on their smallest retainers, and it is worth knowing that going in.</p></section>
                <section><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">₹30,000–₹60,000: Where real execution starts</h2><p>This is the range where many growing startups in Ahmedabad land, and it is where digital marketing starts looking like an investment rather than a checkbox. At this budget, you would typically expect:</p><ul className="list-disc pl-6 space-y-3 mt-5"><li>A proper SEO plan with business-specific keyword research, technical fixes, and consistent content.</li><li>Active Google Ads or Meta Ads management with real ad spend behind it, usually ₹15,000–30,000 separate from the management fee.</li><li>Landing page optimization instead of sending all traffic to the homepage and hoping it converts.</li><li>Monthly reporting that shows leads, cost per lead, and what is actually working—not just reach and impressions.</li></ul><p className="mt-5">The difference between this tier and the one below is not really the services listed. It is the depth of each one, and how often someone is looking at your numbers and adjusting. A ₹40,000 package with weekly ad-performance checks will outperform a ₹25,000 package running on autopilot, even though both technically include Google Ads management.</p></section>
                <section><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">₹1,00,000 and above: Strategy, scale, and senior time</h2><p>Once you cross into six figures monthly, you are really buying senior attention and coordinated strategy across multiple channels—not just SEO or just ads, but both working together, often alongside content marketing, CRM setup, email automation, and sometimes influencer or PR work.</p><p className="mt-5">At this level, ad spend itself is usually substantial—often ₹50,000 to several lakhs depending on the business—and the management fee reflects genuine complexity: multiple campaigns, A/B testing on creatives and landing pages, and a team that includes a strategist, not just an executor.</p><p className="mt-5">This tier makes sense for funded startups or established businesses where the cost of a missed opportunity is higher than the cost of marketing itself. It rarely makes sense for a pre-revenue startup still figuring out product-market fit.</p></section>
                <section><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">What nobody tells you about package pricing</h2><ul className="space-y-5"><li><strong className="text-foreground">Ad spend and management fees are usually separate.</strong> Ask directly how much of an “all-inclusive” quote is actually going toward ad spend versus the management fee.</li><li><strong className="text-foreground">Longer contracts are not automatically better.</strong> A three-month trial can be safer than a discounted 12-month lock-in if you are still evaluating the agency.</li><li><strong className="text-foreground">“Custom package” does not always mean customized.</strong> Ask what a similar business at your stage typically pays and what work is included.</li><li><strong className="text-foreground">Cheaper is not always worse, and expensive is not always better.</strong> Bandwidth and relevant expertise matter more than the number alone.</li><li><strong className="text-foreground">Check GST and setup fees.</strong> A ₹50,000 quote can become ₹59,000 after GST, and onboarding or creative charges can sit outside the monthly retainer.</li></ul></section>
                <section><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">How to choose the right package for your business</h2><p>Start with your business stage and target, not the package name. If you are a local business that needs consistent enquiries, you may get more value from focused local SEO and Google Ads than from a large social-media package. If you are a funded startup, you may need a coordinated acquisition system across search, paid social, content, and conversion optimization.</p><p className="mt-5">Before signing, ask for the exact deliverables, who will do the work, how ad spend is separated, what gets reported each month, and what success will be measured against. A clear ₹40,000 plan is usually more useful than a vague “full-service” ₹1 lakh package.</p></section>
                <div className="p-6 bg-secondary/40 rounded-2xl border border-border"><p className="text-sm font-semibold text-foreground mb-2">Related reading</p><p className="text-base">Before comparing package prices, read <Link to="/blog/top-8-digital-marketing-agencies-in-ahmedabad" className="text-primary font-semibold hover:underline">the guide to choosing a digital marketing agency in Ahmedabad</Link>. You can also review <Link to="/#services" className="text-primary font-semibold hover:underline">the services offered</Link> and <Link to="/#contact" className="text-primary font-semibold hover:underline">get in touch</Link>.</p></div>
                <section><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">Final take</h2><p>There is no magic number for digital marketing in Ahmedabad. ₹15,000 can be perfectly reasonable for maintenance. ₹50,000 can be a strong growth budget for the right business. ₹1 lakh+ can be justified when you genuinely need the people, testing, and channel mix that come with it.</p><p className="mt-5">The mistake is choosing based on price alone. Compare what the team will actually do, how much senior attention you get, where ad spend goes, and whether the package matches your business stage. That is the difference between buying marketing activity and buying a growth system.</p></section>
                <section className="border-t border-border pt-8"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">Frequently asked questions</h2><div className="space-y-5">{faqs.map((faq) => <div key={faq.q} className="p-6 bg-card rounded-xl border border-border"><h3 className="text-lg font-semibold text-foreground mb-2">{faq.q}</h3><p className="text-base">{faq.a}</p></div>)}</div></section>
              </div>
              <AuthorCard />
              <div className="mt-12 p-8 bg-secondary/40 rounded-2xl border border-border text-center"><h2 className="text-2xl font-bold text-foreground mb-3">Not sure which marketing package fits?</h2><p className="text-muted-foreground mb-6">Tell me your current stage and target, and I will help you work out whether you need a package, a consultant, or a simpler foundation first.</p><div className="flex flex-wrap justify-center gap-4"><Button asChild size="lg"><Link to="/#contact">Let’s talk <ArrowRight className="w-4 h-4 ml-1" /></Link></Button><Button asChild size="lg" variant="outline"><Link to="/blog">Read more articles</Link></Button></div></div>
            </div>
            <BlogSidebar />
          </div>
        </div>
      </article>
    </main>
    <Footer />
  </div>
);

export default DigitalMarketingPackagesAhmedabad;
