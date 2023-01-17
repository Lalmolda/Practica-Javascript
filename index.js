//REQUISITOS SOFTWARE.
//TENER INDEX.JS QUE SERÁ EL CORE Y EL ARCHIVO A EJECUTAR.

//✔DONE FRASE QUE INDIQUE QUE EMPIEZA EL JUEGO.
//✔DONE MOSTRAR DOS TABLEROS, DE JUGADOR A Y JUGADOR B. RELLENOS DE 'VACIO'.
//✔DONE CREAR CLASES Y/O OBJETOS BARCOS. PUNTOS DE VIDA DEL BARCO, IDENTIFICACIÓN DE CADA BARCO. EL OBJETO TIENE QUE SABER EN QUE POSICIONES ESTA DENTRO DEL TABLERO (PROPIEDAD X,Y EN CADA CASILLA, SI SON DOS CASILLAS X,Y EN EL TABLERO, SERÍAN DOS VECTORES (PARTES DEL BARCO) CON DOS VALORES CADA UNO (POSICIÓN EN EL TABLERO). )
//TODO FUNCIÓN ALEATORIA COLOCAR LAS NAVES EN TABLERO DE JUGADOR A Y B (CREAR OBJETO BARCO Y MARCAR SU POSICION EN LA FUNCIÓN). DEBE DECIDIR SI SE COLOCA HORIZONTAL O VERTICAL, NUNCA DIAGONAL. NO SOLAPAR BARCOS.
//TODO Intentar colocar primero los barcos más grandes primero. Empezar por las mayores hasta llegar a la arenilla.
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



const BOATPICTURE = '🚢'
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
    constructor (type, size, lives, position){
        this.type = type //which type of boat, i.e submarine
        this.size = size //number of boxes in the board
        this.lives = lives //remaining lives
        this.position  = []
    }
}

//We build Player class, which will build 2 objects, the player's own and enemy board.
class player {
    constructor(name){
        this.name = name
        //Given the fact every player sees 2 boards per run, we create them inside the player object.
        this.ownBoard = new board()
        this.enemyBoard = new board()
        
        this.carrier = new boat("carrier",5,5)


    }


} 

//Places boats on the board
function placeBoat (){
    console.log ("PRUEBO FUNCION PLACEBOAT")
    console.log(player1.carrier)
    //place carrier in Player1.ownBoard.Array
    //For bucles which go through each element of the matrix/array of arrays.
    let randomRow
    let randomColumn
    let horizontalOrVertical

    for (let index in player1.ownBoard.array){
        for(let j= 0;j<player1.ownBoard.array[index].length;j++){
            console.log(player1.ownBoard.array[index][j])
            //if(player1.ownBoard.array[index][j]=='  '){        //remember equal to double space, not single space
                //player1.ownBoard.array[index][j]=BOATPICTURE  //changes empty spaces for boats
            //}
        }
    }
    console.table(player1.ownBoard.array)
}

//we initialize the game
    //console.table(MainBoard.Array)
    const player1 = new player("player 1")
    const player2 = new player("player 2")

    console.log("THE GAME STARTS!")
    console.log(player1.name +" OWN BOARD")
    console.table(player1.ownBoard.array)
    console.log(player1.name +" enemyBoard")
    console.table(player1.enemyBoard.array)

    console.log(player2.name +" OWN BOARD")
    console.table(player2.ownBoard.array)
    console.log(player2.name +" enemyBoard")
    console.table(player2.enemyBoard.array)


    placeBoat();
