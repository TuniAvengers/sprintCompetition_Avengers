const productJSON = './producto.JSON';
const display = document.querySelector('#display');

const getData = async () => {
    const response = await fetch(productJSON);
    const data = await response.json();
    return data;
};

const displayProducts = async () => {
    const payload = await getData();
    
    let dataDisplay = payload.map((item) => {
        const{nombre,precio, peso, imagen} = item;

        return `
            <div class="card">
                <p>${nombre}</p>
                <p>${precio}</p>
                <p>${peso}</p>
            </div>

        `;
    });

    display.innerHTML = dataDisplay;
};

displayProducts();