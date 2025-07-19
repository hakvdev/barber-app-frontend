import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  registerFormSchema,
  type registerFormSchemaType,
} from "../zod-schemas/register-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { registerUserService } from "../services/auth/register-service";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerFormSchemaType>({
    resolver: zodResolver(registerFormSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: registerUserService,
    onSuccess: () => {
      navigate("/");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const onSubmit = (data: registerFormSchemaType) => {
    mutate(data);
    return data;
  };

  const navigate = useNavigate();
  return (
    <form className="space-y-4 flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-center text-xl text-gray-200">
        Regístrate ingresando tus datos.
      </h1>
      <label htmlFor="name" className="text-sm font-medium text-gray-200">
        Nombre
      </label>
      <input
        {...register("name", { required: true })}
        id="name"
        type="text"
        placeholder="Ingresa tu nombre"
        className="bg-white/10 border-gray-600 text-white p-2"
      />
      {errors.name && (
        <span className="text-ls text-red-400">{errors.name.message}</span>
      )}
      <label htmlFor="email" className="text-sm font-medium text-gray-200">
        Email
      </label>
      <input
        {...register("email", { required: true })}
        id="email"
        type="email"
        placeholder="Ingresa tu email"
        className="bg-white/10 border-gray-600 text-white p-2"
      />
      {errors.email && (
        <span className="text-ls text-red-400">{errors.email.message}</span>
      )}

      <label htmlFor="password" className="text-sm font-medium text-gray-200">
        Contraseña
      </label>
      <input
        {...register("password", { required: true })}
        id="password"
        type="password"
        placeholder="******"
        className="bg-white/10 border-gray-600 text-white p-2"
      />
      {errors.password && (
        <span className="text-ls text-red-400">{errors.password.message}</span>
      )}

      <label
        htmlFor="confirmPassword"
        className="text-sm font-medium text-gray-200"
      >
        Ingresa tu contraseña nuevamente
      </label>
      <input
        {...register("confirmPassword", { required: true })}
        id="confirmPassword"
        type="password"
        placeholder="******"
        className="bg-white/10 border-gray-600 text-white p-2"
      />
      {errors.confirmPassword && (
        <span className="text-ls text-red-400">
          {errors.confirmPassword.message}
        </span>
      )}

      <label htmlFor="role" className="text-sm font-medium text-gray-200">
        ¿Qué eres?
      </label>
      <select
        {...register("role", { required: true })}
        name="role"
        id="role"
        className="bg-white/10 border-gray-600 text-white p-2"
      >
        <option value="CLIENT" className="bg-blue-400 text-white">
          Cliente
        </option>
        <option value="BARBER" className="bg-blue-400 text-white">
          Barbero
        </option>
      </select>

      <button
        type="submit"
        className="w-[150px] self-center bg-blue-500 hover:bg-amber-600 text-black font-medium p-2 transition-colors rounded-lg "
        disabled={isPending}
      >
        {isPending ? "Registrando" : "Registrarse"}
      </button>

      <div className="text-center">
        <button
          type="button"
          className="text-sm text-white hover:text-amber-500 transition-colors underline"
          onClick={() => navigate("/")}
        >
          Ir al inicio
        </button>
      </div>
    </form>
  );
}
