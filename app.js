let userScore=0;
let CompScore=0;
const choices =document.querySelectorAll(".choice");



const userScorePara =document.querySelector("#user-score");
const compScorePara =document.querySelector("#comp-score");
const  genCompChoice = () =>
{
    const options =["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random() *3);
    return options[randIdx];

};
const draw =() => {
    console.log("game was draw");
    msg.innerText="Game was Draw . Paly Again";
    msg.style.backgroundColor="#081b31";
}

const showWinner = (userWin,userChoice,compChoice) =>
{
    if (userWin)
    {
        
        console.log("you win!");
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";

    }
    else
    {
            console.log("you lose");
            msg.innerText=`You lose!  ${compChoice} beats Your ${userChoice}`
            msg.style.backgroundColor="red";
    }
}


const playGame= (userChoice)=>{
    userChoice = userChoice.toLowerCase();
    console.log("user Choice =",userChoice);
    const compChoice= genCompChoice();
    console.log("comp choice =",compChoice);
    if (userChoice== compChoice)
    {
        draw();
    }
    else
    {
        let userWin =true;
        if (userChoice=="rock")
        {
            userWin = compChoice == "paper" ? false :true;
        }
        else if (userChoice=="paper")
        {
            userWin = compChoice == "scissors" ? false :true;
        }
        else 
        {
            userWin = compChoice == "rock" ? false :true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
};

choices.forEach((choice)=>{
console.log(choice);
choice.addEventListener("click",()=>
{ const choiceId =choice.getAttribute("id")
    console.log("choice was clickes",choiceId);
     playGame(choiceId);
})  ;
});
