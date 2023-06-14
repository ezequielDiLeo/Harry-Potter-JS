
    /*un método se asocia a una acción. por ejemplo this.hablar = ()=>{console.log("hola soy "+this.nombre)}, envia undefined si no retorna algo

    o.....................................................

    hablar() {
        console.log("algo")
    }
    */

    //propiedades son cosas en particular del objeto por ej. this.nombre o this.color.





//this exclusivamente para el valor de la constante
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
const primero = new Carrito("Harry potter y la piedra filosofal", "Scholastic", 2000, 100);

const segundo = new Carrito("Harry Potter y la cámara secreta", "Scholastic", 2000, 100);

const tercero = new Carrito("Harry Potter y el prisionero de Azkaban", "Scholastic", 2000, 100);

const cuarto = new Carrito("Harry Potter y el cáliz de fuego", "Scholastic", 2000, 100);

const quinto = new Carrito("Harry Potter y la Orden del Fénix", "Scholastic", 2000, 100);

const sexto = new Carrito("Harry Potter y el misterio del príncipe", "Scholastic", 2000, 100);

const septimo = new Carrito("Harry Potter y las reliquias de la Muerte", "Scholastic", 2000, 100);

primero.agregar()

console.log("-o.o-")

primero.agregar()
primero.agregar()
segundo.agregar()

primero.devolver()

console.log(primero.cantidad)