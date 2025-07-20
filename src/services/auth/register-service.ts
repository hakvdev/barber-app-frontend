import axios from "axios";
import type { registerFormSchemaType } from "../../zod-schemas/register-form-schema";

const apiUrl = import.meta.env.VITE_API_BACKEND_URL;

export async function registerUserService(data: registerFormSchemaType) {
  try {
    const res = await axios.post(`${apiUrl}/auth/register`, data);
    return res.data;
  } catch (err: any) {
    const message =
      err?.response?.data?.message || "Error desconocido en el login";
    throw new Error(message);
  }
}
