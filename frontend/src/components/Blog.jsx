import { useParams } from "react-router-dom";
import { useGetBlogDetailsQuery } from "../slices/blogApiSlice";
import { Link } from "react-router-dom";

export default function Blog() {
  const { id: blogId } = useParams();

  const {
    data: blog,
    isLoading,
    refetch,
    error,
  } = useGetBlogDetailsQuery(blogId);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading blog details.</p>;
  if (!blog) return <p>No blog found.</p>;

  return (
    <section className="blog-single">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 order-2 order-lg-1">
            <div className="share-now">
              {/* <button className="scrol">Share</button> */}
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
                      : blog.category === "Book Insights"
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
                  {new Date(blog.createdAt).toLocaleDateString()} - 3 min
                </li>
              </ul>
              <img
                src={blog.image_1}
                alt={blog.title}
                style={{
                  width: "100%",
                  height: "auto",
                  aspectRatio: "21/9",
                  objectFit: "cover",
                  marginLeft: "0px",
                }}
              />
              <p>{blog.description_1}</p>
              <p>{blog.description_2}</p>
              <div className="single-blog-banner">
                <div className="banner">
                  <img
                    src={blog.image_2}
                    alt={`${blog.title} banner 1`}
                    style={{
                      width: "100%",
                      height: "auto",
                      aspectRatio: "1/1",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="banner">
                  <img
                    src={blog.image_3}
                    alt={`${blog.title} banner 2`}
                    style={{
                      width: "100%",
                      height: "auto",
                      aspectRatio: "1/1",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
              <p>{blog.description_3}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
