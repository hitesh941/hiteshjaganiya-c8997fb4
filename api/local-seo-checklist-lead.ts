type LeadRequest = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
};

const json = (res: any, status: number, body: Record<string, unknown>) =>
  res.status(status).setHeader("Content-Type", "application/json").json(body);

export default async function handler(req: any, res: any) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return json(res, 405, { error: "Method not allowed." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.LEAD_FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    console.error("Lead form email is not configured: RESEND_API_KEY or LEAD_FROM_EMAIL is missing.");
    return json(res, 503, { error: "The download form is temporarily unavailable. Please try again later." });
  }

  const body = (req.body || {}) as LeadRequest;
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";

  if (name.length < 2 || name.length > 100) {
    return json(res, 400, { error: "Please enter a valid name." });
  }
  if (!/^[+0-9 ()-]{10,18}$/.test(phone) || phone.replace(/\D/g, "").length < 10) {
    return json(res, 400, { error: "Please enter a valid phone number." });
  }
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json(res, 400, { error: "Please enter a valid email address." });
  }

  const submittedAt = new Date().toISOString();
  const payload = {
    from: fromEmail,
    to: ["hphitesh941@gmail.com"],
    subject: "New Local SEO Checklist Download Lead",
    reply_to: email,
    text: [
      "A visitor requested the Local SEO Checklist PDF.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Submitted at: ${submittedAt}`,
      `Source: https://www.hiteshjaganiya.com/blog/local-seo-checklist-ahmedabad`,
    ].join("\n"),
    html: `<h2>New Local SEO Checklist Download Lead</h2><p>A visitor requested the Local SEO Checklist PDF.</p><table cellpadding="8" cellspacing="0" border="1"><tr><th align="left">Name</th><td>${escapeHtml(name)}</td></tr><tr><th align="left">Phone</th><td>${escapeHtml(phone)}</td></tr><tr><th align="left">Email</th><td>${escapeHtml(email)}</td></tr><tr><th align="left">Submitted at</th><td>${escapeHtml(submittedAt)}</td></tr></table><p>Source: <a href="https://www.hiteshjaganiya.com/blog/local-seo-checklist-ahmedabad">Local SEO Checklist blog</a></p>`,
  };

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const providerMessage = await response.text();
      console.error("Resend email request failed:", response.status, providerMessage);
      return json(res, 502, { error: "We couldn’t send your details right now. Please try again in a moment." });
    }
    return json(res, 200, { ok: true });
  } catch (error) {
    console.error("Lead email request failed:", error);
    return json(res, 502, { error: "We couldn’t send your details right now. Please try again in a moment." });
  }
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character] || character);
}
