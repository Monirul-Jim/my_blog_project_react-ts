// import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import { useGetCategoryQuery } from "../../redux/feature/post/categoryApi";
// import { useGetAllPostQuery } from "../../redux/feature/post/postApi";

// type Category = {
//   id: number;
//   name: string;
//   slug: string;
// };
// type Post = {
//   id: number;
//   image: string;
//   title: string;
//   description: string;
//   category: Category[];
//   created_at: Date;
// };

// const UserSeePost = () => {
//   const [page, setPage] = useState(1);
//   const [spost, setPost] = useState<Post[]>([]);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [searchParams] = useSearchParams();
//   const categorySlug = searchParams.get("category_slug");
//   const timeFilter = searchParams.get("time");

//   const {
//     data: categories,
//     isLoading: cLoading,
//     isError: cError,
//   } = useGetCategoryQuery(null);
//   const {
//     data,
//     isLoading: pLoading,
//     isError: pError,
//   } = useGetAllPostQuery({
//     category_slug: categorySlug,
//     time: timeFilter,
//   });
//   console.log(data?.results);

//   useEffect(() => {
//     if (data) {
//       setPost((prevPosts) => [...prevPosts, ...data.results]);
//     }
//   }, [data]);
//   const handleScroll = () => {
//     if (
//       window.innerHeight + document.documentElement.scrollTop !==
//       document.documentElement.offsetHeight
//     )
//       return;
//     setPage((prevPage) => prevPage + 1); // Increment page
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   if (cLoading) return <p>Categories Loading........</p>;
//   if (pLoading) return <p>Posts Loading........</p>;
//   if (cError) return <p>Categories Error!!!!!</p>;
//   if (pError) return <p>Posts Error!!!!!</p>;

//   return (
//     <div className="lg:flex">
//       <div className="w-1/4 p-4 border-r hidden lg:block">
//         <CategoryMenu
//           categories={categories}
//           categorySlug={categorySlug}
//           timeFilter={timeFilter}
//         />
//       </div>
//       <div className="lg:hidden p-4 relative">
//         <h1>
//           Filter By <span className="font-bold">Time</span> and{" "}
//           <span className="font-bold">Categories</span>
//         </h1>
//         <button
//           className="text-xl font-bold"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           ☰
//         </button>

//         {menuOpen && (
//           <div
//             className={`fixed inset-0 bg-gray-800 text-white shadow-lg p-4 z-[1000] overflow-auto
//                   transform transition-transform duration-300 ease-in-out
//                   ${
//                     menuOpen
//                       ? "translate-x-0 opacity-100"
//                       : "-translate-x-full opacity-0"
//                   }`}
//           >
//             <button
//               className="text-white text-2xl absolute top-4 right-4"
//               onClick={() => setMenuOpen(false)}
//             >
//               ✕
//             </button>
//             <CategoryMenu
//               categories={categories}
//               categorySlug={categorySlug}
//               timeFilter={timeFilter}
//             />
//           </div>
//         )}
//       </div>

