import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { getPostBySlug } from "@/data/blogPosts";

const BlogBreadcrumbs = () => {
  const { pathname } = useLocation();
  const slug = pathname.startsWith("/blog/") ? pathname.replace("/blog/", "") : "";
  const post = getPostBySlug(slug);

  if (!post) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
        <li>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            aria-label="Home"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            <span>Home</span>
          </Link>
        </li>
        <li aria-hidden="true">
          <ChevronRight className="w-4 h-4" />
        </li>
        <li>
          <Link to="/blog" className="hover:text-foreground transition-colors">
            Blog
          </Link>
        </li>
        <li aria-hidden="true">
          <ChevronRight className="w-4 h-4" />
        </li>
        <li aria-current="page" className="truncate max-w-[min(70vw,520px)] text-foreground font-medium">
          {post.title}
        </li>
      </ol>
    </nav>
  );
};

export default BlogBreadcrumbs;
