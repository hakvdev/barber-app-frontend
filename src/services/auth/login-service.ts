import type { loginFormSchemaType } from "../../zod-schemas/login-form-schema"

const apiUrl = import.meta.env.VITE_API_BACKEND_URL

export const loginService = async (data: loginFormSchemaType) => {
    const res = await fetch(`${apiUrl}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })

    if (!res.ok) {
        const errorData = await res.json()
        throw new Error(errorData.message || "Error desconocido en el login")
    }
    return await res.json()
}