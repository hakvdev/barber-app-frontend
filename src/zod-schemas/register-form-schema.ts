import { z } from "zod"


export const registerFormSchema = z.object({
    name: z.string().min(4, "El nombre debe ser de al menos 4 carácteres."),
    email: z.email("El email no es válido"),
    password: z.string().min(6, "La contraseña debe ser de al menos 6 caracteres"),
    role: z.enum(["CLIENT", "BARBER"]),
    confirmPassword: z.string().min(6, "Por favor repite tu contraseña")
})
    .refine((data) => data.password === data.confirmPassword, {
        message: "Las contraseñas no coinciden",
        path: ["confirmPassword"]
    })

export type registerFormSchemaType = z.infer<typeof registerFormSchema>