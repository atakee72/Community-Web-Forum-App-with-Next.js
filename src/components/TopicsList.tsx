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
    <>
      {topics.map((t: Topic, i: number) => (
        <div
          key={t._id}
          className="p-4 border border-[#eccc6e] my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-xl ">{t.title}</h2>
            <div>{t.body}</div>
          </div>
          <div className="flex justify-between items-center gap-2">
            <RemoveTopicBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
