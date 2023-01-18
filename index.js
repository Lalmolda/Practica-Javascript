//REQUISITOS SOFTWARE.
//TENER INDEX.JS QUE SERÁ EL CORE Y EL ARCHIVO A EJECUTAR.

//✔DONE FRASE QUE INDIQUE QUE EMPIEZA EL JUEGO.
//✔DONE MOSTRAR DOS TABLEROS, DE JUGADOR A Y JUGADOR B. RELLENOS DE 'VACIO'.
//✔DONE CREAR CLASES Y/O OBJETOS BARCOS. PUNTOS DE VIDA DEL BARCO, IDENTIFICACIÓN DE CADA BARCO. EL OBJETO TIENE QUE SABER EN QUE POSICIONES ESTA DENTRO DEL TABLERO (PROPIEDAD X,Y EN CADA CASILLA, SI SON DOS CASILLAS X,Y EN EL TABLERO, SERÍAN DOS VECTORES (PARTES DEL BARCO) CON DOS VALORES CADA UNO (POSICIÓN EN EL TABLERO). )
//✔DONE FUNCIÓN ALEATORIA COLOCAR LAS NAVES EN TABLERO DE JUGADOR A Y B (CREAR OBJETO BARCO Y MARCAR SU POSICION EN LA FUNCIÓN). DEBE DECIDIR SI SE COLOCA HORIZONTAL O VERTICAL, NUNCA DIAGONAL. NO SOLAPAR BARCOS.
//✔DONE Intentar colocar primero los barcos más grandes primero. Empezar por las mayores hasta llegar a la arenilla.
//TODO TABLERO ENEMIGO DEBE MOSTRARSE COMO VACIO ENTERO AL COMIENZO CON AGUA O TOCADO EN EL DISPARO, SIN BARCOS.
//TODO FRASE QUE INDICA QUE EMPIEZAN LAS RONDAS.
//TODO MOSTRAR EN QUE RONDA ESTAMOS POR Y QUE JUGADOR ESTÁ JUGANDO.
//TODO FUNCIÓN DISPARO (NO PODER DISPARAR EN LA MISMA CASILLA DOS VECES), FUNCIÓN PARA MOSTRAR AGUA O TOCADO EN EL ENEMY BOARD.Cada disparo, mostrará la casilla seleccionada, los disparos le faltan al jugador X.
//TODO si en cambio da a una nave del oponente, seráentonces “Tocado”. Si además no quedan más casillas de esa nave “tocadas”, deberá mostrarse “Hundido”.
//TODO CADA JUGADOR PODRÁ SEGUIR DISPARANDO DURANTE EL MISMO TURNO HASTA QUE FALLE (AGUA).
//TODO --> y los tableros del jugador que está disparando (el propio y el ajeno) con la casilla ya marcada, sea agua o tocado.
//TODO El juego terminará cuando no haya más disparos o bien cuando uno de los dos jugadores haya hundido toda la flota contrincante.
//TODO CUANDO TERMINE, MOSTRAR JUGADOR GANADOR.
//TODO CUANDO TERMINE, MOSTRAR TABLEROS PROPIOS DE JUGADOR 1 Y 2, PARA VER BARCOS QUE QUEDARON POR HUNDIR.

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
        //this.player
        //this.boardtype= BoardType
    
    }
    
} 

class boat {
    constructor (type, size, lives, positionIndex,positionColumn){
        this.type = type //which type of boat, i.e submarine
        this.size = size //number of boxes in the board
        this.lives = lives //remaining lives
        this.positionIndex = []
        this.positionColumn = []
        this.boatPicture = ''
        if(type=='carrier'){
            this.boatPicture=CARRIER
        }
        if(type=='vessel'){
            this.boatPicture=VESSEL
        }
        if(type=='submarine'){
            this.boatPicture=SUBMARINE
        }
        if(type=='cruise'){
            this.boatPicture=CRUISE
        }
        if(type=='motorBoat'){
            this.boatPicture=MOTORBOAT
        }

    }
}

//We build Player class, which will build 2 objects, the player's own and enemy board.
class player {
    constructor(name){
        this.name = name
        //Given the fact every player sees 2 boards per run, we create them inside the player object.
        this.ownBoard = new board()
        this.enemyBoard = new board()

        this.shots=100
        
        this.carrier = new boat("carrier",5,5)
        this.vessel = new boat("vessel",4,4)
        this.submarine1 = new boat("submarine",3,3)
        this.submarine2 = new boat("submarine",3,3)
        this.cruise1 = new boat("cruise",2,2)
        this.cruise2 = new boat("cruise",2,2)
        this.cruise3 = new boat("cruise",2,2)
        this.motorboat1 = new boat("motorBoat",1,1)
        this.motorboat2 = new boat("motorBoat",1,1)
        this.motorboat3 = new boat("motorBoat",1,1)

    }

