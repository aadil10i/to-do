import LoginForm from "@/components/LoginForm";
import Todo from "@/components/TodoPage";
import { useSession } from "next-auth/react";

export default function User() {
  const { data: session } = useSession();

  if (!session) {
    return <LoginForm />;
  }

  return <Todo />;
}
