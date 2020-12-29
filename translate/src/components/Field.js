import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
  static contextType = LanguageContext;
  // static adds a property directly to the class itself.
  // equals to doing: Button.contextType = LanguageContext; outside the class.

  render() {
    const text = this.context === "english" ? "Name" : "Naam";
    return (
      <div className={"ui field"}>
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
