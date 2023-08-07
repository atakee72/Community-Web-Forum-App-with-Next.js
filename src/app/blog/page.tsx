import Link from "next/link";

interface BlogPosts {
  title: string;
  id: number;
}

const blogPosts: BlogPosts[] = [
  {
    title: "birinci blog postasi",
    id: 1,
  },
  {
    title: "ikinci blog postasi",
    id: 2,
  },
];

export default function BlogPostList({
  blogPosts,
}: {
  blogPosts: BlogPosts[];
}) {
  return (
    <ul>
      {blogPosts?.map((singlePost) => (
        <li key={singlePost.id}>
          {/* <Link href={`/blog/${singlePost.id}`}> */}
          {singlePost.title}
          {/* </Link> */}
        </li>
      ))}
    </ul>
  );
}
