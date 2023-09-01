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
      <div className="my-7">
        <Link className="bg-[#814256] text-white p-2 " href={"/addTopic"}>
          Add Topic
        </Link>
      </div>
      <div>
        <TopicsList />
      </div>
    </>
  );
};

export default Home;
