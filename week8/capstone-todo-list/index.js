const listArea = document.querySelector("#todoList")
listArea.addEventListener("click", handleEventClick)
const baseURL = "https://api.vschool.io/sabrinalewis/todo/"

function handleEventClick(e) {
    console.log(e.target.id)
    if (e.target.className == "checkbox") {
        completeOrDelete(e)
    } else if (e.target.className == "deleteButton") {
        completeOrDelete(e)
    } else if (e.target.className == "title") {
        editTodo(e)
    } else if (e.target.className == "description") {
        editTodo(e)
    } else if (e.target.className == "listItem") {
        console.log(e.target.id)
        cancelEditTodo(e)
    } else if (e.target.className == "editInputButton") {
        putEditedTodo(e)
    }

}

// Return todos to normal view
function cancelEditTodo(e) {
    let currentTodoTitle = "titleDisplay" + e.target.id;
    let currentTodoTitleEditor = "titleEditInput" + e.target.id;
    let currentTodoTitleEditButton = "titleEditButton" + e.target.id;
    let titleDisplay = document.getElementById(currentTodoTitle);
    let titleEditor = document.getElementById(currentTodoTitleEditor);
    let titleEditButton = document.getElementById(currentTodoTitleEditButton);
    titleDisplay.style.display = "inline";
    titleEditor.style.display = "none";
    titleEditButton.style.display = "none";    

    let currentTodoDescription = "descriptionDisplay" + e.target.id;
    let currentTodoDescriptionEditor = "descriptionEditInput" + e.target.id;
    let currentTodoDescriptionEditButton = "descriptionEditButton" + e.target.id;    
    let descriptionDisplay = document.getElementById(currentTodoDescription);
    let descriptionEditor = document.getElementById(currentTodoDescriptionEditor);
    let descriptionEditButton = document.getElementById(currentTodoDescriptionEditButton);
    descriptionDisplay.style.display = "inline";
    descriptionEditor.style.display = "none";
    descriptionEditButton.style.display = "none";
}

// Edit todos on list
function editTodo(e) {
    if (e.target.className == "title") {
        let currentTodoTitle = e.target.id;
        let currentTodoTitleEditor = "titleEditInput" + e.target.parentElement.id;
        let currentTodoTitleEditButton = "titleEditButton" + e.target.parentElement.id;    

        let titleDisplay = document.getElementById(currentTodoTitle);
        let titleEditor = document.getElementById(currentTodoTitleEditor);
        let titleEditButton = document.getElementById(currentTodoTitleEditButton);

        titleDisplay.style.display = "none";
        titleEditor.style.display = "inline";
        titleEditButton.style.display = "inline";
    } else if (e.target.className == "description") {
        let currentTodoDescription = e.target.id;
        let currentTodoDescriptionEditor = "descriptionEditInput" + e.target.parentElement.id;
        let currentTodoDescriptionEditButton = "descriptionEditButton" + e.target.parentElement.id;  

        let descriptionDisplay = document.getElementById(currentTodoDescription);
        let descriptionEditor = document.getElementById(currentTodoDescriptionEditor);
        let descriptionEditButton = document.getElementById(currentTodoDescriptionEditButton);

        descriptionDisplay.style.display = "none";
        descriptionEditor.style.display = "inline";
        descriptionEditButton.style.display = "inline";
    }
}

// PUT edited todo
function putEditedTodo(e) {
    e.preventDefault() 

    let currentTodo = e.target.parentElement.id

    let currentTodoTitleEditor = "titleEditInput" + currentTodo;
    let titleEditor = document.getElementById(currentTodoTitleEditor);
    let currentTodoTitleEditButton = "titleEditButton" + currentTodo;    

    let currentTodoDescriptionEditor = "descriptionEditInput" + currentTodo;
    let descriptionEditor = document.getElementById(currentTodoDescriptionEditor);
    let currentTodoDescriptionEditButton = "descriptionEditButton" + currentTodo;    

    if (e.target.id == currentTodoTitleEditButton) {
        let updatedTitle = {
            title: titleEditor.value
        }
        axios.put(baseURL + currentTodo, updatedTitle)
        .then(response => getTodoList())
        .catch(err => alert(err))    

    } else if (e.target.id == currentTodoDescriptionEditButton) {
        let updatedDescription = {
            description: descriptionEditor.value
        }
        axios.put(baseURL + currentTodo, updatedDescription)
        .then(response => getTodoList())
        .catch(err => alert(err))    

    }

}


// mark todo as completed or delete todo
function completeOrDelete(e) {
    if (e.target.className == "checkbox") {

        let currentTodo = e.target.parentElement.id
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
            axios.put(baseURL + currentTodo, updatedCompletion)
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
            
    } else if (e.target.className == "deleteButton") {
        let currentTodo = e.target.parentElement.id

        axios.delete(baseURL + currentTodo)
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
            <input type="checkbox" class="checkbox" id="checkbox${todoList[i]._id}" />
            <span class="title" id="titleDisplay${todoList[i]._id}">${todoList[i].title}</span>
            <input class="editInputs" id="titleEditInput${todoList[i]._id}"></input>
            <button class="editInputButton" id="titleEditButton${todoList[i]._id}">Update</button>
            <button class="deleteButton" id="deleteButton${todoList[i]._id}" >X</button>
            <br>
            <span class="description" id="descriptionDisplay${todoList[i]._id}">${todoList[i].description}</span>
            <input class="editInputs" id="descriptionEditInput${todoList[i]._id}"></input>
            <button class="editInputButton" id="descriptionEditButton${todoList[i]._id}">Update</button>
            <br>`
        listArea.insertBefore(listItem, listArea.firstChild)         
        
        if (listItem.completed == "true") {
            listItem.checked = true
        } 

    }
}

getTodoList()


// Add todos to list
const form = document.getElementById("todoForm")

form.addEventListener("submit", function(event) {
    event.preventDefault()

    const newTodo = {
        title: form.title.value,
        description: form.description.value
    }

    axios.post(baseURL, newTodo)
    .then(response => getTodoList())
    .catch(error => alert("There was a problem posting your new Todo."))

    form.title.value = "";
    form.description.value = "";
})
