// import { useForm, SubmitHandler } from "react-hook-form";
// import {
//   useCategoryPostMutation,
//   useGetCategoryQuery,
//   useUpdateCategoryMutation,
// } from "../../redux/feature/post/categoryApi";

// interface ICategory {
//   name: string;
// }
// interface IRegistrationErrorResponse {
//   error?: string[];
//   message?: string;
//   errors?: {
//     name?: string[];
//   };
// }

// type IError = {
//   data: IRegistrationErrorResponse;
//   status: number;
// };
// type Category = {
//   id: number;
//   name: string;
//   slug: string;
// };
// const Category = () => {
//   const [categoryPost, { isLoading, error }] = useCategoryPostMutation();
//   const {
//     data: categories,
//     isLoading: cIsLoading,
//     error: cError,
//   } = useGetCategoryQuery(null);
//   const [updateCategory, { isLoading: uLoading, error: uError }] =
//     useUpdateCategoryMutation();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<ICategory>();

//   const onSubmit: SubmitHandler<ICategory> = async (data) => {
//     try {
//       await categoryPost(data);
//     } catch (err) {
//       console.error("Error submitting category:", err);
//     }
//   };

//   if (cIsLoading) {
//     <p>Loading Categories...</p>;
//   }
//   if (cError) {
//     <p>Something went wrong!!!</p>;
//   }

//   return (
//     <div className=" mx-auto p-6 bg-white  rounded-md">
//       <h1 className="text-2xl font-semibold mb-4">Create Category</h1>

//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">
//             Category Name
//           </label>
//           <input
//             type="text"
//             placeholder="Enter category name"
//             className={`mt-1 block w-full px-4 py-2 border ${
//               errors.name ? "border-red-500" : "border-gray-300"
//             } rounded-md`}
//             {...register("name", { required: "Category name is required" })}
//           />
//           {errors.name && (
//             <p className="text-sm text-red-500">{errors.name.message}</p>
//           )}
//         </div>
//         {error && (error as IError).data?.errors?.name && (
//           <div className="text-red-600">
//             {/* If name errors exist, map through them and display each */}
//             {(error as IError).data?.errors?.name?.map((err, index) => (
//               <p key={index}>{err}</p>
//             ))}
//           </div>
//         )}

//         {/* Submit Button */}
//         <div className="flex justify-end">
//           <button
//             type="submit"
//             disabled={isLoading}
//             className="px-6 py-2 w-full bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 disabled:bg-blue-300"
//           >
//             {isLoading ? "Creating..." : "Create Category"}
//           </button>
//         </div>
//         {error && (error as IError).data?.message && (
//           <p className="text-red-600">{(error as IError)?.data?.message}</p>
//         )}
//       </form>

//       <div className="mt-6">
//         <h2 className="text-xl font-semibold mb-4">Categories</h2>

//         <ul className="space-y-4">
//           {categories?.map((category: Category) => (
//             <li
//               key={category.id}
//               className="flex justify-between items-center p-4 bg-gray-100 rounded-md shadow"
//             >
//               <div>
//                 <p className="text-lg font-medium">{category?.name}</p>
//                 <p className="text-sm text-gray-500">Slug: {category?.slug}</p>
//               </div>
//               <button className="ml-4 px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600">
//                 Update
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Category;
// import { useState } from "react";
// import { useForm, SubmitHandler } from "react-hook-form";
// import {
//   useCategoryPostMutation,
//   useGetCategoryQuery,
//   useUpdateCategoryMutation,
// } from "../../redux/feature/post/categoryApi";

// interface ICategory {
//   name: string;
// }

// interface IError {
//   data: {
//     message?: string;
//     errors?: {
//       name?: string[];
//     };
//   };
//   status: number;
// }

// type Category = {
//   id: number;
//   name: string;
//   slug: string;
// };

// const Category = () => {
//   const [categoryPost, { isLoading, error }] = useCategoryPostMutation();
//   const {
//     data: categories,
//     isLoading: cIsLoading,
//     error: cError,
//   } = useGetCategoryQuery(null);
//   const [updateCategory, { isLoading: uLoading, error: uError }] =
//     useUpdateCategoryMutation();
//   const [editingCategory, setEditingCategory] = useState<Category | null>(null); // State to hold category being edited

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset, // Reset form for update
//   } = useForm<ICategory>();

//   // On submit for create
//   const onSubmit: SubmitHandler<ICategory> = async (data) => {
//     try {
//       if (editingCategory) {
//         // If we're editing, update category
//         await updateCategory({ id: editingCategory.id, ...data });
//       } else {
//         // If we're creating, create category
//         await categoryPost(data);
//       }
//     } catch (err) {
//       console.error("Error submitting category:", err);
//     }
//   };

//   // Handle clicking "Update" button
//   const handleUpdate = (category: Category) => {
//     setEditingCategory(category);
//     reset({ name: category.name }); // Pre-fill form with category data
//   };

//   if (cIsLoading) {
//     return <p>Loading Categories...</p>;
//   }
//   if (cError) {
//     return <p>Something went wrong!!!</p>;
//   }

//   return (
//     <div className="mx-auto p-6 bg-white rounded-md">
//       <h1 className="text-2xl font-semibold mb-4">
//         {editingCategory ? "Update Category" : "Create Category"}
//       </h1>

