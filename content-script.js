"use strict";
var script = document.createElement("script");
script.setAttribute("src", chrome.extension.getURL("/embeded-script.js"));
document.body.appendChild(script);

