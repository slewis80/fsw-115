const swapiData = document.querySelector("#swapiData");

const swapiButton = document.querySelector("#swapiButton");

function getSwapiData() {
    axios.get("https://swapi.dev/api/people/?")
    .then(response => {
        swapiData.innerHTML = response.data.results.map(function(item) {
            return `<p>Name: ${Object.values(item)[0]}<br>
            Height: ${Object.values(item)[1]}<br>
            Gender: ${Object.values(item)[7]}</p>`
        }).join('')
    })
    .catch(err => alert(err))

}
swapiButton.addEventListener("click", getSwapiData);