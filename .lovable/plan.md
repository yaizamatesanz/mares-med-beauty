
# Plan: Eliminar Facebook y corregir horarios

## Resumen
Hay que hacer 2 cambios sencillos:
1. Quitar el icono de Facebook del pie de página
2. Cambiar el horario de 09:00 a 10:00 en los lugares donde está mal

---

## Cambios a realizar

### 1. Footer (src/components/Footer.tsx)
**Quitar icono de Facebook:**
- Eliminar la importacion de `Facebook` de lucide-react
- Eliminar el div que contiene el icono de Facebook (el circulo con el icono)
- Solo quedara el icono de Instagram

### 2. ReservarCita (src/pages/ReservarCita.tsx)
**Corregir horarios:**
- Cambiar el array de horarios: quitar "09:00" y "09:30" ya que el horario empieza a las 10:00
- Cambiar el texto de ayuda de "Horario de 09:00 a 19:00" a "Horario de 10:00 a 19:00"

### 3. Contacto (src/pages/Contacto.tsx)
**Corregir horario:**
- Cambiar "Lunes a Viernes: 09:00 - 19:00" a "Lunes a Viernes: 10:00 - 19:00"

---

## Archivos afectados

| Archivo | Cambio |
|---------|--------|
| src/components/Footer.tsx | Eliminar Facebook |
| src/pages/ReservarCita.tsx | Horarios 10:00-19:00 |
| src/pages/Contacto.tsx | Horario 10:00-19:00 |

---

## Nota
El componente `src/components/Contact.tsx` ya tiene el horario correcto (10:00 - 19:00), no requiere cambios.
