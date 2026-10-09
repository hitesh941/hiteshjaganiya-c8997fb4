import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, CalendarDays, Clock, Download, User, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorCard from "@/components/AuthorCard";
import BlogSidebar from "@/components/BlogSidebar";
import BlogBreadcrumbs from "@/components/BlogBreadcrumbs";
import { getPostBySlug, SITE_URL } from "@/data/blogPosts";

const post = getPostBySlug("local-seo-checklist-ahmedabad")!;
const postUrl = `${SITE_URL}/blog/local-seo-checklist-ahmedabad`;
const coverUrl = `${SITE_URL}${post.cover}`;
const pdfUrl = "/Local-SEO-Checklist-Ahmedabad-Hitesh-Jaganiya.pdf";
const description = "Use this practical local SEO checklist for Ahmedabad businesses to improve Google Business Profile, reviews, NAP consistency, website, local content and links.";

const checklistSections = [
  { id: "google-business-profile", title: "1. Google Business Profile fundamentals", intro: "For most local businesses, the Business Profile can drive more visibility than the website.", items: [
    ["Profile claimed and verified", "Check verification status in your dashboard; verification can lapse or be reversed."],
    ["Business name is accurate", "Use your real-world business name without appended keywords."],
    ["Primary category is specific", "Choose the closest accurate category, such as “Mobile Phone Shop” rather than “Store”."],
    ["Secondary categories added", "Include only genuine additional services."],
    ["Address and map pin are accurate", "Keep the address consistent and check placement, especially in dense areas such as CG Road, Ashram Road, Lal Darwaja and Maninagar."],
    ["Phone number is answered", "Make sure customers can reach you during stated hours."],
    ["Hours and special hours are correct", "Update for Diwali, Uttarayan, Navratri and local closures."],
    ["8–10 genuine photos uploaded", "Show the storefront, interior, products and team; avoid stock images."],
    ["Factual business description", "Explain what you offer rather than using generic claims."],
    ["Products or services listed", "Add them where your category supports the feature."],
    ["Messaging enabled only if monitored", "Turn it on only if you can respond promptly."]
  ]},
  { id: "reviews", title: "2. Reviews", intro: "Make review requests a consistent part of your customer process.", items: [
    ["Create a repeatable request process", "A counter QR code or WhatsApp link after service can make asking easier."],
    ["Respond to every review", "Reply professionally to both positive and negative feedback."],
    ["Never buy or incentivise reviews", "Discounts for reviews and review gating violate Google policies."],
    ["Keep review activity natural", "A sudden burst after long silence can look suspicious."]
  ]},
  { id: "nap", title: "3. NAP consistency", intro: "NAP means Name, Address and Phone. Consistent details help people and platforms identify the correct business.", items: [
    ["Choose one canonical business format", "Write down the exact name, address and phone format to use everywhere."],
    ["Match website details", "Ensure the footer and contact page match the canonical version."],
    ["Audit directory listings", "Check JustDial, Sulekha, IndiaMART, Yellow Pages India and local chamber listings."],
    ["Update old addresses", "Correct stale listings from previous premises."],
    ["Match social profiles", "Keep Facebook, Instagram and LinkedIn details consistent."],
    ["Standardise phone formatting", "Avoid mixing different versions of the same number."]
  ]},
  { id: "website", title: "4. Website basics", items: [
    ["Mobile pages load quickly", "Test real service pages with PageSpeed Insights, not just the homepage."],
    ["Phone number is tap-to-call", "Make it easy for mobile visitors to contact you."],
    ["Address and map are available", "Add accurate contact details and an embedded map where useful."],
    ["Create a page for each distinct service", "Avoid relying on one page to rank for many unrelated services."],
    ["Mention location naturally", "Use Ahmedabad and relevant areas in titles, headings and copy where appropriate."],
    ["Implement LocalBusiness structured data", "Include accurate name, address, phone, hours and coordinates."],
    ["HTTPS is enabled", "Serve the website securely."],
    ["Connect Search Console and Analytics", "Measure search visibility, traffic and engagement."]
  ]},
  { id: "content", title: "5. Local content", items: [
    ["Include real local context", "Mention relevant areas such as Bopal, Thaltej, Satellite, Prahlad Nagar, Naroda and Chandkheda where useful."],
    ["Create service-area pages only when justified", "Each page should provide genuinely distinct information, not just a swapped area name."],
    ["Answer real customer questions", "Build content around questions customers regularly ask."],
    ["Consider Gujarati content", "Test Gujarati if it matches how your customers naturally search."]
  ]},
  { id: "links", title: "6. Local links and mentions", intro: "Relevant local mentions can help distinguish businesses that rank in the map pack from those just outside it.", items: [
    ["Join legitimate local directories", "Avoid bulk-submission services."],
    ["Earn association and trade-body links", "Look for relevant membership pages."],
    ["Ask relevant partners about mentions", "Suppliers, partners and clients may reasonably link to your business."],
    ["Participate in community activities", "Sponsorships can lead to genuine local mentions."],
    ["Build real local press coverage", "Share something newsworthy rather than manufacturing mentions."],
  ]},
  { id: "maintenance", title: "7. Ongoing maintenance", items: [
    ["Monthly", "Respond to reviews, post a Business Profile update and check for unexpected profile changes."],
    ["Quarterly", "Re-check NAP consistency, review Search Console queries and refresh photos."],
    ["Before festival seasons", "Update special hours for Diwali, Uttarayan, Navratri and closures."],
    ["After any business change", "Update phone, address or service details everywhere in one coordinated pass."]
  ]}
];

