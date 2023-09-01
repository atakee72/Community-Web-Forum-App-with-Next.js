import EditTopic from "../app/editTopic/[id]/page";
export default function EditTopicForm() {
  return (
    <form className="flex flex-col gap-3 ">
      <input
        className="border border-[#eccc6e] px-8 py-2"
        placeholder="Topic title"
      />
      <input
        className="border border-[#eccc6e] px-8 py-2"
        placeholder="Topic description"
      />
      <button className="bg-[#4b9aaa] text-white font-bold py-3 px-6 w-fit">
        Update topic
      </button>
    </form>
  );
}
