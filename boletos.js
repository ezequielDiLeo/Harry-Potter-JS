
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

let nombre = document.getElementById("nombre")
console.log(nombre.innerHTML)