"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayCities = void 0;
let nameOfCity = document.getElementById("name_of_city");
let country = document.getElementById("country");
let population = document.getElementById("population");
let searchText = document.getElementById("searchText");
let saveBtn = document.getElementById("submitBtn");
let myList = document.getElementById("myList");
let searchBtn = document.getElementById("searchBtn");
let cityInfoArray = [];
let searchResultArray = [];
const addCityInfo = (data) => {
    cityInfoArray.push(data);
};
const displayCities = (data) => {
    if (myList) {
        while (myList.hasChildNodes() && myList.firstChild) {
            myList.removeChild(myList.firstChild);
        }
    }
    data.forEach((item) => {
        let cityLi = document.createElement("li");
        let countryLi = document.createElement("li");
        let populationLi = document.createElement("li");
        let br = document.createElement("br");
        cityLi.innerText = "City: " + item.city;
        countryLi.innerText = "Country: " + item.country;
        populationLi.innerText = "Population " + item.population;
        if (myList) {
            myList.appendChild(cityLi);
            myList.appendChild(countryLi);
            myList.appendChild(populationLi);
            myList.appendChild(br);
        }
    });
};
exports.displayCities = displayCities;
saveBtn === null || saveBtn === void 0 ? void 0 : saveBtn.addEventListener('onClick', () => {
    var newCity = {
        city: nameOfCity.value,
        country: country.value,
        population: population.value
    };
    addCityInfo(newCity);
    console.log(cityInfoArray);
    nameOfCity.value = "";
    country.value = "";
    population.value = "";
    (0, exports.displayCities)(cityInfoArray);
});
searchBtn === null || searchBtn === void 0 ? void 0 : searchBtn.addEventListener('onClick', () => {
    searchResultArray = cityInfoArray.filter((data) => {
        if ((data.city.toLocaleLowerCase()).includes(searchText.value)) {
            return data;
        }
        else if ((data.country.toLocaleLowerCase()).includes(searchText.value)) {
            return data;
        }
        else {
            const message = document.createElement("li");
            message.innerText = " Result not found";
            if (myList) {
                myList === null || myList === void 0 ? void 0 : myList.appendChild(message);
            }
        }
    });
    console.log(searchResultArray);
    (0, exports.displayCities)(searchResultArray);
    searchText.value = "";
});
