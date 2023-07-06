
class Carrito{

    constructor (nombre, editorial, año, stock){

        this.nombre = nombre;
        this.editorial = editorial;
        this.año = año;
        this.stock = stock;
        this.cantidad = 0;

    }

    agregar(){
        console.log("haz agregado " + this.nombre + " al carrito")
        this.cantidad = this.cantidad + 1
    }

    devolver(){
        console.log("haz hecho la devolución de " +this.nombre+ " revise su mail para mas detalles")
        this.cantidad = this.cantidad - 1
    }

}


//creo el objeto

const pelis = []

pelis.push (new Carrito("Harry potter y la piedra filosofal", "Scholastic", 2000, 100));

pelis.push (new Carrito("Harry Potter y la cámara secreta", "Scholastic", 2000, 100));

pelis.push (new Carrito("Harry Potter y el prisionero de Azkaban", "Scholastic", 2000, 100));

pelis.push (new Carrito("Harry Potter y el cáliz de fuego", "Scholastic", 2000, 100));

pelis.push (new Carrito("Harry Potter y la Orden del Fénix", "Scholastic", 2000, 100));

pelis.push (new Carrito("Harry Potter y el misterio del príncipe", "Scholastic", 2000, 100));

pelis.push (new Carrito("Harry Potter y las reliquias de la Muerte", "Scholastic", 2000, 100));

for (const peli of pelis){
    peli.agregar()
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

let btn = document.querySelectorAll(".btn");
console.log(btn.length);

let div = document.getElementsByClassName("contenedor_img")[0];
console.log(div.innerText)

let Libro = document.querySelector(".Libro")
Libro.innerHTML = "libros Harry Potter"