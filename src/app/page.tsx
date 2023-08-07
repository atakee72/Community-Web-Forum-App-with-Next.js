import { Metadata } from "next";
import Image from "next/image";


export const metadata: Metadata = {
  title: "GesichterrrrBuuuuch hahahah!",
  description: "Die Kommunikationsapp für unseres Kiez",
};

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <>
      <h1 className="bg-black text-white">Burasi acilis sayfasi</h1>
    </>
  );
};

export default Home;
