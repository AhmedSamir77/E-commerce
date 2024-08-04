import React from "react";
import "./Footer.module.css";
import img1 from "../../assets/images/appstore.png";

import img2 from "../../assets/images/Google-Play-Logo-PNG.png";

export default function Footer() {
  return (
    <>
      <div className=" w-100 fontos mt-5">
        <div className="  bg-main-light p-3 ps-5 pb-5">
          <h4>Get the FreshCart app</h4>
          <small>
            We will send you the link, open it on your phone to download the
            app.
          </small>

          <div class="mb-3 d-flex align-items-center justify-content-around">
            <input
              type="email"
              className="form-control  mt-2"
              id="email"
              placeholder="Email .."
              style={{ width: "1000px" }}
            />

            <button
              type="button"
              class="btn bg-main mt-2 "
              style={{ width: "250px", height: "40px" }}
            >
              Share App Link
            </button>
          </div>

          <div className="lastP d-flex align-items-center  ">
            <div className="d-flex align-items-center">
              <h6 className="pt-2">Payment Partners</h6>
              <i
                style={{ color: "red" }}
                class="fa-solid fa-credit-card ms-2 cursor-pointer"
              ></i>
              <i
                style={{ color: "blue" }}
                class="fa-brands fa-cc-paypal ms-2 cursor-pointer"
              ></i>
              <i
                style={{ color: "orange" }}
                class="fa-brands fa-cc-visa ms-2 cursor-pointer"
              ></i>
              <i class="fa-brands fa-cc-amazon-pay ms-2 cursor-pointer"></i>
            </div>
            <div className="w-75 d-flex align-items-center justify-content-end">
              <h6 className="pt-2">Get deliveries with FreshCart</h6>
              <img className="imgCust" src={img1} alt="" />
              <img className="imgCust" src={img2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
