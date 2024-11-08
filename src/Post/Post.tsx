// import { useState } from "react";
// import { useForm, SubmitHandler, Controller } from "react-hook-form";
// import Select from "react-select";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import { useGetCategoryQuery } from "../redux/feature/post/categoryApi";
// import { useAppSelector } from "../redux/feature/hooks";
// import { useCurrentUser } from "../redux/feature/auth/authSlice";
// import {
//   useAddPostMutation,
//   useGetPostQuery,
// } from "../redux/feature/post/postApi";

// type Category = {
//   id: number;
//   name: string;
//   slug: string;
// };

// type PostFormValues = {
//   image: string;
//   title: string;
//   description: string;
//   category_ids: number[];
// };

// const Post = () => {
//   const user = useAppSelector(useCurrentUser);

//   const [addPost, { isLoading: postLoading }] = useAddPostMutation();
//   const { data, isLoading, error } = useGetPostQuery(user?.user_id);

//   const {
//     data: categories,
//     isLoading: categoryLoading,
//     error: categoryError,
//   } = useGetCategoryQuery(null);

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     formState: { errors },
//     control,
//   } = useForm<PostFormValues>();
//   const [selectedCategories, setSelectedCategories] = useState<
//     { value: number; label: string }[]
//   >([]);

//   const categoryOptions = categories
//     ? categories.map((category: Category) => ({
//         value: category.id,
//         label: category.name,
//       }))
//     : [];

//   const onSubmit: SubmitHandler<PostFormValues> = async (data) => {
//     const categoryIds = selectedCategories.map((option) => option.value);
//     const postData = {
//       ...data,
//       category_ids: categoryIds,
//       user: user?.user_id,
//     };

//     console.log(postData);
//     await addPost(postData).unwrap();
//   };
//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error loading posts</p>;
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full  p-8 space-y-6 bg-white rounded-lg shadow-md">
//         <h1 className="text-2xl font-bold text-center text-gray-700">
//           Create a Post
//         </h1>

//         {categoryLoading && (
//           <p className="text-center text-gray-600">Loading categories...</p>
//         )}
//         {categoryError && (
//           <p className="text-center text-red-500">Error loading categories</p>
//         )}

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           {/* Title Input */}
//           <div>
//             <label className="block mb-1 text-sm font-semibold text-gray-600">
//               Image
//             </label>
//             <input
//               type="url"
//               {...register("image", { required: "image is required" })}
//               className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             {errors.image && (
//               <span className="text-xs text-red-500">
//                 {errors.image.message}
//               </span>
//             )}
//           </div>
//           <div>
//             <label className="block mb-1 text-sm font-semibold text-gray-600">
//               Title
//             </label>
//             <input
//               type="text"
//               {...register("title", { required: "Title is required" })}
//               className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             {errors.title && (
//               <span className="text-xs text-red-500">
//                 {errors.title.message}
//               </span>
//             )}
//           </div>

//           {/* Description Input with ReactQuill */}
//           <div>
//             <label className="block mb-1 text-sm font-semibold text-gray-600">
//               Description
//             </label>
//             <Controller
//               name="description"
//               control={control}
//               rules={{ required: "Description is required" }}
//               render={({ field }) => (
//                 <ReactQuill
//                   theme="snow"
//                   value={field.value || ""}
//                   modules={{
//                     toolbar: {
//                       container: [
//                         [{ header: [1, 2, 3, 4, 5, 6, false] }],
//                         ["bold", "italic", "underline"],
//                         [{ list: "ordered" }, { list: "bullet" }],
//                         [{ align: [] }],
//                         ["link", "image"],
//                         ["clean"],
//                         [{ color: [] }],
//                       ],
//                     },
//                   }}
//                   onChange={field.onChange}
//                   className="bg-white"
//                 />
//               )}
//             />

//             {errors.description && (
//               <span className="text-xs text-red-500">
//                 {errors.description.message}
//               </span>
//             )}
//           </div>

//           {/* Category Select */}
//           <div>
//             <label className="block mb-1 text-sm font-semibold text-gray-600">
//               Categories
//             </label>
//             <Select
//               isMulti
//               options={categoryOptions}
//               required
//               value={selectedCategories}
//               onChange={(options) => {
//                 setSelectedCategories(
//                   options as { value: number; label: string }[]
//                 );
//                 setValue(
//                   "category_ids",
//                   options ? options.map((option) => option.value) : []
//                 );
//               }}
//               className="mt-1"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={postLoading}
//             className={`w-full px-4 py-2 font-semibold text-white rounded-md ${
//               postLoading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
//             } focus:outline-none focus:ring-2 focus:ring-blue-500`}
//           >
//             {postLoading ? "Submitting...." : "Submit Post"}
//           </button>
//         </form>

