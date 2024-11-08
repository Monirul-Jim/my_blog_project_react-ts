import { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Select from "react-select";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useGetCategoryQuery } from "../redux/feature/post/categoryApi";
import { useAppSelector } from "../redux/feature/hooks";
import { useCurrentUser } from "../redux/feature/auth/authSlice";
import { useAddPostMutation } from "../redux/feature/post/postApi";

type Category = {
  id: number;
  name: string;
  slug: string;
};

type PostFormValues = {
  image: string;
  title: string;
  description: string;
  category_ids: number[];
};

const Post = () => {
  const user = useAppSelector(useCurrentUser);

  const [addPost, { isLoading: postLoading }] = useAddPostMutation();

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
    ? categories.map((category: Category) => ({
        value: category.id,
        label: category.name,
      }))
    : [];

  const onSubmit: SubmitHandler<PostFormValues> = async (data) => {
    const categoryIds = selectedCategories.map((option) => option.value);
    const postData = {
      ...data,
      category_ids: categoryIds,
      user: user?.user_id, // Assuming 'user' is the current authenticated user and you need to send user ID
    };

    console.log(postData);
    await addPost(postData).unwrap();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-700">
          Create a Post
        </h1>

        {categoryLoading && (
          <p className="text-center text-gray-600">Loading categories...</p>
        )}
        {categoryError && (
          <p className="text-center text-red-500">Error loading categories</p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Title Input */}
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-600">
              Image
            </label>
            <input
              type="url"
              {...register("image", { required: "image is required" })}
              className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.image && (
              <span className="text-xs text-red-500">
                {errors.image.message}
              </span>
            )}
          </div>
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
                    toolbar: {
                      container: [
                        [{ header: [1, 2, 3, 4, 5, 6, false] }],
                        ["bold", "italic", "underline"],
                        [{ list: "ordered" }, { list: "bullet" }],
                        [{ align: [] }],
                        ["link", "image"],
                        ["clean"],
                        [{ color: [] }],
                      ],
                    },
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
              required
              value={selectedCategories}
              onChange={(options) => {
                setSelectedCategories(
                  options as { value: number; label: string }[]
                );
                setValue(
                  "category_ids",
                  options ? options.map((option) => option.value) : []
                );
              }}
              className="mt-1"
            />
          </div>

          <button
            type="submit"
            disabled={postLoading}
            className={`w-full px-4 py-2 font-semibold text-white rounded-md ${
              postLoading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            {postLoading ? "Submitting...." : "Submit Post"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Post;
