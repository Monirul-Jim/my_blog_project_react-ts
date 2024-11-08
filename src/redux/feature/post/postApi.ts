import { baseApi } from "../../api/baseApi";

const postApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addPost: builder.mutation({
      query: (userInfo) => ({
        url: "/post/post/",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["post"],
    }),
    // getCategory: builder.query({
    //   query: () => ({
    //     url: "/post/category/",
    //     method: "GET",
    //   }),
    //   providesTags: ["Category"],
    // }),
    // updateCategory: builder.mutation({
    //   query: ({ id, ...data }) => ({
    //     url: `/post/category/${id}/`,
    //     method: "PUT",
    //     body: data,
    //   }),
    //   invalidatesTags: ["Category"],
    // }),
  }),
});

export const { useAddPostMutation } = postApi;
