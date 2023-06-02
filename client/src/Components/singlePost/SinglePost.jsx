import "./singlePost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePost">
        <img
          className="singlePostImg"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="singlepost"
        />
        <h2 className="singlePostTitle">
          Sit amet consectetur adipisicing elit.
          <div className="singleEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h2>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>mrKun</b>
          </span>
          <span className="singlePostDate"></span>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
