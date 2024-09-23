document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const resultadoDiv = document.createElement('div');
    resultadoDiv.id = 'resultado';
    document.querySelector('.container').appendChild(resultadoDiv);

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        procesarCompra();
    });

   
    function procesarCompra() {
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const evento = document.getElementById('evento').value;
        const cantidad = document.getElementById('cantidad').value;

        if (nombre && email && evento && cantidad) {
            const mensaje = `Gracias, ${nombre}. Has comprado ${cantidad} entradas para el ${evento}.`;
            resultadoDiv.textContent = mensaje;
            guardarEnStorage(nombre, email, evento, cantidad);
        } else {
            resultadoDiv.textContent = 'Por favor, completa todos los campos.';
        }
    }

    function guardarEnStorage(nombre, email, evento, cantidad) {
        const compra = {
            nombre: nombre,
            email: email,
            evento: evento,
            cantidad: cantidad
        };
        localStorage.setItem('compra', JSON.stringify(compra));
    }

    function recuperarDeStorage() {
        const compra = JSON.parse(localStorage.getItem('compra'));
        if (compra) {
            const mensaje = `Última compra: ${compra.cantidad} entradas para el ${compra.evento} a nombre de ${compra.nombre}.`;
            resultadoDiv.textContent = mensaje;
        }
    }

    recuperarDeStorage();
});