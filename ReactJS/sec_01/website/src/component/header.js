import React from "react";
import "../ccss/headerStyle.css";
function header(props) {
  return (
    <header>
      <div id="header-bar">
        <div id="logo">
          <img src={props.img} alt="Logo" height="60" width="182" />
        </div>
        <div id="nav">
          <ul>
            <li>
              <a>
                <i class="fas fa-home"></i>
              </a>
            </li>
            |
            <li>
              <a href="">THỜI SỰ</a>
            </li>
            |
            <li>
              <a href="">CHỮA BỆNH</a>
            </li>
            |
            <li>
              <a href="">PHÒNG BỆNH</a>
            </li>
            |
            <li>
              <a href="">ĐÔNG Y</a>
            </li>
            |
            <li>
              <a href="">CHĂM SÓC ĐẶC BIỆT</a>
            </li>
            |
            <li>
              <a href="">TÂM LÝ</a>
            </li>
            |
            <li>
              <a href="">DINH DƯỠNG</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
export default header;
