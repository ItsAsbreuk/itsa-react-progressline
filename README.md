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


## About the css

You need the right css in order to make use of `itsa-react-table`. There are 2 options:

1. You can use the css-files inside the `css`-folder.
2. You can use: `Component = require("itsa-react-table/lib/component-styled.jsx");` and build your project with `webpack`. This is needed, because you need the right plugin to handle a requirement of the `scss`-file.


[View live example](http://projects.itsasbreuk.nl/react-components/itsa-progressline/component.html)

[API](http://projects.itsasbreuk.nl/react-components/itsa-react-progressline/api/)


#### If you want to express your appreciation

Feel free to donate to one of these addresses; my thanks will be great :)

* Ether: 0xE096EBC2D19eaE7dA8745AA5D71d4830Ef3DF963
* Bitcoin: 37GgB6MrvuxyqkQnGjwxcn7vkcdont1Vmg
