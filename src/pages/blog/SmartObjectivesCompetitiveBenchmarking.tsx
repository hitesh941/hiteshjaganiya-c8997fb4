import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, BookOpen, CalendarDays, CheckCircle2, Clock, ExternalLink, FlaskConical, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorCard from "@/components/AuthorCard";
import BlogSidebar from "@/components/BlogSidebar";
import BlogBreadcrumbs from "@/components/BlogBreadcrumbs";
import { getPostBySlug, SITE_URL } from "@/data/blogPosts";

const post = getPostBySlug("smart-objectives-competitive-benchmarking")!;
const postUrl = `${SITE_URL}/blog/${post.slug}`;
const coverUrl = `${SITE_URL}${post.cover}`;

const researchSections = [
  { id: "two-halves", label: "The two halves" },
  { id: "empirical-test", label: "The empirical test" },
  { id: "distinction", label: "The distinction" },
  { id: "limits", label: "Limits" },
  { id: "standard-advice", label: "What survives" },
  { id: "references", label: "References" },
];

const SmartObjectivesCompetitiveBenchmarking = () => {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${postUrl}#article`,
      headline: post.title,
      description: post.description,
      image: [coverUrl],
      url: postUrl,
      datePublished: `${post.datePublished}T09:00:00+05:30`,
      dateModified: `${post.dateModified}T09:00:00+05:30`,
      inLanguage: "en-IN",
      articleSection: post.category,
      keywords: post.keywords.join(", "),
      about: [
        { "@type": "Thing", name: "SMART objectives" },
        { "@type": "Thing", name: "Competitive benchmarking" },
        { "@type": "Thing", name: "Evidence-based target setting" },
      ],
      citation: [
        "https://neil-a-morgan.com/wp-content/uploads/2020/04/Vorhies-Morgan-JM-2005.pdf",
        "https://www.decisionskills.com/uploads/5/1/6/0/5160560/doran_1981_s.m.a.r.t-way-management-review.pdf",
      ],
      mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
      author: { "@type": "Person", "@id": `${SITE_URL}/#person`, name: "Hitesh Jaganiya", url: `${SITE_URL}/`, jobTitle: "Digital Marketing Consultant" },
      publisher: { "@type": "Person", "@id": `${SITE_URL}/#person`, name: "Hitesh Jaganiya", url: `${SITE_URL}/`, jobTitle: "Digital Marketing Consultant" },
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
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={coverUrl} />
        <meta name="twitter:image:alt" content={post.coverAlt} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <Header />
      <main className="pt-28 md:pt-36">
        <article className="section-padding pt-0">
          <div className="container-custom">
            <BlogBreadcrumbs />

            <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-12 items-start">
              <div className="min-w-0">
                <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline mb-7">
                  <ArrowLeft className="w-4 h-4" /> Back to blog
                </Link>

                <header className="mb-10">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                      <FlaskConical className="w-3.5 h-3.5" /> Research note
                    </span>
                    <span className="text-sm font-medium text-muted-foreground">{post.category}</span>
                  </div>

                  <h1 className="max-w-4xl text-3xl md:text-5xl lg:text-[3.65rem] font-bold text-foreground leading-[1.08] tracking-tight text-balance mb-6">
                    {post.title}
                  </h1>

                  <p className="max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-7">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground mb-8">
                    <span className="inline-flex items-center gap-2"><CalendarDays className="w-4 h-4" />September 12, 2026</span>
                    <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4" />{post.readingTime}</span>
                    <span className="inline-flex items-center gap-2"><User className="w-4 h-4" />Hitesh Jaganiya</span>
                  </div>

                  <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                    <img src={post.cover} alt={post.coverAlt} className="w-full aspect-[16/7] object-cover" />
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />
                  </div>
                </header>

                <div className="grid sm:grid-cols-4 gap-3 mb-10">
                  {[
                    ["748", "US firms surveyed"],
                    ["230", "usable responses"],
                    ["109", "firms with ROA validation"],
                    ["12", "industries represented"],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                      <div className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">{value}</div>
                      <div className="mt-1 text-xs md:text-sm text-muted-foreground leading-snug">{label}</div>
                    </div>
                  ))}
                </div>

                <div className="rounded-3xl border border-primary/20 bg-primary/[0.045] p-6 md:p-8 mb-10">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-primary mb-3">
                    <BookOpen className="w-4 h-4" /> The research question
                  </div>
                  <p className="text-xl md:text-2xl font-semibold leading-snug text-foreground">
                    Does benchmarking actually help managers set better targets — and does the choice of comparator change what they learn?
                  </p>
                </div>

                <nav aria-label="Article sections" className="rounded-2xl border border-border bg-card p-5 md:p-6 mb-12">
                  <div className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground mb-4">In this research note</div>
                  <div className="flex flex-wrap gap-2">
                    {researchSections.map((section, index) => (
                      <a key={section.id} href={`#${section.id}`} className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-sm font-medium text-foreground hover:border-primary/40 hover:text-primary transition-colors">
                        <span className="text-xs text-muted-foreground">0{index + 1}</span>{section.label}<ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ))}
                  </div>
                </nav>

                <div className="max-w-4xl space-y-12 text-[17px] md:text-[18px] text-muted-foreground leading-[1.8]">
                  <section id="two-halves" className="scroll-mt-28">
                    <SectionHeading eyebrow="01" title="The two halves of the advice" />
                    <p>Almost every digital marketing planning guide gives the same instruction: before you set objectives, review your own performance benchmarks and your competitors'. It's standard advice, repeated widely enough that it rarely gets examined.</p>
                    <p>It's worth examining, because the empirical research on benchmarking contains at least one finding that contradicts how the advice is usually given — and a distinction that most practitioner guidance skips entirely.</p>
                    <p>The instruction combines two management ideas developed separately, in different fields, about a decade apart.</p>

                    <div className="grid md:grid-cols-2 gap-5 my-8">
                      <InsightCard label="SMART objectives · 1981" title="How should the objective be written?" text="Doran's framework deals with the form and ownership of an objective." />
                      <InsightCard label="Benchmarking · 1979–1989" title="What should the target actually be?" text="Camp's process supplies the evidence for deciding what a defensible target looks like." />
                    </div>

                    <p><strong className="text-foreground">SMART objectives</strong> come from George T. Doran's article in the November 1981 issue of <em>Management Review</em>, "There's a S.M.A.R.T. way to write management's goals and objectives" (vol. 70, no. 11, pp. 35–36). Two details are routinely misremembered. Doran's criteria were <strong className="text-foreground">Specific, Measurable, Assignable, Realistic, Time-related</strong> — the "A" meant <em>assignable</em>, naming who owns the objective, not "achievable." And Doran was deliberately undogmatic: he noted that quantification isn't feasible at every level of management and that not every objective needs to satisfy all five criteria. He presented SMART as a thinking checklist, not a compliance standard. He presented no empirical study; the article drew on his experience in corporate planning. [Doran 1981]</p>
                    <blockquote className="my-8 border-l-4 border-primary pl-6 py-2 text-xl font-semibold text-foreground leading-relaxed">SMART can tell you whether an objective is well-formed. It cannot tell you whether the number is ambitious, complacent, or fantasy.</blockquote>
                    <p>The framework tells you whether an objective is well-formed. It cannot tell you whether the number you picked is ambitious, complacent, or fantasy. Nothing internal to SMART supplies that.</p>
                    <p><strong className="text-foreground">Benchmarking</strong> supplies it, and comes from elsewhere. Robert Camp introduced the practice at Xerox and codified it in <em>Benchmarking: The Search for Best Practices That Lead to Superior Performance</em> (ASQC Quality Press, 1989), later extended in <em>Business Process Benchmarking</em> (1995). Camp defined it as a structured process for identifying and replicating best practices to improve business performance. [Camp 1989; Camp 1995] By 2001 it was among the most widely used management tools in the world, central to total quality management, knowledge management, and process improvement work. [Rigby 2001]</p>
                    <p>Camp's process has three stages, as later summarised in the marketing literature: a <strong className="text-foreground">search</strong> stage, in which managers look for firms showing superior performance and identify the capability drivers behind it; a <strong className="text-foreground">gap-assessment</strong> stage, in which differences between the firm and the benchmark are measured; and a <strong className="text-foreground">capability improvement</strong> stage, in which gap-closing changes are planned and executed. [Vorhies &amp; Morgan 2005, p. 81, summarising Camp 1995 and Garvin 1993]</p>
                    <div className="rounded-2xl bg-foreground text-background p-6 md:p-7 my-8">
                      <div className="text-xs font-bold uppercase tracking-[0.16em] opacity-60 mb-2">The ordering matters</div>
                      <p className="text-xl md:text-2xl font-semibold leading-snug">Goal-setting is an output of benchmarking, not its starting point. You assess the gap first; the target follows.</p>
                    </div>
                  </section>

                  <section id="empirical-test" className="scroll-mt-28">
                    <SectionHeading eyebrow="02" title="The empirical test, and the surprise" />
                    <p>For a long time this was normative advice with little evidence behind it. Despite widespread encouragement to managers, the benchmarking of marketing capabilities as a route to competitive advantage had received almost no empirical attention. [Vorhies &amp; Morgan 2005, p. 80]</p>
                    <p>Douglas Vorhies and Neil Morgan tested it in the <em>Journal of Marketing</em> (2005, 69(1), 80–94), surveying top marketing executives at 748 US firms across twelve industries and getting 230 usable responses, a 31% response rate. They validated the perceptual results against objective two-year-average return-on-assets data for a 109-firm subset. [Vorhies &amp; Morgan 2005, pp. 82–83]</p>

                    <div className="rounded-3xl border border-border bg-card overflow-hidden my-8 shadow-sm">
                      <div className="p-6 border-b border-border">
                        <div className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-2">Core result</div>
                        <div className="flex flex-wrap items-end gap-x-8 gap-y-4">
                          <div><div className="text-4xl font-bold text-foreground">β = −.56</div><div className="text-sm text-muted-foreground mt-1">p &lt; .001</div></div>
                          <div><div className="text-4xl font-bold text-foreground">R² = .35</div><div className="text-sm text-muted-foreground mt-1">overall firm performance</div></div>
                        </div>
                      </div>
                      <div className="p-6 text-base leading-relaxed">Deviation from the benchmark marketing capability profile was significantly and negatively related to overall firm performance — firms whose capabilities more closely matched the top performer's did better on customer satisfaction, market effectiveness, profitability, and ROA. [ibid., Table 2]</div>
                    </div>

                    <Finding title="The control condition" text="A non-benchmark baseline built from five randomly selected firms explained essentially nothing (R² = .03; coefficient insignificant). Comparing yourself to an arbitrary set of firms produces no usable signal. The comparison group is doing the work, not the act of comparing. [ibid., Table 3]" />
                    <Finding title="The counterintuitive result" text="Within-industry benchmarking worked, but less well: β = −.47 and R² = .25, against β = −.56 and R² = .35 for cross-industry benchmarking. The authors concluded that where an organisation learns from affects the potential value of what it may learn, and that learning from peers in other industries may have the transformative character of 'gene splicing.' [ibid., p. 90]" />
                    <p>This isn't a fringe position. Camp had argued in 1989 that restricting benchmark searches to your own industry reduces effectiveness, partly because many industries contain few major firms and those firms tend toward mimetic isomorphism — they've converged on each other's practices, so there's little left to learn. [Camp 1989, as discussed in Vorhies &amp; Morgan 2005, p. 83]</p>

                    <div className="grid md:grid-cols-2 gap-5 my-8">
                      <StatCard value=".21 → .20 → .19" label="R² for 1, 5 and 8 benchmark firms" />
                      <StatCard value=".16" label="R² when the benchmark group widened to 16 firms" />
                    </div>
                    <p><strong className="text-foreground">On how many benchmarks to use</strong>, more was not better. Single, top-five, and top-eight benchmark groups performed near-identically (R² = .21, .20, .19; β = −.44, −.43, −.42), but at sixteen firms both model fit and effect size declined (R² = .16, β = −.39). [ibid., Table 3] Widening the net dilutes the benchmark toward the mean.</p>
                    <p><strong className="text-foreground">On what to benchmark</strong>, the eight marketing capabilities they measured — product development, pricing, channel management, marketing communications, selling, market information management, marketing planning, marketing implementation — were interdependent, and the indirect paths running through that interdependence were <em>stronger</em> than the direct paths from each capability to performance. Their conclusion: these should be benchmarked as a set, not individually. [ibid., Figure 1, p. 85] Weighting individual capabilities by their performance contribution added nothing over the unweighted model. [ibid., Table 2]</p>
                  </section>

                  <section id="distinction" className="scroll-mt-28">
                    <SectionHeading eyebrow="03" title="The distinction most guidance misses" />
                    <div className="rounded-2xl border border-dashed border-primary/40 bg-primary/[0.035] p-6 md:p-7 mb-8">
                      <p className="text-base md:text-lg text-foreground leading-relaxed"><strong>Interpretive note:</strong> the application of the literature to digital marketing KPI practice below is the author's reading of the research, not a finding any single paper states.</p>
                    </div>
                    <p>Vorhies and Morgan observe that the focus of benchmarking shifted over time — away from the content of products and services, the strategies pursued, and the <em>performance outcomes achieved</em> by top performers, and toward the <strong className="text-foreground">capabilities believed to have produced</strong> those outcomes. [Vorhies &amp; Morgan 2005, p. 81]</p>

                    <div className="grid md:grid-cols-2 gap-5 my-8">
                      <div className="rounded-2xl border border-border bg-card p-6">
                        <div className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground mb-3">Outcome benchmarking</div>
                        <div className="space-y-2 text-base text-foreground"><div>CTR</div><div>Conversion rate</div><div>Cost per acquisition</div></div>
                        <p className="text-sm leading-relaxed mt-5">Shows that a gap exists. Doesn't explain which capability produced it.</p>
                      </div>
                      <div className="rounded-2xl border border-primary/25 bg-primary/[0.045] p-6">
                        <div className="text-xs font-bold uppercase tracking-[0.14em] text-primary mb-3">Capability benchmarking</div>
                        <div className="space-y-2 text-base text-foreground"><div>Planning</div><div>Information management</div><div>Implementation</div></div>
                        <p className="text-sm leading-relaxed mt-5">Looks for the capability drivers behind superior outcomes — and therefore what to change.</p>
                      </div>
                    </div>

                    <p>The digital marketing practice of benchmarking KPIs is largely the older form. Click-through rate, conversion rate, cost per acquisition — these are outcome metrics. Knowing a competitor converts at 4% and you convert at 2% tells you a gap exists. It tells you nothing about which capability produced the difference, and therefore nothing about what to change.</p>
                    <p>Vorhies and Morgan's own recommendation runs the other way: managers should first identify the capability drivers of superior performance, then assess the gap on those, rather than allocating improvement resources to whatever capability feels internally weak. [ibid., p. 90] By focusing on capability sources rather than observed outcomes, and using competitors and peers as referents, benchmarking becomes part of a genuine marketing control system. [ibid., p. 89, drawing on Day &amp; Wensley 1988 and Morgan, Clark &amp; Gooner 2002]</p>
                    <blockquote className="my-8 border-l-4 border-primary pl-6 py-2 text-xl font-semibold text-foreground leading-relaxed">KPI benchmarking is best understood as diagnostic rather than prescriptive. It locates a gap; finding what's behind the gap is separate work.</blockquote>
                    <p>Which suggests KPI benchmarking is best understood as diagnostic rather than prescriptive. It locates a gap. Finding out what's behind the gap is separate work, and it's the work that actually sets an achievable target.</p>
                  </section>

                  <section id="limits" className="scroll-mt-28">
                    <SectionHeading eyebrow="04" title="Limits" />
                    <p>Benchmarking data isn't neutral, and the marketing-audit literature makes this point sharply: much of that literature assumes the data an auditor collects is objective, when in fact information about organisational activity is never neutral — particularly in the context of performance appraisal, where audits typically gather opinions and accounts from informants positioned in different parts of an organisation. [Brownlie 2000, <em>Long Range Planning</em>] For external competitor benchmarking the problem compounds, since competitors don't publish internal metrics and inferring them from public signals imports estimation error into your target.</p>
                    <p>The measurement literature also offers no settled framework. Reviews note that there's no universal tool for marketing performance measurement, in part because of the sheer abundance of available metrics, and that authors frequently don't state the criteria by which they selected the metrics they study. [Gao, "Measuring Marketing Performance: A Review and A Framework"]</p>
                    <p>Vorhies and Morgan were candid about their own constraints: they benchmarked eight mid-level capabilities, which precluded assessing higher-level integrative capabilities like brand management or CRM; they couldn't control for firms' non-marketing capabilities such as R&amp;D; and their measures were broad enough to lack depth on any single capability. [Vorhies &amp; Morgan 2005, pp. 91–92] Their cross-industry finding is specific to their sample — they explicitly say managers should assess for themselves whether it holds in their own industry and strategy context. [ibid., p. 90]</p>
                  </section>

                  <section id="standard-advice" className="scroll-mt-28">
                    <SectionHeading eyebrow="05" title="Where this leaves the standard advice" />
                    <p>The instruction to benchmark before setting objectives is sound, and there's now empirical support for it. But three common refinements of it are worth revisiting:</p>
                    <div className="space-y-4 my-8">
                      {[
                        ["01", "Benchmark against firms like you", "At least for capabilities, the evidence points the other way. Cross-industry comparison produced the larger effect."],
                        ["02", "Survey the whole competitive set", "Beyond roughly eight benchmark firms, the effect weakened. A small number of genuine top performers beat a broad sample."],
                        ["03", "Compare your KPIs to theirs", "Outcome metrics identify gaps but don't explain them. The research points toward benchmarking capabilities instead."],
                      ].map(([num, title, body]) => (
                        <div key={num} className="grid grid-cols-[42px_1fr] gap-4 rounded-2xl border border-border bg-card p-5 md:p-6">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">{num}</div>
                          <div><h3 className="text-lg font-bold text-foreground mb-1">{title}</h3><p className="text-base leading-relaxed">{body}</p></div>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-3xl bg-foreground text-background p-7 md:p-9 mt-8">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] opacity-60 mb-4"><CheckCircle2 className="w-4 h-4" /> What survives intact</div>
                      <p className="text-xl md:text-2xl font-semibold leading-relaxed">Goals need to be specific and challenging to improve performance, and benchmarking is what lets "challenging" be established from evidence rather than asserted from preference.</p>
                      <p className="text-base leading-relaxed opacity-75 mt-5">The random-baseline result is the cleanest statement of the stakes: the process is only worth anything if the comparator is worth something.</p>
                    </div>
                  </section>

                  <section id="references" className="scroll-mt-28">
                    <SectionHeading eyebrow="06" title="References" />
                    <div className="space-y-8">
                      <ReferenceGroup title="Primary sources (verified)">
                        <ReferenceItem>Vorhies, D. W., &amp; Morgan, N. A. (2005). "Benchmarking Marketing Capabilities for Sustainable Competitive Advantage." <em>Journal of Marketing</em>, 69(1), 80–94. DOI: 10.1509/jmkg.69.1.80.55505. <a href="https://neil-a-morgan.com/wp-content/uploads/2020/04/Vorhies-Morgan-JM-2005.pdf" target="_blank" rel="noreferrer" className="text-primary font-medium hover:underline">Full text <ExternalLink className="inline w-3.5 h-3.5" /></a></ReferenceItem>
                        <ReferenceItem>Doran, G. T. (1981). "There's a S.M.A.R.T. way to write management's goals and objectives." <em>Management Review</em>, 70(11), 35–36. <a href="https://www.decisionskills.com/uploads/5/1/6/0/5160560/doran_1981_s.m.a.r.t-way-management-review.pdf" target="_blank" rel="noreferrer" className="text-primary font-medium hover:underline">PDF <ExternalLink className="inline w-3.5 h-3.5" /></a></ReferenceItem>
                      </ReferenceGroup>
                      <ReferenceGroup title="Cited via Vorhies & Morgan (not independently verified)">
                        <ReferenceItem>Camp, R. C. (1989). <em>Benchmarking: The Search for Best Practices That Lead to Superior Performance</em>. Milwaukee: ASQC Quality Press.</ReferenceItem>
                        <ReferenceItem>Camp, R. C. (1995). <em>Business Process Benchmarking: Finding and Implementing Best Practices</em>. Milwaukee: ASQC Quality Press.</ReferenceItem>
                        <ReferenceItem>Brownlie, D. (2000). "Benchmarking Your Marketing Process." <em>Long Range Planning</em>, 32(1), 88–95.</ReferenceItem>
                        <ReferenceItem>Rigby, D. (2001). "Management Tools and Techniques: A Survey." <em>California Management Review</em>, 43(2), 139–60.</ReferenceItem>
                        <ReferenceItem>Day, G. S., &amp; Wensley, R. (1988). "Assessing Advantage: A Framework for Diagnosing Competitive Superiority." <em>Journal of Marketing</em>, 52(April), 1–20.</ReferenceItem>
                        <ReferenceItem>Morgan, N. A., Clark, B. H., &amp; Gooner, R. A. (2002). "Marketing Productivity, Marketing Audits, and Systems for Marketing Performance Assessment." <em>Journal of Business Research</em>, 55(5), 363–75.</ReferenceItem>
                        <ReferenceItem>Dickson, P. R. (1992). "Toward a General Theory of Competitive Rationality." <em>Journal of Marketing</em>, 56(January), 69–83.</ReferenceItem>
                        <ReferenceItem>Garvin, D. A. (1993). "Building a Learning Organization." <em>Harvard Business Review</em>, 71(July–August), 78–91.</ReferenceItem>
                      </ReferenceGroup>
                      <ReferenceGroup title="Additional">
                        <ReferenceItem>Gao, Y. "Measuring Marketing Performance: A Review and A Framework." Dublin City University Business School. <a href="https://doras.dcu.ie/20559/1/Final_version_TMR_Marketing_Performance_Measurement_14_Dec_09_-_Accepted.pdf" target="_blank" rel="noreferrer" className="text-primary font-medium hover:underline">PDF <ExternalLink className="inline w-3.5 h-3.5" /></a></ReferenceItem>
                        <ReferenceItem>Donthu, N., Hershberger, E., &amp; Osmonbekov, T. (2005). "Benchmarking Marketing Productivity Using Data Envelopment Analysis." <em>Journal of Business Research</em>, 58(11), 1474–1482.</ReferenceItem>
                        <ReferenceItem>Chaffey, D., &amp; Smith, P. R. (2022). <em>Digital Marketing Excellence: Planning, Optimizing and Integrating Online Marketing</em> (6th ed.). Routledge.</ReferenceItem>
                      </ReferenceGroup>
                    </div>

                    <div className="rounded-2xl border border-border bg-muted/30 p-6 mt-8">
                      <div className="text-xs font-bold uppercase tracking-[0.15em] text-foreground mb-3">Sourcing notes</div>
                      <p className="text-base leading-relaxed">All Vorhies &amp; Morgan figures are taken from the full text linked above. Doran's criteria are as stated in the 1981 article. Camp's arguments and definitions are cited as discussed in Vorhies &amp; Morgan (2005), pp. 81–83; the Camp originals were not consulted directly, and anyone building further on those specific claims should verify them against the books.</p>
                      <p className="text-base leading-relaxed mt-4">The "outcome versus capability" argument in the section above that heading is an interpretation of the literature, not a finding reported by any cited source. It rests on Vorhies &amp; Morgan's observation about the historical shift in benchmarking focus (p. 81) and their recommendation on capability-driver identification (p. 90), but the application to digital marketing KPI practice is mine.</p>
                    </div>
                  </section>
                </div>

                <div className="mt-14 pt-10 border-t border-border">
                  <AuthorCard />
                </div>
              </div>

              <aside className="lg:sticky lg:top-28 space-y-8">
                <BlogSidebar />
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-3">Research takeaway</div>
                  <p className="text-base font-semibold text-foreground leading-relaxed">A precise target is not necessarily a defensible target. The quality of the comparator determines the quality of the benchmark.</p>
                </div>
              </aside>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

const SectionHeading = ({ eyebrow, title }: { eyebrow: string; title: string }) => (
  <div className="mb-6">
    <div className="flex items-center gap-3 mb-3">
      <span className="text-xs font-bold tracking-[0.18em] text-primary">{eyebrow}</span>
      <span className="h-px w-10 bg-primary/30" />
    </div>
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground leading-tight">{title}</h2>
  </div>
);

const InsightCard = ({ label, title, text }: { label: string; title: string; text: string }) => (
  <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
    <div className="text-xs font-bold uppercase tracking-[0.13em] text-primary mb-3">{label}</div>
    <h3 className="text-lg font-bold text-foreground leading-snug mb-2">{title}</h3>
    <p className="text-sm leading-relaxed">{text}</p>
  </div>
);

const Finding = ({ title, text }: { title: string; text: string }) => (
  <div className="rounded-2xl border border-border bg-card p-6 shadow-sm my-5">
    <div className="flex items-center gap-2 text-sm font-bold text-foreground mb-2"><CheckCircle2 className="w-4 h-4 text-primary" />{title}</div>
    <p className="text-base leading-relaxed">{text}</p>
  </div>
);

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="rounded-2xl border border-border bg-muted/30 p-6">
    <div className="text-2xl font-bold text-foreground">{value}</div>
    <div className="text-sm leading-relaxed mt-2">{label}</div>
  </div>
);

const ReferenceGroup = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h3 className="text-lg font-bold text-foreground mb-3">{title}</h3>
    <div className="space-y-3">{children}</div>
  </div>
);

const ReferenceItem = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-border bg-card p-4 text-base leading-relaxed">{children}</div>
);

export default SmartObjectivesCompetitiveBenchmarking;
