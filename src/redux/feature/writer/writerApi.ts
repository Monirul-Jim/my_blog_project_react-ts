import { baseApi } from "../../api/baseApi";

const writerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserInfo: builder.query({
      query: () => ({
        url: "/auth/user/all-users/",
        method: "GET",
      }),
      providesTags: (result) => {
        if (result) {
          return [
            { type: "User", id: "LIST" },
            ...result.map((user: { id: number }) => ({
              type: "User",
              id: user.id,
            })),
          ];
        } else {
          return [{ type: "User", id: "LIST" }];
        }
      },
    }),

    updateUserRole: builder.mutation({
      query: ({ id, role }) => ({
        url: `/auth/user/${id}/update-role/`,
        method: "PUT",
        body: { role },
      }),
      invalidatesTags: ({ id }) => [
        { type: "User", id },
        { type: "User", id: "LIST" },
      ],
    }),
  }),
});

export const { useGetUserInfoQuery, useUpdateUserRoleMutation } = writerApi;
