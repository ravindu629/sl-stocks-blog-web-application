import React, { useState } from "react";
import { useGetBlogsQuery } from "../slices/blogApiSlice";
import Loader from "./Loader";
import Message from "./Message";
import { Link } from "react-router-dom";

export default function Latest() {
  const { data, isLoading, error } = useGetBlogsQuery();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 7;

  if (isLoading) return <Loader />;
  if (error) return <Message variant="danger">{error.data.message}</Message>;

  // Check if data.blogs exists
  const blogs = data?.blogs || [];

  // Sort blogs by date in descending order (latest first)
  const sortedBlogsByDate = [...blogs].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  // Calculate index of the first and last blog to display
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentBlogs = sortedBlogsByDate.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total number of pages
  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(sortedBlogsByDate.length / postsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <section class="blog">
      <div class="container">
        <div class="row">
          <div className="col-lg-12">
            <div className="blog-section-title">
              <h2>Latest Blog Articles</h2>
              <p>View the latest news on Blogger</p>
            </div>
            {currentBlogs.map((blog) => (
              <article className="blog-post" key={blog._id}>
                <div className="blog-post-thumb">
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
                </div>

                <div className="blog-post-content">
                  <div className="blog-post-tag">
                    <Link
                      to={
                        blog.category === "Economic Trends"
                          ? "/category_1"
                          : blog.category === "Global Markets"
                          ? "/category_2"
                          : blog.category === "Stock Insights"
                          ? "/category_3"
                          : blog.category === "Corporate News"
                          ? "/category_4"
                          : blog.category === "Book Insights"
                          ? "/category_5"
                          : "/"
                      }
                    >
                      {blog.category}
                    </Link>
                  </div>
                  <div className="blog-post-title">
                    <Link to={`/blog/${blog._id}`}>
                      {blog.title.length > 100
                        ? `${blog.title.slice(0, 100)}...`
                        : blog.title}
                    </Link>
                  </div>
                  <div className="blog-post-meta">
                    <ul>
                      <li>
                        <i className="fa fa-clock-o"></i> &nbsp;
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </li>
                    </ul>
                  </div>
                  <p>
                    {blog.description_1.length > 250
                      ? `${blog.description_1.slice(0, 250)}...`
                      : blog.description_1}
                  </p>
                  <Link to={`/blog/${blog._id}`} className="blog-post-action">
                    read more <i className="fa fa-angle-right"></i>
                  </Link>
                </div>
              </article>
            ))}

            {/* Pagination */}
            <div className="pagination">
              {pageNumbers.map((number) => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`page-link ${
                    currentPage === number ? "active" : ""
                  }`}
                  style={{
                    backgroundColor: "#333", // Black background
                    color: "#fff", // White text color
                    borderColor: "#ccc", // Border color
                  }}
                >
                  {number}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
