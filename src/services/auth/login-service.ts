import axios from "axios";
import type { loginFormSchemaType } from "../../zod-schemas/login-form-schema";

const apiUrl = import.meta.env.VITE_API_BACKEND_URL;

export const loginService = async (data: loginFormSchemaType) => {
    try {
        const res = await axios.post(`${apiUrl}/auth/login`, data);

        const { token, user } = res.data;

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        return { token, user };
    } catch (err: any) {
        const message = err?.response?.data?.message || "Error desconocido en el login";
        throw new Error(message);
    }
};
