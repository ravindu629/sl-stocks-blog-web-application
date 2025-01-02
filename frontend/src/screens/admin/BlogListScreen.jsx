import { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import {
  useGetBlogsQuery,
  useCreateBlogMutation,
  useDeleteBlogMutation,
} from "../../slices/blogApiSlice";
import { toast } from "react-toastify";
import { useState } from "react";
import { Link } from "react-router-dom";

const BlogListScreen = () => {
  const { data, isLoading, error, refetch } = useGetBlogsQuery();
  const [deleteBlog, { isLoading: loadingDelete }] = useDeleteBlogMutation();
  const [createBlog, { isLoading: loadingCreate }] = useCreateBlogMutation();

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 10; // Number of blogs per page

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure")) {
      try {
        await deleteBlog(id);
        refetch();
        toast.success("Blog deleted successfully");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  const createBlogHandler = async () => {
    if (window.confirm("Are you sure you want to create a new blog?")) {
      try {
        await createBlog();
        refetch();
        toast.success("Blog created successfully");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = data?.blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalBlogs = data?.blogs.length;
  const totalPages = Math.ceil(totalBlogs / blogsPerPage);

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between mb-4">
        <button className="btn btn-primary" onClick={createBlogHandler}>
          Create Blog
        </button>
        <Link to="/admin/blogList">
          <h2>Blogs</h2>
        </Link>
        <Link to="/admin/sublist">
          <h2>Subscribers</h2>
        </Link>
      </div>

      {loadingCreate && <Loader />}
      {loadingDelete && <Loader />}

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error.data.message}</Message>
      ) : (
        <>
          <div className="table-responsive py-3">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Views</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {currentBlogs?.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1 + (currentPage - 1) * blogsPerPage}</td>
                    <td>{item.title}</td>
                    <td>{item.category}</td>
                    <td>{item.views}</td>
                    <td>
                      <span
                        onClick={() =>
                          (window.location.href = `/admin/blog/${item._id}/edit`)
                        }
                        style={{
                          padding: "0.2rem 0.4rem",
                          fontSize: "0.875rem",
                          color: "#194f70",
                          fontWeight: "bold", // Make the text bold
                          textDecoration: "underline", // Underline to mimic a link
                          cursor: "pointer", // Pointer cursor to indicate it's clickable
                        }}
                      >
                        Edit
                      </span>
                    </td>
                    <td>
                      <span
                        onClick={() => deleteHandler(item._id)}
                        className="ml-2"
                        style={{
                          padding: "0.2rem 0.4rem",
                          fontSize: "0.875rem",
                          fontWeight: "bold", // Make the text bold
                          color: "#dc3545", // Similar color to the original delete button
                          cursor: "pointer", // Add cursor pointer to indicate it's clickable
                        }}
                      >
                        Delete
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="d-flex justify-content-center mt-3">
            <button
              className="btn btn-secondary"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              style={{
                padding: "0.2rem 0.4rem",
                fontSize: "0.875rem",
              }}
            >
              Previous
            </button>
            <span className="mx-3">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="btn btn-secondary"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              style={{
                padding: "0.2rem 0.4rem",
                fontSize: "0.875rem",
              }}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default BlogListScreen;
