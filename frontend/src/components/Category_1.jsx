import React from "react";
import { useGetBlogsQuery } from "../slices/blogApiSlice";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import Message from "./Message";
import iconsvg from "../assets/images/blog/icon.svg";

export default function Category_1() {
  const { data, isLoading, error } = useGetBlogsQuery();

  if (isLoading) return <Loader />;
  if (error) return <Message variant="danger">{error.data.message}</Message>;

  // Check if data.blogs exists
  const blogs = data?.blogs || [];

  // Filter blogs by category "Economic Trends"
  const economicTrendsBlogs = blogs.filter(
    (blog) => blog.category === "Economic Trends"
  );

  // Get the top 5 blogs (if needed, you can sort them based on another criteria like views)
  const topBlogs = [...economicTrendsBlogs] // Create a shallow copy
    .sort((a, b) => {
      const viewsA = Number(a.views); // Convert to number to ensure sorting works
      const viewsB = Number(b.views);
      return viewsB - viewsA; // Sort by views in descending order
    })
    .slice(0, 3); // Get the top 5 blogs

  return (
    <div class="blog-post-widget">
      <div class="latest-widget-title">
        <h2>{topBlogs[0].category}</h2>
        <br />
      </div>
      {topBlogs.map((blog) => (
        <div class="latest-widget" key={blog._id}>
          <div class="latest-widget-thum">
            <Link to={`/blog/${blog._id}`}>
              <img
                src={blog.image_1}
                alt="blog-thumb"
                style={{
                  width: "100%",
                  height: "auto",
                  aspectRatio: "1/1",
                  objectFit: "cover",
                }}
              />
            </Link>
            <div class="icon">
              <Link to={`/blog/${blog._id}`}>
                {" "}
                <img src={iconsvg} alt="icon" />
              </Link>
            </div>
          </div>
          <div class="latest-widget-content">
            <div class="content-title">
              <Link to={`/blog/${blog._id}`}>
                {" "}
                {blog.title.length > 40
                  ? `${blog.title.slice(0, 50)}...`
                  : blog.title}
              </Link>
            </div>
            <div class="content-meta">
              <ul>
                <li>
                  <i class="fa fa-clock-o"></i>
                  &nbsp;
                  {new Date(blog.createdAt).toLocaleDateString()}
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
