import { baseApi } from "../../api/baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    categoryPost: builder.mutation({
      query: (userInfo) => ({
        url: "/post/category/",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["Category"],
    }),
    getCategory: builder.query({
      query: () => ({
        url: "/post/category/",
        method: "GET",
      }),
      providesTags: ["Category"],
    }),
    updateCategory: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/post/category/${id}/`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Category"],
    }),
  }),
});

export const {
  useCategoryPostMutation,
  useGetCategoryQuery,
  useUpdateCategoryMutation,
} = categoryApi;
