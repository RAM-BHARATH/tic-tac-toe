"use strict";

const symbols = document.querySelectorAll('.symbol');
console.log("Hello");
let i=1; //For entering user and computer symbols in grid
// var sayHello = function (name) {
//     var text = 'Hello, ' + name;
//     return function () {
//       console.log(text);
//     };
//   };
var symbolSelector = () =>{
    let symbolSelected = false;
    let userSymbol = '';
    let computerSymbol = '';
    function selectSymbol(){
            if(!symbolSelected){
                symbolSelected = true;
                console.log('Hello from module');
                if(this.textContent==='X'){
                    console.log(this.textContent);
                    userSymbol='X';
                    computerSymbol='O';
                    console.log("User symbol: "+userSymbol);
                }
                else if(this.textContent==='O'){
                    console.log(this.textContent);
                    userSymbol='O';
                    computerSymbol='X';
                    console.log("User symbol: "+userSymbol);
                }
        }
    }
    function getSymbols(){
        return {userSymbol, computerSymbol};
    }
    return { getSymbols, selectSymbol };
};
let symbolSelectorOb = symbolSelector();
// sym.selectSymbol();
symbols[0].addEventListener('click',symbolSelectorOb.selectSymbol);
symbols[1].addEventListener('click',symbolSelectorOb.selectSymbol);

