var count=1;

function startGame(){ //FUNCTION to start the game and to make the turn to the x player
    for(var i =1;i<=9;i++){ // for  loop to change every field in the game to reset
        clearBox(i);
    }
    
    document.turn="X"; //we declare a document where we have turn which will be usuful for us to know who has the turn
    document.winner= null;
    setMessage(document.turn + " Gets to start"); // it will make a message for players to know whos turns is it
}

function setMessage(msg){
    document.getElementById("message").innerText=msg;
}

function nextMove(square){ // we are targeting the square id here to have an impact from this function
    if(document.winner != null){
        setMessage("The player "+document.turn+" already won!");
    }else if(square.innerText == ""){ // we are making this if statment so we cant change the existent fields
        square.innerHTML=document.turn; //when we click the square element that we made in html X OR O will appear
    switchTurn(); // caling a function to switch X to O or O to X
    }else{ // THIS will pop up if players trys to put a x or o on the already existing spot
        setMessage("pick antoher square!");
    }
    
}

function switchTurn(){ //function to switch players turn
    
    if(checkForWinner(document.turn) == true){ // checking if somebody won
        setMessage("You won "+document.turn +" !");
        document.winner=document.turn;

    }else if(draw() ===9){ // check if its a draw match
        setMessage("It is a draw");
    }
        else if(document.turn =="X"){  // changing turn from X to 0 and to O to X
        document.turn = "O";
        setMessage("It is "+document.turn +" turn.");
    }else{
        document.turn="X";
        setMessage("It is "+document.turn +" turn.");
    }
    
}

function checkForWinner(move){ //Check every posible combination to win
    var result = false;
    if(checkRow(1,2,3,move) || 
    (checkRow(4,5,6,move)) || 
    (checkRow(4,5,6,move)) || 
    (checkRow(1,4,7,move)) || 
    (checkRow(2,5,8,move)) || 
    (checkRow(3,6,9,move)) || 
    (checkRow(1,5,9,move)) || 
    (checkRow(3,5,7,move))){
        result = true;
    } 
    return result;
}

function checkRow(a,b,c,move){ // checking if rows are equal to the letters we need to have a winner
 var result = false;
 if(getBox(a) == move && getBox(b) == move && getBox(c) == move){
     result = true;
 }
 return result;
}

function getBox(number){ // this function will be used to get to our field for tic tac toe like s1,s2,s3 etc
     return document.getElementById("s" + number).innerText;
}

function draw(){ // function to check if we have a draw match
    var count = 0;
    for(var i = 1;i<=9;i++){
        if(getBox(i) == "X" || getBox(i) == "O"){
            count++;
        }
    }
    return count;
}

function clearBox(num){ // function to restart the game if we want
    document.getElementById("s"+num).innerText="";
}



