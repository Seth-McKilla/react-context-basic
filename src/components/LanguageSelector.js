import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div>
        Select a language:
        <i
          className="flag us"
          style={{ cursor: "pointer", margin: "5px" }}
          onClick={() => this.context.onLanguageChange("english")}
        />
        <i
          className="flag nl"
          style={{ cursor: "pointer", margin: "5px" }}
          onClick={() => this.context.onLanguageChange("dutch")}
        />
      </div>
    );
  }
}

export default LanguageSelector;
