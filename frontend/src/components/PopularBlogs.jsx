import React from "react";
import { useGetBlogsQuery } from "../slices/blogApiSlice";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import Message from "./Message";
import iconsvg from "../assets/images/blog/icon.svg";
import Category_1 from "./Category_1";
import Category_2 from "./Category_2";
import Category_3 from "./Category_3";
import Category_4 from "./Category_4";

export default function PopularBlogs() {
  const { data, isLoading, error } = useGetBlogsQuery();

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
    .slice(0, 5); // Get the top 6 blogs with the highest views

  return (
    <div class="col-lg-4">
      <div class="blog-post-widget">
        <div class="latest-widget-title">
          <h2
            style={{
              color: "#34495E", // Charcoal
            }}
          >
            Popular Blogs
          </h2>
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
                    aspectRatio: "4/3",
                    objectFit: "cover",
                  }}
                />
              </Link>
              <div class="icon">
                <Link to={`/blog/${blog._id}`}>
                  <img src={iconsvg} alt="icon" />
                </Link>
              </div>
            </div>
            <div class="latest-widget-content">
              <div class="content-title">
                <Link to={`/blog/${blog._id}`}>
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
      <br />
      <Category_1 />
      <br />
      <Category_2 />
      <br />
      <Category_3 />
      <br />
      <Category_4 />
    </div>
  );
}
