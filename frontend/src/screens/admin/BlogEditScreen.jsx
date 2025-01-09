import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { toast } from "react-toastify";
import {
  useGetBlogDetailsQuery,
  useUpdateBlogMutation,
  useUploadBlogFileMutation,
} from "../../slices/blogApiSlice";

const BlogEditScreen = () => {
  const { id: blogId } = useParams();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image_1, setImage_1] = useState("");
  const [description_1, setDescription_1] = useState("");
  const [image_2, setImage_2] = useState("");
  const [description_2, setDescription_2] = useState("");
  const [image_3, setImage_3] = useState("");
  const [description_3, setDescription_3] = useState("");
  const [views, setViews] = useState(0);
  const [download, setDownload] = useState("");

  const {
    data: blog,
    isLoading,
    refetch,
    error,
  } = useGetBlogDetailsQuery(blogId);

  const [updateBlog, { isLoading: loadingUpdate }] = useUpdateBlogMutation();

  const [uploadBlogFile, { isLoading: loadingUpload }] =
    useUploadBlogFileMutation();

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await updateBlog({
        blogId,
        title,
        category,
        image_1,
        description_1,
        image_2,
        description_2,
        image_3,
        description_3,
        views,
        download,
      }).unwrap(); // NOTE: here we need to unwrap the Promise to catch any rejection in our catch block
      toast.success("Blog updated");
      refetch();
      navigate("/admin/bloglist");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setCategory(blog.category);
      setImage_1(blog.image_1);
      setDescription_1(blog.description_1);
      setImage_2(blog.image_2);
      setDescription_2(blog.description_2);
      setImage_3(blog.image_3);
      setDescription_3(blog.description_3);
      setViews(blog.views);
      setDownload(blog.download);
    }
  }, [blog]);

  const uploadFileHandler = async (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]); // Update field name to "file" to match backend

    try {
      const res = await uploadBlogFile(formData).unwrap(); // Assuming `uploadBlogFile` handles the API call
      toast.success(res.message);
      setDownload(res.file_path); // Update the state to store the uploaded file's path
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      class="row"
      style={{
        paddingLeft: "300px",
        paddingTop: "50px",
        paddingBottom: "100px",
      }}
    >
      <div class="col-lg-8">
        <div class="contact-form">
          <div class="d-flex justify-content-between mb-4">
            <a href="/admin/bloglist" class="btn btn-secondary">
              Go Back
            </a>
            <h2>Edit Blog</h2>
          </div>
          {loadingUpdate && <Loader />}
          {isLoading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error.data.message}</Message>
          ) : (
            <form class="row" onSubmit={submitHandler}>
              <div class="col-md-12 py-3">
                <label for="title">Title</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  placeholder="Enter name"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div class="col-md-12 py-3">
                <label for="views">Views</label>
                <input
                  type="number"
                  class="form-control"
                  id="views"
                  placeholder="Enter views"
                  value={views}
                  onChange={(e) => setViews(e.target.value)}
                />
              </div>
              <div class="col-md-12 py-3">
                <label for="image_1">Image 1 URL</label>
                <input
                  type="text"
                  class="form-control"
                  id="image_1"
                  placeholder="Enter image 1 URL"
                  value={image_1}
                  onChange={(e) => setImage_1(e.target.value)}
                />
              </div>
              <div class="col-md-12 py-3">
                <label for="description_1">Description 1</label>
                <textarea
                  class="form-control"
                  id="description_1"
                  placeholder="Enter description 1"
                  value={description_1}
                  onChange={(e) => setDescription_1(e.target.value)}
                ></textarea>
              </div>
              <div class="col-md-12 py-3">
                <label for="image_2">Image 2 URL</label>
                <input
                  type="text"
                  class="form-control"
                  id="image_2"
                  placeholder="Enter image 2 URL"
                  value={image_2}
                  onChange={(e) => setImage_2(e.target.value)}
                />
              </div>
              <div class="col-md-12 py-3">
                <label for="description_2">Description 2</label>
                <textarea
                  class="form-control"
                  id="description_2"
                  placeholder="Enter description 2"
                  value={description_2}
                  onChange={(e) => setDescription_2(e.target.value)}
                ></textarea>
              </div>
              <div class="col-md-12 py-3">
                <label for="image_3">Image 3 URL</label>
                <input
                  type="text"
                  class="form-control"
                  id="image_3"
                  placeholder="Enter image 3 URL"
                  value={image_3}
                  onChange={(e) => setImage_3(e.target.value)}
                />
              </div>
              <div class="col-md-12 py-3">
                <label for="description_3">Description 3</label>
                <textarea
                  class="form-control"
                  id="description_3"
                  placeholder="Enter description 3"
                  value={description_3}
                  onChange={(e) => setDescription_3(e.target.value)}
                ></textarea>
              </div>
              <div class="col-md-12 py-3">
                <label for="category">Category</label>
                <select
                  class="form-control"
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Select Category</option>
                  <option value="Economic Trends">Economic Trends</option>
                  <option value="Global Markets">Global Markets</option>
                  <option value="Stock Insights">Stock Insights</option>
                  <option value="Corporate News">Corporate News</option>
                  <option value="Book Summary">Book Summary</option>
                </select>
              </div>
              <div class="col-md-12 py-3">
                <label for="image_1">File URL</label>
                <input
                  type="text"
                  class="form-control"
                  id="download"
                  placeholder="Enter file URL"
                  value={download}
                  onChange={(e) => setDownload(e.target.value)}
                />
                <input
                  type="file"
                  class="form-control mt-2"
                  id="file_upload"
                  onChange={uploadFileHandler} // New function for file upload
                  accept=".jpg,.jpeg,.png,.webp,.txt,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
                />
                {loadingUpload && <Loader />}{" "}
              </div>

              <div class="col-md-12 py-3 text-center">
                <button type="submit" class="btn btn-primary">
                  Update Blog
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      <div class="col-lg-6">
        <div id="map"></div>
      </div>
    </div>
  );
};

export default BlogEditScreen;
