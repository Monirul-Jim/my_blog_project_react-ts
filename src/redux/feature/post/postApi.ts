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
    getPost: builder.query({
      query: (userId) => ({
        url: `/post/post/?user=${userId}`,
        method: "GET",
      }),
      providesTags: ["post"],
    }),
    updatePost: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/post/post/${id}/`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["post"],
    }),
    deletePost: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/post/post/${id}/`,
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: ["post"],
    }),
  }),
});

export const {
  useAddPostMutation,
  useGetPostQuery,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postApi;
