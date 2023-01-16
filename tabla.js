const t = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

const indexedTable = {
    A: ['🚗','🚛',3],
    B: [4,'🚇',6],
    C: [7,'🚀',9]
}
//console.log(t[0][0] === 1)
// podemos acceder a propiedades de obetos via notación de arrays
//let indexOfTable = 'A'
//console.log(indexedTable.A[0] === indexedTable[indexOfTable][0])
console.table(indexedTable)
// para "recorrer" un objeto:
//Object.keys(indexedTable).forEach(key => {
//    console.log(indexedTable[key])
//})

console.log(Object.keys(indexedTable)[2])

for (Object.keys in indexedTable){
    console.log(indexedTable[Object.keys])
}
let vector = []
let barco = '🚢'

for (Object.keys in indexedTable){
    vector=indexedTable[Object.keys]

    console.log("CONSOLE LOG DE VALUE DE INDEXED TABLE"+indexedTable[Object.keys][0])


    

    for (let i = 0;i<vector.length;i++){

        if (indexedTable[Object.keys][i]=='🚗' || indexedTable[Object.keys][i]>1){
            console.log("CAMBIADO EN LA TABLA!!!!")
            indexedTable[Object.keys][i]=barco
        }


        console.log("SOY VECTOR Y SOY  "+vector[i])
        if (vector[i]=='🚗'){
            console.log("ACABO DE CAMBIAR 🚗por UN BARCO AHORA PRINTO LA MATRIZ DE NUEVO")
            vector[i]=barco
        }

    }

}


console.table(indexedTable)
//console.log("PRUEBA OBJECT KEYS: "+Object.indexedTable.keys)
//console.log(indexedTable.prototype.keys[0])
// esto no acaba de funcionar bien para poder visualizar en 2D
//console.log(t)


// console.log(t.map(row => row.join(" ")))
//console.log(indexedTable.C[1])
//console.table(t)
//console.table(indexedTable)