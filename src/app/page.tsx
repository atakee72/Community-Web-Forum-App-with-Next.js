import LoginForm from "@/components/LoginForm";
import TopicsList from "@/components/TopicsList";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GesichterrrrBuuuuch hahahah!",
  description: "Die Kommunikationsapp für unseres Kiez",
};

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <>
      <h1 className=" text-center mt-10 font-bold text-3xl">
        This will be like a landing page
      </h1>
      <div>
        <LoginForm />
      </div>
    </>
  );
};

export default Home;