const LocalSeoChecklistAhmedabad = () => {
  const schema = {
    "@context": "https://schema.org", "@type": "BlogPosting", "@id": `${postUrl}#article`,
    headline: post.title, description, image: [coverUrl], url: postUrl,
    datePublished: "2026-10-09T09:00:00+05:30", dateModified: "2026-10-09T09:00:00+05:30",
    inLanguage: "en-IN", articleSection: post.category, keywords: post.keywords.join(", "),
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
    author: { "@type": "Person", "@id": `${SITE_URL}/#person`, name: "Hitesh Jaganiya", url: `${SITE_URL}/`, jobTitle: "Digital Marketing Consultant in Ahmedabad" },
    publisher: { "@type": "Person", "@id": `${SITE_URL}/#person`, name: "Hitesh Jaganiya", url: `${SITE_URL}/` }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: postUrl }
    ]
  };
  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "How long does local SEO take in Ahmedabad?", acceptedAnswer: { "@type": "Answer", text: "Google Business Profile changes may affect visibility within days to a few weeks. Broader local ranking improvements, especially in competitive categories, commonly take three to six months of consistent work." } },
      { "@type": "Question", name: "Is Google Business Profile more important than a website?", acceptedAnswer: { "@type": "Answer", text: "For many local businesses, the profile drives first contact through Maps and the local pack. A website remains important for trust, service information and conversion." } },
      { "@type": "Question", name: "Do I need separate pages for every Ahmedabad area?", acceptedAnswer: { "@type": "Answer", text: "Only when each area page offers genuinely distinct, useful content. Thin pages that simply swap area names tend to underperform." } },
      { "@type": "Question", name: "Can I do local SEO myself?", acceptedAnswer: { "@type": "Answer", text: "Most checklist tasks can be done in-house with consistency. Technical diagnosis and ongoing implementation may benefit from outside help." } }
    ]
  };

  return <div className="min-h-screen bg-background">
    <Helmet>
      <title>Local SEO Checklist for Ahmedabad Businesses | Hitesh Jaganiya</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={post.keywords.join(", ")} />
      <meta name="author" content="Hitesh Jaganiya" />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href={postUrl} />
      <link rel="alternate" hrefLang="en-IN" href={postUrl} />
      <link rel="alternate" hrefLang="x-default" href={postUrl} />
      <meta property="og:type" content="article" /><meta property="og:site_name" content="Hitesh Jaganiya" />
      <meta property="og:title" content="Local SEO Checklist for Ahmedabad Businesses" /><meta property="og:description" content={description} />
      <meta property="og:url" content={postUrl} /><meta property="og:image" content={coverUrl} /><meta property="og:image:alt" content={post.coverAlt} />
      <meta property="og:image:width" content="1200" /><meta property="og:image:height" content="630" /><meta property="og:locale" content="en_IN" />
      <meta property="article:section" content={post.category} /><meta property="article:published_time" content="2026-10-09T09:00:00+05:30" /><meta property="article:modified_time" content="2026-10-09T09:00:00+05:30" />
      <meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content="Local SEO Checklist for Ahmedabad Businesses" /><meta name="twitter:description" content={description} /><meta name="twitter:image" content={coverUrl} /><meta name="twitter:image:alt" content={post.coverAlt} />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
    <Header />
    <main className="pt-28 md:pt-36">
      <article className="section-padding pt-0"><div className="container-custom">
        <BlogBreadcrumbs />
        <div className="grid lg:grid-cols-[minmax(0,1fr)_360px] gap-6 items-start">
          <div className="min-w-0">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline mb-7"><ArrowLeft className="w-4 h-4" /> Back to blog</Link>
            <header className="mb-10">
              <div className="mb-5"><span className="rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-primary">Local SEO</span></div>
              <h1 className="max-w-4xl text-3xl md:text-5xl lg:text-[3.65rem] font-bold text-foreground leading-[1.08] tracking-tight text-balance mb-6">{post.title}</h1>
              <p className="max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-7">{post.excerpt}</p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground mb-8"><span className="inline-flex items-center gap-2"><CalendarDays className="w-4 h-4" />October 9, 2026</span><span className="inline-flex items-center gap-2"><Clock className="w-4 h-4" />{post.readingTime}</span><span className="inline-flex items-center gap-2"><User className="w-4 h-4" />Hitesh Jaganiya</span></div>
              <figure className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm"><img src={post.cover} alt={post.coverAlt} width="1200" height="630" fetchPriority="high" decoding="async" className="w-full h-auto" /></figure>
            </header>

            <div className="mb-10 rounded-3xl border border-primary/20 bg-primary/5 p-6 md:p-8">
              <div className="flex items-start gap-4"><div className="rounded-xl bg-primary/10 p-3 text-primary"><Download className="w-6 h-6" /></div><div className="flex-1"><h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">Download the Free PDF Checklist</h2><p className="text-muted-foreground leading-relaxed mb-4">Keep the checklist handy and tick off each task as you complete it. The downloadable PDF is a concise, three-page version of this guide.</p><a href={pdfUrl} download="Local-SEO-Checklist-Ahmedabad-Hitesh-Jaganiya.pdf" className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground hover:opacity-90 transition-opacity"><Download className="w-4 h-4" /> Download PDF checklist</a></div></div>
            </div>

            <div className="max-w-4xl space-y-10 text-[17px] md:text-[18px] text-muted-foreground leading-[1.8]">
              <section><p>Local SEO has an unusual property: most of the work is unglamorous, none of it is secret, and the businesses that do it properly are a small minority. That gap is the opportunity. You are not competing against perfect execution — you are competing against businesses that set up a Google Business Profile years ago and never looked at it again.</p>
              <p>I’m Hitesh Jaganiya, a <Link to="/" className="text-primary font-semibold hover:underline">Digital Marketing Consultant in Ahmedabad</Link>, with 11 years of experience and Google Ads and Google Analytics certifications. This is the checklist I work through for local businesses, roughly in the order I would tackle it. Work down it honestly and you will likely find several things that need attention.</p></section>

              <section className="rounded-2xl border border-primary/20 bg-primary/5 p-6"><h2 className="text-xl font-bold text-foreground mb-3">If you only do three things this month</h2><ol className="list-decimal pl-6 space-y-2"><li>Verify and fully complete your Google Business Profile.</li><li>Set up a repeatable system for asking customers for reviews.</li><li>Fix your business name, address and phone consistency across major directories.</li></ol></section>

              {checklistSections.map(section => <section key={section.id} id={section.id} className="scroll-mt-28">
                <h2 className="text-3xl font-bold text-foreground tracking-tight mb-3">{section.title}</h2>
                {section.intro && <p className="mb-5">{section.intro}</p>}
                <ul className="space-y-4">{section.items.map(([title, detail]) => <li key={title} className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" /><div><strong className="text-foreground">{title}.</strong> {detail}</div></li>)}</ul>
                {section.id === "google-business-profile" && <p className="mt-5">Starting from scratch? Read the <Link to="/blog/business-not-showing-google-maps-ahmedabad" className="text-primary font-semibold hover:underline">Google Maps visibility troubleshooting guide</Link> for related setup and profile issues.</p>}
                {section.id === "reviews" && <p className="mt-5">Profession-specific rules matter too. If you run a CA firm, read <Link to="/blog/digital-marketing-for-ca-firms-ahmedabad" className="text-primary font-semibold hover:underline">what ICAI allows for digital marketing by CA firms</Link> before implementing review or promotional tactics.</p>}
                {section.id === "website" && <p className="mt-5">For measurement, see <Link to="/blog/how-to-read-google-analytics-search-console-without-an-agency" className="text-primary font-semibold hover:underline">how to read Google Analytics and Search Console without an agency</Link>.</p>}
              </section>)}

              <section><h2 className="text-3xl font-bold text-foreground tracking-tight mb-4">If you are still not showing up</h2><p>After working through this checklist, continued invisibility usually points to a specific issue such as a suspension, duplicate listing or verification problem. Use this <Link to="/blog/business-not-showing-google-maps-ahmedabad" className="text-primary font-semibold hover:underline">guide to fixing a business that is not showing on Google Maps in Ahmedabad</Link> to work through likely causes in order.</p></section>

              <section><h2 className="text-3xl font-bold text-foreground tracking-tight mb-4">Where to start if this feels like too much</h2><p>If you can only do three things this month, verify and complete your Google Business Profile, ask for reviews systematically, and fix NAP consistency across the main directories. Those three steps are free and cover much of the foundation for local visibility.</p><p>For a broader strategy, you can learn more about my work as a <Link to="/" className="text-primary font-semibold hover:underline">Digital Marketing Consultant in Ahmedabad</Link> or browse the <Link to="/blog" className="text-primary font-semibold hover:underline">digital marketing and SEO guides on this blog</Link>.</p></section>

              <section><h2 className="text-3xl font-bold text-foreground tracking-tight mb-5">Frequently Asked Questions</h2><div className="space-y-6">
                <div><h3 className="text-xl font-bold text-foreground">How long does local SEO take in Ahmedabad?</h3><p>Google Business Profile changes can affect visibility within days to a few weeks. Broader local ranking improvements — particularly in competitive areas and categories — typically take three to six months of consistent work.</p></div>
                <div><h3 className="text-xl font-bold text-foreground">Is Google Business Profile more important than my website?</h3><p>For many local businesses, the profile drives first contact through Maps and the local pack. Your website still matters for trust, service information and conversion.</p></div>
                <div><h3 className="text-xl font-bold text-foreground">Do I need separate pages for every area of Ahmedabad I serve?</h3><p>Only when you have genuinely distinct content for each. Thin, templated pages with just the area name changed tend to underperform.</p></div>
                <div><h3 className="text-xl font-bold text-foreground">Should I publish content in Gujarati?</h3><p>It depends on how your customers search. For businesses whose customers naturally search in Gujarati, it may be worth testing. For B2B or professional services, English may remain more practical.</p></div>
                <div><h3 className="text-xl font-bold text-foreground">Can I do local SEO myself?</h3><p>Most checklist tasks are doable yourself with consistency. Outside help can add value for technical diagnosis, implementation and maintaining momentum.</p></div>
              </div></section>

              <section className="rounded-2xl border border-border bg-muted/30 p-6"><h2 className="text-xl font-bold text-foreground mb-2">A note on policies</h2><p className="mb-0 text-base">This checklist reflects local SEO practice as of October 2026. Google’s products and policies change; verify time-sensitive details against current Google documentation. Professionals bound by a regulatory code should check their own code of conduct before implementing review or promotional activity.</p></section>

              <section className="border-t border-border pt-8"><h2 className="text-2xl font-bold text-foreground mb-4">Related guides</h2><ul className="space-y-3">
                <li><Link to="/blog/business-not-showing-google-maps-ahmedabad" className="text-primary font-semibold hover:underline">Business Not Showing on Google Maps in Ahmedabad? 7 Fixes</Link></li>
                <li><Link to="/blog/digital-marketing-for-ca-firms-ahmedabad" className="text-primary font-semibold hover:underline">Digital Marketing for CA Firms in Ahmedabad: What ICAI Actually Allows</Link></li>
                <li><Link to="/blog/how-to-read-google-analytics-search-console-without-an-agency" className="text-primary font-semibold hover:underline">How to Read Google Analytics and Search Console Yourself</Link></li>
                <li><Link to="/blog/seo-strategy-2027" className="text-primary font-semibold hover:underline">SEO Strategy 2027: 5 Shifts That Will Matter Most</Link></li>
              </ul></section>
            </div>
            <div className="mt-14"><AuthorCard /></div>
          </div>
          <BlogSidebar currentSlug={post.slug} />
        </div>
      </div></article>
    </main>
    <Footer />
  </div>;
};
export default LocalSeoChecklistAhmedabad;
