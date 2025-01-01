import React, { useState } from "react";
import { useGetBlogsQuery } from "../slices/blogApiSlice";
import Loader from "./Loader";
import Message from "./Message";
import { Link } from "react-router-dom";

export default function CategoryFour() {
  const { data, isLoading, error } = useGetBlogsQuery();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 7;

  if (isLoading) return <Loader />;
  if (error) return <Message variant="danger">{error.data.message}</Message>;

  // Check if data.blogs exists
  const blogs = data?.blogs || [];

  // Filter blogs by category "Trading Basics"
  const tradingBasicsBlogs = blogs.filter(
    (blog) => blog.category === "Trading Basics"
  );

  // Calculate index of the first and last blog to display
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentBlogs = tradingBasicsBlogs.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total number of pages
  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(tradingBasicsBlogs.length / postsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <section class="blog">
      <div class="container">
        <div class="row">
          <div className="col-lg-10">
            <div className="blog-section-title">
              <h2>{tradingBasicsBlogs[0].category} Blog Articles</h2>
              <p>View the latest news on Blogger</p>
            </div>
            {tradingBasicsBlogs.map((blog) => (
              <article className="blog-post" key={blog._id}>
                <div className="blog-post-thumb">
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
                </div>

                <div className="blog-post-content">
                  <div className="blog-post-tag">
                    <a href="">{blog.category}</a>
                  </div>
                  <div className="blog-post-title">
                    <Link to={`/blog/${blog._id}`}>
                      {blog.title.length > 50
                        ? `${blog.title.slice(0, 50)}...`
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
                    {blog.description_1.length > 160
                      ? `${blog.description_1.slice(0, 160)}...`
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
