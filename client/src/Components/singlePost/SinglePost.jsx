import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Axios from "axios";
import { BACKEND_URL } from "../../config";
import { Context } from "../../content/Content";
import "./singlePost.css";

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const { user } = useContext(Context);
  const proFileImg = "http://localhost:5000/images/";

  useEffect(() => {
    const getPost = async () => {
      const response = await Axios.get(`${BACKEND_URL}/posts/${path}`);
      setPost(response.data);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    await Axios.delete(`${BACKEND_URL}/posts/${post._id}`, {
      data: { username: user.username },
    });
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img
            className="singlePostImg"
            src={proFileImg + post.photo}
            alt="singlePost"
          />
        )}
        <h2 className="singlePostTitle">{post.title}</h2>
        {post.username === user?.username && (
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square" />
            <i
              className="singlePostIcon fa-solid fa-trash"
              onClick={handleDelete}
            />
          </div>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link className="link" to={`/?user=${post.username}`}>
              <b>{` ${post.username}`}</b>
            </Link>
          </span>
          <span className="singlePostDate">{`${new Date(
            post.createdAt
          ).toDateString()}`}</span>
        </div>
        <p className="singlePostDesc">{post.desc}</p>
      </div>
    </div>
  );
};

export default SinglePost;
