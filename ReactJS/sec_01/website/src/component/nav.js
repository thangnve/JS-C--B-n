import React from "react";
import "../ccss/Nav.css";
function Nav(props) {
  return (
    <>
      <p className="row" style={{ width: `${props.rong}` }}></p>
      <div className="menuMin" style={{ width: `${props.dai}` }}>
        <div className="menu_title">
          <h2>{props.title}</h2>
        </div>
        <div className="nav">
          <ul>
            <li>
              <a>{props.name}</a>
            </li>
          </ul>
        </div>
      </div>
      <hr style={{ width: `${props.hr}`, marginLeft: "10px" }}></hr>
    </>
  );
}

export default Nav;
