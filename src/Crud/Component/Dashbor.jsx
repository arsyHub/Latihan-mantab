import React from "react";
// import Carousel from "react-bootstrap/Carousel";
import Slick from "./Slick";
import "../Style/CrHeader.css";
import OnSlick from "./OnSlick";

const Dashbor = () => {
  return (
    <div>
      {/* Corusel */}
      {/* 
      
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=702&q=80" alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20(1%20of%201)-5.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80" alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
      <div className="banner">
        <div className="row OnSlick justify-content-center">
          <div className="col-8">
            <div className="">
              <OnSlick />
            </div>
          </div>
          <div className="col">
            <div className="container total justify-content-center">
              <div className="totaldata">
                <h6 className="ttl">Total Barang</h6>
              </div>
              <div className="totalharga">
                <h6 className="ttl">Total Harga</h6>
              </div>
              <div className="totalkategori">
                <h6 className="ttl">Total Kategori</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container main">
        <h4>Astronout</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex et eius eum praesentium error at magnam aliquid nostrum esse, tempore repellendus sit amet blanditiis nisi omnis, debitis dicta expedita doloremque. Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Ipsa, assumenda possimus quisquam dignissimos tempora, harum fuga laudantium distinctio minima blanditiis recusandae nemo perspiciatis. Totam ipsum est ut eius, perferendis perspiciatis!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, quas quaerat? Alias debitis vero reprehenderit iure ea laboriosam? Sint hic atque eaque ullam velit, distinctio a obcaecati laborum fugiat explicabo.
        </p>
      </div>

      {/* Akhir Corusel */}

      {/* Main Content */}
      <div className="container">
        <div className="mainYt">
          <div className="textYt">
            <h5 className="text-center"> Youtube Content</h5>
          </div>
          <Slick />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora corporis, dolores architecto, consequatur sed quo, repellendus quam voluptate necessitatibus iste porro quod alias obcaecati odio tempore. Natus debitis numquam
            itaque?
          </p>
        </div>
      </div>

      {/* Akhir Main Content */}

      {/* Footer */}
      <div className="footer">
        <div className="container">
          <div className="map">
            <iframe
              title="maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.2181755963006!2d105.29374391418571!3d-5.3836766553329625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40dac03d097843%3A0x6bb59f4ba9a84e8c!2sPT.MICRODATA%20INDONESIA%20%7C%20SOFTWARE%20DEVELOPER!5e0!3m2!1sid!2sid!4v1628067113505!5m2!1sid!2sid"
              width={1116}
              height={300}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />

            <h6>@CopyRight : Arsy Berlian Adnin</h6>
            <p>Jl.angkasa raya, no.04 sukarame, bandar lampung</p>
          </div>
        </div>
      </div>
      {/* Akhir Footer */}
    </div>
  );
};

export default Dashbor;
