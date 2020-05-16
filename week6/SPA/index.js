const main = document.getElementById("main")

async function getData() {
    try {
        const response = await axios.get("https://swapi.dev/api/people/")
        listPerson(response)
    }
    catch(error) {
        console.log(error)
    }
}

getData()

async function listPerson(response) {
    for (let i = 0; i < response.data.results.length; i++) {

        const listItem = document.createElement("div")
        listItem.setAttribute("class", "listItem")
        const h2 = document.createElement("h2")
        h2.style.color = "lightblue"
        const h4 = document.createElement("h4")
        h4.style.color = "violet"

        h2.textContent = `Name: ${response.data.results[i].name}`

        const homeworld = await axios.get(response.data.results[i].homeworld)
        const species = await axios.get(response.data.results[i].species)
        const vehicles = response.data.results[i].vehicles
        const starships = response.data.results[i].starships

        // console.log(vehicles)

        h4.innerHTML = `Homeworld: ${homeworld.data.name}
        <br>Species: ${species.data.name}`
        // <br>Vehicles: ${vehicles.data.name}
        // <br>Starships: ${starships.data.name}`

        listVehicles(vehicles, listItem)
        listStarships(starships, listItem)

        main.appendChild(listItem)
        listItem.appendChild(h2)
        listItem.appendChild(h4)
    }

    async function listVehicles(vehicles, listItem) {
        for (let v = 0; v < vehicles.length; v++) {
            const h4 = document.createElement("h4")
            h4.style.color = "lightgreen"
            const characterVehicles = await axios.get(vehicles[v])
            h4.innerHTML = `Vehicles: ${characterVehicles.data.name}
            <br>Model: ${characterVehicles.data.model}`
            listItem.appendChild(h4)
        }
    }

    async function listStarships(starships, listItem) {
        for (let s = 0; s < starships.length; s++) {
            const h4 = document.createElement("h4")
            h4.style.color = "cyan"
            const characterStarships = await axios.get(starships[s])
            console.log(characterStarships)
            h4.innerHTML = `Starships: ${characterStarships.data.name}
            <br>Model: ${characterStarships.data.model}`
            listItem.appendChild(h4)
        }
    }

}

