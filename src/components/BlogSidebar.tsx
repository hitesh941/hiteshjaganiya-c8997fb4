import { useState } from "react";
import { Link } from "react-router-dom";
import { FolderOpen, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { blogPosts } from "@/data/blogPosts";

const BlogSidebar = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const categories = Array.from(
    blogPosts.reduce((map, post) => {
      map.set(post.category, (map.get(post.category) ?? 0) + 1);
      return map;
    }, new Map<string, number>())
  );

  const recentPosts = [...blogPosts]
    .sort((a, b) => b.datePublished.localeCompare(a.datePublished))
    .slice(0, 5);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out — I'll get back to you soon.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <aside className="space-y-8 lg:sticky lg:top-28 self-start">
      {/* Categories */}
      <div className="bg-card rounded-2xl border border-border p-6 shadow-soft">
        <h3 className="flex items-center gap-2 text-lg font-bold text-foreground mb-4">
          <FolderOpen className="w-5 h-5 text-primary" /> Categories
        </h3>
        <ul className="space-y-2">
          {categories.map(([category, count]) => (
            <li key={category}>
              <Link
                to="/blog"
                className="flex items-center justify-between text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <span>{category}</span>
                <span className="text-xs bg-secondary rounded-full px-2 py-0.5">
                  {count}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts */}
      <div className="bg-card rounded-2xl border border-border p-6 shadow-soft">
        <h3 className="flex items-center gap-2 text-lg font-bold text-foreground mb-4">
          <Clock className="w-5 h-5 text-primary" /> Recent Posts
        </h3>
        <ul className="space-y-4">
          {recentPosts.map((post) => (
            <li key={post.slug}>
              <Link to={`/blog/${post.slug}`} className="group flex gap-3">
                <img
                  src={post.cover}
                  alt=""
                  className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {new Date(post.datePublished).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Form */}
      <div className="bg-card rounded-2xl border border-border p-6 shadow-soft">
        <h3 className="flex items-center gap-2 text-lg font-bold text-foreground mb-2">
          <Send className="w-5 h-5 text-primary" /> Get in Touch
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Have a question about growing your business? Drop me a message.
        </p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <Input
            type="email"
            placeholder="Your email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <Textarea
            placeholder="Your message"
            rows={3}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          />
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </aside>
  );
};

export default BlogSidebar;
