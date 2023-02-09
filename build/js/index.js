"use strict";
let myname = "max";
let age = 45;
if (age < 50) {
    age += 10;
}
console.log(age);
function getName(user) {
    return "max";
}
let emp = {
    id: 12,
    age: "12",
    uname: "max"
};
var Weekdays;
(function (Weekdays) {
    Weekdays[Weekdays["MONDAY"] = 1] = "MONDAY";
    Weekdays[Weekdays["TUESDAY"] = 2] = "TUESDAY";
    Weekdays[Weekdays["WEDNESDAY"] = 3] = "WEDNESDAY";
    Weekdays[Weekdays["THURSDAY"] = 4] = "THURSDAY";
    Weekdays[Weekdays["FRIDAY"] = 5] = "FRIDAY";
})(Weekdays || (Weekdays = {}));
let secondDay = Weekdays.TUESDAY;
console.log(secondDay);
//# sourceMappingURL=index.js.map