//       <div className="lg:w-3/4 p-2">
//         <h2 className="font-bold mb-4">Posts</h2>
//         <div className="space-y-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           {data?.results?.map((post: Post) => (
//             <div key={post.id} className="bg-white p-4 rounded-lg shadow-md">
//               <img
//                 src={post.image}
//                 alt={post.title}
//                 className="w-full h-48 object-cover rounded-md mb-4"
//               />
//               <h3 className="text-xl font-semibold">{post.title}</h3>
//               <p className="text-gray-600 text-sm mb-2">
//                 {new Date(post.created_at).toLocaleDateString()}
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 {post.category.map((cat) => (
//                   <span
//                     key={cat.id}
//                     className="bg-blue-100 text-slate-700 px-2 py-1 rounded-full text-xs font-medium"
//                   >
//                     {cat.name}
//                   </span>
//                 ))}
//               </div>
//               <a
//                 target="_blank"
//                 href={`/post/${post.id}`}
//                 className="text-blue-600 hover:underline"
//               >
//                 See More
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// const CategoryMenu = ({
//   categories,
//   categorySlug,
//   timeFilter,
// }: {
//   categories: Category[];
//   categorySlug: string | null;
//   timeFilter: string | null;
// }) => (
//   <>
//     <h2 className="font-bold mb-2">Categories</h2>
//     <ul>
//       <li className="py-1">
//         <a
//           href="/"
//           className={` ${
//             !categorySlug && !timeFilter ? "font-bold text-black" : ""
//           }`}
//         >
//           All
//         </a>
//       </li>
//       {categories?.map((category: Category) => (
//         <li key={category.id} className="py-1">
//           <a
//             href={
//               categorySlug === category.slug
//                 ? `?time=${timeFilter || ""}`
//                 : `?category_slug=${category.slug}&time=${timeFilter || ""}`
//             }
//             className={` ${
//               categorySlug === category.slug ? "font-bold text-black" : ""
//             }`}
//           >
//             {category.name}
//           </a>
//         </li>
//       ))}
//     </ul>

//     <h2 className="font-bold mb-2 mt-4">Filter by Time</h2>
//     <ul>
//       <li className="py-1">
//         <a
//           href={
//             timeFilter === "last_year"
//               ? `?category_slug=${categorySlug || ""}`
//               : `?category_slug=${categorySlug || ""}&time=last_year`
//           }
//           className={` ${
//             timeFilter === "last_year" ? "font-bold text-black" : ""
//           }`}
//         >
//           Last Year
//         </a>
//       </li>
//       <li className="py-1">
//         <a
//           href={
//             timeFilter === "last_month"
//               ? `?category_slug=${categorySlug || ""}`
//               : `?category_slug=${categorySlug || ""}&time=last_month`
//           }
//           className={` ${
//             timeFilter === "last_month" ? "font-bold text-black" : ""
//           }`}
//         >
//           Last Month
//         </a>
//       </li>
//       <li className="py-1">
//         <a
//           href={
//             timeFilter === "last_week"
//               ? `?category_slug=${categorySlug || ""}`
//               : `?category_slug=${categorySlug || ""}&time=last_week`
//           }
//           className={` ${
//             timeFilter === "last_week" ? "font-bold text-black" : ""
//           }`}
//         >
//           Last Week
//         </a>
//       </li>
//       <li className="py-1">
//         <a
//           href={
//             timeFilter === "today"
//               ? `?category_slug=${categorySlug || ""}`
//               : `?category_slug=${categorySlug || ""}&time=today`
//           }
//           className={` ${timeFilter === "today" ? "font-bold text-black" : ""}`}
//         >
//           Today
//         </a>
//       </li>
//     </ul>
//   </>
// );

// export default UserSeePost;

//<h2 className="font-bold mb-4">Posts { spost?.length}</h2>

import { useEffect, useState } from "react";
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
  const [spost, setPost] = useState<Post[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();
  const categorySlug = searchParams.get("category_slug");
  const timeFilter = searchParams.get("time");

  const {
    data: categories,
    isLoading: cLoading,
    isError: cError,
  } = useGetCategoryQuery(null);
  const {
    data,
    isLoading: pLoading,
    isError: pError,
  } = useGetAllPostQuery({
    category_slug: categorySlug,
    time: timeFilter,
    page,
  });
  useEffect(() => {
    setPost([]);
    setPage(1);
  }, [categorySlug, timeFilter]);

  useEffect(() => {
    if (data && !pLoading) {
      setPost((prevPosts) => {
        return [...prevPosts, ...data.results];
      });
      setIsFetching(false);
    }
  }, [data, pLoading]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100 &&
      !isFetching &&
      !pLoading &&
      data?.next
    ) {
      setIsFetching(true);
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFetching, pLoading, data?.next]);

  if (cLoading) return <p>Categories Loading...</p>;
  if (pLoading && spost.length === 0) return <p>Posts Loading...</p>;
  if (cError) return <p>Categories Error!</p>;
  if (pError) return <p>Posts Error!</p>;

  return (
    <div className="lg:flex">
      <div className="w-1/4 p-4 border-r hidden lg:block">
        <CategoryMenu
          categories={categories}
          categorySlug={categorySlug}
          timeFilter={timeFilter}
        />
      </div>
      <div className="lg:hidden p-4 relative">
        <h1>
          Filter By <span className="font-bold">Time</span> and{" "}
          <span className="font-bold">Categories</span>
        </h1>
        <button
          className="text-xl font-bold"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {menuOpen && (
          <div className="fixed inset-0 bg-gray-800 text-white shadow-lg p-4 z-[1000] overflow-auto transform transition-transform duration-300 ease-in-out">
            <button
              className="text-white text-2xl absolute top-4 right-4"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>
            <CategoryMenu
              categories={categories}
              categorySlug={categorySlug}
              timeFilter={timeFilter}
            />
          </div>
        )}
      </div>

      <div className="lg:w-3/4 p-2">
        <h2 className="font-bold mb-4">Posts {spost?.length}</h2>
        <div className="space-y-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {spost.map((post: Post) => (
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
                target="_blank"
                href={`/post/${post.id}`}
                className="text-blue-600 hover:underline"
              >
                See More
              </a>
            </div>
          ))}
        </div>
        {isFetching && <p>Loading more posts...</p>}
      </div>
    </div>
  );
};

const CategoryMenu = ({
  categories,
  categorySlug,
  timeFilter,
}: {
  categories: Category[];
  categorySlug: string | null;
  timeFilter: string | null;
}) => (
  <>
    <h2 className="font-bold mb-2">Categories</h2>
    <ul>
      <li className="py-1">
        <a
          href="/"
          className={
            categorySlug === null && !timeFilter ? "font-bold text-black" : ""
          }
        >
          All
        </a>
      </li>
      {categories?.map((category: Category) => (
        <li key={category.id} className="py-1">
          <a
            href={`/?category_slug=${category.slug}&time=${timeFilter || ""}`}
            className={
              categorySlug === category.slug ? "font-bold text-black" : ""
            }
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
          href={`/?category_slug=${categorySlug || ""}&time=last_year`}
          className={timeFilter === "last_year" ? "font-bold text-black" : ""}
        >
          Last Year
        </a>
      </li>
      <li className="py-1">
        <a
          href={`/?category_slug=${categorySlug || ""}&time=last_month`}
          className={timeFilter === "last_month" ? "font-bold text-black" : ""}
        >
          Last Month
        </a>
      </li>
      <li className="py-1">
        <a
          href={`/?category_slug=${categorySlug || ""}&time=last_week`}
          className={timeFilter === "last_week" ? "font-bold text-black" : ""}
        >
          Last Week
        </a>
      </li>
      <li className="py-1">
        <a
          href={`/?category_slug=${categorySlug || ""}&time=today`}
          className={timeFilter === "today" ? "font-bold text-black" : ""}
        >
          Today
        </a>
      </li>
    </ul>
  </>
);

export default UserSeePost;
