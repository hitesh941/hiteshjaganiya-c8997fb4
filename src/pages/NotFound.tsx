import { ArrowLeft, ArrowUpRight, Home, SearchX } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found | Hitesh Jaganiya</title>
        <meta
          name="description"
          content="The page you're looking for could not be found. Explore Hitesh Jaganiya's digital marketing insights or return to the homepage."
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <main className="relative flex min-h-screen items-center overflow-hidden bg-background px-6 py-16 md:px-10 lg:px-16">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="container-custom relative z-10 w-full">
          <div className="mx-auto max-w-5xl">
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
              <div>
                <div className="mb-8 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                  <span className="h-px w-10 bg-primary" />
                  Hitesh Jaganiya
                </div>

                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Error 404
                </p>
                <h1 className="max-w-3xl text-5xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-8xl">
                  This page took a wrong turn.
                </h1>
                <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                  The page you were looking for doesn't exist, may have moved, or the link might be outdated. Let's get you back to something useful.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-medium"
                  >
                    <Home className="h-4 w-4" />
                    Back to Home
                  </Link>
                  <Link
                    to="/blog"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 py-3.5 font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                  >
                    Explore the Blog
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="relative flex items-center justify-center lg:justify-end">
                <div className="relative flex h-72 w-72 items-center justify-center rounded-[2rem] border border-border/70 bg-card shadow-soft sm:h-80 sm:w-80">
                  <div className="absolute inset-5 rounded-[1.5rem] border border-primary/10" />
                  <div className="text-center">
                    <SearchX className="mx-auto mb-5 h-10 w-10 text-primary" strokeWidth={1.5} />
                    <div className="text-[7rem] font-bold leading-none tracking-[-0.08em] text-foreground sm:text-[8rem]">
                      404
                    </div>
                    <div className="mt-3 flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground">
                      <ArrowLeft className="h-4 w-4" />
                      Nothing here
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
