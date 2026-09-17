import { useState } from "react";
import { ArrowRight, Mail, Phone, User, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";

const ContactSection = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/hphitesh941@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          message: formData.message,
          _subject: "New Contact Form Submission - Hitesh Jaganiya",
          _template: "table",
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setFormData({ name: "", email: "", phone: "", message: "" });
      navigate("/thank-you");
    } catch {
      setError("Something went wrong while sending your message. Please try again or contact me directly by email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-foreground via-foreground to-foreground/95">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="text-left">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Say Hello!
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Let's Start a Conversation 💬
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-8">
              Got questions? Just want to say hi? I'd love to hear from you! Drop me a message and I'll get back to you super quick.
            </p>
            <div className="space-y-4">
              <a href="mailto:hphitesh941@gmail.com" className="flex items-center gap-4 justify-start hover:opacity-80 transition-opacity">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-primary-foreground/60">Email me at</p>
                  <p className="text-primary-foreground font-medium">hphitesh941@gmail.com</p>
                </div>
              </a>
              <a href="tel:9998311492" className="flex items-center gap-4 justify-start hover:opacity-80 transition-opacity">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-primary-foreground/60">Call me at</p>
                  <p className="text-primary-foreground font-medium">+91 9998311492</p>
                </div>
              </a>
            </div>
            <p className="text-sm text-primary-foreground/60 mt-8">
              Zero pressure • Always free to chat • I reply within 24 hours ☀️
            </p>
          </div>

          {/* Right Side - Form */}
          <div className="bg-card p-8 md:p-10 rounded-2xl border border-border/50 shadow-medium">
            <h3 className="text-xl font-semibold text-foreground mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    Your Name
                  </label>
                  <Input id="name" name="name" type="text" placeholder="Your awesome name" value={formData.name} onChange={handleChange} required className="bg-background" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    Email Address
                  </label>
                  <Input id="email" name="email" type="email" placeholder="your.email@example.com" value={formData.email} onChange={handleChange} required className="bg-background" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  Phone (optional)
                </label>
                <Input id="phone" name="phone" type="tel" placeholder="Your phone number" value={formData.phone} onChange={handleChange} className="bg-background" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  Your Message
                </label>
                <Textarea id="message" name="message" placeholder="Tell me about your business, your goals, or just say hi!" value={formData.message} onChange={handleChange} required rows={4} className="bg-background resize-none" />
              </div>

              {error && <p className="text-sm text-destructive" role="alert">{error}</p>}

              <Button type="submit" variant="hero" size="xl" className="w-full group" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : <><Send className="mr-2 w-5 h-5" />Send Message<ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></>}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
