import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, CalendarDays, Clock, User, MessageCircle, QrCode, CheckCircle2, Star, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorCard from "@/components/AuthorCard";
import BlogSidebar from "@/components/BlogSidebar";
import BlogBreadcrumbs from "@/components/BlogBreadcrumbs";
import { getPostBySlug, SITE_URL } from "@/data/blogPosts";

const post = getPostBySlug("how-to-increase-google-reviews")!;
const postUrl = `${SITE_URL}/blog/${post.slug}`;
const coverUrl = `${SITE_URL}${post.cover}`;

const faqItems = [
  { question: "How many Google reviews does a business need?", answer: "There is no universal threshold. Compare your profile with the businesses appearing alongside you in local results, and work toward a steady flow of genuine reviews rather than a one-time spike." },
  { question: "Can I offer a discount for a Google review?", answer: "No. Incentives such as discounts, cashback, gifts or contest entries in exchange for reviews violate Google's review policies. Reviews may be removed and the profile may face restrictions." },
  { question: "Is it against the rules to ask only happy customers?", answer: "Yes. Filtering review requests based on whether customers are likely to leave positive feedback is review gating. Ask customers consistently without screening for sentiment." },
  { question: "How long does a Google review take to appear?", answer: "Many reviews appear within minutes or hours, but some can take longer while Google checks them. Some reviews may not appear if they are filtered by Google's systems." },
  { question: "Should I respond to every Google review?", answer: "Yes. Thank people for genuine positive feedback and respond to negative reviews calmly, acknowledge the concern and offer a practical way to resolve it offline." },
  { question: "Do Google reviews affect local rankings?", answer: "Reviews are one part of local visibility and can influence customer trust and click-through. Local results also depend on relevance, distance and prominence, so reviews alone cannot guarantee a ranking." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "@id": `${postUrl}#article`,
  headline: post.title,
  description: post.description,
  image: [coverUrl, `${SITE_URL}/google-reviews-process-infographic.svg`],
  url: postUrl,
  datePublished: "2026-10-14T09:00:00+05:30",
  dateModified: "2026-10-14T09:00:00+05:30",
  inLanguage: "en-IN",
  articleSection: post.category,
  keywords: post.keywords.join(", "),
  mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
  author: { "@type": "Person", "@id": `${SITE_URL}/#person`, name: "Hitesh Jaganiya", url: `${SITE_URL}/`, jobTitle: "Digital Marketing Consultant in Ahmedabad" },
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
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const HowToIncreaseGoogleReviews = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>How to Increase Google Reviews (Without Breaking the Rules)</title>
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
      <meta property="article:section" content={post.category} />
      <meta property="article:published_time" content="2026-10-14T09:00:00+05:30" />
      <meta property="article:modified_time" content="2026-10-14T09:00:00+05:30" />
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
          <div className="grid lg:grid-cols-[minmax(0,1fr)_360px] gap-6 items-start">
            <div className="min-w-0">
              <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline mb-7"><ArrowLeft className="w-4 h-4" /> Back to blog</Link>
              <header className="mb-10">
                <div className="mb-5"><span className="rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-primary">Local SEO &amp; Reputation</span></div>
                <h1 className="max-w-4xl text-3xl md:text-5xl lg:text-[3.65rem] font-bold text-foreground leading-[1.08] tracking-tight text-balance mb-6">{post.title}</h1>
                <p className="max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-7">{post.excerpt}</p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground mb-8">
                  <span className="inline-flex items-center gap-2"><CalendarDays className="w-4 h-4" />14 October 2026</span>
                  <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4" />{post.readingTime}</span>
                  <span className="inline-flex items-center gap-2"><User className="w-4 h-4" />Hitesh Jaganiya</span>
                </div>
                <figure className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                  <img src={post.cover} alt={post.coverAlt} width="1200" height="630" fetchPriority="high" decoding="async" className="w-full h-auto" />
                </figure>
              </header>

              <div className="blog-article-content max-w-4xl text-[17px] md:text-[18px] text-muted-foreground leading-[1.8]">
                <section aria-label="Introduction">
                  <p>Almost every guide on this topic is written for American businesses, which is why the advice usually starts with “send a follow-up email.” Many Indian businesses do not have customers’ email addresses, and even when they do, those emails can go unopened.</p>
                  <p>What often works better locally is simpler: a WhatsApp message at the right moment, a QR code at the counter, or a polite request during handover. The key is making it easy for customers to leave honest feedback without pressuring them.</p>
                  <p>I’m Hitesh Jaganiya, a digital marketing consultant with 11 years of experience and certifications in Google Ads and Google Analytics. Here’s a practical process for getting more genuine Google reviews while respecting Google’s rules. If you need help with your wider local visibility, I also work as a <Link to="/" className="text-primary font-semibold hover:underline">Digital Marketing Consultant in Ahmedabad</Link>.</p>
                </section>

                <section aria-labelledby="why-reviews-matter">
                  <h2 id="why-reviews-matter" className="text-3xl font-bold text-foreground tracking-tight">Why Google Reviews Matter for Local Businesses</h2>
                  <p>Reviews help potential customers judge a business before they call, visit or request a quote. When several businesses appear in local results, a profile with more recent, detailed feedback can look more trustworthy than a profile whose reviews are old or sparse.</p>
                  <p>Reviews are also one part of local search visibility, alongside factors such as relevance, distance and prominence. They cannot guarantee a particular ranking, but they can influence whether a customer chooses to click your listing once they see it.</p>
                  <p>The good news is that asking for reviews does not require an advertising budget. It requires a repeatable process and a team that remembers to use it.</p>
                </section>

                <section aria-labelledby="get-review-link">
                  <h2 id="get-review-link" className="text-3xl font-bold text-foreground tracking-tight">First, Get Your Direct Google Review Link</h2>
                  <p>Before asking anyone, create a link that takes customers directly to the review flow. Asking people to search for your business manually adds friction and gives them more chances to drop off.</p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Open your Google Business Profile.</li>
                    <li>Look for <strong className="text-foreground">Ask for reviews</strong> or <strong className="text-foreground">Get more reviews</strong>.</li>
                    <li>Copy the review link Google provides and save it somewhere your team can access quickly, such as a WhatsApp saved message or billing system.</li>
                  </ol>
                  <p>Use that same direct link in the methods below. Test it on a phone before sharing it with customers.</p>
                </section>

                <section aria-labelledby="methods">
                  <h2 id="methods" className="text-3xl font-bold text-foreground tracking-tight">5 Practical Ways to Increase Google Reviews in India</h2>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">1. Send a WhatsApp message soon after the service</h3>
                      <p>For many Indian businesses, WhatsApp is the most practical channel because the customer’s number is already available and messages are commonly checked. Timing matters: ask within an hour or two of delivery, service completion or final handover, while the experience is still fresh.</p>
                      <div className="my-5 rounded-2xl border border-border bg-card p-5">
                        <div className="mb-2 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary"><MessageCircle className="h-4 w-4" /> Copy-and-use message</div>
                        <p className="mb-3 text-foreground">Thanks for choosing us today! If you have a minute, an honest Google review would really help our business: [your review link]</p>
                        <button type="button" onClick={() => navigator.clipboard?.writeText("Thanks for choosing us today! If you have a minute, an honest Google review would really help our business: [your review link]")} className="rounded-lg border border-border px-4 py-2 text-sm font-semibold text-foreground hover:bg-muted">Copy message</button>
                      </div>
                      <p>Keep it short and personal. Avoid repeated blasts or messages that pressure people to leave a positive rating. The request is for an honest review, not a guaranteed five-star score.</p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">2. Put a QR code at the counter</h3>
                      <p>Turn your review link into a QR code and place it where customers naturally pause: the billing counter, reception desk, table or exit. A small tabletop stand can be more noticeable than a sticker on a wall.</p>
                      <p>Make sure staff mention it politely. A QR code that nobody points out can easily be ignored. A simple “If you have a moment, you can share honest feedback by scanning this” is enough.</p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">3. Ask at the payment or handover moment</h3>
                      <p>After a successful UPI payment, the customer already has their phone in hand. For service businesses, final delivery, handing over keys or closing a support ticket can be a natural reminder point. Keep the request optional and respectful.</p>
                      <p>Train the team to make the same neutral request consistently instead of leaving it to memory or asking only selected customers.</p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">4. Ask in person, naturally</h3>
                      <p>Many customers are willing to leave feedback but will not think of doing it unprompted. A simple verbal request from the person who helped them can make the next step clear. Give them the link or QR code and let them decide.</p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">5. Build the request into your standard process</h3>
                      <p>Attach the review reminder to a step that already happens every time — sending the final invoice, completing a service ticket, finishing delivery or handing over a project. A repeatable system is more reliable than a one-off campaign.</p>
                    </div>
                  </div>
                </section>

                <figure className="my-10 overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                  <img src="/google-reviews-process-infographic.svg" alt="Three-step Google review process: prepare a direct review link, ask every customer consistently, and respond to feedback without incentives or review gating" width="1200" height="675" loading="lazy" decoding="async" className="w-full h-auto" />
                  <figcaption className="px-5 py-3 text-sm leading-relaxed text-muted-foreground">A simple review routine: make the link easy to access, ask customers consistently, and respond to feedback. Keep every request voluntary and policy-safe.</figcaption>
                </figure>

                <section aria-labelledby="what-not-to-do">
                  <h2 id="what-not-to-do" className="text-3xl font-bold text-foreground tracking-tight">Google Review Rules: What You Must Not Do</h2>
                  <p>Shortcuts can put the reviews — and potentially the Business Profile — at risk. Keep the process focused on authentic feedback.</p>
                  <div className="my-6 space-y-4">
                    <div className="rounded-2xl border border-red-200 bg-red-50/70 p-5"><h3 className="mb-2 flex items-center gap-2 text-xl font-bold text-red-900"><ShieldCheck className="h-5 w-5" /> Don’t offer incentives</h3><p className="mb-0 text-red-950">Do not offer discounts, cashback, free items or contest entries in exchange for a review. The request should not depend on whether a customer gives a positive rating.</p></div>
                    <div><h3 className="text-xl font-bold text-foreground">Don’t filter who gets asked</h3><p>Sending the review link only to people you expect to be happy — or directing unhappy customers somewhere else instead — is review gating. Ask customers consistently and let them share their genuine experience.</p></div>
                    <div><h3 className="text-xl font-bold text-foreground">Don’t buy or fabricate reviews</h3><p>Bulk review services, fake accounts and reviews from people who never used the business undermine trust and can violate Google’s policies. Avoid them even if a seller promises fast results.</p></div>
                    <div><h3 className="text-xl font-bold text-foreground">Don’t ask staff or family to pose as customers</h3><p>Reviews should reflect genuine experiences. Employees, family members or others who did not use the service should not be presented as customers.</p></div>
                    <div><h3 className="text-xl font-bold text-foreground">Don’t manufacture a sudden spike</h3><p>Focus on a steady, natural process rather than trying to collect dozens of reviews in one burst after a long period of inactivity.</p></div>
                  </div>
                  <p>For regulated professional services, the rules may be stricter than standard local business advice. See my guide to <Link to="/blog/digital-marketing-for-ca-firms-ahmedabad" className="text-primary font-semibold hover:underline">digital marketing for CA firms in Ahmedabad</Link> for the specific considerations discussed for chartered accountancy firms.</p>
                </section>

                <section aria-labelledby="respond-reviews">
                  <h2 id="respond-reviews" className="text-3xl font-bold text-foreground tracking-tight">Respond to Every Review</h2>
                  <p>Getting a review is not the end of the process. Thoughtful responses show future customers that feedback is noticed and the business is actively managed.</p>
                  <h3 className="text-2xl font-bold text-foreground">For positive reviews</h3>
                  <p>Thank the customer and, where appropriate, mention something specific about their experience. Avoid posting the same generic sentence under every review; a genuine, concise response feels more personal.</p>
                  <h3 className="text-2xl font-bold text-foreground">For negative reviews</h3>
                  <p>Stay calm, acknowledge the concern and explain how the customer can contact you to resolve it. Do not argue publicly or reveal private customer details. Your response is also for the many future customers who may read the exchange.</p>
                  <p>A measured reply can demonstrate professionalism even when the original review is critical.</p>
                </section>

                <section aria-labelledby="language">
                  <h2 id="language" className="text-3xl font-bold text-foreground tracking-tight">Can Customers Leave Reviews in Gujarati or Hindi?</h2>
                  <p>Yes. Encourage customers to write in the language they are comfortable using. A genuine Gujarati or Hindi review can communicate a local customer’s experience naturally; there is no need to push everyone toward English or a particular style of wording.</p>
                  <p>Never write a review for a customer or dictate what they should say. Authenticity matters more than uniform phrasing.</p>
                </section>

                <section aria-labelledby="expectations">
                  <h2 id="expectations" className="text-3xl font-bold text-foreground tracking-tight">Set Realistic Expectations and Track Progress</h2>
                  <p>The original planning target in this guide is around five to fifteen new reviews per month for a small business that asks consistently. Treat this as a practical target, not a promise or a universal benchmark: results vary by industry, customer volume and timing.</p>
                  <p>Review requests also do not convert into reviews every time. Track how many customers were asked and how many reviews arrived over time. This will help you understand whether the request process is being used consistently and whether the timing or wording needs improvement.</p>
                  <p>Reviews are one piece of local visibility. Use them alongside accurate business information, helpful local pages and a complete profile. My <Link to="/blog/local-seo-checklist-ahmedabad" className="text-primary font-semibold hover:underline">local SEO checklist for Ahmedabad businesses</Link> covers the wider process, while this guide on <Link to="/blog/business-not-showing-google-maps-ahmedabad" className="text-primary font-semibold hover:underline">why a business may not appear on Google Maps</Link> helps with another common local search concern.</p>
                </section>

                <section aria-labelledby="faq">
                  <h2 id="faq" className="text-3xl font-bold text-foreground tracking-tight">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {faqItems.map((item) => <div key={item.question}><h3 className="text-xl font-bold text-foreground">{item.question}</h3><p>{item.answer}</p></div>)}
                  </div>
                </section>

                <section className="rounded-3xl border border-primary/20 bg-primary/5 p-6 md:p-8">
                  <div className="flex items-start gap-4"><div className="rounded-xl bg-primary/10 p-3 text-primary"><CheckCircle2 className="h-6 w-6" /></div><div><h2 className="mb-2 text-2xl font-bold text-foreground">The takeaway</h2><p className="mb-0">Create a direct review link, make the request part of your normal customer process, ask everyone neutrally, and respond professionally. Avoid incentives, review gating and fake reviews. Consistency and authenticity are the foundation of a sustainable review strategy.</p></div></div>
                </section>
              </div>

              <section className="mt-14 border-t border-border pt-10" aria-labelledby="related-guides-heading">
                <h2 id="related-guides-heading" className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-6">Related Local SEO Guides</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Link to="/blog/local-seo-checklist-ahmedabad" className="rounded-2xl border border-border bg-card p-5 hover:border-primary/40 transition-colors"><span className="text-xs font-bold uppercase tracking-wider text-primary">Local SEO</span><span className="mt-2 block font-bold text-foreground">Local SEO Checklist for Ahmedabad Businesses</span><span className="mt-2 block text-sm text-muted-foreground">Improve your broader local search presence.</span></Link>
                  <Link to="/blog/business-not-showing-google-maps-ahmedabad" className="rounded-2xl border border-border bg-card p-5 hover:border-primary/40 transition-colors"><span className="text-xs font-bold uppercase tracking-wider text-primary">Google Maps</span><span className="mt-2 block font-bold text-foreground">Why Your Business Is Not Showing on Google Maps</span><span className="mt-2 block text-sm text-muted-foreground">Check common local visibility issues.</span></Link>
                </div>
              </section>
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

export default HowToIncreaseGoogleReviews;
