import React from "react";
import RemoveTopicBtn from "./RemoveTopicBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import Modal from "./Modal";
import { fetchApiData } from "@/utils/api";

interface Topic {
  _id: string;
  title: string;
  body: string;
}

const TopicsList = async () => {
  const { topics } = await fetchApiData("API_URL", "/api/topics");
  return (
    <div>
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
                <Modal />
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
};

export default TopicsList;
