import "./App.css";
import Header from "./components/header/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import { useState } from "react";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [marksread, setMarksread] = useState(0);

  const handelBookMark = (blog) => {
    const newBookMark = [...bookmarks, blog];
    setBookmarks(newBookMark);
  };

  const handelMarksRead = (id, time) => {
    setMarksread(marksread + time);

    const remainigBookmark = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookmarks(remainigBookmark);
  };

  return (
    <div className="sm:w-11/12 w-full px-3 mx-auto my-8">
      <Header></Header>
      <main className="grid sm:grid-cols-3 flex-col-reverse my-8 gap-5 ">
        <div className="col-span-2 border rounded-xl">
          <Blogs
            handelBookMark={handelBookMark}
            handelMarksRead={handelMarksRead}
          ></Blogs>
        </div>

        <div className=" bg-slate-300 border rounded-xl">
          <Bookmarks bookmarks={bookmarks} marksread={marksread}></Bookmarks>
        </div>
      </main>
    </div>
  );
}

export default App;
