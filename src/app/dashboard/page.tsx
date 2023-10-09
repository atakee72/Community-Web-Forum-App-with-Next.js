import AnnouncementsList from "@/components/AnnouncementsList";
import RecommendationsList from "@/components/RecommendationsList";
import TopicsList from "@/components/TopicsList";
// import UserInfo from "@/components/UserInfo";
import Link from "next/link";

export default function Dashboard() {
  const collectionTabs = [
    { header: "Discussions", collectionType: "discussions" },
    { header: "Announcements", collectionType: "announcements" },
    {
      header: "Recommendations",
      collectionType: "recommendations",
    },
  ];

  return (
    <div className="card-container shadow-lg bg-[#4b9aaa] mx-3 sm:mx-7 md:mx-16 lg:mx-32 xl:mx-56 2xl:mx-80 rounded-lg py-8">
      <div className="flex justify-start  items-center bg-[#4995A5] mx-16 mt-7 mb-20 ">
        {collectionTabs.map((tab, index) => (
          <Link
            href={`/dashboard#${tab.collectionType}`}
            scroll={false}
            className="bg-[#C9C4B9] p-3 mt-3 rounded-md hover:bg-[#a9aaab]"
          >
            {tab.header}
          </Link>
        ))}
      </div>
      <div id="discussions">
        Discussions
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
        </div>
      </div>
      <div id="announcements">
        Announcements
        <div className="my-7 ">
          <Link
            className="bg-[#814256] text-[#eccc6e] p-2 shadow-inner font-sans rounded-lg w-1/3 py-5 mx-auto grid place-items-center"
            href={"/addTopic"}
          >
            Make an announcement
          </Link>
        </div>
        <div className="grid place-items-start">
          <AnnouncementsList />
        </div>
      </div>
      <div id="recommendations">
        Recommendations
        <div className="my-7 ">
          <Link
            className="bg-[#814256] text-[#eccc6e] p-2 shadow-inner font-sans rounded-lg w-1/3 py-5 mx-auto grid place-items-center"
            href={"/addTopic"}
          >
            Make a recommendation
          </Link>
        </div>
        <div className="grid place-items-start">
          <RecommendationsList />
        </div>
      </div>
    </div>
  );
}
