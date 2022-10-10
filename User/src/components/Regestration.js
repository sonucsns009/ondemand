// fname
// email address
// contry code
// mobile Number
// password

import React, { useEffect, useState } from "react";
import server from "../Const";
import { useNavigate } from "react-router-dom";

const Regestration = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [fullname, setFullname] = useState("");
  const [fullnameError, setFullnameError] = useState(false);
  const [emailaddress, setEmailaddress] = useState("");
  const [emailaddressError, setEmailaddressError] = useState(false);
  const [upassword, setupassword] = useState("");
  const [upasswordError, setupasswordError] = useState(false);
  const [mobilenumber, setMobilenumber] = useState("");
  const [mobilenumberError, setMobilenumberError] = useState(false);
  const [confirmpassword, setconfirmpassword] = useState("");
  const [confirmpasswordError, setconfirmpasswordError] = useState("");
  const [country_code, setCountry_code] = useState("+" + 91);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let res = await fetch(`${server}/api/v1/country`);
    res = await res.json();
    setData(res);
  };

  const handelsubmit = (e) => {
    e.preventDefault();
    const nameCheck = /^[a-zA-Z ]{3,}$/;
    const emailCheck = /^[a-zA-Z0-9!#$%&]{7,}@[a-z]{3,5}.[a-z]{2,3}$/;
    const mobilenoCheck = /^[987][0-9]{9}$/;
    const passwordCheck = /^[a-zA-Z0-9$#&!@]{7,16}$/;

    if (fullname !== "") {
      if (!nameCheck.test(fullname)) {
        setFullnameError("**enter a valid name");
      } else {
        setFullnameError(false);
      }
    } else {
      setFullnameError("**name is required");
    }
    if (emailaddress !== "") {
      if (!emailCheck.test(emailaddress)) {
        setEmailaddressError("**enter a valid email address");
      } else {
        setEmailaddressError(false);
      }
    } else {
      setEmailaddressError("**email address is required");
    }

    if (upassword !== "") {
      if (!passwordCheck.test(upassword)) {
        setupasswordError("**enter a valid password");
      } else {
        setupasswordError(false);
      }
    } else {
      setupasswordError("**password is required");
    }

    if (confirmpassword !== "") {
      if (confirmpassword !== upassword) {
        setconfirmpasswordError("**password dose`t matched");
      } else {
        setconfirmpasswordError(false);
      }
    } else {
      setconfirmpasswordError("**confirm password requires");
    }
    if (mobilenumber !== "") {
      if (!mobilenoCheck.test(mobilenumber)) {
        setMobilenumberError("**enter valid mobile number");
      } else {
        setMobilenumberError(false);
      }
    } else {
      setMobilenumberError("**mobile number is required");
    }
    if (!mobilenoCheck.test(mobilenumber)) {
      setMobilenumberError("**mobile number is required");
    } else {
      navigate("/otpcheck/" + mobilenumber);
    }
  };

  return (
    <div>
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Regestration</h2>
          </div>

          <div className="row gx-lg-0 gy-4">
            <div className="col-lg-4">
              <div className="info-container infoContainer d-flex flex-column align-items-center justify-content-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1533/1533105.png"
                  alt="..."
                />
                <h1 style={{ color: "white" }}>
                  OnDemand<span>.</span>
                </h1>
              </div>
            </div>

            <div className="col-lg-8">
              <form
                onSubmit={handelsubmit}
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
                    />
                    <div>
                      {fullnameError && (
                        <div className="error-msg" style={{ color: "red" }}>
                          {fullnameError}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      value={emailaddress}
                      placeholder="Your Email"
                      onChange={(e) => setEmailaddress(e.target.value)}
                    />
                    <div>
                      {emailaddressError && (
                        <div className="error-msg" style={{ color: "red" }}>
                          {emailaddressError}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="row">
                    <div className=" col-md-6 form-group  mt-3">
                      <input
                        type="password"
                        className="form-control"
                        name="upassword"
                        id="upassword"
                        value={upassword}
                        placeholder="Password"
                        onChange={(e) => setupassword(e.target.value)}
                      />
                      <div>
                        {upasswordError && (
                          <div className="error-msg" style={{ color: "red" }}>
                            {upasswordError}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className=" col-md-6 form-group mt-3">
                      <input
                        type="password"
                        className="form-control"
                        name="confirmpassword"
                        id="confirmpassword"
                        value={confirmpassword}
                        placeholder="Confirm Password"
                        onChange={(e) => setconfirmpassword(e.target.value)}
                      />
                      <div>
                        {confirmpasswordError && (
                          <div className="error-msg" style={{ color: "red" }}>
                            {confirmpasswordError}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="row">
                    <div className=" col-md-3 form-group  mt-3">
                      <select
                        value={country_code}
                        className="form-control"
                        name="countrycode"
                        onChange={(e) => setCountry_code(e.target.value)}
                      >
                        {data.map((val) => {
                          return (
                            <option value={"+" + val.phonecode}>
                              {val.name} ({"+" + val.phonecode})
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className=" col-md-9 form-group mt-3">
                      <input
                        type="text"
                        className="form-control"
                        name="mobno"
                        id="mobno"
                        placeholder="Mobile Number"
                        value={mobilenumber}
                        maxLength={10}
                        onChange={(e) => setMobilenumber(e.target.value)}
                      />
                      <div>
                        {mobilenumberError && (
                          <div className="error-msg" style={{ color: "red" }}>
                            {mobilenumberError}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-5">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Regestration;
