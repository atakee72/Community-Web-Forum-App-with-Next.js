import Link from "next/link";
import { Tabs, Tab } from "@/components/Tabs";
import { collectionTabs } from "@/lib/foraTabsData";
import AnnouncementsList from "@/components/AnnouncementsList";
import RecommendationsList from "@/components/RecommendationsList";
import TopicsList from "@/components/TopicsList";

export default function Dashboard() {
  return (
    <div className="card-container shadow-lg bg-[#4b9aaa] mx-3 sm:mx-7 md:mx-16 lg:mx-32 xl:mx-56 2xl:mx-80 h-auto rounded-lg py-8">
      <Tabs>
        {collectionTabs.map((tab, i) => (
          <Tab label={tab.header} key={i}>
            <div className="py-4 transition-all duration-500 ease-in-out">
              <h2 className="text-center text-[#eccc6e] text- text-3xl">
                {tab.header}
              </h2>
              <h3 className="text-red-600 text-center ">
                DALDA ÇALIŞIYORUM ŞU AN!
              </h3>
              <div className="my-7 ">
                <Link
                  className="bg-[#814256] text-[#eccc6e] p-2 shadow-inner font-sans rounded-lg w-1/3 py-5 mx-auto grid place-items-center no-underline hover:underline"
                  href={"/addTopic"}
                >
                  {tab.title}
                </Link>
              </div>
              <div className="grid place-items-start">
                {tab.component === "TopicsList" && <TopicsList />}
                {tab.component === "AnnouncementsList" && <AnnouncementsList />}
                {tab.component === "RecommendationsList" && (
                  <RecommendationsList />
                )}
              </div>
            </div>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
