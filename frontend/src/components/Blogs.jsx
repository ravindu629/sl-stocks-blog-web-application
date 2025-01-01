import React from "react";
import { useGetBlogsQuery } from "../slices/blogApiSlice";
import Blog from "./Blog";
import Message from "./Message";
import Loader from "./Loader";

export default function Blogs() {
  const { data, isLoading, error, refetch } = useGetBlogsQuery();

  if (isLoading) return <Loader />;
  if (error) return <Message variant="danger">{error.data.message}</Message>;

  // Check if data.blogs exists
  const blogs = data?.blogs || [];

  // Sort blogs by views in descending order and select the top 6 blogs
  const topBlogs = [...blogs] // Create a shallow copy using spread operator
    .sort((a, b) => {
      const viewsA = Number(a.views); // Convert to number to ensure sorting works
      const viewsB = Number(b.views);
      return viewsB - viewsA; // Sort by views in descending order
    })
    .slice(0, 6); // Get the top 6 blogs with the highest views

  return (
    <section class="blog_section layout_padding">
      <div class="container">
        <div class="heading_container">
          <h2>Latest Blog</h2>
        </div>
        <div class="row">
          {topBlogs.map((blog) => (
            <div key={blog._id} class="col-md-6 col-lg-4 mx-auto">
              <Blog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
