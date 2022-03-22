addEntry();

// Input feltet i HTML
const userInput = document.getElementById("userInput");

// String versjon av brukerens input
const finalInput = JSON.stringify(userInput)

// Henter listen over besøkende brukere
let userList = localStorage.getItem("userList");


// Sjekker etter at noen submitter inputet
userInput.addEventListener("keyup", function(event) {
    // "Enter" er Enter knappen i .key syntax på keyup
    if (event.key === "Enter") {
        addEntry();
    }
});

// Oppdaterer SessionStorage automatisk
if (sessionStorage.getItem("autosave")) {
    userInput.value = sessionStorage.getItem("autosave");
}


function addEntry() {

    
    const nodeList = document.getElementById("usersHere");
    while (nodeList.firstChild) {
        nodeList.removeChild(nodeList.lastChild);
    }

    // Sjekker om objektet finnes og har innhold, hvis ikke, lag en tom array
    var existingLocal = JSON.parse(localStorage.getItem("allNames"));
    if(existingLocal == null) {existingLocal = []}

    // Finner brukerens input
    var entryName = document.getElementById("userInput").value;

    //Gjør inputet om til en JSON string og putter det i LocalStorage
    localStorage.setItem("entry", JSON.stringify(entryName));
    existingLocal.push(entryName);

    // Gjør eksisterende liste om til JSON string
    localStorage.setItem("allNames", JSON.stringify(existingLocal));
    console.log("Function called");

    // BRUKER IKKE, MEN ER NYTTIG: let localLength = (JSON.parse(localStorage.getItem("allNames")).length);
    
    // Parser listen med brukere slit at man kan bruke forEach på den
    let parsedUsers = JSON.parse(localStorage.getItem("allNames"));
    console.log(parsedUsers);

    // For hver bruker i arrayet lager den en list item med klase og putter brukernavnet inn her
    parsedUsers.forEach(function(user) {
    let listitem = document.createElement("li");
    listitem.classList.add("styling");
    let text = document.createTextNode(user);
    listitem.appendChild(text);
    let htmlList = document.getElementById("usersHere");
    htmlList.appendChild(listitem);
    
});
}

// Venter på en endring, og setter endrede verdien i autosave (nevnte på toppen)
userInput.addEventListener("change", function(){
    sessionStorage.setItem("autosave", userInput.value);
    // Her puttes brukerens navn fra SessionStorage
    document.getElementById("nameField").innerText = "Velkommen, vi ønsker deg alt som er godt, " + (sessionStorage.getItem("autosave")) + "!";
});



let current = new Date();

// Første random tall for å vise når man først kommer inn på siden
let firstRandom = Math.floor(Math.random() * 8) + 1;


// Sjekker minuttet når man først er inne på nettsiden, brukes for å sammenligne senere
let lastMinute = new Date().getMinutes();

// Hvert sekund sammenligner den forrige tall og det sekundets tall, hvis de er annerledes, sett 
// nyeste tall som forrige, og oppdater lykketallet
const checkMinute = () => {
    let randomNumber = Math.floor(Math.random() * 8) + 1;
    thisMinute = new Date().getMinutes();
    if (thisMinute !== lastMinute) {
        lastMinute = thisMinute;
        document.getElementById("clockField").innerText = "Ditt lykketall er: " + randomNumber
    }

}

// Kjør funksjonen over hvert tusende millisekund (hvert sekund)
window.setInterval(checkMinute, 1000);

// Første lykketallet puttes her
document.getElementById("clockField").innerText = "Your lucky number is: " + firstRandom;


