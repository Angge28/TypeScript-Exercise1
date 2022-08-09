var cityList: any[] = [];

export const saveInfo = (info: any[]) => {
    cityList.push(info);
    displayInfo();
    localStorage.setItem("Data", JSON.stringify(cityList));
}

export const displayInfo = () => {
    let list = document.getElementById("my_list");
    if(list) {
        while(list.hasChildNodes() && list.firstChild){
            list.removeChild(list.firstChild);
        }
    }
    cityList.forEach((item) => {
        let li = document.createElement("li")
        li.innerText = item;
        if(list){
            list.appendChild(li);
             
        }
    })
}