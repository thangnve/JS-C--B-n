import React from "react";
import "../ccss/Related.css";
function Related(props) {
  return (
    <>
      <section>
        <div class="related" style={{ marginLeft: `${props.left}` }}>
          <div class="related_img">
            <img src={props.img} alt="" width="100" height="" />
          </div>
          <div class="related_content">
            <h4
              style={{
                color: "#3C3C3C",
                fontSize: "14px",
                opacity: "1",
              }}
            >
              {props.content}
            </h4>
            <div className="related_content_chat" style={{ color: "#9B9B9B" }}>
              <p>{props.time}</p>
              <p>{props.comment}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Related;
