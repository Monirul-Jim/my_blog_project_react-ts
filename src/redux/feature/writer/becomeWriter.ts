import { baseApi } from "../../api/baseApi";

const becomeWriter = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    applicationWriter: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/apply-to-become-writer/",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["Applications"],
    }),
    getAllApplication: builder.query({
      query: () => ({
        url: "/auth/apply-to-become-writer/",
        method: "GET",
      }),
      providesTags: ["Applications"],
    }),
    approveApplication: builder.mutation({
      query: ({ id, isApproved }) => ({
        url: `/auth/admin/approve-writer/${id}/approve/`,
        method: "PATCH",
        body: { is_approved: isApproved },
      }),
      invalidatesTags: ["Applications"],
    }),
  }),
});

export const {
  useApplicationWriterMutation,
  useGetAllApplicationQuery,
  useApproveApplicationMutation,
} = becomeWriter;
