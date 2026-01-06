import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Send, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const appointmentSchema = z.object({
  name: z.string().trim().min(2, "El nombre debe tener al menos 2 caracteres").max(100, "El nombre es demasiado largo"),
  email: z.string().trim().email("Email inválido").max(255, "Email demasiado largo"),
  phone: z.string().trim().min(9, "Teléfono inválido").max(20, "Teléfono inválido"),
  treatment: z.string().trim().min(1, "Por favor selecciona un tratamiento").max(100),
  message: z.string().trim().max(1000, "El mensaje es demasiado largo").optional(),
});

type AppointmentFormData = z.infer<typeof appointmentSchema>;

const AppointmentForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
  });

  const onSubmit = async (data: AppointmentFormData) => {
    try {
      // Encode data properly for WhatsApp
      const message = encodeURIComponent(
        `*Nueva solicitud de cita*\n\n` +
        `*Nombre:* ${data.name}\n` +
        `*Email:* ${data.email}\n` +
        `*Teléfono:* ${data.phone}\n` +
        `*Tratamiento:* ${data.treatment}\n` +
        `${data.message ? `*Mensaje:* ${data.message}` : ''}`
      );
      
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      reset();
      
      toast({
        title: "¡Solicitud enviada!",
        description: "Te contactaremos pronto para confirmar tu cita.",
      });

      // Optional: Open WhatsApp with pre-filled message
      setTimeout(() => {
        window.open(`https://wa.me/34928123456?text=${message}`, '_blank');
      }, 1500);
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema. Por favor intenta de nuevo.",
        variant: "destructive",
      });
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#F2E6D7]/90 backdrop-blur-sm p-8 rounded-2xl shadow-soft text-center space-y-6 animate-in fade-in">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="h-10 w-10 text-primary" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-2">
            ¡Solicitud recibida!
          </h3>
          <p className="text-muted-foreground">
            Te contactaremos en las próximas 24 horas para confirmar tu cita.
          </p>
        </div>
        <Button 
          onClick={() => setIsSubmitted(false)} 
          variant="outline"
          className="mt-4"
        >
          Enviar otra solicitud
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-[#F2E6D7]/90 backdrop-blur-sm p-8 rounded-2xl shadow-soft space-y-6">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Calendar className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-semibold text-foreground mb-2">
          Pedir cita
        </h3>
        <p className="text-muted-foreground">
          Completa el formulario y te contactaremos para confirmar tu cita
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Nombre completo *
          </label>
          <Input
            id="name"
            {...register("name")}
            placeholder="María García"
            className={errors.name ? "border-destructive" : ""}
          />
          {errors.name && (
            <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email *
          </label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="maria@ejemplo.com"
            className={errors.email ? "border-destructive" : ""}
          />
          {errors.email && (
            <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
            Teléfono *
          </label>
          <Input
            id="phone"
            type="tel"
            {...register("phone")}
            placeholder="928 123 456"
            className={errors.phone ? "border-destructive" : ""}
          />
          {errors.phone && (
            <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="treatment" className="block text-sm font-medium text-foreground mb-2">
            Tratamiento de interés *
          </label>
          <select
            id="treatment"
            {...register("treatment")}
            className={`w-full px-3 py-2 rounded-md border bg-background ${
              errors.treatment ? "border-destructive" : "border-input"
            }`}
          >
            <option value="">Selecciona un tratamiento</option>
            <option value="Toxina Botulínica">Toxina Botulínica</option>
            <option value="Rellenos faciales">Rellenos faciales</option>
            <option value="Skin Boosters">Skin Boosters</option>
            <option value="Hilos tensores">Hilos tensores</option>
            <option value="Rejuvenecimiento facial">Rejuvenecimiento facial</option>
            <option value="Consulta general">Consulta general</option>
          </select>
          {errors.treatment && (
            <p className="text-sm text-destructive mt-1">{errors.treatment.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Mensaje (opcional)
          </label>
          <Textarea
            id="message"
            {...register("message")}
            placeholder="Cuéntanos qué te gustaría mejorar o cualquier duda que tengas..."
            rows={4}
            className={errors.message ? "border-destructive" : ""}
          />
          {errors.message && (
            <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full cta-premium"
        size="lg"
      >
        {isSubmitting ? (
          <>Enviando...</>
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" />
            Solicitar cita
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Al enviar este formulario aceptas nuestra política de privacidad. 
        Tus datos están protegidos y no serán compartidos con terceros.
      </p>
    </form>
  );
};

export default AppointmentForm;
