import React from "react";
import { Routes, Route } from "react-router-dom";
import BlogPage from "./components/BlogPage";
import Nav from "./components/Nav";
import ProfilePage from "./components/ProfilePage";

// Link Active Link Outlet Nested routes useParams useSearchParams NotFound useNavigate
const App = () => {
  return (
    <>
      {/* <Routes>
        <Route
          path="/"
          element={
            <div>
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed,
              ipsam dolor molestiae possimus tempora vero cumque nesciunt illum
              dignissimos enim aliquid soluta iste vitae nemo optio recusandae.
              Aut, nisi voluptatem?
            </div>
          }
        ></Route>
        <Route path="/about" element={<div>This is about page</div>}></Route>
        <Route
          path="/movie/:movieId"
          element={<div>This is movie details of movieid</div>}
        ></Route>
        slug or id
      </Routes> */}
      <Routes>
        <Route path="/" element={<Nav></Nav>}>
          <Route path="/" element={<div>Home page</div>}></Route>
          <Route path="/blog" element={<BlogPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
        </Route>
        <Route path="*" element={<div>This is 404 not found</div>}></Route>
      </Routes>
    </>
  );
};

export default App;
