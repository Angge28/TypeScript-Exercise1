var cityList: any[] = [];

export const addData = (data: any[]) => {
    cityList.push(data);
    displayData();
    localStorage.setItem("Data", JSON.stringify(cityList));
}

export const displayData = () => {
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