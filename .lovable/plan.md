

# Plan: Implementar envío de emails a contacto@clinicamares.com

## Resumen
Crearemos una función backend para enviar emails de solicitud de cita a **contacto@clinicamares.com** usando Resend, y conectaremos ambos formularios.

---

## Archivos a crear

### 1. Edge Function: `supabase/functions/send-appointment-email/index.ts`
Función que:
- Recibe datos del formulario (nombre, email, teléfono, tratamiento, fecha, hora, mensaje)
- Envía email formateado a contacto@clinicamares.com
- Usa el remitente `onboarding@resend.dev` (dominio gratuito de Resend)
- Devuelve confirmación de envío

---

## Archivos a modificar

### 2. `src/components/AppointmentForm.tsx`
- Añadir llamada a la función de envío de email
- Mantener WhatsApp como opción secundaria
- Manejar errores de envío

### 3. `src/pages/ReservarCita.tsx`
- Añadir llamada a la función de envío de email
- Incluir fecha y hora preferida en el email
- Manejar errores de envío

### 4. `supabase/config.toml`
- Añadir configuración para la nueva función

---

## Formato del email

```text
Asunto: Nueva solicitud de cita - María García

═══════════════════════════════════════
       NUEVA SOLICITUD DE CITA
       Clínica Marès
═══════════════════════════════════════

DATOS DEL PACIENTE
──────────────────
• Nombre: María García López
• Email: maria@ejemplo.com
• Teléfono: 928 123 456

CITA SOLICITADA
──────────────────
• Tratamiento: Toxina botulínica
• Fecha preferida: 15 de febrero de 2026
• Hora preferida: 11:00

MENSAJE ADICIONAL
──────────────────
Me gustaría información sobre el tratamiento.

───────────────────────────────────────
Enviado desde clinicamares.com
```

---

## Configuración necesaria

| Elemento | Valor |
|----------|-------|
| API Key Resend | re_FHeXNuE9_... (ya proporcionada) |
| Destinatario | contacto@clinicamares.com |
| Remitente | Clínica Marès <onboarding@resend.dev> |

---

## Sección técnica

### Edge Function
```text
Endpoint: /send-appointment-email
Método: POST
Headers: CORS habilitados

Body esperado:
{
  name: string,
  email: string,
  phone: string,
  treatment: string,
  preferredDate?: string,
  preferredTime?: string,
  message?: string
}

Respuesta éxito: { success: true, id: "email_id" }
Respuesta error: { error: "mensaje" }
```

### Integración frontend
```text
- Usar supabase.functions.invoke()
- Mostrar toast de éxito/error
- En AppointmentForm: abrir WhatsApp después del email
- En ReservarCita: redirigir a home después del éxito
```

