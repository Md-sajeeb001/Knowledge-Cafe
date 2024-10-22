import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, marksread }) => {
  return (
    <div>
        <div className="bg-slate-200 font-bold text-3xl text-center py-4">
        marksread time : {marksread}
        </div>
      <h2 className="font-bold text-2xl text-center py-4">Bookmark Blogs: {bookmarks.length}</h2>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  marksread: PropTypes.number.isRequired
};

export default Bookmarks;
