import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="contanier">
        <nav
          className="navbar fixed-bottom navbar-light bg-dark "
      
        >
          <div className="container-fluid d-flex justify-content-center">
            <span
              className="navbar-brand mb-0 h1  "
              style={{ color: "cornsilk" }}
            >
              By: SateeshKumbhakar &copy; | 2021-22 All Right Reservered{" "}
            </span>
          </div>
        </nav>
      </div>
    );
  }
}
