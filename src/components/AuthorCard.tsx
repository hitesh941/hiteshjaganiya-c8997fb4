import { Link } from "react-router-dom";
import { Linkedin, Globe, Mail } from "lucide-react";
import authorPhoto from "@/assets/hitesh-new-profile.png";

const AuthorCard = () => {
  return (
    <aside className="mt-16 p-6 md:p-8 bg-secondary/40 rounded-2xl border border-border">
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        <img
          src={authorPhoto}
          alt="Hitesh Jaganiya, Digital Marketing Consultant in Ahmedabad"
          className="w-24 h-24 rounded-full object-cover object-top bg-background flex-shrink-0"
          loading="lazy"
        />
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
            About the author
          </p>
          <h2 className="text-xl font-bold text-foreground mb-2">Hitesh Jaganiya</h2>
          <p className="text-muted-foreground mb-4">
            Digital Marketing Consultant based in Ahmedabad with 11 years of hands-on
            experience in SEO, Google Ads and growth strategy. Google Ads and Google
            Analytics certified, and works with HubSpot and SEMrush on the strategy and
            reporting side.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <Link to="/" className="font-semibold text-primary hover:underline">
              About Hitesh
            </Link>
            <a
              href="https://www.linkedin.com/in/hit1991/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a
              href="https://www.hitzdigitalmarketing.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
            >
              <Globe className="w-4 h-4" /> Hitz Digital Marketing
            </a>
            <a
              href="mailto:hphitesh941@gmail.com"
              className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
            >
              <Mail className="w-4 h-4" /> Email
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AuthorCard;
