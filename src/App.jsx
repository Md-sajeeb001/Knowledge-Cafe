import "./App.css";
import Header from "./components/header/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";

function App() {
  

  return (
    <div className="sm:w-11/12 w-full px-3 mx-auto my-8">
      <Header></Header>
      <main className="grid sm:grid-cols-3 flex-col-reverse my-8 gap-5 ">

        <div className="col-span-2 border rounded-xl">
          <Blogs></Blogs>
        </div>

        <div className=" bg-slate-300 border rounded-xl">
          <Bookmarks></Bookmarks>
        </div>

      </main>
    </div>
  );
}

export default App;