//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">
//             Category Name
//           </label>
//           <input
//             type="text"
//             placeholder="Enter category name"
//             className={`mt-1 block w-full px-4 py-2 border ${
//               errors.name ? "border-red-500" : "border-gray-300"
//             } rounded-md`}
//             {...register("name", { required: "Category name is required" })}
//           />
//           {errors.name && (
//             <p className="text-sm text-red-500">{errors.name.message}</p>
//           )}
//         </div>

//         {error && (error as IError).data?.errors?.name && (
//           <div className="text-red-600">
//             {(error as IError).data?.errors?.name?.map((err, index) => (
//               <p key={index}>{err}</p>
//             ))}
//           </div>
//         )}

//         <div className="flex justify-end">
//           <button
//             type="submit"
//             disabled={isLoading || uLoading}
//             className="px-6 py-2 w-full bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 disabled:bg-blue-300"
//           >
//             {isLoading || uLoading
//               ? editingCategory
//                 ? "Updating..."
//                 : "Creating..."
//               : editingCategory
//               ? "Update Category"
//               : "Create Category"}
//           </button>
//         </div>

//         {error && (error as IError).data?.message && (
//           <p className="text-red-600">{(error as IError)?.data?.message}</p>
//         )}
//       </form>

//       <div className="mt-6">
//         <h2 className="text-xl font-semibold mb-4">Categories</h2>

//         <ul className="space-y-4">
//           {categories?.map((category: Category) => (
//             <li
//               key={category.id}
//               className="flex justify-between items-center p-4 bg-gray-100 rounded-md shadow"
//             >
//               <div>
//                 <p className="text-lg font-medium">{category.name}</p>
//                 <p className="text-sm text-gray-500">Slug: {category.slug}</p>
//               </div>
//               <button
//                 onClick={() => handleUpdate(category)}
//                 className="ml-4 px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600"
//               >
//                 Update
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Category;
import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  useCategoryPostMutation,
  useGetCategoryQuery,
  useUpdateCategoryMutation,
} from "../../redux/feature/post/categoryApi";

interface ICategory {
  name: string;
  slug?: string; // Optional slug for updates
}

interface IError {
  data: {
    message?: string;
    errors?: {
      name?: string[];
    };
  };
  status: number;
}

type Category = {
  id: number;
  name: string;
  slug: string;
};

const Category = () => {
  const [categoryPost, { isLoading, error }] = useCategoryPostMutation();
  const {
    data: categories,
    isLoading: cIsLoading,
    error: cError,
  } = useGetCategoryQuery(null);
  const [updateCategory, { isLoading: uLoading }] = useUpdateCategoryMutation();
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [slug, setSlug] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ICategory>();

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "");
  };

  const onSubmit: SubmitHandler<ICategory> = async (data) => {
    const updatedData = { ...data, slug: slug || generateSlug(data.name) };

    try {
      if (editingCategory) {
        await updateCategory({ id: editingCategory.id, ...updatedData });
      } else {
        await categoryPost(updatedData);
      }
    } catch (err) {
      console.error("Error submitting category:", err);
    }
  };

  const handleUpdate = (category: Category) => {
    setEditingCategory(category);
    reset({ name: category.name });
    setSlug(category.slug);
  };

  useEffect(() => {
    if (!editingCategory) {
      setSlug("");
    }
  }, [editingCategory]);

  if (cIsLoading) {
    return <p>Loading Categories...</p>;
  }
  if (cError) {
    return <p>Something went wrong!!!</p>;
  }

  return (
    <div className="mx-auto p-6 bg-white rounded-md">
      <h1 className="text-2xl font-semibold mb-4">
        {editingCategory ? "Update Category" : "Create Category"}
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Category Name
          </label>
          <input
            type="text"
            placeholder="Enter category name"
            className={`mt-1 block w-full px-4 py-2 border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded-md`}
            {...register("name", { required: "Category name is required" })}
            onChange={(e) => {
              const name = e.target.value;
              setValue("name", name);
              setSlug(generateSlug(name));
            }}
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        {error && (error as IError).data?.errors?.name && (
          <div className="text-red-600">
            {(error as IError).data?.errors?.name?.map((err, index) => (
              <p key={index}>{err}</p>
            ))}
          </div>
        )}

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isLoading || uLoading}
            className="px-6 py-2 w-full bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 disabled:bg-blue-300"
          >
            {isLoading || uLoading
              ? editingCategory
                ? "Updating..."
                : "Creating..."
              : editingCategory
              ? "Update Category"
              : "Create Category"}
          </button>
        </div>

        {error && (error as IError).data?.message && (
          <p className="text-red-600">{(error as IError)?.data?.message}</p>
        )}
      </form>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Categories</h2>

        <ul className="space-y-4">
          {categories?.map((category: Category) => (
            <li
              key={category.id}
              className="flex justify-between items-center p-4 bg-gray-100 rounded-md shadow"
            >
              <div>
                <p className="text-lg font-medium">{category.name}</p>
                <p className="text-sm text-gray-500">Slug: {category.slug}</p>
              </div>
              <button
                onClick={() => handleUpdate(category)}
                className="ml-4 px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600"
              >
                Update
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
