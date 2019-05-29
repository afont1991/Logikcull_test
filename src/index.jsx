import React from "react";
import ReactDOM from "react-dom";

import Application from "app";
import Store from "store";
import Theme from "theme";

const LogikcullRecords = () => (
  <Theme>
    <Store>
      <Application />
    </Store>
  </Theme>
);

ReactDOM.render(
  <LogikcullRecords />,
  document.getElementById("LogikcullRecords"),
);
