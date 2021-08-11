import React from "react";
import "./NewsBlog.css";
import "./Contact.css";
import Footer from "./Footer";
const Contact = () => {
  return (
    <>
      {/* <Header /> */}
      {/* Main Content */}
      <div className="container">
        <div className="main bg-light">
          <h3 className="text-center">Contact</h3>
          <div className="row">
            <div className="col">
              <h4 className="txtIcon">
                WEB <span>NEWS</span>
              </h4>
              <p className="txtIsi">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque voluptatibus quibusdam tempore iusto expedita, ducimus voluptate, optio labore magnam ratione debitis maiores odio est at dolorum unde consequuntur possimus
                repellat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eum ipsum laudantium neque quasi, tenetur, quae eos non ullam, similique itaque sapiente expedita! Odit, sunt. Id mollitia eaque magni! Totam.
              </p>
            </div>
            <div className="col-lg">
              <form className="container">
                <fieldset>
                  <legend>Cant i help you?</legend>
                  <div className="mb-3">
                    <label htmlFor="TextInput" className="form-label">
                      Comment
                    </label>
                    <div>
                      <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }} />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Select" className="form-label">
                      Category Problem
                    </label>
                    <select id="Select" className="form-select">
                      <option selected>Choose...</option>
                      <option value={1}>Problem service</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="FieldsetCheck" />
                      <label className="form-check-label" htmlFor="FieldsetCheck">
                        Can't check this
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-danger">
                    Submit
                  </button>
                </fieldset>
              </form>
            </div>

            {/* Support */}
            <div className="container">
              <h3 className="text-center txtSuport">Thanks for support :</h3>
              <div className="container text-center">
                <img src="https://1.bp.blogspot.com/-TqcMMWXH-tg/WJxSNO8_2aI/AAAAAAAAFbY/OShlrtdaJJUUWTRSVMeCr7Yveh-9rkBGACLcB/s1600/babe.jpg" alt="TV One" className="img-spon" />
                <img src="https://2.bp.blogspot.com/-pzznmfsZo7c/W-i518Fx9zI/AAAAAAAAE94/wmbasauicA4jdlTXpHs3cUuNCylzvNZFACLcBGAs/s1600/TVOne1.png" alt="IndoZone" className="img-spon" />
                <img src="https://www.tribuneo.id/img/profile/2018-04-06_5ac716feb9084.png" alt="Berita News" className="img-spon" />
                <img src="https://4.bp.blogspot.com/-cRtTFVL7aE0/XDv6R0glUaI/AAAAAAAAACA/7F0Bg_z3htgAH1efgZY8nTSf1sDOqyFngCLcBGAs/s1600/Picture2.png" alt="Radar Lampung" className="img-spon" />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Contact;
