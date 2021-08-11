import React, { Component } from "react";
import Post from "../Post";
import "./BlogPost.css";
import axios from "axios";

class BlogPost extends Component {
  state = {
    post: [],
    //untuk add postingan..
    fromBlogPost: {
      id: 1,
      title: "",
      body: "",
      userId: 1,
    },
    isUpdate: false,
  };

  //API untuk remove data................................................
  getPostAPI = () => {
    axios
      .get("http://localhost:3004/posts?_sort=id&_order=desc") // dengan DB lokal........................
      .then((result) => {
        this.setState({
          post: result.data,
        });
      });
  };

  postDataToAPI = () => {
    axios.post("http://localhost:3004/posts", this.state.fromBlogPost).then(
      (res) => {
        console.log(res);
        this.getPostAPI();
        this.setState({
          fromBlogPost: {
            id: 1,
            title: "",
            body: "",
            userId: 1,
          },
        });
      },
      (err) => {
        console.log("error :", err);
      }
    );
  };

  handleRemove = (data) => {
    console.log(data);
    axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {});
    this.getPostAPI();
    this.setState({
      fromBlogPost: {
        id: 1,
        title: "",
        body: "",
        userId: 1,
      },
    });
  };

  //End Remove............................................................

  //API untuk Update data.................................................
  putDataToAPI = () => {
    axios.put(`http://localhost:3004/posts/${this.state.fromBlogPost.id}`, this.state.fromBlogPost).then((res) => {
      console.log(res);
      this.getPostAPI();
      this.setState({
        isUpdate: false,
        fromBlogPost: {
          id: 1,
          title: "",
          body: "",
          userId: 1,
        },
      });
    });
  };
  handleUpdate = (data) => {
    console.log(data);
    this.setState({
      fromBlogPost: data,
      isUpdate: true,
    });
  };

  //End Update data........................................................

  //API untuk add data....................................................
  handleFormChange = (event) => {
    let fromBlogPostNew = { ...this.state.fromBlogPost };
    let timestamp = new Date().getTime();
    if (!this.state.isUpdate) {
      fromBlogPostNew["id"] = timestamp;
    }
    fromBlogPostNew[event.target.name] = event.target.value;
    this.setState({
      fromBlogPost: fromBlogPostNew,
    });
  };

  handleSumbit = () => {
    if (this.state.isUpdate) {
      this.putDataToAPI();
    } else {
      this.postDataToAPI();
    }
  };
  //End add...............................................................

  //dengan Axios
  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/posts") Dengan DB SERVER................
    this.getPostAPI();
  }

  render() {
    return (
      <>
        <div className="container">
          <strong className="section-post">Blog Post</strong>
          <hr />
          {/* membuat  form add articel */}
          <div className="form-add-post">
            <label htmlFor="title">title</label>
            <input type="text" value={this.state.fromBlogPost.title} name="title" placeholder="add title" onChange={this.handleFormChange} />
            <label htmlFor="body">Blog Content</label>
            <textarea name="body" id="body" cols="30" rows="10" value={this.state.fromBlogPost.body} placeholder="add blog content" onChange={this.handleFormChange}></textarea>
            <button className="btn btn-primary" onClick={this.handleSumbit}>
              Simpan
            </button>
          </div>
          {this.state.post.map((post) => {
            return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} />;
          })}
        </div>
      </>
    );
  }
}

export default BlogPost;
