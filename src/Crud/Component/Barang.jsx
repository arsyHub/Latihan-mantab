import React from "react";
// import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import axios from "axios";
import "../Style/CrHeader.css";
const Barang = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const axiosPosts = async () => {
      const response = await axios(`http://backendpkl.spacearts.id/api/barang/get_list/`);
      setPosts(response.data);
      // console.log{data};
    };
    axiosPosts();
  }, []);

  const useaxiosPosts = posts.map((post) => {
    return (
      <div>
        <h1>{post.id}</h1>
        <h2>{post.nama}</h2>
        <h2>{post.harga}</h2>
        <h2>{post.kategori}</h2>
      </div>
    );
  });

  return (
    <div>
      {/* <div className="container">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAMA BARANG</th>
              <th>HARGA</th>
              <th>KATEGORI</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{post.id}</td>
              <td>{post.harga}</td>
              <td>{post.nama}</td>
              <td>{post.kategori}</td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div> */}
      {posts && useaxiosPosts}
    </div>
  );
};

export default Barang;
