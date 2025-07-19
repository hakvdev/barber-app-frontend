import type { registerFormSchemaType } from "../../zod-schemas/register-form-schema";


const apiUrl = import.meta.env.VITE_API_BACKEND_URL

export async function registerUserService(data: registerFormSchemaType) {
    const res = await fetch(`${apiUrl}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })

    if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Error al registrarse");
    }
    return res.json()
}