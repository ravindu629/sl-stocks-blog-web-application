import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  useGetBlogDetailsQuery,
  useUpdateBlogMutation,
} from "../slices/blogApiSlice";
import { Link } from "react-router-dom";

export default function Blog() {
  const { id: blogId } = useParams();

  const { data: blog, isLoading, error } = useGetBlogDetailsQuery(blogId);

  const [updateBlog] = useUpdateBlogMutation();

  useEffect(() => {
    const incrementViews = async () => {
      if (blog) {
        const updatedViews = Number(blog.views) + 1;
        try {
          await updateBlog({
            blogId,
            title: blog.title,
            category: blog.category,
            image_1: blog.image_1,
            description_1: blog.description_1,
            image_2: blog.image_2,
            description_2: blog.description_2,
            image_3: blog.image_3,
            description_3: blog.description_3,
            views: updatedViews,
            download: blog.download,
          }).unwrap();
        } catch (error) {
          console.error("Failed to update views:", error);
        }
      }
    };

    incrementViews();
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, [blog, blogId, updateBlog]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading blog details.</p>;
  if (!blog) return <p>No blog found.</p>;

  return (
    <section className="blog-single">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 order-2 order-lg-1">
            <div className="share-now">
              <p>Share</p>
              <div className="sociel-icon">
                <ul>
                  <li>
                    <a href="https://facebook.com">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-10 order-1 order-lg-2">
            <article className="single-blog">
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
                      : blog.category === "Book Summary"
                      ? "/category_5"
                      : "/"
                  }
                >
                  {blog.category}
                </Link>
              </div>
              <p className="title">{blog.title}</p>
              <ul className="meta">
                <li>
                  <i className="fa fa-clock-o"></i> &nbsp;
                  {new Date(blog.createdAt).toLocaleDateString()}
                </li>
                <li>
                  &nbsp;&nbsp;
                  <i className="fa fa-eye"></i> &nbsp;
                  {blog.views} Views
                </li>
              </ul>
              <img
                src={blog.image_1}
                alt={`${blog.title} image 1`}
                style={{
                  width: "100%",
                  height: "auto",
                  aspectRatio: "16/9",
                  objectFit: "cover",
                  marginLeft: "0px",
                }}
              />
              <p>{blog.description_1}</p>
              <br />
              <img
                src={blog.image_2}
                alt={`${blog.title} image 2`}
                style={{
                  width: "100%",
                  height: "auto",
                  aspectRatio: "16/9",
                  objectFit: "cover",
                  marginLeft: "0px",
                }}
              />
              <p>{blog.description_2}</p>
              <br />
              <img
                src={blog.image_3}
                alt={`${blog.title} image 3`}
                style={{
                  width: "100%",
                  height: "auto",
                  aspectRatio: "16/9",
                  objectFit: "cover",
                  marginLeft: "0px",
                }}
              />
              <p>{blog.description_3}</p>
              {/* Add download button */}
              {blog.download && (
                <div
                  style={{
                    marginTop: "20px",
                    textAlign: "center",
                  }}
                >
                  <a
                    href={`/uploads/${blog.download}`}
                    download
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <button
                      style={{
                        backgroundColor: "#007bff",
                        color: "white",
                        padding: "10px 20px",
                        fontSize: "16px",
                        cursor: "pointer",
                        textAlign: "center",
                        display: "inline-block",
                        borderRadius: "5px",
                      }}
                    >
                      Download File
                    </button>
                  </a>
                </div>
              )}
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
