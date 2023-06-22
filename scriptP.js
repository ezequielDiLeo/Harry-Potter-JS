
function muggle(nombre){

    let magos = prompt("Hola " +nombre+ ", escribe 'mago' si eres mago o 'muggle' si eres muggle").toLowerCase();

    if(( magos==="mago") || ( magos==="Mago")){
        alert("Bienvenido a aventurarte a la página de Harry Potter")
        console.log("eres mago :p ")
    }else{
        alert("NO puedes ingresar, solo para magos")
    }

}
muggle(prompt("escribe tu nombre"))

setTimeout(()=>{
    console.log("muy bien")
    alert("debes completar el campo obligatoriamente")
}, 500)

/*console.log(Math.PI) //3.14159265... = devuelve el PI 
console.log(Math.E) //2.7182818284... = constante de Euleur

//Math.max(55, 13, 0, -20) // 55 = retorna el maximo
//Math.min(55, 13, 0, -20) // -20 = retorna el minimo

//Math.ceil = devuelve el entero mayor o igual mas proximo
por ejemplo de PI = 4
/console.log(Math.ceil(PI)) // 4

//Math.floor = devuelve el entero mas cercando reodndeado hacia abajo
por ejemplo de PI = 3

//Math.round = devuelve un numero redondeado al entero mas cercano
por ejemplo de PI = 3


//Math.sqrt = retorna la raiz cuadrada de un numero 
/ Math.sqrt(9) = 3

//Math.random() = genera un numero aleatorio entre 0 y 1, siendo 0 como limite inclusivo y 1 exclusivo
/podemos multipicarlo por x numero para que me de numero mayores de 0 a 1
/console.log(Math.random() * 10)
o
/const generadorNumero = () => {
    return Math.round( Math.random() * 100 )
}

//console.log ( new Date() ) retorna la fecha y horario GTM
puedo darle parametros 
/const casiNavidad = new Date ("December 25, 2021, 23:59:59")


const hoy = new Date("december 17, 2021")
/console.log(hoy.toDateString() ) // fri dec 2021
/console.log(hoy.toLocaleString() ) // 17/12/2021 00:00:00
/console.log(hoy.toLocalDateString() ) // 17/12/2021
/console.log(hoy.toTimeString() ) // 00:00:00 GMT-0300

*/



