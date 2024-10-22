import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handelBookMark, handelMarksRead }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("LocalData.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-2 mx-auto gap-5 text-center p-2">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handelBookMark={handelBookMark}
            handelMarksRead={handelMarksRead}
          ></Blog>
        ))}
      </div>
    </div>
  );
};

Blogs.propTypes = {
  handelBookMark: PropTypes.func.isRequired,
  handelMarksRead: PropTypes.func.isRequired
};

export default Blogs;
