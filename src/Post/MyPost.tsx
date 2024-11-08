import { useCurrentUser } from "../redux/feature/auth/authSlice";
import { useAppSelector } from "../redux/feature/hooks";
import { useGetPostQuery } from "../redux/feature/post/postApi";

const MyPost = () => {
  const user = useAppSelector(useCurrentUser);

  const { data, isLoading, error } = useGetPostQuery(user?.user_id);
  console.log(data);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading posts</p>;
  return (
    <div>
      <h1>Hello, This is MyPost component</h1>
    </div>
  );
};

export default MyPost;
