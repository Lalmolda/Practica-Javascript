import {CARRIER, VESSEL, SUBMARINE, CRUISE, MOTORBOAT, DAMAGED, WATER, COLUMNS,player1, player2} from "./data.js"
import {getRandomInt} from "./functions.js"
export class board {
    constructor(){
        //we build an array inside the object
        this.array = {
        
          A: ['  ','  ','  ','  ','  ','  ','  ','  ','  ','  '],
          B: ['  ','  ','  ','  ','  ','  ','  ','  ','  ','  '],
          C: ['  ','  ','  ','  ','  ','  ','  ','  ','  ','  '],
          D: ['  ','  ','  ','  ','  ','  ','  ','  ','  ','  '],
          E: ['  ','  ','  ','  ','  ','  ','  ','  ','  ','  '],
          F: ['  ','  ','  ','  ','  ','  ','  ','  ','  ','  '],
          G: ['  ','  ','  ','  ','  ','  ','  ','  ','  ','  '],
          H: ['  ','  ','  ','  ','  ','  ','  ','  ','  ','  '],
          I: ['  ','  ','  ','  ','  ','  ','  ','  ','  ','  '],
          J: ['  ','  ','  ','  ','  ','  ','  ','  ','  ','  '],
        }   
    }
    
} 

export class boat {
    constructor (type, size, lives){
        this.type = type //which type of boat, i.e submarine
        this.size = size //number of boxes in the board
        this.lives = lives //remaining lives, when lives = 0 the boat is sunken
        this.position = []  //every boat will have an array of positions, e.g [a1,b1,c1]
        this.boatPicture = ''
        if(type=='Carrier'){
            this.boatPicture=CARRIER
        }
        if(type=='Vessel'){
            this.boatPicture=VESSEL
        }
        if(type=='Submarine'){
            this.boatPicture=SUBMARINE
        }
        if(type=='Cruise'){
            this.boatPicture=CRUISE
        }
        if(type=='MotorBoat'){
            this.boatPicture=MOTORBOAT
        }

    }
}

