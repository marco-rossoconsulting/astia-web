export default async (req, context) => {
  // Netlify sends the submission as JSON in the request body
  let payload;
  try {
    payload = await req.json();
  } catch (e) {
    console.error("Failed to parse JSON body:", e.message);
    return new Response("Invalid payload", { status: 400 });
  }

  // Netlify v2 event payload structure: payload.data holds the form fields
  const data = payload.data || payload;

  const to = process.env.NOTIFY_EMAIL;
  const resendKey = process.env.RESEND_API_KEY;

  if (!to || !resendKey) {
    console.error("Missing NOTIFY_EMAIL or RESEND_API_KEY env vars");
    return new Response("Missing configuration", { status: 500 });
  }

  const fields = {
    "Property": data.propertyName || "—",
    "Type": data.propertyType || "—",
    "Rooms": data.rooms || "—",
    "Location": data.location || "—",
    "Current website": data.website || "—",
    "Booking engine": data.bookingEngine || "—",
    "What's broken": data.whatsBroken || "—",
    "90-day goal": data.goal || "—",
    "Contact name": data.name || "—",
    "Role": data.role || "—",
    "Email": data.email || "—",
    "Phone": data.phone || "—",
    "Language": data.lang || "—",
  };

  const htmlRows = Object.entries(fields)
    .map(([k, v]) => `<tr><td style="padding:6px 12px;border-bottom:1px solid #eee;font-weight:600;white-space:nowrap;">${k}</td><td style="padding:6px 12px;border-bottom:1px solid #eee;">${v}</td></tr>`)
    .join("");

  const html = `<!DOCTYPE html>
<html>
<body style="font-family:system-ui,-apple-system,sans-serif;color:#111;background:#f6f6f6;padding:24px;">
  <div style="max-width:600px;margin:0 auto;background:#fff;padding:32px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
    <h2 style="margin-top:0;">New Astia Application</h2>
    <p style="color:#666;">Submitted via astiaweb.com/apply</p>
    <table style="width:100%;border-collapse:collapse;margin-top:16px;font-size:15px;">
      ${htmlRows}
    </table>
    <p style="margin-top:24px;color:#999;font-size:13px;">
      Netlify submission ID: ${payload.id || "N/A"}
    </p>
  </div>
</body>
</html>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Astia Web <apply@astiaweb.com>",
        to: [to],
        subject: `New application: ${data.propertyName || "Unknown property"}`,
        html,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return new Response("Email failed", { status: 502 });
    }

    return new Response("OK", { status: 200 });
  } catch (err) {
    console.error("Exception calling Resend:", err);
    return new Response("Email exception", { status: 502 });
  }
};
