import React from "react";
import "./style.css";

export default function Button(props) {
  return (
    <div className="btn_wrapper" key={props.key}>
      {props.name}
    </div>
  );
}
