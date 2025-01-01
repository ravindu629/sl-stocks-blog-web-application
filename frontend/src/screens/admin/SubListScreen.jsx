import { LinkContainer } from "react-router-bootstrap";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { useGetSubscribersQuery } from "../../slices/subscriberApiSlice";
import { toast } from "react-toastify";
import { useState } from "react";
import { Link } from "react-router-dom";

const SubListScreen = () => {
  const { data, isLoading, error, refetch } = useGetSubscribersQuery();

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 10; // Number of blogs per page

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = data?.subscribers.slice(
    indexOfFirstBlog,
    indexOfLastBlog
  );
  const totalBlogs = data?.subscribers.length;
  const totalPages = Math.ceil(totalBlogs / blogsPerPage);

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between mb-4">
        <Link to="/admin/bloglist">
          <h2>Blogs</h2>
        </Link>
        <Link to="/admin/subList">
          <h2>Subscribers</h2>
        </Link>
      </div>

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
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                </tr>
              </thead>
              <tbody>
                {data?.subscribers.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1 + (currentPage - 1) * blogsPerPage}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
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

export default SubListScreen;
