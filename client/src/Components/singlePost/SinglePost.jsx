import { Link, useLocation, useNavigate } from "react-router-dom";
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
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const response = await Axios.get(`${BACKEND_URL}/posts/${path}`);
      setPost(response.data);
      setTitle(response.data.title);
      setDesc(response.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    await Axios.delete(`${BACKEND_URL}/posts/${post._id}`, {
      data: { username: user.username },
    });
    window.location.replace(`/`);
  };

  const handleUpdate = async () => {
    try {
      await Axios.put(`${BACKEND_URL}/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false);
    } catch (err) {}
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

        {updateMode ? (
          <input
            className="singlePostTitleInput"
            type="text"
            value={title}
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h2 className="singlePostTitle">
            {title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon fa-regular fa-pen-to-square"
                  onClick={() => setUpdateMode(true)}
                />
                <i
                  className="singlePostIcon fa-solid fa-trash"
                  onClick={handleDelete}
                />
              </div>
            )}
          </h2>
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
        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            autoFocus
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
