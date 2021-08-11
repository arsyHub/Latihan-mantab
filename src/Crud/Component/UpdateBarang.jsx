import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Axios from "axios";
import { useForm } from "react-hook-form";
import "../Style/CrHeader.css";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

function UpdateBarang(props) {
  let History = useHistory();
  const [barang, setBarang] = useState([]);
  //constBarang
  const [NamaBarang, setNamaBarang] = useState("");
  const [HargaBarang, setHargaBarang] = useState("");
  const [KategoriBarang, setKategoriBarang] = useState("");
  let { id } = useParams();
  //   const [IdBarang, setIdBarang] = useState("");
  const {
    // register,
    handleSubmit,
    //  reset,
    //formState: { errors },
  } = useForm();
  const handelGetDetail = () => {
    Axios.get(`http://backendpkl.spacearts.id/api/barang/detail/${id}`).then(function (response) {
      setNamaBarang(response.data._data.nama);
      setKategoriBarang(response.data._data.kategori);
      setHargaBarang(response.data._data.harga);
      console.log(response);
    });
  };
  useEffect(() => {
    handelGetDetail();
  }, []);

  //   handle
  // const [Update, setUpdate] = useState(false);

  const onSubmit = () => {
    console.log(id);
    Axios.put(`http://backendpkl.spacearts.id/api/barang/update`, { id: id, nama: NamaBarang, kategori: KategoriBarang, harga: HargaBarang }).then(function (response) {
      //   console.log(response);
      History.push("/Barang");
    });
  };

  // total Harga

  return (
    <div className="py-5">
      <div className="container">
        {/* Input Form */}
        <div className="form-add">
          <h5>Input Barang</h5>

          <hr />

          <Form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Masukan nama barang..." value={NamaBarang} onChange={(e) => setNamaBarang(e.target.value)} />
            <br />
            <input type="text" placeholder="Masukan kategori barang..." value={KategoriBarang} onChange={(e) => setKategoriBarang(e.target.value)} />
            <br />
            <input type="number" placeholder="Masukan harga barang..." value={HargaBarang} onChange={(e) => setHargaBarang(e.target.value)} />
            <br />
            <button className="btn btn-primary" type="submit">
              Simpan
            </button>
          </Form>
        </div>

        {/* Table */}
      </div>
    </div>
  );
}

export default UpdateBarang;
