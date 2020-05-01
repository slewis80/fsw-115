const main = document.querySelector("#root")

axios.get("https://api.vschool.io/sabrinalewis/todo")
    .then(response => {
        for (let i=0; i<response.data.length; i++){
            const ul = document.createElement("ul")
            ul.setAttribute("id", "myUL")
            ul.innerHTML = `<li id="listItem"><input type="checkbox" id="checkbox" />
            <span id="title">${response.data[i].title}</span>
            <button id="deleteButton">X</button>
            <br>
            <span id="description"><em>${response.data[i].description}</em></span>
            <br>
            <span id="price">Price:</span> $ ${response.data[i].price}
            <br>
            <img src="${response.data[i].imgUrl}"/>
            </li>`
            main.appendChild(ul)

            let checkBox = document.getElementById("checkbox")
            checkBox.addEventListener("change", strikethrough)
            let li = document.getElementById("listItem")
        
            function strikethrough() {
                    if (checkBox.checked == true) {
                        li.style.textDecoration = "line-through";
                        li.style.color = "gray";
                        } else {
                            li.style.textDecoration = "none";
                            li.style.color = "black";
                        }
                  }

            let deleteButton = document.querySelector("#deleteButton")
            deleteButton.addEventListener("click", function() {
            li.removeChild(deleteButton);
            document.querySelector("#myUL").removeChild(li);
            })
              
        
        }
    })
    .catch(err => alert(err))
