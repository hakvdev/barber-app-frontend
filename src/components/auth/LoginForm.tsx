import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  loginFormSchema,
  type loginFormSchemaType,
} from "../../zod-schemas/login-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { loginService } from "../../services/auth/login-service";
import getUserInfoService from "../../services/getUserInfo-service";
import { useUserStore } from "../../store/userStore";

export default function Login() {
  const navigate = useNavigate();
  const { setSession } = useUserStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormSchemaType>({
    resolver: zodResolver(loginFormSchema),
  });

  const loginMutation = useMutation({
    mutationFn: loginService,
    onSuccess: async (token) => {
      try {
        const user = await getUserInfoService(token);
        setSession(user, token);
        console.log(user)
        alert("Accediste correctamente!");
        navigate("/dashboard");
      } catch (error: any) {
        console.error("Error de login: ", error.message);
      }
    },
  });

  const onSubmit = (data: loginFormSchemaType) => {
    loginMutation.mutate(data);
  };

  return (
    <form className="space-y-4 flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email" className="text-sm font-medium text-gray-200">
        Email
      </label>
      <input
        id="email"
        type="email"
        placeholder="Ingresa tu email"
        className="bg-white/10 border-gray-600 text-white p-2"
        {...register("email")}
      />
      {errors.email && (
        <span className="text-ls text-red-400">{errors.email.message}</span>
      )}
      <label htmlFor="password" className="text-sm font-medium text-gray-200">
        Contraseña
      </label>
      <input
        id="password"
        type="password"
        placeholder="Ingresa tu contraseña"
        className="bg-white/10 border-gray-600 text-white p-2"
        {...register("password")}
      />
      {errors.password && (
        <span className="text-ls text-red-400">{errors.password.message}</span>
      )}

      <button
        type="submit"
        className="w-[150px] self-center bg-blue-500 hover:bg-amber-600 text-black font-medium p-2 transition-colors rounded-lg "
        disabled={loginMutation.isPending}
      >
        {loginMutation.isPending ? "Iniciando sesión" : "Iniciar sesión"}
      </button>

      {loginMutation.error && (
        <span className="text-ls text-red-400">
          {loginMutation.error.message}
        </span>
      )}

      <div className="text-center">
        <button
          type="button"
          className="text-sm text-white hover:text-amber-500 transition-colors underline"
          onClick={() => navigate("/register")}
        >
          ¿Aún no tienes una cuenta? Regístrate aquí!
        </button>
      </div>
    </form>
  );
}
