import React from "react";
// import "./BlogPost.css";

const Post = (props) => {
  return (
    <div>
      <div className="post">
        <div className="img-thumb mt-5">
          <img src="https://placeimg.com/200/150/tech" alt="articel" />
        </div>
        <div className="content">
          <p className="title">{props.data.title}</p>
          <div className="desc">{props.data.body}</div>
          <div>
            <button className="btn btn-danger" onClick={() => props.remove(props.data.id)}>
              Delete
            </button>
            <button className="update-btn btn btn-primary" onClick={() => props.update(props.data)}>
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
