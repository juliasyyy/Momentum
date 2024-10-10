function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value;
    const taskList = document.getElementById("taskList");

    // creating the elements
    const listItem = document.createElement("div");
    const label = document.createElement("label");
    label.textContent = taskText;
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function() {
        label.classList.toggle("completed");
    }

    // appending the elements
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    taskList.appendChild(listItem);
    taskInput.value = "";
}

function editName() {
    let name = document.querySelector("#name");
    let header = document.querySelector(".header");
    header.textContent = `Good evening, ${name.value}`;
 };
document.getElementById("editButton").addEventListener("click", editName);

document.getElementById("addButton").addEventListener('click', addTask);

let time = document.getElementById("time");
// declaring built in object from JS
let date = new Date();
// time.textContent = date;
time.textContent = `${date.getHours()}:${date.getMinutes()}`;
console.log(date.getHours());
console.log(date.getMinutes());

//Focus for today 

function editFocus() {
  let focus = document.querySelector("#inputFocus"); let finalFocus = document.querySelector(".textFocus");
   finalFocus.textContent = `${focus.value}`;
  };
   
 document.getElementById("addFocus").addEventListener("click", editFocus);




// quote
const quotes = [
    "Time is gold",
    "Time is everything",
    "Time is money",
    "Time is short"
];


let randomNumber = Math.random() * quotes.length;
let newNumber = Math.floor(randomNumber);
document.getElementById("randomQuote").textContent = quotes[newNumber];


function editQuote() {
let quote = document.querySelector("#inputQuote");
 let finalQuote = document.querySelector("#randomQuote");
 finalQuote.textContent = ` ${quote.value}`;}
 
   
  document.getElementById("addQuote").addEventListener('click', editQuote);




// change wallpaper 

const backGround = [ 'url("https://images.unsplash.com/photo-1543246621-069371c3b075?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4NDk4MTg3fHxlbnwwfHx8fHw%3D")', 

            'url("https://images.unsplash.com/photo-1541046469329-51deaf7358e8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w4NDk4MTg3fHxlbnwwfHx8fHw%3D")', 

            'url("https://images.unsplash.com/photo-1508690471604-cafd081190a1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXw4NDk4MTg3fHxlbnwwfHx8fHw%3D")', 

            'url("https://images.unsplash.com/photo-1557939403-1760a0e47505?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3w4NDk4MTg3fHxlbnwwfHx8fHw%3D")' 
        ]; 

        let randomImage = Math.random() * backGround.length;
        let newImage = Math.floor(randomImage);
        document.getElementById("background").style.backgroundImage = backGround[newImage];




    