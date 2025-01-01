import asyncHandler from "../middleware/asyncHandler.js";
import Blog from "../models/blogModel.js";

// @desc    Fetch all blogs
// @route   GET /api/blogs
// @access  Public
const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({});

  res.json({ blogs });
});

// @desc    Fetch single blog
// @route   GET /api/blog/:id
// @access  Public
const getBlogById = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (blog) {
    return res.json(blog);
  }
  res.status(404);
  throw new Error("Resource not found");
});

// @desc    Create a blog
// @route   POST /api/blogs
// @access  Private/Admin
const createBlog = asyncHandler(async (req, res) => {
  const blog = new Blog({
    title: "Economic Trends",
    user: req.user._id,
    image_1:
      "https://plus.unsplash.com/premium_photo-1663045262714-9e177b6ac78d?q=80&w=1779&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description_1: "Sample description 1",
    category: "Market Trends",
    views: 10,
  });

  const createdBlog = await blog.save();
  res.status(201).json(createdBlog);
});

// @desc    Update a blog
// @route   PUT /api/blogs/:id
// @access  Private/Admin
const updateBlog = asyncHandler(async (req, res) => {
  const {
    title,
    image_1,
    description_1,
    image_2,
    description_2,
    image_3,
    description_3,
    category,
    views,
  } = req.body;

  const blog = await Blog.findById(req.params.id);

  if (blog) {
    blog.title = title;
    blog.image_1 = image_1;
    blog.description_1 = description_1;
    blog.image_2 = image_2;
    blog.description_2 = description_2;
    blog.image_3 = image_3;
    blog.description_3 = description_3;
    blog.category = category;
    blog.views = views;

    const updatedBlog = await blog.save();
    res.json(updatedBlog);
  } else {
    res.status(404);
    throw new Error("Blog not found");
  }
});

// @desc    Delete a blog
// @route   DELETE /api/blogs/:id
// @access  Private/Admin
const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (blog) {
    await Blog.deleteOne({ _id: blog._id });
    res.json({ message: "Blog removed" });
  } else {
    res.status(404);
    throw new Error("Blog not found");
  }
});

export { getBlogs, getBlogById, createBlog, updateBlog, deleteBlog };
