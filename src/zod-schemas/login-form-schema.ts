import z from "zod";


export const loginFormSchema = z.object({
    email: z.email(),
    password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
})

export type loginFormSchemaType = z.infer<typeof loginFormSchema>