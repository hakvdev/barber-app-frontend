import type { registerFormSchemaType } from "../../zod-schemas/register-form-schema";
import { apiAuth } from "./api/api";

export async function registerUserService(data: registerFormSchemaType) {
  try {
    const res = await apiAuth.post("/register", data)
    return res.data;
  } catch (err: any) {
    const message =
      err?.response?.data?.message || "Error desconocido en el login";
    throw new Error(message);
  }
}
