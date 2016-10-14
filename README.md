[![Build Status](https://travis-ci.org/ItsAsbreuk/itsa-react-progressline.svg?branch=master)](https://travis-ci.org/ItsAsbreuk/itsa-react-progressline)

Progressline to simulate milestones.

Sorry, due to spare time, this module is not yet documented and tested.
I do wanted to be available on npm though (and am using it myself)

## How to use:

```js
const props = {
    endMarker: false,
    markers: [
        "January",
        "February",
        "March",
        "April",
        "May"
    ],
    percent: 60,
    startMarker: false
};

ReactDOM.render(
    <Component {...props} />,
    document.getElementById("component-container")
);
```
