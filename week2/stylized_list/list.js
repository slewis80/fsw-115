let data_set_simple = {
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


let data_set_complex = 
[
    {
        "name": "Luke Skywalker",
        "height": "172",
        "mass": "77",
        "hair_color": "blond",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "19BBY",
        "gender": "male",
        "homeworld": "http://swapi.dev/api/planets/1/",
        "films": [
            "http://swapi.dev/api/films/1/",
            "http://swapi.dev/api/films/2/",
            "http://swapi.dev/api/films/3/",
            "http://swapi.dev/api/films/6/"
        ],
        "species": [],
        "vehicles": [
            "http://swapi.dev/api/vehicles/14/",
            "http://swapi.dev/api/vehicles/30/"
        ],
        "starships": [
            "http://swapi.dev/api/starships/12/",
            "http://swapi.dev/api/starships/22/"
        ],
        "created": "2014-12-09T13:50:51.644000Z",
        "edited": "2014-12-20T21:17:56.891000Z",
        "url": "http://swapi.dev/api/people/1/"
    },
    {
        "name": "C-3PO",
        "height": "167",
        "mass": "75",
        "hair_color": "n/a",
        "skin_color": "gold",
        "eye_color": "yellow",
        "birth_year": "112BBY",
        "gender": "n/a",
        "homeworld": "http://swapi.dev/api/planets/1/",
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
        "created": "2014-12-10T15:10:51.357000Z",
        "edited": "2014-12-20T21:17:50.309000Z",
        "url": "http://swapi.dev/api/people/2/"
    },
    {
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
    },
    {
        "name": "Darth Vader",
        "height": "202",
        "mass": "136",
        "hair_color": "none",
        "skin_color": "white",
        "eye_color": "yellow",
        "birth_year": "41.9BBY",
        "gender": "male",
        "homeworld": "http://swapi.dev/api/planets/1/",
        "films": [
            "http://swapi.dev/api/films/1/",
            "http://swapi.dev/api/films/2/",
            "http://swapi.dev/api/films/3/",
            "http://swapi.dev/api/films/6/"
        ],
        "species": [],
        "vehicles": [],
        "starships": [
            "http://swapi.dev/api/starships/13/"
        ],
        "created": "2014-12-10T15:18:20.704000Z",
        "edited": "2014-12-20T21:17:50.313000Z",
        "url": "http://swapi.dev/api/people/4/"
    }];

const values = Object.values(data_set_simple);
const entries = Object.entries(data_set_simple);

const app2 = document.getElementById('app2');

app2.innerHTML = '<ul>' + entries.map(function (item) {  
    return `<li><span>keys:</span> ${item[0]} <span>values:</span> ${item[1]} </li>`;         
}).join('') + '</ul>'

const app3 = document.getElementById('app3');

app3.innerHTML = '<ul>' + data_set_complex.map(function (el) {
    return `<li><span>keys:</span> ${Object.keys(el)} <span>values:</span> ${Object.values(el)} </li>`;
}).join('') + '</ul>'
