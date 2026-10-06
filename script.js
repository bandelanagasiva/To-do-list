let tasks = [];
function addTask(){
    let input = document.getElementById("taskinput");
    let tasktext = input.value.trim();
    if(tasktext ===""){
        alert("Please Enter The Task...")
        return;
    }


let task = {
    id: Date.now(),
    text : tasktext,
    completed : false
};

tasks.push(task);
//for localstorage 
localStorage.setItem("tasks",JSON.stringify(tasks));

input.value ="";

displayTasks();
}

//added to list 

function displayTasks(){
    let tasklist = document.getElementById("taskList");
    tasklist.innerHTML ="";

    tasks.forEach(task=>{
        let li = document.createElement("li");
        li.innerHTML=`<span onclick="completetask(${task.id})" class="${task.completed ? "completed" : ""}">${task.text}</span> <button onclick="deletetask(${task.id})">Delete</button>`;
       
        tasklist.appendChild(li);
    })
}
//completed task

function completetask(id){
       tasks.forEach((task)=>{
       if(task.id===id){
        task.completed=!task.completed;
       }
       })
       localStorage.setItem("tasks",JSON.stringify(tasks));
    displayTasks();
    }

    //delete task

    function deletetask(id){
        tasks = tasks.filter((task)=>{
            return task.id !== id;
        });
        localStorage.setItem("tasks",JSON.stringify(tasks));
        displayTasks();
    }

    //local storage addition 

    let savedtasks = localStorage.getItem("tasks");
    if(savedtasks){
        tasks = JSON.parse(savedtasks);
    }

    displayTasks();