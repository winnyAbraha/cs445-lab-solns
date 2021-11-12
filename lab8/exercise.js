
const { from } = rxjs;
window.onload = function () {

    let btn = document.getElementById('btn')

    btn.addEventListener('click', function () {
        let input = document.getElementById("input").value;
        fetch("https://randomuser.me/api/?results=" + input).then(data => data.json()).then(item => { print(item.results) })
    })
    function print(item) {
        console.log(item)
        const data = from(item);
        data.subscribe({
            next: x => {


                let con = document.getElementById("con")

                con.innerHTML += `<div class = "row">
                 <div class= "col-md-4" >
                 <h4>${x.name.first}</h4>
                 </div>
             <div class="col-md-4">
                  <h4>${x.location.street.number} ${x.location.street.number}</h4>
                  <h6>${x.location.city}${x.location.state} ${x.location.country}${x.location.postcode}</h6>
                  <h6></h6>
            </div>`

            }
        })
    }



}





