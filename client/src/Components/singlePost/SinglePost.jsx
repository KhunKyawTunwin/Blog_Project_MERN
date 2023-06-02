import "./singlePost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="singlepost"
        />
        <h2 className="singlePostTitle">
          Sit amet consectetur adipisicing elit.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h2>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>mrKun</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nam odio autem obcaecati eum expedita minus!
          Officiis, sapiente aliquam? Voluptatum nam quaerat numquam est rem
          perspiciatis. Corrupti voluptas quaerat, nihil at perspiciatis hic
          tempora? Quis, cupiditate facere animi eum quaerat velit fugit libero
          vitae cumque delectus in! Labore voluptates asperiores recusandae!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          impedit voluptas labore? Eaque dolor magni totam fuga repellat
          quaerat, doloribus porro similique cumque cum maxime saepe eligendi,
          facere incidunt veniam deleniti accusantium doloremque, ut debitis
          cupiditate optio minima. Praesentium mollitia eveniet totam. Vero
          itaque enim ullam! Repellat explicabo repellendus odio adipisci
          quibusdam consequuntur quia voluptatum vitae illum, quam ad, quaerat
          repudiandae ducimus! Soluta, enim fugiat. Qui consequatur sunt harum
          exercitationem nulla excepturi voluptatum suscipit iste. Libero,
          officiis voluptas ad, sunt eligendi eveniet dicta accusamus et
          asperiores corrupti aliquid totam optio laboriosam enim! Ducimus totam
          quis vel amet velit. Non, quos?
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
