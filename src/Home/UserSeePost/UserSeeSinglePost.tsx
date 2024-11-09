import { useParams } from "react-router-dom";
import { useGetSinglePostQuery } from "../../redux/feature/post/postApi";
type Category = {
  id: number;
  name: string;
  slug: string;
};

const UserSeeSinglePost = () => {
  const { id } = useParams<{ id: string }>();
  const { data: post, isLoading, isError } = useGetSinglePostQuery({ id });

  if (isLoading) return <p>Loading post...</p>;
  if (isError) return <p>Error loading post.</p>;

  return (
    <div className="p-4">
      {post ? (
        <>
          <img
            src={post?.image}
            alt={post.title}
            className="w-full h-64 object-cover rounded-md mb-4"
          />
          <h1 className="text-2xl font-bold mb-2">{post?.title}</h1>
          <h3>
            {post?.user?.first_name} {post?.user?.last_name}
          </h3>
          <h3>{post?.user?.email}</h3>
          <p className="text-gray-600 text-sm mb-4">
            {new Date(post?.created_at).toLocaleDateString()}
          </p>
          <div
            className="text-gray-700"
            dangerouslySetInnerHTML={{ __html: post?.description }}
          ></div>
          <div className="flex flex-wrap gap-2 mt-4">
            {post?.category?.map((cat: Category) => (
              <span
                key={cat.id}
                className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium"
              >
                {cat?.name}
              </span>
            ))}
          </div>
        </>
      ) : (
        <p>Post not found.</p>
      )}
    </div>
  );
};

export default UserSeeSinglePost;
