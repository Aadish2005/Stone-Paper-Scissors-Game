let choices = document.querySelectorAll('.choice');
let hideclass = document.querySelector('#message');
let score1 = document.querySelector('#playerscore');
let score2 = document.querySelector('#computerscore');
let userscore = 0;
let compscore = 0;
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        let choiceid = choice.getAttribute("id");
        let playerchoice = choiceid;  
        let compchoice = computerchoice();   
      
        if   (playerchoice ==compchoice){
            hideclass.innerText = "Tie ,Play Game Again";
        }else if ((playerchoice == "rock" && compchoice == "scissors") || (playerchoice == "scissors" && compchoice == "paper") || (playerchoice == "paper" && compchoice == "rock")){
            hideclass.innerText = "You Won";
            userscore++;
            score1.innerText = userscore;
      
        }else{
            hideclass.innerText = "You Lose";
            compscore++;
            score2.innerText = compscore;
        }
})
})
let computerchoice =  function() {
    let array = ["rock","paper","scissors"]
    let answer = Math.floor(Math.random()*3)
      return array[answer];
}