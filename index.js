//REQUISITOS SOFTWARE.
//TENER INDEX.JS QUE SERÁ EL CORE Y EL ARCHIVO A EJECUTAR.

//✔DONE FRASE QUE INDIQUE QUE EMPIEZA EL JUEGO.
//✔DONE MOSTRAR DOS TABLEROS, DE JUGADOR A Y JUGADOR B. RELLENOS DE 'VACIO'.
//✔DONE CREAR CLASES Y/O OBJETOS BARCOS. PUNTOS DE VIDA DEL BARCO, IDENTIFICACIÓN DE CADA BARCO. EL OBJETO TIENE QUE SABER EN QUE POSICIONES ESTA DENTRO DEL TABLERO (PROPIEDAD X,Y EN CADA CASILLA, SI SON DOS CASILLAS X,Y EN EL TABLERO, SERÍAN DOS VECTORES (PARTES DEL BARCO) CON DOS VALORES CADA UNO (POSICIÓN EN EL TABLERO). )
//✔DONE FUNCIÓN ALEATORIA COLOCAR LAS NAVES EN TABLERO DE JUGADOR A Y B (CREAR OBJETO BARCO Y MARCAR SU POSICION EN LA FUNCIÓN). DEBE DECIDIR SI SE COLOCA HORIZONTAL O VERTICAL, NUNCA DIAGONAL. NO SOLAPAR BARCOS.
//✔DONE Intentar colocar primero los barcos más grandes primero. Empezar por las mayores hasta llegar a la arenilla.
//✔DONE TABLERO ENEMIGO DEBE MOSTRARSE COMO VACIO ENTERO AL COMIENZO CON AGUA O TOCADO EN EL DISPARO, SIN BARCOS.
//✔DONE FRASE QUE INDICA QUE EMPIEZAN LAS RONDAS.
//✔DONE MOSTRAR EN QUE RONDA ESTAMOS POR Y QUE JUGADOR ESTÁ JUGANDO.
//✔DONE FUNCIÓN DISPARO (NO PODER DISPARAR EN LA MISMA CASILLA DOS VECES), FUNCIÓN PARA MOSTRAR AGUA O TOCADO EN EL ENEMY BOARD.Cada disparo, mostrará la casilla seleccionada, los disparos le faltan al jugador X.
//✔DONE si en cambio da a una nave del oponente, será entonces “Tocado”. Si además no quedan más casillas de esa nave “tocadas”, deberá mostrarse “Hundido”.
//✔DONE CADA JUGADOR PODRÁ SEGUIR DISPARANDO DURANTE EL MISMO TURNO HASTA QUE FALLE (AGUA).
//✔DONE --> y los tableros del jugador que está disparando (el propio y el ajeno) con la casilla ya marcada, sea agua o tocado.
//✔DONE El juego terminará cuando no haya más disparos o bien cuando uno de los dos jugadores haya hundido toda la flota contrincante.
//✔DONE CUANDO TERMINE, MOSTRAR JUGADOR GANADOR.
//✔DONE CUANDO TERMINE, MOSTRAR TABLEROS PROPIOS DE JUGADOR 1 Y 2, PARA VER BARCOS QUE QUEDARON POR HUNDIR.

//2 JUGADORES
//CADA JUGADOR
        //TIENE DOS TABLEROS, PROPIO Y DEL ADVERSARIO.
           //ESTADOS DENTRO DE LAS CELDAS DE LOS TABLEROS: VACÍO, AGUA, TOCADO, BARCO  
        //TIENE DISPAROS, MENSAJE DICIENDO DONDE APUNTAN LOS DISPAROS.
        //TIENE TURNOS/RONDAS.FRASE QUE INDICA QUE EMPIEZAN LAS RONDAS
//2 TABLEROS POR JUGADOR (EL PROPIO Y EL DEL ADVERSARIO) DE 10X10 (4, TABLEROS)
//NAVES POR TABLERO (2 TABLEROS PROPIOS y ADVERSARIO)
   //1 PORTAAVIONES - 5 CASILLAS
   //1 BUQUE - 4 CASILLAS
   //2 SUBMARINOS - 3 CASILLAS
   //3 CRUCEROS - 2 CASILLAS 
   //3 LANCHAS - 1 CASILLA
//100 DISPAROS POR JUGADOR (MATRIZ 10X10)

//PSEUDOCÓDIGO
//Mientras no haya ganador:
//Turno jugador:
    //Mientras haya barcos del Jugador contrario:
        //Jugador 1 (J1) → selección de coordenada del tablero contrario
        //Mirar qué hay en el tablero propio del Jugador 2 (J2)
            //si agua
                //marcar agua en tablero contrario (J1)
                //marcar agua en tablero propio (J2)
                //basta jugador 1, turno del jugador 2
            //si tocado
                //marcar tocado en tablero contrario (J1)
                //marcar tocado en tablero propio (J2)
                //si hundido
                    //contar naves hundidas
                    //si todas naves hundida
                        //basta jugador 1



