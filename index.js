"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayData = exports.addData = void 0;
var cityList = [];
const addData = (data) => {
    cityList.push(data);
    (0, exports.displayData)();
    localStorage.setItem("Data", JSON.stringify(cityList));
};
exports.addData = addData;
const displayData = () => {
    let list = document.getElementById("my_list");
    if (list) {
        while (list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }
    cityList.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        if (list) {
            list.appendChild(li);
        }
    });
};
exports.displayData = displayData;
