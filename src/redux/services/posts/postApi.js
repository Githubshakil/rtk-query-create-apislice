import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (buider) => ({
    getAllPosts: buider.query({
      query: () => "/posts",
    }),
  }),
});

export const { useGetAllPostsQuery } = postsApi;
export default postsApi;
