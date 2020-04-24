let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        const jsonData = xhr.responseText;
        const data = JSON.parse(jsonData);
        const list = document.getElementById("root");
        list.innerHTML = "<ul>" + data.objects[0].pokemon.map(function(item){
            return `<li><strong>Pokemon Name: </strong>${Object.values(item)[0]}</li>`
        }) + "</ul>";
    }
}

xhr.open("GET", "https://api.vschool.io/pokemon", true);

xhr. send();