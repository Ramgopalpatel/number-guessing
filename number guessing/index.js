

// generate random number and other css dynamically generated
let targetNumber = "none"
function generateTargetNumber() {
    targetNumber = Math.ceil(Math.random() *98)
    let body = document.getElementById('body');
    body.classList.remove("bgChange")
    document.getElementById("note").innerText = "you have started a game, enter the number between 0-100"
    document.getElementById("note").style.color = "blue"
    document.getElementById("input").removeAttribute("readonly");
    document.getElementById("input").style.cursor='pointer'
    document.getElementById("submitBtn").style.display='inline-block'
    document.getElementById("message").innerText =`.`

}

// taking input from the input field
let guess;
let takeNumber = ()=>{
    guess = document.getElementById('input').value
}


// checking the number which is entered by the user and generating the result
var move = 0;
let checkGuesses = ()=>{

   let message = document.getElementById('message')
   if(targetNumber < guess && guess.trim().length!=0 && guess.trim().length<=2) {
       message.innerText = `${guess} is greater than to the Target number, try again`
       ++move
       document.getElementById("message").style.color = "blue"
        document.getElementById("input").style.outline = "transparent"
   }
   else if(targetNumber > guess && guess.trim().length!=0 && guess.trim().length<=2){
    ++move
    message.innerText = `${guess} is less than the to Target number, try again`
    document.getElementById("message").style.color = "blue"
    document.getElementById("input").style.outline = "transparent"
   }
   else if(targetNumber == guess && guess.trim().length!=0 && guess.trim().length<=2){

        ++move
        let body = document.getElementById('body');
        body.classList.add("bgChange")
        document.getElementById("note").innerText = "Restart the game clicking on the button"
        document.getElementById("restart").innerText = "Restart game"
        document.getElementById("message").innerText = `Congratulations you have won this game in ${move} move 😍`
        document.getElementById("input").setAttribute = "readonly"
        document.getElementById("message").style.color = "white"
        document.getElementById("input").style.outline = "transparent"
        move = 0
   }
   else{
    document.getElementById("message").innerText =`Invalid input or not started game`
    document.getElementById("message").style.color = "red"
    document.getElementById("input").style.outline = "2px solid red"
    if(guess.trim().length>2){
    document.getElementById("message").innerText =`Invalid input, Please enter value between 0 to 100`
    }
   }
}



