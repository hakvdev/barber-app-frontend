import Logo from "../components/Logo";
import UserCard from "../components/UserCard";
import { useUserStore } from "../store/userStore";

export default function BarberDashboard() {
  const { user } = useUserStore();
  if (!user) return;
  return (
    <div className="w-full min-h-screen bg-zinc-900">
      <div className="flex justify-between p-2">
        <Logo />
        <UserCard user={user} />
      </div>
    </div>
  );
}
