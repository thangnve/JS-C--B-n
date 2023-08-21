import React from "react";
import "../ccss/box.css";
function Box(props) {
  return (
    <>
      <section>
        <div
          class="section_video_img"
          style={{ height: `${props.he}`, marginLeft: `${props.left}` }}
        >
          <img src={props.img} alt="" width={props.rong} height={props.cao} />
          <h4 style={{ width: `${props.width}` }}>{props.title}</h4>
          <div
            class="section_video_text"
            style={{
              width: `${props.text_content}`,
              marginLeft: `${props.text_left}`,
            }}
          >
            <p style={{ width: `${props.text}`, color: "#9B9B9B" }}>
              {props.content}
            </p>
            <i style={{ color: "#9B9B9B" }} class={props.icon}></i>
            <p style={{ color: "#9B9B9B" }}>{props.date}</p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Box;
