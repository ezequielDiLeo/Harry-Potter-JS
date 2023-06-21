//.pop= elimina el ultimo    .shft= elimina el inicio  (.unshift agrega al princ.)
//.lenght recorre el array y dice la cantidad de elementos
/*.splice= elimina desde el indice que decimos la cantidad que le decimos... por ej =
let usuarios = ["juan", "roman", "diego", "miguel", "eze"]
usuarios.splice(0, 2) 
console.log(usuarios);*/ //elimina = juan-roman-diego y queda = miguel,eze
// .join(, ) (agrega el caractér que pongas entre parentesis, en este caso la coma)
//concat, concatena arrays
/*.slice, toma los parametros desde el que le pasas al utlimo que le pasas parecido al splice, sirve para guardarlo en otro const*/
//.indexof("elemnto") y devuelve el indice del elemento que le pido
//.includes("elemento") devuelve un booleano si esta o no el elemnt
// para recorrer un array usar for of.


//lista de usuarios

let usuarios = []
let nombreUsuario = prompt("ingrese su nombre: ")
usuarios.push(nombreUsuario)
console.log(usuarios);


let cantidadDisp = 50;
let vendidos = 0;

do{

    let compra = parseInt(prompt("ingrese la cantidad de boletos que quiere comparar"))

    if(compra <= 0){
        console.log("ingrese una cantidad valida")
        alert("ingrese una cantidad valida")
        continue
    }

    if (compra > cantidadDisp){
        console.log("lo siento, quedan " + cantidadDisp + (" de boletos, ingrese menor cantidad"))
        alert("lo siento, quedan " + cantidadDisp + (" de boletos, ingrese menor cantidad"))
        continue
    }

    cantidadDisp -= compra;
    vendidos += compra;

    console.log(usuarios + " compraste " + compra + (" boletos"))
    alert(usuarios + " compraste " + compra + (" boletos"))

    if (cantidadDisp === 0){
        alert("se agotaron los boletos")
    }
    break;

}while (cantidadDisp > 0)


console.log(cantidadDisp)
