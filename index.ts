let nameOfCity = (document.getElementById("name_of_city") as HTMLInputElement);
let country = (document.getElementById("country") as HTMLInputElement);
let population = (document.getElementById("population") as HTMLInputElement);
let searchText = (document.getElementById("searchText") as HTMLInputElement);
let saveBtn = document.getElementById("submitBtn")
let myList = document.getElementById("myList")
let searchBtn = document.getElementById("searchBtn")

interface InfoOfCity {
    city: string,
    country: string,
    population: string
}

let cityInfoArray:InfoOfCity[] = [];
let searchResultArray:InfoOfCity[] = [];

const addCityInfo = (data: InfoOfCity) =>{
        cityInfoArray.push(data)
    }

export const displayCities = (data:InfoOfCity[])=>{
   if(myList) {
    while(myList.hasChildNodes() && myList.firstChild) {
        myList.removeChild(myList.firstChild);
    }
}

data.forEach((item:InfoOfCity) =>{
    let cityLi = (document.createElement("li") as HTMLLIElement)
    let countryLi = document.createElement("li")
    let populationLi = document.createElement("li")
    let br = document.createElement("br")

    cityLi.innerText = "City: " + item.city
    countryLi.innerText = "Country: " + item.country
    populationLi.innerText = "Population " + item.population
    if(myList){
        myList.appendChild(cityLi)
        myList.appendChild(countryLi)
        myList.appendChild(populationLi)
        myList.appendChild(br)
    }
})
}

saveBtn?.addEventListener('onClick', () => {
    var newCity: InfoOfCity = {
        city:  nameOfCity.value,
        country: country.value,
        population: population.value
     }
     
     addCityInfo(newCity);
     console.log(cityInfoArray)

     nameOfCity.value = ""
     country.value = ""
     population.value = ""

     displayCities(cityInfoArray);

})

searchBtn?.addEventListener('onClick', () => {
     searchResultArray = cityInfoArray.filter((data: InfoOfCity) => {
           
        if((data.city.toLocaleLowerCase()).includes(searchText.value)) {
            return data
           }
           else if((data.country.toLocaleLowerCase()).includes(searchText.value)){
            return data
           }
           else{
            const message = document.createElement("li")
            message.innerText = " Result not found"
            if(myList){
                myList?.appendChild(message)
            }
        }
           
    } )
   
    console.log(searchResultArray);
    displayCities(searchResultArray)
    searchText.value = ""
}
)