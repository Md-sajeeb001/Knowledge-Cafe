import { FaRegBookmark } from "react-icons/fa";
import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
  console.log(blog);
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
        <div className="felx p-3 space-y-3">
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
              <button className="text-xl font-semibold ">
                <FaRegBookmark />
              </button>
            </div>
          </div>

          <div className="">
            <p className="font-bold text-2xl">{title}</p>
            <p className="text-red-500 underline underline-offset-1 btn bg-white">
              {marks_read} marks
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired
}

export default Blog;
