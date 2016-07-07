"use strict";

const React = require("react"),
    ReactDOM = require("react-dom"),
    Component = require("./lib/component-styled.jsx");

const props = {
    markers: [
        "January",
        "February",
        "March",
        "April",
        "May"
    ],
    startMarker: false,
    endMarker: false,
    endGradient: false,
    percent: 60,
    shadedPercent: 90
};

ReactDOM.render(
    <Component {...props} />,
    document.getElementById("component-container")
);
