import TopicsList from "@/components/TopicsList";
import UserInfo from "@/components/UserInfo";
import Link from "next/link";

export default function Dashboard() {
  return (
    <>
      <UserInfo />
      <div className="my-7">
        <Link className="bg-[#814256] text-white p-2 " href={"/addTopic"}>
          Add Topic
        </Link>
      </div>
      <div>
        <TopicsList />
        <div>Hello</div>
      </div>
    </>
  );
}
