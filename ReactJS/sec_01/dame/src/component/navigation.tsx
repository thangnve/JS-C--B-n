import React from "react";
function Navigation(props: any) {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container">
        <a href="#" className="navbar-brand">
          <img src={props.logo} alt="" />
        </a>
        <ul className="nav mt-1 font-weight-bolder">
          <li className="nav-item">
            <a href="" className="nav-link text-dark fw-bold">
              {props.nav1}
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link fw-bold">
              {props.nav2}
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link text-dark fw-bold">
              {props.nav3}
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link text-dark fw-bold">
              {props.nav4}
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link text-dark fw-bold">
              {props.nav5}
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link text-dark fw-bold">
              {props.nav6}
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link text-dark fw-bold">
              {props.nav7}
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link text-dark fw-bold">
              {props.nav8}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navigation;
