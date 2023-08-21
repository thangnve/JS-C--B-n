import React from "react";
import "../ccss/Bar.css";
function Bar(props) {
  return (
    <div class="section_new_bar" style={{ marginTop: `${props.top}` }}>
      <i class="fas fa-square-full"></i>
      <h3>{props.title}</h3>
      <p></p>
    </div>
  );
}
export default Bar;
