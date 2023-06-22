
    /*un método = this.hablar = ()=>{console.log("hola soy "+this.nombre)}, envia undefined si no retorna algo

    o.....................................................

    hablar() {
        console.log("algo")
    }
    */


    //this exclusivamente para el valor de la constante
    //clase constructora con metodos para agregar o sacar del carrito.
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

//array.find= busca entre los objetos el primer valor
//array.filter= busca entre los objetos los valores que coincidan
//array.some retorna lo mismo que el filter pero con true o false
//array.map= retorna el atributo que le pedis. por ej= const hola = array.map((el) => el.nombre) = los nombres del array
/*array.reduce =
//const total = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0) ->el 0 es de donde inicia
acumulador = una variable que almacena los elemtnos
elemento = recorre los elementos del array
*/
//array.sort= ordena de menor a mayor o viceversa en caso de numeros
//



const precio = books.filter((el)=> el.precio > 2000)
console.log(precio)