    shot(enemyBoard1,enemyBoard2){
        console.log("SOY EL METODO SHOT")
        let randomColumn 
        let randomRowNum
        randomRowNum =getRandomInt(10)
        randomColumn =getRandomInt(10)
        randomRowValue=Object.keys(enemyBoard1)[randomRowNum]
        console.log("DISPARO A "+ randomRowValue+ " "+randomColumn)
        for(let index in enemyBoard1){
            if(index==randomRowValue){
                for(let j=0;j<COLUMNS;j++){
                    if(j==randomColumn){
                        if(enemyBoard1[index][j]!='  '){
                            console.log("You damaged a ship!!") 
                            enemyBoard1[index][j]=DAMAGED
                         }else{
                             console.log("Water!!")
                             enemyBoard1[index][j]=WATER
                         }
                    }
                }
            }
        }
        console.table(enemyBoard1)
    

        for(let index in enemyBoard2){
            if(index==randomRowValue){
                for(let j=0;j<COLUMNS;j++){
                    if(j==randomColumn){
                        if(enemyBoard2[index][j]!='  '){
                           console.log("You damaged a ship!!") 
                           enemyBoard2[index][j]=DAMAGED
                        }
                        else{
                            console.log("Water!!")
                            enemyBoard2[index][j]=WATER
                        }
                    }
                 }
            }   
        }
        console.table(enemyBoard2)
        this.shots--
        console.log("AL "+this.name+" le quedan "+this.shots+" disparos")
    }
} 

//returns a random number which equals the parameter max-1 (if its 8, it will generate random numbers between 0 and 7)
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }



//Places boats on the board
function placeBoat (boat, board){ //receives player object with both boat and board.
    //place carrier in board
    let randomRowNum
    let randomColumn  
    let horizontalOrVertical
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
                        retry++ //if there is only one boat in the same cell of the matriz, it is counted and bucle repeats.
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
                    boat.positionIndex[index]=index
                    boat.positionColumn[randomColumn]=randomColumn
                    console.log("METO A BARCO INDEX "+index)
                    console.log("METO A BARCO Column "+randomColumn)
                    console.log("BOAT POSITION INDEX "+boat.positionIndex[index])
                    console.log("BOAT POSITION COLUMN "+boat.positionColumn[randomColumn])
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
                        boat.positionIndex[index]=index
                        boat.positionColumn[j]=j
                        console.log("METO 2 A BARCO INDEX "+index)
                        console.log("METO 2 A BARCO Column "+j)
                        console.log("BOAT 2 POSITION INDEX "+boat.positionIndex[index])
                        console.log("BOAT 2 POSITION COLUMN "+boat.positionColumn[j]) 
                    }
                }
            }    
        }
    }

}

/*
function shot (enemyBoard1,enemyBoard2) {
    let randomColumn 
    let randomRowNum
    randomRowNum =getRandomInt(10)
    randomColumn =getRandomInt(10)
    randomRowValue=Object.keys(board)[randomRowNum]
    console.log("DISPARO A "+ randomRowValue+ " "+randomColumn)
    for(let index in board){
        if(index==randomRowValue){
            for(let j=0;j<COLUMNS;j++){
                if(j==randomColumn){
                   board[index][j]=DAMAGED
                }
            }
        }
    }
    console.table(board)
}*/




//we initialize the game
    //console.table(MainBoard.Array)
    const player1 = new player("player 1")
    const player2 = new player("player 2")

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
    console.log(player1.name +" own board ")
    console.table(player1.ownBoard.array)
    console.log(player1.name +" enemy board")
    console.table(player1.enemyBoard.array)

    console.log(player2.name +" own board")
    console.table(player2.ownBoard.array)
    console.log(player2.name +" enemy board")
    console.table(player2.enemyBoard.array)

    console.log("-------------------------------")

    //shot(player2.ownBoard.array)
    player1.shot(player2.ownBoard.array,player1.enemyBoard.array)
    player2.shot(player1.ownBoard.array,player2.enemyBoard.array)
    //console.log(Object.keys(player1.ownBoard.array)[1])  //gets index on string format.
    //console.log(player1.ownBoard.array.B[0])  //gets array info, to shot.
    //console.log("CARRIER DEL JUGADOR 1 ESTA EN INDEX "+Object.keys(player1.carrier.positionIndex)[0]+ " Y COLUMNA "+player1.carrier.positionColumn[0]) //way to shot and test where boats are located


