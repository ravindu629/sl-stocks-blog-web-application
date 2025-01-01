import React, { useState } from "react";
import LatestBlog from "./LatestBlog";
import PopularBlogs from "./PopularBlogs";
import { useGetBlogsQuery } from "../slices/blogApiSlice";
import { useRegisterSubscriberMutation } from "../slices/subscriberApiSlice";
import Loader from "./Loader";
import Message from "./Message";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

export default function HomeTopSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const { data, isLoading, error } = useGetBlogsQuery();

  const [register, { isLoadingRegister }] = useRegisterSubscriberMutation();

  if (isLoading) return <Loader />;
  if (error) return <Message variant="danger">{error.data.message}</Message>;

  // Check if data.blogs exists
  const blogs = data?.blogs || [];

  // Sort blogs by date in descending order (latest first)
  const sortedBlogsByDate = [...blogs].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  let latestBlog = sortedBlogsByDate[0];

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await register({ name, email, phone }).unwrap();
      setName("");
      setEmail("");
      setPhone("");
      toast.success("Thank you for subscribing!");
      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <div
        class="container"
        style={{
          marginTop: "40px",
        }}
      >
        <div class="row">
          <div class="col-lg-8 col-md-12">
            <article class="featured-post">
              <div class="featured-post-content">
                <Link
                  to={`/blog/${latestBlog._id}`}
                  class="featured-post-title"
                >
                  <h3 style={{ fontSize: "2rem" }}>
                    {latestBlog.title.length > 150
                      ? `${latestBlog.title.slice(0, 150)}...`
                      : latestBlog.title}
                  </h3>
                </Link>
                <ul class="featured-post-meta">
                  <li>
                    <i class="fa fa-clock-o"></i> &nbsp;{" "}
                    {new Date(latestBlog.createdAt).toLocaleDateString()}
                  </li>
                </ul>
                <br />
                {/* <p>
                  {latestBlog.description_1.length > 100
                    ? `${latestBlog.description_1.slice(0, 100)}...`
                    : latestBlog.description_1}
                </p> */}
                <Link
                  to={`/blog/${latestBlog._id}`}
                  className="blog-post-action"
                >
                  read more <i className="fa fa-angle-right"></i>
                </Link>
              </div>
              <div class="featured-post-thumb">
                <img
                  src={latestBlog.image_1}
                  alt="feature-post-thumb"
                  style={{
                    width: "100%",
                    height: "auto",
                    aspectRatio: "1/1",
                    objectFit: "cover",
                  }}
                />
              </div>
            </article>
          </div>
          <div class="col-lg-4 col-md-12 mt-4 mt-lg-0">
            <div
              style={{
                marginBottom: "120px",
                marginLeft: "15px",
              }}
            >
              <h2 class="text-center">Subscribe to Our Newsletter</h2>
              <form
                class="row g-3 justify-content-center"
                action="https://fabform.io/f/9APkcbe"
                onSubmit={submitHandler}
                method="post"
              >
                <div class="col-12">
                  <input
                    type="text"
                    class="form-control"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="emailInput"
                    required
                    placeholder="Enter your name"
                  />{" "}
                  <br />
                </div>
                <div class="col-12">
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="emailInput"
                    required
                    placeholder="Enter your email"
                  />{" "}
                  <br />
                </div>
                <div class="col-12">
                  <input
                    type="number"
                    class="form-control"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    id="emailInput"
                    required
                    placeholder="Enter your contact number"
                  />{" "}
                  <br />
                </div>
                <div class="col-12">
                  <button
                    type="submit"
                    class="btn btn-primary w-100"
                    formtarget="_blank"
                    disabled={isLoadingRegister}
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <section class="blog">
        <div class="container">
          <div class="row">
            <LatestBlog />
            <PopularBlogs />
          </div>
        </div>
      </section>
    </>
  );
}
