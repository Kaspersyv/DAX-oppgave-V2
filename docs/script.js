const userInput = document.getElementById("userInput")
const finalInput = JSON.stringify(userInput)

let userField = document.getElementById("userInput");

if (sessionStorage.getItem("autosave")) {
    userField.value = sessionStorage.getItem("autosave");
}

userField.addEventListener("change", function(){
    sessionStorage.setItem("autosave", userField.value);
    console.log(sessionStorage.getItem("autosave"));
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