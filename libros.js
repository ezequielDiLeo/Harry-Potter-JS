
//array con objeto
const contenedorGaleria = document.getElementById("contenedor_galeria");
const btnCart = document.getElementById("btnCart")

const books = [
    {id: 1, nombre:"Harry potter y la piedra filosofal", precio:2000, img: "../assets/images/harry-potter.jpg",},

    {id: 2, nombre:"Harry Potter y la cámara secreta", precio:1900, img: "../assets/images/harry-potter2.jpg",},

    {id: 3, nombre:"Harry Potter y el prisionero de Azkaban", precio:2100, img:"../assets/images/harry-potter3.jpg"},

    {id: 4, nombre:"Harry Potter y el cáliz de fuego", precio:2300, img:"../assets/images/harry-potter4.jpg"},

    {id: 5, nombre:"Harry Potter y la Orden del Fénix", precio:2200, img:"../assets/images/harry-potter5.jpg"},

    {id: 6, nombre:"Harry Potter y el misterio del príncipe", precio:2150, img:"../assets/images/harry-potter6.jpg"},

    {id: 7, nombre:"Harry Potter y las reliquias de la Muerte", precio:2500, img:"../assets/images/harry-potter7-2.jpg"}
]

let carrito = []

books.forEach((book)=> {
    let content = document.createElement("div");
    content.className = "card"
    content.innerHTML = `
        <img src="${book.img}">
        <h3 class="txt">${book.nombre}</h3>
        <p class="precio">$${book.precio}</p>
    `

    contenedorGaleria.append(content);

    let boton = document.createElement("button");
    boton.className = "btn"
    boton.innerText = "comprar";

    content.append(boton)

    boton.addEventListener("click", () => {
        carrito.push({
            id : book.id,
            img : book.img,
            nombre : book.nombre,
            precio : book.precio,
        });
        console.log(carrito);
    });
});

btnCart.addEventListener("click", () =>{
    console.log("funciona");
})



// ------------------------------------------------------------------- ->

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


let Libro = document.querySelector(".Libro")
Libro.innerHTML = "Libros Harry Potter"



