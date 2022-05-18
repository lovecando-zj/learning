"use strict";
var res;
(function (res) {
    res[res["No"] = 0] = "No";
    res[res["Yes"] = 1] = "Yes";
})(res || (res = {}));
function respond(recipient, message) {
    console.log(message);
    // ...
}
respond("Princess Caroline", res.Yes);
