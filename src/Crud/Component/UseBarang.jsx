import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Form } from "react-bootstrap";
import Axios from "axios";
import { useForm } from "react-hook-form";
import "../Style/CrHeader.css";
import { useHistory } from "react-router-dom";
import { connect, useSelector, useDispatch } from "react-redux";

// import { useParams } from "react-router-dom";

function UseBarang(props) {
  const { totalHargas } = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log("ini globalstate :", totalHargas);
  let History = useHistory();

  const [barang, setBarang] = useState([]);
  //constBarang
  const [NamaBarang, setNamaBarang] = useState("");
  const [HargaBarang, setHargaBarang] = useState("");
  const [KategoriBarang, setKategoriBarang] = useState("");
  // let { id } = useParams();
  //   const [IdBarang, setIdBarang] = useState("");
  const {
    // register,
    handleSubmit,
    //  reset,
    //formState: { errors },
  } = useForm();

  //   getBarang
  const getBarang = async () => {
    try {
      let response = await Axios.get("http://backendpkl.spacearts.id/api/barang/get_list");
      // console.log(response.data._data);
      setBarang(response.data._data);

      let totalHarga = 0;
      for (let i = 0; i < response.data._data.length; i++) {
        totalHarga += response.data._data[i].harga;
      }

      console.log("totalHarga :>> ", totalHarga);
      dispatch({ type: "TOTAL", payload: totalHarga });
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getBarang();
  }, []);

  //   handle
  // const [Update, setUpdate] = useState(false);

  const onSubmit = (data, e) => {
    Axios.post(`http://backendpkl.spacearts.id/api/barang/create`, {
      nama: NamaBarang,
      kategori: KategoriBarang,
      harga: HargaBarang,
      //   getBarang();
    }).then(function (response) {
      getBarang();
    });
  };

  const handleDelete = (id) => {
    Axios.delete(`http://backendpkl.spacearts.id/api/barang/delete/` + id).then(function (response) {
      getBarang();
    });
  };

  const handleUpdate = (id) => {
    History.push(`/UpdateBarang/${id}`);
  };
  //Tatal Kategori

  // total Harga
  // const total = barang.reduce((total_harga, barangX) => {
  //   return total_harga + barangX.harga;
  // }, 0);

  // console.log("total hrg: ", total);
  // dispatch({ type: "TOTAL", payload: total });

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
        <div className="row justify-content-center">
          <div className="col-md-8">
            <Table striped bordered hover variant="dark" className="table">
              <thead className="text-center">
                <tr>
                  <th>Nama</th>
                  <th>Kategori</th>
                  <th>Harga</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {barang.map((barangX, key) => {
                  return (
                    <tr key={key}>
                      <td>{barangX.nama}</td>
                      <td>{barangX.kategori}</td>
                      <td>{barangX.harga}</td>
                      <td>
                        <button className="btn btn-primary ms-2" onClick={() => handleUpdate(barangX.id)}>
                          Update
                        </button>
                        <button className="btn btn-danger ms-2" onClick={() => handleDelete(barangX.id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>

            {/* Total harga */}

            {barang
              .filter((barangX) => barangX.kategori === "Elektronik")
              .map((barangX, index) => (
                <h5>
                  {index + 1} kategori : {barangX.kategori}
                </h5>
              ))}

            <h1>Total Harga : {totalHargas}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    total: state.totalHargas,
  };
};

export default connect(mapStateToProps)(UseBarang);
