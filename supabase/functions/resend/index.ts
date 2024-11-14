// index.ts for the Resend function
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js";
import { Database } from "./types.ts"; // Import generated types

// Initialize Supabase client with Service Role Key
const supabaseUrl = Deno.env.get("URL") || "";
const supabaseServiceRoleKey = Deno.env.get("SERVICE_ROLE_KEY") || "";
const supabase = createClient<Database>(supabaseUrl, supabaseServiceRoleKey);

// Resend API Key
const resendApiKey = Deno.env.get("RESEND_API_KEY") || "";

// Types for webhook payloads
interface WebhookPayload {
  type: "INSERT";
  table: string;
  record: Database["public"]["Tables"]["contacts"]["Row"];
  schema: "public";
}

// Generate the email body
function createEmailBody(contact: WebhookPayload["record"]) {
  return `
    <h3>New Contact Form Submission</h3>
    <p><b>Name:</b> ${contact.name}</p>
    <p><b>Email:</b> ${contact.email}</p>
    <p><b>Message:</b> ${contact.message}</p>
  `;
}

// Serve the function as an HTTP endpoint
serve(async (req) => {
  // Parse the incoming webhook payload
  const payload: WebhookPayload = await req.json();

  // Only proceed if it's an INSERT event on the `contacts` table
  if (payload.type === "INSERT" && payload.table === "contacts") {
    const newContact = payload.record;

    // Create the email body with contact details
    const emailBody = createEmailBody(newContact);

    // Send the email via Resend
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Heaven's Grace <noreply@heavens-grace.org>",
        to: ["Akhukhua@gmail.com"], // Add the desired recipient email
        subject: "New Contact Form Submission",
        html: emailBody,
      }),
    });

    // Check for email sending errors
    if (!response.ok) {
      console.error("Resend error:", await response.text());
      return new Response("Error sending email", { status: 500 });
    }

    console.log("Email sent successfully.");
    return new Response("Webhook processed and email sent", { status: 200 });
  }

  return new Response("No action taken", { status: 200 });
});
