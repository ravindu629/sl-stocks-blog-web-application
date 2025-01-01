import { BLOG_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const blogSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => ({
        url: BLOG_URL,
      }),
      providesTags: ["Blog"],
      keepUnusedDataFor: 5,
    }),
    getBlogDetails: builder.query({
      query: (blogId) => ({
        url: `${BLOG_URL}/${blogId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    createBlog: builder.mutation({
      query: () => ({
        url: `${BLOG_URL}`,
        method: "POST",
      }),
      invalidatesTags: ["Blog"],
    }),
    updateBlog: builder.mutation({
      query: (data) => ({
        url: `${BLOG_URL}/${data.blogId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Blog"],
    }),

    deleteBlog: builder.mutation({
      query: (blogId) => ({
        url: `${BLOG_URL}/${blogId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Blog"],
    }),
    getTopBlogs: builder.query({
      query: () => `${BLOG_URL}/top`,
      keepUnusedDataFor: 5,
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useGetBlogDetailsQuery,
  useCreateBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
  useGetTopBlogsQuery,
} = blogSlice;
