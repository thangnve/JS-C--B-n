import React from "react";
import "../ccss/banner.css";
function banner(props) {
  return (
    <section>
      <article>
        <div id="banner_01">
          <h3 id="banner_01_content">
            Các bài tập khởi động chân, chạy bộ, chống đẩy, plank... giúp tăng
            <br /> sức bền và khỏe cơ bụng, cơ chân, theo Be Fit.
          </h3>
          <img src={props.banner1} alt="" width="800" height="696" />
        </div>
        <div id="banner_02">
          <h3 id="banner_02_title">
            12 động tác hít đất từ cơ bản đến nâng cao cho <br /> phái mạnh
          </h3>
          <img src={props.banner2} alt="" width="616" height="418" />
          <div id="banner_02_content">
            <h3 id="content_01">
              Hướng dẫn tư thế hít đất <br /> đúng chuẩn
            </h3>
            <h3 id="content_02">
              Chàng trai một tháng hít đất <br /> 200 cái mỗi ngày
            </h3>
            <img src={props.banner3} alt="" width="305" height="269" />
            <img src={props.banner4} alt="" width="305" height="269" />
          </div>
        </div>
      </article>
    </section>
  );
}
export default banner;
