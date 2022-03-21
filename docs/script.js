const userInput = document.getElementById("userInput")
const finalInput = JSON.stringify(userInput)
let userField = document.getElementById("userInput");
let userList = localStorage.getItem("userList");

userInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        console.log("Enter!")
        addEntry();
    }
});


if (sessionStorage.getItem("autosave")) {
    userField.value = sessionStorage.getItem("autosave");
}


function addEntry() {

    var existingLocal = JSON.parse(localStorage.getItem("allNames"));
    if(existingLocal == null) {existingLocal = []}

    var entryName = document.getElementById("userInput").value;
    localStorage.setItem("entry", JSON.stringify(entryName));
    existingLocal.push(entryName);
    localStorage.setItem("allNames", JSON.stringify(existingLocal));
    console.log("Function called");
    let localLength = (JSON.parse(localStorage.getItem("allNames")).length);
    let parsedUsers = JSON.parse(localStorage.getItem("allNames"))
    console.log(parsedUsers);
    parsedUsers.forEach(function(user) {
        let listitem = document.createElement("li");
        let text = document.createTextNode(user);
        listitem.appendChild(text);
        let htmlList = document.getElementById("usersHere");
        htmlList.appendChild(listitem);
    
})
}


userField.addEventListener("change", function(){
    sessionStorage.setItem("autosave", userField.value);
    
    document.getElementById("nameField").innerText = "Velkommen, vi ønsker deg alt som er godt, " + (sessionStorage.getItem("autosave")) + "!";
})



let current = new Date();

let firstRandom = Math.floor(Math.random() * 8) + 1;

let lastMinute = new Date().getMinutes();

const checkMinute = () => {
    let randomNumber = Math.floor(Math.random() * 8) + 1;
    thisMinute = new Date().getMinutes();
    if (thisMinute !== lastMinute) {
        lastMinute = thisMinute
        document.getElementById("clockField").innerText = "Ditt lykketall er: " + randomNumber
    }

}


window.setInterval(checkMinute, 1000);
document.getElementById("clockField").innerText = "Your lucky number is: " + firstRandom