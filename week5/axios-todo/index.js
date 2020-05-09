const listArea = document.querySelector("#todoList")
listArea.addEventListener("click", completeOrDelete)
const baseURL = "https://api.vschool.io/sabrinalewis/todo/"


// mark todo as completed or delete todo
function completeOrDelete(e) {
    if (e.target.type == "checkbox") {
        let currentTodo = e.target.id
        let checkBox = e.target

        if (checkBox.checked) {
            let updatedCompletion = {
                completed: true
            }    
            axios.put(baseURL + currentTodo, updatedCompletion)
                .then(response => console.log(response))
                .catch(err => alert(err))    

        } else if (checkBox.checked == false) {
            let updatedCompletion = {
                completed: false
            }
            axios.put(baseURL + e.target.id, updatedCompletion)
                .then(response => console.log(response))
                .catch(err => alert(err))    
        }

        if (checkBox.checked) {
        checkBox.parentNode.style.textDecoration = "line-through";
        checkBox.parentNode.style.color = "gray";
        checkBox.parentNode.style.fontStyle = "italic";
        } else {
            checkBox.parentNode.style = null;
        }
            
    } else if (e.target.type == "submit") {
        axios.delete(baseURL + e.target.id)
        .then(response => getTodoList())
        .catch(response => 
            alert("There was a problem deleting your todo :("))    
    }

}


// call todos from api
function getTodoList() {
axios.get(baseURL)
    .then(response => listTodos(response.data))
    .catch(err => alert(err))
}


// List todos on page
function listTodos(todoList) {
    document.getElementById("todoList").innerHTML = ""

    for (let i=0; i<todoList.length; i++){
        const listItem = document.createElement("div")
        listItem.setAttribute("id", todoList[i]._id)
        listItem.setAttribute("class", "listItem")

        listItem.innerHTML = `
            <input type="checkbox" class="checkbox" id=${todoList[i]._id} />
            <span id="title">${todoList[i].title}</span>
            <button class="deleteButton" id=${todoList[i]._id} >X</button>
            <br>
            <span id="description">${todoList[i].description}</span>
            <br>
            <span id="price">Price:</span> $ ${todoList[i].price}
            <br>
            <img src="${todoList[i].imgUrl}"/>
            <br>`
        listArea.appendChild(listItem)         
        
        if (listItem.completed == "true") {
            listItem.checked = true
        } 

    }
}

getTodoList()


// Add todos to list
const form = document.todoForm

form.addEventListener("submit", function(event) {
    event.preventDefault()

    const newTodo = {
        title: form.title.value,
        description: form.description.value,
        price: form.price.value,
        imgUrl: form.imgUrl.value
    }

    axios.post(baseURL, newTodo)
    .then(response => getTodoList())
    .catch(error => alert("There was a problem posting your new Todo."))

    form.title.value = "";
    form.description.value = "";
    form.price.value = "";
    form.imgUrl.value = "";

})
