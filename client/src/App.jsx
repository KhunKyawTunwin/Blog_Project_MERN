import Post from "./Components/post/Post";
import SinglePost from "./Components/singlePost/SinglePost";
import TopBar from "./Components/topbar/TopBar";
import Write from "./Components/write/Write";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const user = true;
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/setting" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </>
  );
};

export default App;
