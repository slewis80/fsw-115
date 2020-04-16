let catFacts = {
            "fact": "The first cat in space was a French cat named Felicette (a.k.a. “Astrocat”) In 1963, France blasted the cat into outer space. Electrodes implanted in her brains sent neurological signals back to Earth. She survived the trip.",
            "length": 224
        };

const value = Object.values(catFacts);
const entries = Object.entries(catFacts);

let fact = document.createElement("p");
fact.innerHTML = catFacts.fact;
fact.style.fontSize = "20px";
fact.style.textAlign = "center";
document.getElementById("apiData").appendChild(fact);

