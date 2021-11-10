window.onload = function () {
    getData()
    document.getElementById("btn").onclick = getData
}

async function getData() {
    fetch("https://randomuser.me/api/?results=5")
        .then(response => response.json())
        .then(data => createTaskCard(data.results));
    
}

function createTaskCard(array) {
     let task = "";
    for (let i = 0; i < array.length; i++) {
           task += `<div class = "row">
                 <div class= "col-md-4" >
                    <img src=${array[i].picture.large} />
                 </div>
             <div class="col-md-4">
                  <h4>${array[i].name.first},${array[i].name.last}</h4>
                  <h6>${array[i].cell}</h6>
                  <h6>${array[i].email}</h6>
            </div>`
        }
        document.getElementById("con").innerHTML=task;
 

}