import TopicsList from "@/components/TopicsList";
// import UserInfo from "@/components/UserInfo";
import Link from "next/link";

export default function Dashboard() {
  return (
    <>
      {/* <UserInfo /> */}
      <div className="my-7">
        <Link
          className="bg-[#814256] text-[#eccc6e] p-2 shadow-lg rounded-lg w-full"
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
