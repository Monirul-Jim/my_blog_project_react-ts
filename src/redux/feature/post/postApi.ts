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
    getAllPost: builder.query({
      query: ({ category_slug, time }) => {
        const params = new URLSearchParams();
        if (category_slug) params.append("category_slug", category_slug);
        if (time) params.append("time", time);
        return {
          url: `/post/post/?${params.toString()}`,
          method: "GET",
        };
      },
      providesTags: ["post"],
    }),

    getSinglePost: builder.query({
      query: ({ id }) => ({
        url: `/post/post/${id}/`,
        method: "GET",
      }),
      providesTags: ["post"],
    }),
  }),
});

export const {
  useAddPostMutation,
  useGetPostQuery,
  useUpdatePostMutation,
  useDeletePostMutation,
  useGetAllPostQuery,
  useGetSinglePostQuery,
} = postApi;
