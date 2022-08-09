"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayInfo = exports.saveInfo = void 0;
var cityList = [];
const saveInfo = (info) => {
    cityList.push(info);
    (0, exports.displayInfo)();
    localStorage.setItem("Data", JSON.stringify(cityList));
};
exports.saveInfo = saveInfo;
const displayInfo = () => {
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
exports.displayInfo = displayInfo;
