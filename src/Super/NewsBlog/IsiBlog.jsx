import React from "react";
import "./NewsBlog.css";

const IsiBlog = (props) => {
  return (
    <React.Fragment>
      <div className="isi-berita">
        <img src="https://placeimg.com/290/180/people" className="nws-1 float-start" alt="" />
        {/* <h5 className="title">{props.title}.</h5> */}
        <a href="/" className="title">
          {props.title}
        </a>
        <p className="dateB">Arsy Berlian | 19 Agustus 2021</p>
        <p className="desc">{props.desc}</p>
      </div>
    </React.Fragment>
  );
};
export default IsiBlog;
