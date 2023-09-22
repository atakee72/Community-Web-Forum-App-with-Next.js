import TopicsList from "@/components/TopicsList";
// import UserInfo from "@/components/UserInfo";
import Link from "next/link";

export default function Dashboard() {
  return (
    <>
      {/* <UserInfo /> */}
      <div className="my-7 ">
        <Link
          className="bg-[#814256] text-[#eccc6e] p-2 shadow-inner font-sans rounded-lg w-1/3 py-5 mx-auto grid place-items-center"
          href={"/addTopic"}
        >
          Start a debate
        </Link>
      </div>
      <div className="grid place-items-start">
        <TopicsList />
        {/* <div>Hello</div> */}
      </div>
    </>
  );
}
