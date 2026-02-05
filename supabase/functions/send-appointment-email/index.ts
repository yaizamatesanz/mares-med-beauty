import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface AppointmentRequest {
  name: string;
  email: string;
  phone: string;
  treatment: string;
  preferredDate?: string;
  preferredTime?: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not configured");
      throw new Error("Email service not configured");
    }

    const resend = new Resend(resendApiKey);
    const data: AppointmentRequest = await req.json();

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.treatment) {
      throw new Error("Faltan campos obligatorios");
    }

    // Build email content
    const appointmentDetails = data.preferredDate && data.preferredTime
      ? `
CITA SOLICITADA
──────────────────
• Tratamiento: ${data.treatment}
• Fecha preferida: ${data.preferredDate}
• Hora preferida: ${data.preferredTime}
`
      : `
TRATAMIENTO SOLICITADO
──────────────────
• ${data.treatment}
`;

    const messageSection = data.message
      ? `
MENSAJE ADICIONAL
──────────────────
${data.message}
`
      : "";

    const textContent = `
═══════════════════════════════════════
       NUEVA SOLICITUD DE CITA
       Clínica Marès
═══════════════════════════════════════

DATOS DEL PACIENTE
──────────────────
• Nombre: ${data.name}
• Email: ${data.email}
• Teléfono: ${data.phone}
${appointmentDetails}${messageSection}
───────────────────────────────────────
Enviado desde clinicamares.com
`;

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Georgia, serif; background: #f9f7f4; padding: 40px 20px; }
    .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
    .header { background: linear-gradient(135deg, #8B7355 0%, #6B5A47 100%); color: white; padding: 30px; text-align: center; }
    .header h1 { margin: 0; font-size: 24px; font-weight: normal; }
    .header p { margin: 8px 0 0; opacity: 0.9; font-size: 14px; }
    .content { padding: 30px; }
    .section { margin-bottom: 25px; }
    .section-title { font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #8B7355; margin-bottom: 12px; font-weight: bold; }
    .info-row { display: flex; padding: 8px 0; border-bottom: 1px solid #f0ebe5; }
    .info-label { color: #666; width: 120px; flex-shrink: 0; }
    .info-value { color: #333; font-weight: 500; }
    .message-box { background: #f9f7f4; padding: 15px; border-radius: 8px; color: #555; line-height: 1.6; }
    .footer { background: #f9f7f4; padding: 20px; text-align: center; font-size: 12px; color: #888; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Nueva Solicitud de Cita</h1>
      <p>Clínica Marès</p>
    </div>
    <div class="content">
      <div class="section">
        <div class="section-title">Datos del Paciente</div>
        <div class="info-row">
          <span class="info-label">Nombre</span>
          <span class="info-value">${data.name}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Email</span>
          <span class="info-value">${data.email}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Teléfono</span>
          <span class="info-value">${data.phone}</span>
        </div>
      </div>
      <div class="section">
        <div class="section-title">Cita Solicitada</div>
        <div class="info-row">
          <span class="info-label">Tratamiento</span>
          <span class="info-value">${data.treatment}</span>
        </div>
        ${data.preferredDate ? `
        <div class="info-row">
          <span class="info-label">Fecha preferida</span>
          <span class="info-value">${data.preferredDate}</span>
        </div>
        ` : ""}
        ${data.preferredTime ? `
        <div class="info-row">
          <span class="info-label">Hora preferida</span>
          <span class="info-value">${data.preferredTime}</span>
        </div>
        ` : ""}
      </div>
      ${data.message ? `
      <div class="section">
        <div class="section-title">Mensaje Adicional</div>
        <div class="message-box">${data.message.replace(/\n/g, "<br>")}</div>
      </div>
      ` : ""}
    </div>
    <div class="footer">
      Enviado desde clinicamares.com
    </div>
  </div>
</body>
</html>
`;

    console.log("Sending appointment email for:", data.name);

    const emailResponse = await resend.emails.send({
      from: "Clínica Marès <onboarding@resend.dev>",
      to: ["contacto@clinicamares.com"],
      subject: `Nueva solicitud de cita - ${data.name}`,
      text: textContent,
      html: htmlContent,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ success: true, id: emailResponse.id }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: unknown) {
    console.error("Error in send-appointment-email function:", error);
    const errorMessage = error instanceof Error ? error.message : "Error desconocido";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
