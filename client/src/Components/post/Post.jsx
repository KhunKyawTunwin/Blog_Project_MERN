import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.unsplash.com/photo-1510832198440-a52376950479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80"
        alt="postImg"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Style</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Welcome to our family Paradize!</span>
        {/* <hr /> */}
        <span className="postDate">Created by Khun : 1 hour ago</span>
      </div>
      <div className="postDesc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam sit non
        ipsa libero a autem asperiores, eos nulla? Odit cupiditate recusandae
        repellat vel quod in harum, beatae eaque laboriosam blanditiis?Lorem
        ipsum dolor sit amet consectetur adipisicing elit.
      </div>
    </div>
  );
};

export default Post;