var XOFiller = () =>{
    const playBoxes = document.querySelectorAll('.play-box');
    let playBoxesArray = [];
    XOInitializer();

    for(let i=0;i<9;i++){
        playBoxes[i].addEventListener('click',fillOnClick);
    }

    function XOInitializer(){
        let playBoxesArrayFiller = playBoxes.forEach(function(element){
            playBoxesArray.push(element.textContent);
        });
        playBoxesArrayFiller;
        console.log(playBoxesArray);
    }
    function getPlayBoxesArray(){
        return playBoxesArray;
    }
    function fillOnClick(){
        if(gameLive.getWinner()==="" || gameLive.getWinner===undefined){
            console.log("Fill on click - clicked "+this.id);
            let id = this.id.substring(4,);
            console.log(id);
            if(this.textContent==="" && symbolSelectorOb.getSymbols().userSymbol!=""){
                if(i%2===1 && i<=9 ){
                    this.textContent=symbolSelectorOb.getSymbols().userSymbol;
                    playBoxesArray[id-1]=symbolSelectorOb.getSymbols().userSymbol;
                    i++;
                }
                else if(i%2===0 && i<=9){
                    this.textContent=symbolSelectorOb.getSymbols().computerSymbol;
                    playBoxesArray[id-1]=symbolSelectorOb.getSymbols().computerSymbol;
                    i++;
                }   
                if(i>=4){
                    console.log("Calling check for winner")
                    gameLive.checkForWinner(getPlayBoxesArray());
                }
            }else{
                console.log('Failed to fill symbol');
            }
        }
    }
    return {getPlayBoxesArray/*,playBoxes*/};
}
var game = () =>{
    let winner ='';
    function checkForWinner(gridArray){
        // console.log(typeof gridArray[0]);
        if(gridArray[0]==gridArray[1] && gridArray[1]==gridArray[2] && gridArray[0]!="" ){ /*||(gridArray[3]==gridArray[4] && gridArray[4]==gridArray[5] && gridArray[3]!="")|| (gridArray[6]==gridArray[7] && gridArray[7]==gridArray[8] && gridArray[6]!="")*/
            console.log("enters first if ");
            if(gridArray[0]==symbolSelectorOb.getSymbols().userSymbol){
                console.log("Player 1 wins -row1");
                // winner = 'Player 1';
                setWinner("Player 1");
                console.log(this.winner);
            }
            else if(gridArray[0]==symbolSelectorOb.getSymbols().computerSymbol){
                console.log("Player 2 wins -row1");
                // winner = 'Player 2';
                setWinner("Player 2");
            }
        }
        else if(gridArray[3]==gridArray[4] && gridArray[4]==gridArray[5] && gridArray[3]!=""){
            console.log("enters second if ");
            if(gridArray[3]==symbolSelectorOb.getSymbols().userSymbol){
                console.log("Player 1 wins -row2");
                // winner = 'Player 1';
                setWinner("Player 1");
            }
            else if(gridArray[3]==symbolSelectorOb.getSymbols().computerSymbol){
                console.log("Player 2 wins -row2");
                // winner = 'Player 2';
                setWinner("Player 2");
            }
        }
        else if(gridArray[6]==gridArray[7] && gridArray[7]==gridArray[8] && gridArray[6]!=""){
            console.log("enters third if ");
            if(gridArray[6]==symbolSelectorOb.getSymbols().userSymbol){
                console.log("Player 1 wins -row3");
                // winner = "Player 1";
                setWinner("Player 1");
            }
            else if(gridArray[6]==symbolSelectorOb.getSymbols().computerSymbol){
                console.log("Player 2 wins -row3");
                // winner = "Player 2";
                setWinner("Player 2");
            }
        }
        else if(gridArray[0]==gridArray[3] && gridArray[3]==gridArray[6] && gridArray[0]!=""){/*||(gridArray[1]==gridArray[4] && gridArray[4]==gridArray[7] && gridArray[1]!="")||(gridArray[2]==gridArray[5] && gridArray[5]==gridArray[8] && gridArray[2]!=""))*/
            console.log("enters fourth if ");
            if(gridArray[0]==symbolSelectorOb.getSymbols().userSymbol){
                console.log("Player 1 wins - column1");
                // winner = "Player 1";
                setWinner("Player 1");
            }
            else if(gridArray[0]==symbolSelectorOb.getSymbols().computerSymbol){
                console.log("Player 2 wins -column1");
                // winner = "Player 2";
                setWinner("Player 2");
            }
        }
        else if(gridArray[1]==gridArray[4] && gridArray[4]==gridArray[7] && gridArray[1]!=""){
            console.log("enters fifth if ");
            if(gridArray[1]==symbolSelectorOb.getSymbols().userSymbol){
                console.log("Player 1 wins - column2");
                // winner = "Player 1";
                setWinner("Player 1");
            }
            else if(gridArray[1]==symbolSelectorOb.getSymbols().computerSymbol){
                console.log("Player 2 wins -column2");
                // winner = "Player 2";
                setWinner("Player 2");
            }
        }
        else if(gridArray[2]==gridArray[5] && gridArray[5]==gridArray[8] && gridArray[2]!=""){
            console.log("enters sixth if ");
            if(gridArray[1]==symbolSelectorOb.getSymbols().userSymbol){
                console.log("Player 1 wins - column3");
                // winner = "Player 1";
                setWinner("Player 1");
            }
            else if(gridArray[1]==symbolSelectorOb.getSymbols().computerSymbol){
                console.log("Player 2 wins -column3");
                // winner = "Player 2";
                setWinner("Player 2");
            }
        }
        else if(gridArray[0]==gridArray[4] && gridArray[4]==gridArray[8] && gridArray[0]!=""){
            console.log("enters seventh if ");
            if(gridArray[0]==symbolSelectorOb.getSymbols().userSymbol){
                console.log("Player 1 wins - diagonal 1");
                // winner = "Player 1";
                setWinner("Player 1");
            }
            else if(gridArray[0]==symbolSelectorOb.getSymbols().computerSymbol){
                console.log("Player 2 wins - diagonal 1");
                // winner = "Player 2";
                setWinner("Player 2");
            }
        }
        else if(gridArray[2]==gridArray[4] && gridArray[4]==gridArray[6] && gridArray[2]!=""){
            console.log("enters seventh if ");
            if(gridArray[2]==symbolSelectorOb.getSymbols().userSymbol){
                console.log("Player 1 wins - diagonal 2");
                // winner = "Player 1";
                setWinner("Player 1");
            }
            else if(gridArray[2]==symbolSelectorOb.getSymbols().computerSymbol){
                console.log("Player 2 wins - diagonal 2");
                setWinner("Player 2");
            }
        }
        if(getWinner()!="" && getWinner()!=undefined){
            displayWinner();
        }
    }
    function displayWinner(){
        const winnerBox = document.getElementById('display-winner');
        winnerBox.textContent = `${getWinner()} wins`;
    }
    function getWinner(){
        return winner;
    }
    function setWinner(winningPerson){
        winner = winningPerson;
    }
    return {checkForWinner, getWinner}
};
let XO = XOFiller();
let gameLive = game();
// XO.playBoxes;