//         {/* here start show all post */}
//         <div className="p-4 overflow-x-auto">
//           <h1 className="text-2xl font-semibold mb-4">My Posts</h1>
//           <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
//             <thead>
//               <tr className="bg-gray-200 text-gray-700 text-left">
//                 <th className="py-2 px-4 border-b border-gray-300">Image</th>
//                 <th className="py-2 px-4 border-b border-gray-300">Title</th>
//                 <th className="py-2 px-4 border-b border-gray-300">
//                   Description
//                 </th>
//                 <th className="py-2 px-4 border-b border-gray-300">Category</th>
//                 <th className="py-2 px-4 border-b border-gray-300">
//                   Created At
//                 </th>
//                 <th className="py-2 px-4 border-b border-gray-300">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data?.map((post) => (
//                 <tr key={post.id} className="hover:bg-gray-100">
//                   <td className="py-2 px-4 border-b border-gray-300">
//                     <img
//                       src={post.image}
//                       alt={post.title}
//                       className="w-16 h-16 object-cover rounded"
//                     />
//                   </td>
//                   <td className="py-2 px-4 border-b border-gray-300">
//                     {post.title}
//                   </td>
//                   <td className="py-2 px-4 border-b border-gray-300">
//                     <div className="line-clamp-2">
//                       {post.description.replace(/<\/?[^>]+(>|$)/g, "")}
//                     </div>
//                   </td>
//                   <td className="py-2 px-4 border-b border-gray-300">
//                     {post.category.map((cat) => (
//                       <span
//                         key={cat.id}
//                         className="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium mr-1"
//                       >
//                         {cat.name}
//                       </span>
//                     ))}
//                   </td>
//                   <td className="py-2 px-4 border-b border-gray-300">
//                     {new Date(post.created_at).toLocaleDateString()}
//                   </td>
//                   <td className="py-2 px-4 border-b border-gray-300">
//                     <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
//                       Update
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         {/* here end show all post */}
//       </div>
//     </div>
//   );
// };

// export default Post;
import { useState, useEffect } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Select from "react-select";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useGetCategoryQuery } from "../redux/feature/post/categoryApi";
import { useAppSelector } from "../redux/feature/hooks";
import { useCurrentUser } from "../redux/feature/auth/authSlice";
import {
  useAddPostMutation,
  useDeletePostMutation,
  useGetPostQuery,
  useUpdatePostMutation, // Add updatePost mutation
} from "../redux/feature/post/postApi";

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

type PostFormValues = {
  id?: number;
  image: string;
  title: string;
  description: string;
  category_ids: number[];
  category?: Category | Category[];
};

