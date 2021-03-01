import React, { Component } from "react";
import { Button } from "./Components";
import { operators } from "./Constants";
import "./style.css";

export default class index extends Component {
  render() {
    return (
      <div className="outer-section">
        <div style={{ backgroundColor: "black", padding: "10px" }}>
          <div className="display-section"></div>
          <div className="row">
            {operators.map((item, key) => (
              <div className="column-4">
                <Button name={item.value} key={key} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
