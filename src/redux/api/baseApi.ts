// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const baseApi = createApi({
//   reducerPath: "baseApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "http://localhost:8000/",
//     credentials: "include",
//   }),
//   tagTypes: ["User", "Role"],
//   endpoints: () => ({}),
// });
import {
  BaseQueryApi,
  BaseQueryFn,
  DefinitionType,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../feature/store";
import { logout, setUser } from "../feature/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://my-blog-project-drf.onrender.com",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 404) {
    console.error("error");
  }
  if (result?.error?.status === 403) {
    console.error("error");
  }
  if (result?.error?.status === 401) {
    //* Send Refresh
    console.log("Sending refresh token");

    const res = await fetch(
      "https://my-blog-project-drf.onrender.com/auth/refresh/",
      {
        method: "POST",
        credentials: "include",
      }
    );

    const data = await res.json();

    if (data?.data?.accessToken) {
      const user = (api.getState() as RootState).auth.user;

      api.dispatch(
        setUser({
          user,
          token: data.data.accessToken,
        })
      );

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
  tagTypes: ["User", "Role", "Applications", "Post", "Category", "post"],
});
