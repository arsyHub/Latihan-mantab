import React from "react";
import "./NewsBlog.css";
import News from "../img/news/pop1.jpg";
import Oper from "./Oper";
import Footer from "./Footer";
// import News2 from "../img/news/pop2.jpg";
// import Header from "./Header";
// export default class NewsBlog extends Component {
//   render() {
const NewsBlog = () => {
  return (
    <React.Fragment>
      {/* <Header /> */}
      {/* Main Content */}
      <div className="container">
        <div className="main bg-light">
          <div className="row">
            <div className="col-8">
              <div className="berita">
                <img src={News} alt="" />
                <div className="container">
                  <p>Education | 2 April 2021</p>
                  <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
                  <hr />

                  <h4 className="text-center">POPULAR</h4>

                  {/* berita ..................................................................................*/}
                  <Oper />

                  {/* akhir isi berita */}
                </div>
              </div>
            </div>
            <div className="col">
              <div className="tranding p-1">
                <h5 className="text-center">Tranding</h5>
              </div>
              <div className="tran-isi">
                <a href="/">
                  <h6>Greysia/Apriyani sabet medali emas Olimpiade Tokyo</h6>
                </a>
                <p>Olimpiade</p>
                <hr />
                <h6>Baterai Tesla Megapack terbakar di Australia saat pengujian</h6>
                <p>Olimpiade</p>

                <hr />
                <h6>Jadwal Indonesia hari ini: Anthony Ginting berjuang di semifinal</h6>
                <p>Olahraga</p>
                <hr />
                <h6>Kerja keras Ginting dipatahkan Chen Long di semifinal Tokyo 2020</h6>
                <p>Edukasi</p>
                <hr />
                <h6>Jadwal Olimpiade hari ini : Greysia/Apriyani mengejar emas</h6>
                <p>Olimpiade</p>
                <hr />
                <h6>Mendagri terbitkan tiga instruksi perpanjangan PPKM level 4</h6>
                <p>Corona</p>
                <hr />
                <h6>Apriyani ditunggu sebidang tanah-rumah di Konawe dan bonus lainnya</h6>
                <p>Politik</p>
                <hr />
              </div>

              {/*  Kategori */}
              <div className="tranding p-1">
                <h5 className="text-center">Category</h5>
              </div>

              <div className="bg-kategori">
                <div className="container">
                  <div className="input-group mt-3">
                    <select className="form-select" id="inputGroupSelect02">
                      <option selected>Choose...</option>
                      <option value={1}>Olahraga</option>
                      <option value={2}>Politik</option>
                      <option value={3}>Hiburan</option>
                      <option value={3}>Kesehatan</option>
                      <option value={3}>Pendidikan</option>
                    </select>
                    <label className="input-group-text" htmlFor="inputGroupSelect02">
                      Search
                    </label>
                  </div>
                </div>
              </div>
              {/* Akhir kategori */}

              {/* iklan */}
              <div className="bg-iklan">
                <div className="container">
                  <p className="text-center">advertisement</p>
                </div>
              </div>
            </div>
          </div>
          {/* pagination button */}
          <div className="paging">
            <button className="btn btn-danger">1</button>
            <button className="btn btn-danger">2</button>
            <button className="btn btn-danger">3</button>
            <button className="btn btn-danger">Next..</button>
          </div>
          <Footer />
        </div>

        {/* share app */}
        <div className="share fixed-top">
          <div className="fb shareApp">
            <a className="btn" href="/">
              Facebook
            </a>
          </div>
          <div className="tw shareApp">
            <a className="btn" href="/">
              Tweeter
            </a>
          </div>
          <div className="wa shareApp">
            <a className="btn" href="/">
              Whatsapp
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewsBlog;
