class Carnes extends Producto{
    #tipo;
    #peso;
    #corte;
    #animal;

    constructor(nombre, precio, cantidad, tipo, peso, corte, animal) {
        super(nombre, precio, cantidad);
        this.#tipo = tipo;
        this.#peso = peso;
        this.#corte = corte;
        this.#animal = animal;
    }

    get tipo() {
        return this.#tipo;
    }

    get peso() {
        return this.#peso;
    }

    get corte() {
        return this.#corte;
    }

    get animal() {
        return this.#animal;
    }

    set tipo(tipo) {
        this.#tipo = tipo;
    }

    set peso(peso) {
        this.#peso = peso;
    }

    set corte(corte) {
        this.#corte = corte;
    }

    set animal(animal) {
        this.#animal = animal;
    }

    //metodos publicos
    //metodo para mostrar el producto
    mostrarProducto() {
        return `Producto: ${this.nombre} - Precio: $${this.precio} - Cantidad: ${this.cantidad} - Precio Total: $${this.calcularPrecioTotal()} - Tipo: ${this.#tipo} - Peso: ${this.#peso} - Corte: ${this.#corte} - Animal: ${this.#animal}`;
    }
}