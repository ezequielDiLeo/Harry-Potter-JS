//preguntar mago o muggle
//function... var.. if... prompt...

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

//ingresar tipo
//switch

/* num = parseInt(prompt("ingrese... \n 1 para: muggle \n 2 para: mago \n 3 para: sangre sucia"));
let tipo;

switch(num){
    case 1:
        tipo = "muggle";
        break;
    case 2: 
        tipo = "mago";
        break;
    case 3:
        tipo = "sangre sucia"
        break;
    default:
        tipo = "no existe"
        break;
} */

console.log("tu tipo es " + tipo)

//for..  libros
/* 
let librosHP = [
    {titulo: "Harry potter y la piedra filosofal", autor:"JKRowling"},
    {titulo: "Harry potter y la cámara secreta", autor:"JKRowling"},
    {titulo: "Harry potter y el prisionero de Azkaban", autor:"JKRowling"},
    {titulo: "Harry potter y el cáliz de fuego", autor:"JKRowling"},
    {titulo: "Harry potter y la Orden del Fénix", autor:"JKRowling"},
    {titulo: "Harry potter y el misterio del príncipe", autor:"JKRowling"},
    {titulo: "Harry potter y las reliquias de la muerte", autor:"JKRowling"}
]

for(let i = 0; i < librosHP.length; i++){
    console.log("libro " + (i + 1));
    console.log(librosHP[i].titulo + ", AUTORA: " + librosHP[i].autor)
} */

//while me quede sin ideas xd
/* 
let peliculas = 0;

while (peliculas <= 7) {
    console.log("Harry Potter " + peliculas);
    peliculas++;
} */

