import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  Copy,
  Download,
  ExternalLink,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Share2,
} from "lucide-react";
import hiteshProfile from "@/assets/hitesh-new-profile.png";

const SITE_URL = "https://www.hiteshjaganiya.com";
const CARD_URL = `${SITE_URL}/digital-card`;
const PHONE = "+919998311492";
const EMAIL = "hphitesh941@gmail.com";

const DigitalCard = () => {
  const [copied, setCopied] = useState(false);

  const saveContact = () => {
    const vcard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "FN:Hitesh Jaganiya",
      "N:Hitesh;Jaganiya;;;",
      "ORG:Hitz Digital Marketing",
      "TITLE:Digital Marketing Consultant",
      "TEL;TYPE=CELL:+919998311492",
      "EMAIL;TYPE=INTERNET:hphitesh941@gmail.com",
      "URL:https://www.hiteshjaganiya.com/",
      "URL;TYPE=WORK:https://www.hitzdigitalmarketing.com/",
      "ADR;TYPE=WORK:;;Ahmedabad;Gujarat;;India",
      "NOTE:Digital Marketing Consultant specializing in SEO, Google Ads and data-driven digital marketing.",
      "END:VCARD",
    ].join("\r\n");

    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Hitesh-Jaganiya.vcf";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  const shareCard = async () => {
    if (navigator.share) {
      await navigator.share({
        title: "Hitesh Jaganiya | Digital Marketing Consultant",
        text: "Hitesh Jaganiya — Digital Marketing Consultant in Ahmedabad.",
        url: CARD_URL,
      });
      return;
    }

    await navigator.clipboard?.writeText(CARD_URL);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  };

  return (
    <>
      <Helmet>
        <title>Digital Card | Hitesh Jaganiya — Digital Marketing Consultant</title>
        <meta
          name="description"
          content="Digital business card for Hitesh Jaganiya, Digital Marketing Consultant in Ahmedabad. Call, WhatsApp, email, save contact and connect online."
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href={CARD_URL} />
        <meta property="og:title" content="Hitesh Jaganiya | Digital Marketing Consultant" />
        <meta
          property="og:description"
          content="Connect with Hitesh Jaganiya — Digital Marketing Consultant in Ahmedabad."
        />
        <meta property="og:url" content={CARD_URL} />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content={`${SITE_URL}/assets/hitesh-new-profile-B9JyaFg3.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Hitesh Jaganiya",
            url: CARD_URL,
            image: `${SITE_URL}/assets/hitesh-new-profile-B9JyaFg3.png`,
            jobTitle: "Digital Marketing Consultant",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Ahmedabad",
              addressRegion: "Gujarat",
              addressCountry: "IN",
            },
            email: EMAIL,
            telephone: PHONE,
            sameAs: [
              "https://www.linkedin.com/in/hiteshjaganiya/",
              "https://www.instagram.com/jaganiyahitesh/",
              "https://github.com/hitesh941",
            ],
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-[#eef3f7] px-4 py-5 sm:py-8">
        <div className="mx-auto w-full max-w-[430px]">
          <section className="overflow-hidden rounded-[30px] bg-slate-950 shadow-2xl">
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-primary px-6 pb-7 pt-7 text-white">
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full border-[18px] border-white/5" />
              <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full border-[22px] border-primary/20" />

              <div className="relative flex items-center gap-4">
                <img
                  src={hiteshProfile}
                  alt="Hitesh Jaganiya, Digital Marketing Consultant"
                  className="h-20 w-20 rounded-2xl object-cover object-top ring-2 ring-white/20"
                  width="80"
                  height="80"
                />
                <div className="min-w-0">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground/65">
                    Let’s Grow Your Business
                  </p>
                  <h1 className="text-[27px] font-bold leading-tight tracking-tight">
                    Hitesh Jaganiya
                  </h1>
                  <p className="mt-1 text-sm font-medium text-white/75">
                    Digital Marketing Consultant
                  </p>
                </div>
              </div>

              <p className="relative mt-7 max-w-[340px] text-[15px] leading-6 text-white/80">
                Helping businesses grow through SEO, Google Ads, content strategy and
                data-driven digital marketing.
              </p>

              <div className="relative mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
                <div>
                  <div className="text-xl font-bold">11+</div>
                  <div className="mt-0.5 text-[11px] text-white/55">Years experience</div>
                </div>
                <div>
                  <div className="text-xl font-bold">150+</div>
                  <div className="mt-0.5 text-[11px] text-white/55">Clients served</div>
                </div>
                <div>
                  <div className="text-xl font-bold">Ahmedabad</div>
                  <div className="mt-0.5 text-[11px] text-white/55">Gujarat, India</div>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-4 grid grid-cols-3 gap-3">
            <a
              href={`tel:${PHONE}`}
              className="flex min-h-[82px] flex-col items-center justify-center gap-2 rounded-2xl bg-primary px-3 text-center font-semibold text-primary-foreground shadow-sm transition-transform active:scale-[0.98]"
            >
              <Phone className="h-5 w-5" />
              <span className="text-sm">Call</span>
            </a>
            <a
              href={`https://wa.me/${PHONE.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[82px] flex-col items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 text-center font-semibold text-slate-800 shadow-sm transition-transform active:scale-[0.98]"
            >
              <MessageCircle className="h-5 w-5 text-[#16a34a]" />
              <span className="text-sm">WhatsApp</span>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex min-h-[82px] flex-col items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 text-center font-semibold text-slate-800 shadow-sm transition-transform active:scale-[0.98]"
            >
              <Mail className="h-5 w-5" />
              <span className="text-sm">Email</span>
            </a>
          </div>

          <section className="mt-6">
            <p className="mb-2 px-1 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
              Connect
            </p>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <a
                href="https://www.hiteshjaganiya.com/"
                className="flex items-center gap-4 border-b border-slate-100 px-4 py-4"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
                  <Globe className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold text-slate-900">Personal Website</span>
                  <span className="block truncate text-sm text-slate-500">hiteshjaganiya.com</span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-slate-400" />
              </a>
              <a
                href="https://www.hitzdigitalmarketing.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 border-b border-slate-100 px-4 py-4"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <BriefcaseBusiness className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold text-slate-900">Hitz Digital Marketing</span>
                  <span className="block text-sm text-slate-500">Digital marketing services</span>
                </span>
                <ExternalLink className="h-4 w-4 text-slate-400" />
              </a>
              <a
                href="https://www.linkedin.com/in/hiteshjaganiya/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-4 py-4"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0a66c2]/10 text-[#0a66c2]">
                  <Linkedin className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold text-slate-900">LinkedIn</span>
                  <span className="block text-sm text-slate-500">Professional profile</span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-slate-400" />
              </a>
            </div>
          </section>

          <section className="mt-6">
            <p className="mb-2 px-1 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
              Services
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                ["SEO", "Search visibility"],
                ["Google Ads", "Paid acquisition"],
                ["Meta Ads", "Social advertising"],
                ["Digital Strategy", "Growth planning"],
              ].map(([title, subtitle]) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="font-semibold text-slate-900">{title}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{subtitle}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100">
                <MapPin className="h-5 w-5 text-slate-700" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Ahmedabad, Gujarat</p>
                <p className="text-sm text-slate-500">India</p>
              </div>
            </div>
          </section>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={saveContact}
              className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 font-semibold text-white shadow-sm transition-transform active:scale-[0.98]"
            >
              <Download className="h-5 w-5" />
              Save Contact
            </button>
            <button
              type="button"
              onClick={shareCard}
              className="flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 font-semibold text-slate-800 shadow-sm transition-transform active:scale-[0.98]"
            >
              {copied ? <Check className="h-5 w-5" /> : <Share2 className="h-5 w-5" />}
              {copied ? "Link Copied" : "Share Card"}
            </button>
          </div>

          <div className="mt-5 flex items-center justify-center gap-4 pb-3 text-slate-400">
            <a href="https://www.instagram.com/jaganiyahitesh/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/hiteshjaganiya/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href={`mailto:${EMAIL}`} aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
            <a href={`tel:${PHONE}`} aria-label="Call">
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default DigitalCard;
