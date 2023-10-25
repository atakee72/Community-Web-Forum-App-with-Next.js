import RegisterForm from "@/components/RegisterForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

async function Register() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="p-16 max-w-3xl mx-auto text-[#814256] min-h-screen">
      <RegisterForm />
    </div>
  );

}

export default Register;
