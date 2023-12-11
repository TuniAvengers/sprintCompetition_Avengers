//Hacemos una clase producto para cada uno de los productos de la carniceria
class Producto {
    //parametros privados
    #nombre;
    #precio;
    #cantidad;

    constructor(nombre, precio, cantidad) {
        this.#nombre = nombre;
        this.#precio = precio;
        this.#cantidad = cantidad;
    }

    //metodos publicos
    get nombre() {
        return this.#nombre;
    }

    get precio() {
        return this.#precio;
    }

    get cantidad() {
        return this.#cantidad;
    }

    set nombre(nombre) {
        this.#nombre = nombre;
    }

    set precio(precio) {
        this.#precio = precio;
    }

    set cantidad(cantidad) {
        this.#cantidad = cantidad;
    }

    //metodos publicos
    //metodo para calcular el precio total de cada producto
    calcularPrecioTotal() {
        return this.#precio * this.#cantidad;
    }

    //metodo para mostrar el producto
    mostrarProducto() {
        return `Producto: ${this.#nombre} - Precio: $${this.#precio} - Cantidad: ${this.#cantidad} - Precio Total: $${this.calcularPrecioTotal()}`;
    }
}


