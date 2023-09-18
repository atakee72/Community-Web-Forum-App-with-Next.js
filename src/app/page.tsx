import LoginForm from "@/components/LoginForm";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";
import SignInBtn from "@/components/SignInBtn";
import React from "react";

export const metadata: Metadata = {
  title: "maHalle: Ein Kiez-Gesichterbuch",
  description: "Die Kommunikationsapp für unseres Kiez",
};

interface HomeProps {}

const Home: React.FC<HomeProps> = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-col-reverse justify-start gap-5 items-center">
      <div>
        <SignInBtn />
      </div>
      <div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Home;
