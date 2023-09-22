import RemoveTopicBtn from "./RemoveTopicBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

interface Topic {
  _id: string;
  title: string;
  body: string;
}

const getTopics = async (): Promise<{ topics: Topic[] }> => {
  const apiUrl = process.env.API_URL;

  try {
    const res = await fetch(`${apiUrl}api/topics`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics:", error);
    return { topics: [] };
  }
};

export default async function TopicsList() {
  const { topics } = await getTopics();
  return (
    <div className="card-container shadow-lg bg-[#4b9aaa] mx-3 sm:mx-7 md:mx-16 lg:mx-32 xl:mx-56 2xl:mx-80 rounded-lg py-8">
      {topics.length === 0 ? (
        <div>No topics to display.</div>
      ) : (
        topics.map((t: Topic) => (
          <div
            key={t._id}
            className="card shadow-lg p-4 border text-[#814256] rounded-lg bg-[#C9C4B9] border-[#C9C4B9] mt-10 xl:mx-20 lg:mx-20 md:mx-16 sm:mx-7 mx-3 flex justify-between items-start overflow-auto resize-y "
          >
            <div className="mx-3 sm:mx-7 md:mx-10">
              <div className="flex justify-start items-center gap-3 my-6">
                <RemoveTopicBtn id={t._id} />
                <Link href={`/editTopic/${t._id}`}>
                  <HiPencilAlt size={24} />
                </Link>
              </div>
              <div className="bg-[#4b9aaa] shadow-inner rounded-lg my-7 p-3 ">
                band
              </div>
              <div className="">
                <h2 className="font-bold text-xl ">{t.title}</h2>
                <div>{t.body}</div>
              </div>{" "}
              <div className="bg-[#4b9aaa] shadow-inner rounded-lg my-7 p-3 ">
                band
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
