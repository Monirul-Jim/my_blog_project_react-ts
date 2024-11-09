import { useSearchParams } from "react-router-dom";
import { useGetCategoryQuery } from "../../redux/feature/post/categoryApi";
import { useGetAllPostQuery } from "../../redux/feature/post/postApi";
type Category = {
  id: number;
  name: string;
  slug: string;
};
type Post = {
  id: number;
  image: string;
  title: string;
  description: string;
  category: Category[];
  created_at: Date;
};
const UserSeePost = () => {
  const [searchParams] = useSearchParams();
  const categorySlug = searchParams.get("category_slug");
  const timeFilter = searchParams.get("time");

  const {
    data: categories,
    isLoading: cLoading,
    isError: cError,
  } = useGetCategoryQuery(null);
  const {
    data: posts,
    isLoading: pLoading,
    isError: pError,
  } = useGetAllPostQuery({
    category_slug: categorySlug,
    time: timeFilter,
  });

  if (cLoading) return <p>Categories Loading........</p>;
  if (pLoading) return <p>Posts Loading........</p>;
  if (cError) return <p>Categories Error!!!!!</p>;
  if (pError) return <p>Posts Error!!!!!</p>;

  return (
    <div className="flex">
      <div className="w-1/4 p-4 border-r">
        <h2 className="font-bold mb-2">Categories</h2>
        <ul>
          <li className="py-1">
            <a
              href="/"
              className={`text-blue-600 hover:underline ${
                !categorySlug && !timeFilter ? "font-bold text-black" : ""
              }`}
            >
              All
            </a>
          </li>
          {categories?.map((category: Category) => (
            <li key={category.id} className="py-1">
              <a
                href={
                  categorySlug === category.slug
                    ? `?time=${timeFilter || ""}`
                    : `?category_slug=${category.slug}&time=${timeFilter || ""}`
                }
                className={`text-blue-600 hover:underline ${
                  categorySlug === category.slug ? "font-bold text-black" : ""
                }`}
              >
                {category.name}
              </a>
            </li>
          ))}
        </ul>

        <h2 className="font-bold mb-2 mt-4">Filter by Time</h2>
        <ul>
          <li className="py-1">
            <a
              href={
                timeFilter === "last_year"
                  ? `?category_slug=${categorySlug || ""}`
                  : `?category_slug=${categorySlug || ""}&time=last_year`
              }
              className={`text-blue-600 hover:underline ${
                timeFilter === "last_year" ? "font-bold text-black" : ""
              }`}
            >
              Last Year
            </a>
          </li>
          <li className="py-1">
            <a
              href={
                timeFilter === "last_month"
                  ? `?category_slug=${categorySlug || ""}`
                  : `?category_slug=${categorySlug || ""}&time=last_month`
              }
              className={`text-blue-600 hover:underline ${
                timeFilter === "last_month" ? "font-bold text-black" : ""
              }`}
            >
              Last Month
            </a>
          </li>
          <li className="py-1">
            <a
              href={
                timeFilter === "last_week"
                  ? `?category_slug=${categorySlug || ""}`
                  : `?category_slug=${categorySlug || ""}&time=last_week`
              }
              className={`text-blue-600 hover:underline ${
                timeFilter === "last_week" ? "font-bold text-black" : ""
              }`}
            >
              Last Week
            </a>
          </li>
          <li className="py-1">
            <a
              href={
                timeFilter === "today"
                  ? `?category_slug=${categorySlug || ""}`
                  : `?category_slug=${categorySlug || ""}&time=today`
              }
              className={`text-blue-600 hover:underline ${
                timeFilter === "today" ? "font-bold text-black" : ""
              }`}
            >
              Today
            </a>
          </li>
        </ul>
      </div>
      <div className="w-3/4 p-4">
        <h2 className="font-bold mb-4">Posts</h2>
        <div className="space-y-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {posts?.map((post: Post) => (
            <div key={post.id} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-2">
                {new Date(post.created_at).toLocaleDateString()}
              </p>
              <div className="flex flex-wrap gap-2">
                {post.category.map((cat) => (
                  <span
                    key={cat.id}
                    className="bg-blue-100 text-slate-700 px-2 py-1 rounded-full text-xs font-medium"
                  >
                    {cat.name}
                  </span>
                ))}
              </div>
              <a
                href={`/post/${post.id}`}
                className="text-blue-600 hover:underline"
              >
                See More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserSeePost;
