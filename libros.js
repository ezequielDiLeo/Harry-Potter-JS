
class Carrito{

    constructor (nombre, editorial, año, stock){

        this._nombre = nombre;
        this._editorial = editorial;
        this._año = año;
        this._stock = stock;
        this._cantidad = 0;

    }

    agregar(){
        this._cantidad += 1
        console.log(this._cantidad)

        return`agregaste ${this._nombre} al carrito`
    }

    devolver(){
        this._cantidad = this._cantidad - 1
        console.log(this._cantidad)

        return `haz hecho la devolución de ${this._nombre} revise su mail para mas detalles`;
    }

    get stock(){
        return this._stock
    }
    set stock(stockNuevo){
        this._stock = stockNuevo
    }


}


//creo el objeto
const pelis = []

let peli1 = new Carrito("Harry potter y la piedra filosofal", "Scholastic", 2000, 100);

let peli2 = new Carrito("Harry Potter y la cámara secreta", "Scholastic", 2000, 100);

let peli3 = new Carrito("Harry Potter y el prisionero de Azkaban", "Scholastic", 2000, 100);

let peli4 = new Carrito("Harry Potter y el cáliz de fuego", "Scholastic", 2000, 100);

let peli5 = new Carrito("Harry Potter y la Orden del Fénix", "Scholastic", 2000, 100);

let peli6 = new Carrito("Harry Potter y el misterio del príncipe", "Scholastic", 2000, 100);

let peli7 = new Carrito("Harry Potter y las reliquias de la Muerte", "Scholastic", 2000, 100);

pelis.push(peli1, peli2, peli3, peli4, peli5, peli6, peli7)
console.log(pelis.length)

console.log(peli1.agregar())
console.log(peli3.agregar())
console.log(peli3.devolver())

console.log(peli5.stock)

for (const peli of pelis){
    peli5.stock = peli5.stock - 1
    console.log(peli5.stock)
}

//array con objeto
const books = [
    {id: 1, nombre:"Harry potter y la piedra filosofal", precio:2000},
    {id: 2, nombre:"Harry Potter y la cámara secreta", precio:1900},
    {id: 3, nombre:"Harry Potter y el prisionero de Azkaban", precio:2100},
    {id: 4, nombre:"Harry Potter y el cáliz de fuego", precio:2300},
    {id: 5, nombre:"Harry Potter y la Orden del Fénix", precio:2200},
    {id: 6, nombre:"Harry Potter y el misterio del príncipe", precio:2150},
    {id: 7, nombre:"Harry Potter y las reliquias de la Muerte", precio:2500}
]

for (const book of books){
    console.log(book.id)
    console.log(book.nombre)
    console.log(book.precio)
}

const totalLibros = books.reduce((acumulador, el) => acumulador + el.precio, 0)

console.log(totalLibros)

const precio = books.filter((el)=> el.precio > 2000)
console.log(precio)



const promesa =  (res) =>{
    return new Promise((resolve, reject) =>{
        setTimeout( () => {
            res ? resolve("promesa resuelta") : reject("rechazada")
        }, 2000)
    })
}


console.log (promesa (true))

/* const promesa2 =  (res) =>{
    return new Promise((resolve, reject) =>{
        if(res === true){
            resolve("resuelto")
        }else{
            reject("rechazada")
        }
    })
}

carritoConAlgo(true)
    .then( (response)=>{
        console-log(response)
    })

carritoConAlgo(false)
    .catch((error) =>{
        console.log(error)
    }) */


    /*
    fetch('data.json')
    .then( (res) => res.json())
    .then((data))=>{
        data.forEach((producto) => {
            const li = document.createElement('li')

        })
    } )

    */

/* let div = document.getElementsByClassName("contenedor_img")[0];
console.log(div.innerText) */

let Libro = document.querySelector(".Libro")
Libro.innerHTML = "Libros Harry Potter"



let compra1 = document.getElementById("button1")
compra1.addEventListener("click", click1)

function click1(){
    console.log("agregaste este producto al carrito")
}



let button2 = document.getElementById("button2")
button2.addEventListener("click", click2)

function click2(){
    console.log("agregaste este producto al carrito")
}



let button3 = document.getElementById("button3")
button3.addEventListener("click", click3)

function click3(){
    console.log("agregaste este producto al carrito")
}




let button4 = document.getElementById("button4")
button4.addEventListener("click", click4)

function click4(){
    console.log("agregaste este producto al carrito")
}




let button5 = document.getElementById("button5")
button5.addEventListener("click", click5)

function click5(){
    console.log("agregaste este producto al carrito")
}




let button6 = document.getElementById("button6")
button6.addEventListener("click", click6)

function click6(){
    console.log("agregaste este producto al carrito")
}




let button7 = document.getElementById("button7")
button7.addEventListener("click", click7)

function click7(){
    console.log("agregaste este producto al carrito")
}