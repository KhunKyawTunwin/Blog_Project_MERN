import Header from "../../Components/header/Header";
import Posts from "../../Components/posts/Posts";
import Sidebar from "../../Components/sidebar/Sidebar";
import Axios from "axios";

import "./home.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BACKEND_URL } from "../../config";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPost = async () => {
      const respone = await Axios.get(`${BACKEND_URL}/posts/${search}`);

      setPosts(respone.data);
    };
    fetchPost();
  }, [search]);

  return (
    <div>
      <Header
        title="Most places should go to make Investment"
        subTitle="Best Investment Land In Asia"
      />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
