import React from "react";
function Footer(props) {
  return (
    <div class="section_footer">
      <div
        id="section_footer_child"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <i
          class="fas fa-square-full"
          style={{
            fontSize: "5px",
            padding: "5px",
            marginLeft: "-5px",
            color: "#0090FF",
          }}
        ></i>
        <h3>{props.title}</h3>
      </div>
      <p>{props.text1}</p>
      <p>{props.text2}</p>
      <p>{props.text3}</p>
      <p>{props.text4}</p>
      <p>{props.text5}</p>
    </div>
  );
}
export default Footer;
