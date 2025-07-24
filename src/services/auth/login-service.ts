import type { loginFormSchemaType } from "../../zod-schemas/login-form-schema";
import { apiAuth } from "./api/api";

export const loginService = async (data: loginFormSchemaType) => {
    try {
        const res = await apiAuth.post("/login", data);

        const { token } = res.data;
    
        return token ;
    } catch (err: any) {
        const message = err?.response?.data?.message || "Error desconocido en el login";
        throw new Error(message);
    }
};

