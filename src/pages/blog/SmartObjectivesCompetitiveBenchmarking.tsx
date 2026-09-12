import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, CalendarDays, Clock, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorCard from "@/components/AuthorCard";
import BlogSidebar from "@/components/BlogSidebar";
import BlogBreadcrumbs from "@/components/BlogBreadcrumbs";
import { getPostBySlug, SITE_URL } from "@/data/blogPosts";

const post = getPostBySlug("smart-objectives-competitive-benchmarking")!;
const postUrl = `${SITE_URL}/blog/${post.slug}`;
const coverUrl = `${SITE_URL}${post.cover}`;

const SmartObjectivesCompetitiveBenchmarking = () => {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      image: coverUrl,
      url: postUrl,
      datePublished: post.datePublished,
      dateModified: post.dateModified,
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
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: postUrl },
      ],
    },
  ];

  return (
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
                <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline mb-8">
                  <ArrowLeft className="w-4 h-4" /> Back to blog
                </Link>

                <header>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="inline-flex items-center gap-1.5"><CalendarDays className="w-4 h-4" />September 12, 2026</span>
                    <span className="inline-flex items-center gap-1.5"><Clock className="w-4 h-4" />{post.readingTime}</span>
                    <span className="inline-flex items-center gap-1.5"><User className="w-4 h-4" />Hitesh Jaganiya</span>
                  </div>
                  <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">{post.category}</span>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance mb-6">{post.title}</h1>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-8">{post.excerpt}</p>
                  <img src={post.cover} alt={post.coverAlt} className="w-full aspect-[16/9] object-cover rounded-2xl border border-border mb-10" />
                </header>

                <div className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground">
                  <p>Anyone who has read a digital marketing planning guide has encountered some version of the same instruction: before you set objectives, review your own performance benchmarks and those of your competitors. It appears so consistently that it reads as common sense.</p>
                  <p>But it isn't a single idea. It's the merger of two management concepts that were developed separately, in different fields, roughly a decade apart, and which only converged in marketing practice much later. Understanding where each half came from explains a great deal about why the combined practice works — and where it tends to fail.</p>

                  <h2>Half one: SMART objectives (1981)</h2>
                  <p>The SMART acronym originates in a short article by George T. Doran published in the November 1981 issue of <em>Management Review</em>, titled "There's a S.M.A.R.T. way to write management's goals and objectives" (vol. 70, no. 11, pp. 35–36).</p>
                  <p>Two things about the original are routinely misremembered.</p>
                  <p>First, the letters didn't mean what they usually mean today. Doran's criteria were <strong>Specific, Measurable, Assignable, Realistic, and Time-related</strong>. The "A" stood for <em>assignable</em> — naming who owns the objective — not "achievable" or "attainable," which are later substitutions. Doran was writing about accountability as much as about measurement.</p>
                  <p>Second, Doran was explicitly undogmatic. He noted that quantifying objectives is not always feasible at every level of management, and that not every objective needs to satisfy all five criteria. He presented SMART as a thinking checklist, not a compliance standard. He also offered no empirical study; the article drew on his experience as a corporate planner.</p>
                  <p>Doran's article sits downstream of Peter Drucker's Management by Objectives, developed in the 1950s, which established goal-oriented management but never used the acronym. The empirical backing arrived later, from Edwin Locke and Gary Latham's goal-setting theory, whose research established that specific and challenging goals produce better performance than vague or easy ones.</p>
                  <p>That last finding is the crux, and it's where the second half of the story becomes necessary. Goal-setting theory says goals should be <em>specific</em> and <em>challenging</em>. But challenging relative to what? Doran's framework can tell you whether an objective is well-formed. It cannot tell you whether the number you've chosen is ambitious, complacent, or delusional. Nothing internal to SMART supplies that judgement.</p>

                  <h2>Half two: competitive benchmarking (1979–1989)</h2>
                  <p>The answer came from a different discipline entirely.</p>
                  <p>In the late 1970s, Xerox was in serious trouble — its copier market share had collapsed from roughly 80% to 18%, and Japanese competitors were selling machines at a price equal to Xerox's own cost. A team sent to examine Fuji-Xerox and competing operations in detail found the explanation wasn't cheap labour or subsidy but the specifics of manufacturing process. That investigation is generally identified as the first formal benchmarking exercise.</p>
                  <p>Robert C. Camp, who introduced benchmarking to Xerox's logistics operation in 1981, codified the approach in <em>Benchmarking: The Search for Industry Best Practices That Lead to Superior Performance</em> (Productivity Press, 1989). Camp's ten-step process is worth listing, because its structure anticipates exactly the sequence marketing planners now use:</p>
                  <ol>
                    <li>Identify what to benchmark</li><li>Identify comparative companies (benchmarking partners)</li><li>Determine data collection methods and collect data</li><li>Determine the current competitive gap</li><li>Project future performance levels</li><li>Communicate benchmark findings</li><li><strong>Establish functional goals</strong></li><li>Develop action plans</li><li>Implement specific actions and monitor progress</li><li>Recalibrate benchmarks</li>
                  </ol>
                  <p>Step seven is the load-bearing one for our purposes. In Camp's model, goal-setting is not the starting point — it is an <em>output</em> of the benchmarking process. You determine the competitive gap first, project where performance levels are heading, and only then establish the target. The measurement precedes the ambition.</p>
                  <p>After Xerox's logistics productivity gains rose from two or three percent annually to more than ten percent and held there through the mid-1980s, the approach spread widely through quality management and then into general strategy.</p>

                  <h2>The convergence</h2>
                  <p>So by around 1990 there were two available frameworks: one for writing objectives well (Doran), one for determining what a defensible objective would even be (Camp). Neither was designed with the other in mind. Doran was writing for corporate planners about the language of goal statements; Camp was writing for operations and quality managers about process improvement.</p>
                  <p>Digital marketing planning is one of the places they were stitched together, largely because the medium made it possible. The distinguishing feature of digital channels is that performance is instrumented by default — impressions, clicks, sessions, conversions, and cost are all recorded as a byproduct of delivery. A great deal of competitor activity is also publicly visible or inferable: search rankings, ad copy, social engagement, published pricing, review volume. The benchmarking data that Camp's teams had to obtain through site visits and negotiated partnerships is, in digital marketing, substantially observable from outside.</p>
                  <p>This shows up in the standard planning frameworks. Dave Chaffey's three-stage digital marketing planning model — Opportunity, Strategy, Action — places marketplace and competitor review in the opening stage, before objectives are set, following Camp's ordering rather than starting from goals. The SOSTAC framework developed by PR Smith (Situation analysis, Objectives, Strategy, Tactics, Action, Control) encodes the same sequence in its first two letters: you establish where you are before you state where you're going. Chaffey and Smith develop both in <em>Digital Marketing Excellence: Planning, Optimizing and Integrating Online Marketing</em>, now in its sixth edition (Routledge, 2022).</p>
                  <p>Chaffey's related distinction between <strong>effectiveness KPIs</strong> (what digital marketing contributes to the business overall) and <strong>efficiency KPIs</strong> (how well the marketing funnel converts) matters here too, because the two benchmark differently. Efficiency metrics — click-through rate, conversion rate, cost per acquisition — are comparable across organisations of different sizes and so benchmark reasonably well against industry data. Effectiveness metrics are tied to a specific organisation's revenue model and strategy, and external comparison is correspondingly less meaningful.</p>

                  <h2>Why the comparison group is the whole problem</h2>
                  <p>The recurring failure mode in benchmarked target-setting is not bad arithmetic. It's an inapt comparison set.</p>
                  <p>Camp's second step is identifying comparative companies, and he treats partner selection as a distinct analytical problem rather than an administrative one — for good reason. A benchmark is only informative if the comparator is genuinely comparable in scale, audience, market position, and business model. Comparing a small nonprofit's digital advertising budget to a large endowed institution's, or an early-stage B2B company's email click-through rate to an established consumer brand's, produces a number that looks rigorous and means nothing. The resulting target will be either trivially easy or structurally unreachable, and in both cases it destroys the "realistic" criterion Doran was insisting on.</p>
                  <p>Industry averages carry a related hazard: they compress away the context that made the underlying figures interpretable. Knowing that average search advertising click-through rates cluster in the single digits while display rates sit under one percent is a useful orientation, but an average is a distribution collapsed to a point. The firms at the top and bottom of that distribution usually differ for structural reasons — category, intent, brand recognition, price point — that a mean cannot express.</p>
                  <p>There's also an availability problem that never fully goes away. Competitors do not publish their internal metrics. What is externally observable is a partial, self-selected surface: the campaigns still running, the content still indexed, the reviews customers chose to leave. Inferring a competitor's conversion rate or acquisition cost from public signals involves estimation, and treating an estimate as a benchmark imports its error into your target.</p>

                  <h2>Benchmarking as a cycle, not a prerequisite</h2>
                  <p>One point deserves emphasis because the planning-framework presentation tends to obscure it. Because benchmarking appears in the <em>first</em> stage of models like DMP and SOSTAC, it's easily read as a one-time input — something completed before planning starts and then set aside.</p>
                  <p>Camp's tenth step is recalibration, and it returns the process to the beginning. Benchmarks decay. Competitors change tactics, platforms change their algorithms and ad products, costs inflate, and the metric that was a stretch target last year becomes table stakes. A benchmark set once and never revisited is a historical artefact being used as a current standard, which is arguably worse than no benchmark at all, because it carries unearned authority.</p>

                  <h2>Summary</h2>
                  <p>The instruction to review your own and competitors' KPIs before setting SMART objectives is the joining of two distinct lineages: Doran's 1981 criteria for how an objective should be <em>written</em>, and Camp's Xerox-derived benchmarking process for determining what an objective should <em>be</em>. Goal-setting theory supplies the reason the combination matters — goals must be specific and challenging to improve performance — and benchmarking is what allows "challenging" to be established as evidence rather than asserted as preference.</p>
                  <p>The practice is only as sound as the comparison it rests on. Get the comparator set wrong and the process yields a precise, well-formatted, entirely arbitrary number.</p>

                  <h2>References</h2>
                  <h3>Primary sources</h3>
                  <ul>
                    <li>Doran, G. T. (1981). "There's a S.M.A.R.T. way to write management's goals and objectives." <em>Management Review</em>, 70(11), 35–36.</li>
                    <li>Camp, R. C. (1989). <em>Benchmarking: The Search for Industry Best Practices That Lead to Superior Performance</em>. Productivity Press. ISBN 9781563273520.</li>
                    <li>Locke, E. A., &amp; Latham, G. P. (1990). <em>A Theory of Goal Setting and Task Performance</em>. Prentice Hall.</li>
                    <li>Drucker, P. F. (1954). <em>The Practice of Management</em>. Harper &amp; Row. (Origin of Management by Objectives.)</li>
                  </ul>
                  <h3>Digital marketing planning frameworks</h3>
                  <ul>
                    <li>Chaffey, D., &amp; Smith, P. R. (2022). <em>Digital Marketing Excellence: Planning, Optimizing and Integrating Online Marketing</em> (6th ed.). Routledge. ISBN 9780367444754.</li>
                    <li>Smith, P. R. SOSTAC® planning framework.</li>
                    <li><a href="https://www.smartinsights.com/goal-setting-evaluation/goals-kpis/choosing-effective-digital-marketing-kpis/" target="_blank" rel="noreferrer">Chaffey, D. — Choosing effective digital marketing KPIs.</a></li>
                    <li><a href="https://www.smartinsights.com/goal-setting-evaluation/goals-kpis/define-smart-marketing-objectives/" target="_blank" rel="noreferrer">Chaffey, D. — How to define SMART marketing objectives.</a></li>
                    <li><a href="https://www.smartinsights.com/marketplace-analysis/competitor-analysis/" target="_blank" rel="noreferrer">Smart Insights — Competitor analysis &amp; benchmarking.</a></li>
                  </ul>
                  <h3>Background on benchmarking history</h3>
                  <ul>
                    <li><a href="https://people.well.com/user/bbear/camp.html" target="_blank" rel="noreferrer">Camp, R. C. — interview on the origins of benchmarking at Xerox.</a></li>
                    <li><a href="https://www.decisionskills.com/uploads/5/1/6/0/5160560/doran_1981_s.m.a.r.t-way-management-review.pdf" target="_blank" rel="noreferrer">Doran (1981) full text (PDF).</a></li>
                  </ul>
                  <p><strong>Note on sourcing:</strong> The historical claims about Doran's original criteria and Camp's ten-step process are drawn from the primary texts as summarised by their publishers and by secondary accounts; readers building on this should consult the originals directly for page-level citation. Locke and Latham (1990) and Drucker (1954) are cited here as the acknowledged theoretical antecedents of SMART and are widely treated as such in the management literature.</p>
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

export default SmartObjectivesCompetitiveBenchmarking;
