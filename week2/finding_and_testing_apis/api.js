let swapiData = {
    "name": "R2-D2",
    "height": "96",
    "mass": "32",
    "hair_color": "n/a",
    "skin_color": "white, blue",
    "eye_color": "red",
    "birth_year": "33BBY",
    "gender": "n/a",
    "homeworld": "http://swapi.dev/api/planets/8/",
    "films": [
        "http://swapi.dev/api/films/1/",
        "http://swapi.dev/api/films/2/",
        "http://swapi.dev/api/films/3/",
        "http://swapi.dev/api/films/4/",
        "http://swapi.dev/api/films/5/",
        "http://swapi.dev/api/films/6/"
    ],
    "species": [
        "http://swapi.dev/api/species/2/"
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-10T15:11:50.376000Z",
    "edited": "2014-12-20T21:17:50.311000Z",
    "url": "http://swapi.dev/api/people/3/"
};

const values = Object.values(swapiData);
const entries = Object.entries(swapiData);

const dataSet = document.getElementById('dataSet');

dataSet.innerHTML = '<ul>' + entries.map(function (item) {  
    return `<li><span>keys:</span> ${item[0]} <span>values:</span> ${item[1]} </li>`;         
}).join('') + '</ul>'
