import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => "/posts",
    }),
    getPostById: builder.query({
      query: (id) => `/posts/${id}`,
    }),
    addNewPost: builder.mutation({
      query: (data) => ({
        url: '/posts',
        method: "POST",
        body: data
      })
    })
    
  }),
});

export const { useGetAllPostsQuery, useGetPostByIdQuery, useAddNewPostMutation} = postsApi;
export default postsApi;
