import LoginForm from "@/components/LoginForm";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";
import SignInBtn from "@/components/signInBtn";

export const metadata: Metadata = {
  title: "maHalle: Ein Kiez-Gesichterbuch",
  description: "Die Kommunikationsapp für unseres Kiez",
};

interface HomeProps {}

const Home: React.FC<HomeProps> = async ({}) => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <>
      <h1 className=" text-center mt-10 font-bold text-3xl">
        This will be like a landing page
      </h1>
      <div className=" mt-24">
        <SignInBtn />
      </div>
      <div>
        <LoginForm />
      </div>
    </>
  );
};

export default Home;
