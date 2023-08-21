import React from "react";
import "../ccss/Category.css";
function Category(props) {
  return (
    <>
      <div id="section_type">
        <div class="section_type_01">
          <h3 style={{ background: `${props.color}` }}>{props.title}</h3>
          <img src={props.img} alt="" width="450" height="290" />
          <h4>{props.content}</h4>
          <p>{props.text}</p>
        </div>
      </div>
    </>
  );
}
export default Category;
