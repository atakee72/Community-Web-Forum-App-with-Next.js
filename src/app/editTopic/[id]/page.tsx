import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async (id: string) => {
  const apiUrl = process.env.API_URL;

  try {
    const res = await fetch(`${apiUrl}/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic!");
    }

    return res.json();
  } catch (error) {
    console.log("🚀 ~ getTopicById ~ error:", error);
  }
};

export default async function EditTopic({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const { topic } = await getTopicById(id);
  const { title, body } = topic;

  return <EditTopicForm id={id} title={title} body={body} />;
}