const CARRIER = '🚢'
const VESSEL = '⛴'
const SUBMARINE = '🚆'
const CRUISE ='🛳'
const MOTORBOAT = '🚤'
const DAMAGED = '🔥'
const WATER = '💧'
const ROWS = 10
const COLUMNS = 10
let ROUND=0
//We build board class
class board {
    constructor(){
        //we build an array inside the object
        //this.array = []
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

class boat {
    constructor (type, size, lives, positionIndex,positionColumn){
        this.type = type //which type of boat, i.e submarine
        this.size = size //number of boxes in the board
        this.lives = lives //remaining lives
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

//We build Player class, which will build 2 objects, the player's own and enemy board.
class player {
    constructor(name){
        this.name = name
        this.winner=false //Is the player the winner
        //Given the fact every player sees 2 boards per run, we create them inside the player object.
        this.ownBoard = new board()
        this.enemyBoard = new board()
        this.currentBoats=10 //Our remaining boats -not sunken-.

        this.shots=0
        this.shotsRemaining=100
        this.shotPositions = []

        this.boats = [] //crear vector de objetos de todos los barcos para ir comprobando sus posiciones y si están hundidos

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
    //method that shots and modifies the board
    shot(enemyBoard1,enemyBoard2,enemyBoats,enemyPlayer,player){
        let shipDamaged =false //becomes true if we damage a ship in other player's own board, so we can also indicate we damaged a ship in our enemy board.
        let randomColumn 
        let randomRowNum
        let shot
        let changeShot=true
        let sameShot
        let shotAgain=false
        //Bucle that makes sure we don't shot the same cell twice.
        while(changeShot==true){
            changeShot=false //it is false unless we shot the same cell in the board. If we find we shot the same cell again, changeShot will become true and we will enter the bucle again, shooting somewhere else 
            randomRowNum =getRandomInt(10) //random row number
            randomColumn =getRandomInt(10)  //random column number
            randomRowValue=Object.keys(enemyBoard1)[randomRowNum]//a random number between 0 and 10 introduces index string value in randomRowValue (i.e index A)
            shot= randomRowValue+randomColumn   //concat to get shot coordinates (e.g. A1)
            sameShot=this.shotPositions.filter(shotPosition => shotPosition == shot);//detects if we have already shot the same cell with filter array method and an arrow function
            if(sameShot==shot){ //if we shot the same cell, we have to make changeShot=true to do the bucle again and shot somewhere else!
                changeShot=true
            }
        }

        this.shotPositions.push(shot)//we save the positions each player has shot to in an array.
        
        this.shots++
        this.shotsRemaining--
        console.log("Shoot "+this.shots+" pointing "+shot+" .Shoots remaining: "+this.shotsRemaining) //indicates row and column where player shots
        //This bucle changes the enemy board pictures either to water or damaged. Player 1 changes Player 2 own board and viceversa. The other player's board is used to check if the board cell is empty or has a boat, as we don't see boats in our own enemy board.
        for(let index in enemyBoard1){ //bucle that either damages a ship or changes to water, modifying the board, using the random values generated for the shot to change that precise picture in the matrix
            if(index==randomRowValue){  //if index in the array is equal to the random index we generated and the column is equal to our randomly generated one, we change matrix picture
                for(let j=0;j<COLUMNS;j++){
                    if(j==randomColumn){
                        if(enemyBoard1[index][j]!='  '){
                            console.log("You damaged a ship!! "+DAMAGED) 
                            enemyBoard1[index][j]=DAMAGED //we change the board cell to damaged if it had a boat
                            shipDamaged=true //this boolean is true if an enemy ship has been damaged. It is needed to change how the player sees the enemy board, as we can't compare it with empty, we need to compare the other player own board first and get this boolean to be true or false.
                            shotAgain=true
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
        //If one player shots and damages or sunks a boat, he can shoot again
        if(shotAgain==true && (player1.winner==false && player2.winner==false)){  //Conditional to trigger the recursive method SHOT
            console.log("PLAYER "+player.name+" SHOOTS AGAIN!!!!")
            console.log("---------------------------------------------------------------------------------------------------------------------------")
            this.shot(enemyBoard1,enemyBoard2,enemyBoats,enemyPlayer,player) //The function calls itself
        }
    }
} 

//returns a random number which equals the parameter max-1 (if its 8, it will generate random numbers between 0 and 7)
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}



//Places boats on the board
function placeBoat (boat, board){ //receives player object with both boat and board.
    let randomRowNum
    let randomColumn  
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
            for(let index in board){
                if(index==randomRowValue){
                    for(let j= 0;j<sizeBoat;j++){
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

//we initialize the game
    //console.table(MainBoard.Array)
    const player1 = new player("JORDI")
    const player2 = new player("GUILLERMO")

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

    //Bucle that makes players keep shoting until no player is a winner
    while((player1.winner==false && player2.winner==false)){
        ROUND++

        console.log("ROUND "+ROUND+" for "+player1.name)
        console.log("---------------------------------------------------------------------------------------------------------------------------")
        player1.shot(player2.ownBoard.array,player1.enemyBoard.array,player2.boats,player2,player1) //we shoot enemy's board and boats, we change our enemy own board and we change our own enemy board. We send our enemy remaining boats -not sunken-.
       
        if(player1.winner==true){ //Player2 does not shot if Player1 has already won
            break
        }else{
            
                console.log("ROUND "+ROUND+" for "+player2.name)
                console.log("---------------------------------------------------------------------------------------------------------------------------")
                player2.shot(player1.ownBoard.array,player2.enemyBoard.array,player1.boats, player1,player2) //we shoot enemy's board and boats, we change our enemy own board and we change our own enemy board. We send our enemy remaining boats -not sunken-.
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


