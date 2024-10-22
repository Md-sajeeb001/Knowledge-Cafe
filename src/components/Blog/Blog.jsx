import { FaRegBookmark } from "react-icons/fa";
import PropTypes from "prop-types";

const Blog = ({ blog, handelBookMark, handelMarksRead }) => {
  const {
    title,
    reading_time,
    posted_date,
    author_img,
    author_name,
    cover_img,
    marks_read,
  } = blog;

  return (
    <div>
      <div className="card bg-base-100 shadow-xl h-full text-left">
        <figure>
          <img
            className="w-full h-[250px] object-cover"
            src={cover_img}
            alt="Shoes"
          />
        </figure>
        <div className="felx p-3 space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img className="w-12 rounded-full" src={author_img} alt="" />
              <div className="">
                <h3 className="text-xl font-bold">{author_name}</h3>
                <p> {posted_date}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <p>{reading_time} min read </p>
              <button
                onClick={() => handelBookMark(blog)}
                className="text-xl font-semibold "
              >
                <FaRegBookmark />
              </button>
            </div>
          </div>

          <div className="pt-2">
            <p className="font-bold text-2xl">{title}</p>
            <button
              onClick={() => handelMarksRead(reading_time)}
              className="text-red-500 underline underline-offset-1 bg-white"
            >
              {marks_read}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handelBookMark: PropTypes.func.isRequired,
  handelMarksRead: PropTypes.func.isRequired
};

export default Blog;