const Post = () => {
  const user = useAppSelector(useCurrentUser);
  const [addPost, { isLoading: postLoading }] = useAddPostMutation();
  const [updatePost, { isLoading: updateLoading }] = useUpdatePostMutation(); // Add updatePost
  const { data: posts, isLoading, error } = useGetPostQuery(user?.user_id);
  const [deletePost, { isLoading: dLoading }] = useDeletePostMutation();
  const {
    data: categories,
    isLoading: categoryLoading,
    error: categoryError,
  } = useGetCategoryQuery(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    control,
  } = useForm<PostFormValues>();

  const [selectedCategories, setSelectedCategories] = useState<
    { value: number; label: string }[]
  >([]);

  const categoryOptions = categories
    ? categories?.map((category: Category) => ({
        value: category.id,
        label: category.name,
      }))
    : [];

  const [editPost, setEditPost] = useState<Post | PostFormValues | null>(null);

  useEffect(() => {
    if (editPost && categories) {
      const categoryIds = editPost?.category
        ? Array.isArray(editPost?.category)
          ? editPost.category.map((cat) => cat.id)
          : [editPost.category.id]
        : [];

      setValue("image", editPost.image);
      setValue("title", editPost.title);
      setValue("description", editPost.description);

      const preSelectedCategories = categoryIds
        ?.map((categoryId) => {
          const category = categories?.find(
            (cat: Category) => cat.id === categoryId
          );

          return category ? { value: category.id, label: category.name } : null;
        })
        .filter(
          (item): item is { value: number; label: string } => item !== null
        );

      setSelectedCategories(preSelectedCategories);
    }
  }, [editPost, categories, setValue]);

  const onSubmit: SubmitHandler<PostFormValues> = async (data) => {
    const categoryIds = selectedCategories.map((option) => option.value);

    const postData = {
      ...data,
      category_ids: categoryIds,
      user: user?.user_id,
    };
    if (editPost) {
      const updateData = {
        ...postData,
        id: editPost.id,
      };
      await updatePost(updateData).unwrap();
    } else {
      await addPost(postData).unwrap();
    }
  };

  if (isLoading || categoryLoading) return <p>Loading...</p>;
  if (error || categoryError) return <p>Error loading data</p>;
  const handlePostDelete = async (post: Post) => {
    await deletePost(post);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-700">
          {editPost ? "Update Post" : "Create a Post"}
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Image Input */}
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-600">
              Image
            </label>
            <input
              type="url"
              {...register("image", { required: "Image is required" })}
              className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.image && (
              <span className="text-xs text-red-500">
                {errors.image.message}
              </span>
            )}
          </div>

          {/* Title Input */}
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-600">
              Title
            </label>
            <input
              type="text"
              {...register("title", { required: "Title is required" })}
              className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.title && (
              <span className="text-xs text-red-500">
                {errors.title.message}
              </span>
            )}
          </div>

          {/* Description Input with ReactQuill */}
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-600">
              Description
            </label>
            <Controller
              name="description"
              control={control}
              rules={{ required: "Description is required" }}
              render={({ field }) => (
                <ReactQuill
                  theme="snow"
                  value={field.value || ""}
                  modules={{
                    toolbar: [
                      [{ header: [1, 2, 3, 4, 5, 6, false] }],
                      ["bold", "italic", "underline"],
                      [{ list: "ordered" }, { list: "bullet" }],
                      [{ align: [] }],
                      ["link", "image"],
                      ["clean"],
                      [{ color: [] }],
                    ],
                  }}
                  onChange={field.onChange}
                  className="bg-white"
                />
              )}
            />
            {errors.description && (
              <span className="text-xs text-red-500">
                {errors.description.message}
              </span>
            )}
          </div>

          {/* Category Select */}
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-600">
              Categories
            </label>
            <Select
              isMulti
              options={categoryOptions}
              value={selectedCategories}
              onChange={(options) => {
                setSelectedCategories(options ? [...options] : []);
                setValue(
                  "category_ids",
                  options ? options?.map((option) => option.value) : []
                );
              }}
              className="mt-1"
            />
          </div>

          <button
            type="submit"
            disabled={postLoading || updateLoading}
            className={`w-full px-4 py-2 font-semibold text-white rounded-md ${
              postLoading || updateLoading
                ? "bg-gray-400"
                : "bg-blue-600 hover:bg-blue-700"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            {postLoading || updateLoading
              ? editPost
                ? "Updating..."
                : "Submitting..."
              : editPost
              ? "Update Post"
              : "Submit Post"}
          </button>
        </form>

        {/* Display Posts */}
        <div className="p-4 overflow-x-auto">
          <h1 className="text-2xl font-semibold mb-4">My Posts</h1>
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
            <thead>
              <tr className="bg-gray-200 text-gray-700 text-left">
                <th className="py-2 px-4 border-b border-gray-300">Image</th>
                <th className="py-2 px-4 border-b border-gray-300">Title</th>
                <th className="py-2 px-4 border-b border-gray-300">
                  Description
                </th>
                <th className="py-2 px-4 border-b border-gray-300">Category</th>
                <th className="py-2 px-4 border-b border-gray-300">
                  Created At
                </th>
                <th className="py-2 px-4 border-b border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts?.map((post: Post) => (
                <tr key={post.id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b border-gray-300">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    {post.title}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    {post.description}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    {post.category.map((cat: Category) => (
                      <span
                        key={cat.id}
                        className="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium mr-1"
                      >
                        {cat.name}
                      </span>
                    ))}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    {new Date(post.created_at).toLocaleDateString()}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                      onClick={() => setEditPost(post)}
                    >
                      Update
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 mt-2 rounded"
                      onClick={() => handlePostDelete(post)}
                      disabled={dLoading}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Post;