//We build Player class, which will build 2 objects, the player's own and enemy board
export class player {
    constructor(name){
        this.name = name
        this.winner=false //Boolean is the player the winner
        //Given the fact every player sees 2 boards per run, we create them inside the player object
        this.ownBoard = new board()
        this.enemyBoard = new board()
        this.currentBoats=10 //Our remaining boats -not sunken-

        this.shots=0
        this.shotsRemaining=100 
        this.shotPositions = []//We save the positions of each player shotss in this array to avoid shooting the same coordinates twice

        this.boats = [] //we create an array of boat objects to be able to access its positions array, check their remaining lives, if they are sunk, etc
        //We instance the different boat objects
        this.carrier = new boat("Carrier",5,5)
        this.vessel = new boat("Vessel",4,4)
        this.submarine1 = new boat("Submarine",3,3)
        this.submarine2 = new boat("Submarine",3,3)
        this.cruise1 = new boat("Cruise",2,2)
        this.cruise2 = new boat("Cruise",2,2)
        this.cruise3 = new boat("Cruise",2,2)
        this.motorboat1 = new boat("MotorBoat",1,1)
        this.motorboat2 = new boat("MotorBoat",1,1)
        this.motorboat3 = new boat("MotorBoat",1,1)

        //Every player will create an arry of boat objects, so we can understand access their properties like lives, position, etc.
        this.boats[0]=this.carrier
        this.boats[1]=this.vessel
        this.boats[2]=this.submarine1
        this.boats[3]=this.submarine2
        this.boats[4]=this.cruise1
        this.boats[5]=this.cruise2
        this.boats[6]=this.cruise3
        this.boats[7]=this.motorboat1
        this.boats[8]=this.motorboat2
        this.boats[9]=this.motorboat3

    }
    //method that shoots and modifies the board
    shoot(enemyBoard1,enemyBoard2,enemyBoats,enemyPlayer,player){
        let shipDamaged =false //becomes true if we damage a ship in other player's own board, so we can also indicate we damaged a ship in our enemy board
        let randomColumn //we generate a random column index to randomize shots
        let randomRowNum //we generate a random row index to randomize shots
        let randomRowValue //Given the fact indexes are strings like 'A', we will use randomRowNum along with Object.keys method to get the index string value and be able to compare strings
        let shot
        let changeShot=true //Boolean to indicate that we should shoot again, generating randomize coordinates 
        let sameShot //Stores coordinates to compare past shots coordinates with the current shoot and avoid shooting twice to the same cell
        let shootAgain=false  //Boolean that allows us to shoot again if we damaged a boat in the current round
        //Bucle that makes sure we don't shoot the same cell twice.
        while(changeShot==true){
            changeShot=false //it is false unless we shoot the same cell in the board. If we find we shoot the same cell again, changeShot will become true and we will enter the bucle again, shooting somewhere else 
            randomRowNum =getRandomInt(10) //random row number
            randomColumn =getRandomInt(10)  //random column number
            randomRowValue=Object.keys(enemyBoard1)[randomRowNum]//a random number between 0 and 10 introduces index string value in randomRowValue (i.e index A)
            shot= randomRowValue+randomColumn   //concat to get shoot coordinates (e.g. A1)
            sameShot=this.shotPositions.filter(shotPositions => shotPositions == shot);//detects if we have already shot the same cell with filter array method and an arrow function
            if(sameShot==shot){ //if we shoot the same cell, we have to make changeShot=true to do the bucle again and shoot somewhere else!
                changeShot=true
            }
        }

        this.shotPositions.push(shot)//we save the positions each player has shot to in an array.
        
        this.shots++
        this.shotsRemaining--
        console.log("Shot "+this.shots+" pointing "+shot+".Shots remaining: "+this.shotsRemaining) //indicates row and column where player shots
        //This bucle changes the enemy board pictures either to water or damaged. Player 1 changes Player 2 own board and viceversa. The other player's board is used to check if the board cell is empty or has a boat, as we don't see boats in our own enemy board.
        for(let index in enemyBoard1){ //bucle that either damages a ship or changes to water, modifying the board, using the random values generated for the shot to change that precise picture in the matrix
            if(index==randomRowValue){  //if index in the array is equal to the random index we generated and the column is equal to our randomly generated one, we change matrix picture
                for(let j=0;j<COLUMNS;j++){
                    if(j==randomColumn){
                        if(enemyBoard1[index][j]!='  '){
                            console.log("You damaged a ship!! "+DAMAGED) 
                            enemyBoard1[index][j]=DAMAGED //we change the board cell to damaged if it had a boat
                            shipDamaged=true //this boolean is true if an enemy ship has been damaged. It is needed to change how the player sees the enemy board, as we can't compare it with empty, we need to compare the other player own board first and get this boolean to be true or false.
                            shootAgain=true
                         }else{
                             console.log("Water!! "+WATER)
                             enemyBoard1[index][j]=WATER //we change the board cell to water if it only had water
                         }
                    }
                }
            }
        }
        //This bucle changes how the player sees the enemy board -Player 1 changes how he sees Player 2 enemy board and viceversa-, by just showing either an empty cell, water or damaged, but not showing what kind of boat it has been damaged nor the enemy boats.
        for(let index in enemyBoard2){
            if(index==randomRowValue){
                for(let j=0;j<COLUMNS;j++){
                    if(j==randomColumn){
                        if(enemyBoard2[index][j]!='  ' || shipDamaged==true){
                           enemyBoard2[index][j]=DAMAGED
                        }
                        else{
                            enemyBoard2[index][j]=WATER
                        }
                    }
                 }
            }   
        }
        //This Bucle checks if any boat has 0 lives and, therefore, is sunk
        for(let index in enemyBoats){
            for(let j=0;j<10;j++){
                if(shot==enemyBoats[index].position[j]){
                    enemyBoats[index].lives--
                    if(enemyBoats[index].lives==0){
                        console.log("You have sunk a "+enemyBoats[index].type+" !")
                        enemyPlayer.currentBoats--
                    }

                }
            }
            
        }

        console.log("OWN BOARD")
        
        console.table(this.ownBoard.array)

        console.log("ENEMY BOARD")

        console.table(this.enemyBoard.array)

        if(player1.currentBoats==0){//if one player has no boats remaining, the other player wins.
            player2.winner=true
        }

        if(player2.currentBoats==0){//if one player has no boats remaining, the other player wins.
            player1.winner=true
        }
        //If one player shoots and damages or sunks a boat, he can shoot again
        if(shootAgain==true && (player1.winner==false && player2.winner==false)){  //Conditional to trigger the recursive method shoot: if boolean shootAgain is true and no player is a winner yet, we are recursive
            console.log("PLAYER "+player.name+" SHOOTS AGAIN!!!!")
            console.log("---------------------------------------------------------------------------------------------------------------------------")
            this.shoot(enemyBoard1,enemyBoard2,enemyBoats,enemyPlayer,player) //Recursive method shoot, the function calls itself
        }
    }
} 