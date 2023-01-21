import { player1, player2} from "./data.js";
var ROUNDS=0 //Game rounds
//returns a random number which equals the parameter max-1 (if its 8, it will generate random numbers between 0 and 7)
export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//Places boats on the board
export function placeBoat (boat, board){ //receives player object with both boat and board.
    let randomRowNum //Variable to generate a number to placea boat in a random row of the matrix
    let randomColumn  //Variable to generate a number to placea boat in a random column of the matrix
    let randomRowValue
    let horizontalOrVertical //0 is vertical, 1 horizontal
    let sizeBoat=boat.size //to avoid size becoming 0, as it will be used as a counter, we save size value in sizeBoat and viceversa.
    let retry=1
    horizontalOrVertical=getRandomInt(2)

    if (horizontalOrVertical==0){ 
        while(retry>0){//while there is one boat or more on the matrix position we are trying to place the boat, the bucle will look for alternative positions.
            retry=0
            randomColumn=getRandomInt(10)
            sizeBoat=boat.size
            for(let index in board){//Bucle that checks that the next X vector components are equal to '  '(empty), where X is the size of the boat.
                if(sizeBoat>0){
                    if(board[index][randomColumn]!='  '){
                        retry++ //if there is only one boat in the same cell of the matrix, it is counted and bucle repeats.
                    }
                }
            sizeBoat--
            }
        }
        sizeBoat=boat.size
        //Bucle which will place a boat in a determined column
        for(let index in board){
            if(sizeBoat>0){//if there are still missing parts to print of the boat size, sizeBoat will be >0
                    board[index][randomColumn]=boat.boatPicture
                    let position=index+randomColumn
                    boat.position.push(position) //we push the boat coordinates to the position array inside boat class
                }else{//if size is 0, the boat placement has concluded
                    sizeBoat=boat.size//we reset sizeBoat size to the correct one
                    break;
                }
            sizeBoat--  
        }
        
    }else{
        while(retry>0){
            retry=0
            randomRowNum=getRandomInt(10)  //generates random number to place a boat in a determined row
            randomRowValue=Object.keys(board)[randomRowNum]
            for(let index in board){ //The bucle checks if there are already any boats in the matrix cells we want to place the boats
                if(index==randomRowValue){
                    for(let j= 0;j<sizeBoat;j++){ //We check if there are already boats in as many cells as the size of the boat we want to place
                        if(board[index][j]!='  '){  
                            retry++
                        }
                    }
                }
            }    
        }

         
    //Bucle which will place a boat in a determined row
        for(let index in board){
            if(index==randomRowValue){
                for(let j= 0;j<sizeBoat;j++){//we print as many parts of the boat as the size of the boat
                    if(board[index][j]=='  '){  
                        board[index][j]=boat.boatPicture
                        let position=index+j
                        boat.position.push(position) //we push the boat coordinates to the position array inside boat class
                    }
                }
            }    
        }
    }

}

export function setupGame(){    
    placeBoat(player1.carrier, player1.ownBoard.array)
    placeBoat(player1.vessel, player1.ownBoard.array)

    placeBoat(player1.submarine1, player1.ownBoard.array)
    placeBoat(player1.submarine2, player1.ownBoard.array)

    placeBoat(player1.cruise1, player1.ownBoard.array)
    placeBoat(player1.cruise2, player1.ownBoard.array)
    placeBoat(player1.cruise3, player1.ownBoard.array)

    placeBoat(player1.motorboat1, player1.ownBoard.array)
    placeBoat(player1.motorboat2, player1.ownBoard.array)
    placeBoat(player1.motorboat3, player1.ownBoard.array)

    placeBoat(player2.carrier, player2.ownBoard.array)
    placeBoat(player2.vessel, player2.ownBoard.array)

    placeBoat(player2.submarine1, player2.ownBoard.array)
    placeBoat(player2.submarine2, player2.ownBoard.array)

    placeBoat(player2.cruise1, player2.ownBoard.array)
    placeBoat(player2.cruise2, player2.ownBoard.array)
    placeBoat(player2.cruise3, player2.ownBoard.array)

    placeBoat(player2.motorboat1, player2.ownBoard.array)
    placeBoat(player2.motorboat2, player2.ownBoard.array)
    placeBoat(player2.motorboat3, player2.ownBoard.array)

    console.log("THE GAME STARTS!")
    console.log(player1.name +"'s own board ")
    console.table(player1.ownBoard.array)
    console.log(player1.name +"'s enemy board")
    console.table(player1.enemyBoard.array)

    console.log(player2.name +"'s own board")
    console.table(player2.ownBoard.array)
    console.log(player2.name +"'s enemy board")
    console.table(player2.enemyBoard.array)

    console.log("---------------------------------------------------------------------------------------------------------------------------")
} 

export function startGame(){
    //Bucle that makes players keep shooting until no player is a winner
    while((player1.winner==false && player2.winner==false)){
        ROUNDS++
        console.log("ROUND "+ROUNDS+" for "+player1.name)
        console.log("---------------------------------------------------------------------------------------------------------------------------")
        player1.shoot(player2.ownBoard.array,player1.enemyBoard.array,player2.boats,player2,player1) //we shoot enemy's board and boats, we change our enemy own board and we change our own enemy board. We send our enemy remaining boats -not sunken-.
       
        if(player1.winner==true){ //Player2 does not shoot if Player1 has already won
            break
        }else{
            
                console.log("ROUND "+ROUNDS+" for "+player2.name)
                console.log("---------------------------------------------------------------------------------------------------------------------------")
                player2.shoot(player1.ownBoard.array,player2.enemyBoard.array,player1.boats, player1,player2) //we shoot enemy's board and boats, we change our enemy own board and we change our own enemy board. We send our enemy remaining boats -not sunken-.
        }
    }

    if(player1.winner==true){
        console.log("---------------------------------------------------------------------------------------------------------------------------")
        console.log(player1.name+ " IS THE WINNER!!!")
    }else{
        console.log(player2.name+ " IS THE WINNER!!!")
    }

    console.log("---------------------------------------------------------------------------------------------------------------------------")

    console.log("END OF THE GAME, "+player1.name+" BOARD")
    console.table(player1.ownBoard.array)

    console.log("END OF THE GAME, "+player2.name+" BOARD")
    console.table(player2.ownBoard.array)
}