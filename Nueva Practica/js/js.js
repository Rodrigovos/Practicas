function mostrarNotas() {
    var vernotas = document.getElementById('addnotas');
    vernotas.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    var boton = document.getElementById('mostrar');
    boton.onclick = mostrarNotas;
});
function ocultarNotas(){
    var ocultarnotas = document.getElementById('addnotas');
    ocultarnotas.style.display = 'none';
}
document.addEventListener('DOMContentLoaded', function(){
    var bttocultar = document.getElementById('ocultar');
    bttocultar.onclick = ocultarNotas
})

/* Traigo los elementos que van a participar en la accion que quiero lograr, en este caso la hoja donde el usuario va a escribir, el boton con el que va a agregar las notas y el div con las notas que van hacer agregadas! */

const hojaTextArea = document.getElementById('hoja');
const sumarCartaBtn = document.getElementById('sumarcarta');
const cartasAgregadasDiv = document.getElementById('cartasagregadas');
/* Despues agregamos un Evento que capte la accion de hacer click en agregar*/

sumarCartaBtn.addEventListener('click',function(){
const nota = hojaTextArea.value.trim();

if (nota !== ''){
    const nuevaNota = document.createElement('div');

    nuevaNota.textContent = nota;

    cartasAgregadasDiv.appendChild(nuevaNota);

    hojaTextArea.value = '';
}
else {
    alert("Agrega contenido a tus notas");
}
})
function borrarNotas() {
    var cartasAgregadasDiv = document.getElementById('cartasagregadas');
    
    // Elimina todos los hijos del div (todas las notas)
    while (cartasAgregadasDiv.firstChild) {
        cartasAgregadasDiv.removeChild(cartasAgregadasDiv.firstChild);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Asocia la función de borrarNotas al botón correspondiente
    var botonBorrar = document.getElementById('borrar');
    botonBorrar.onclick = borrarNotas;
});

// Resto de tu código...

// Planilla 

// function Operaciones(){
//     var Producto = document.getElementById('a')
//     var Costo = document.getElementById('b')
//     var Iva = document.getElementById('c')
//     var Vventa = document.getElementById('d')
//     var Ml = document.getElementById('e')
//     var Mreal = document.getElementById('f')

// }
var costoElements = [];
var ventaElements = [];
var comisionElements = [];

for (let i = 1; i <= 6; i++) {
    costoElements.push(document.getElementById('b' + i));
    ventaElements.push(document.getElementById('d' + i));
    comisionElements.push(document.getElementById('e' + i));

    // Agrega event listener a cada elemento de costo
    costoElements[i - 1].addEventListener('input', function() {
        actualizarValores(i);
    });
}

function actualizarValores(index) {
    valorIva(index);
    valorVenta(index);
    comisionML(index);
    margenReal(index);
}

function valorIva(index) {
    var costoValor = parseFloat(costoElements[index - 1].value);
    var iva = costoValor * 0.22;
    mostrarIva(iva, index);
}

function mostrarIva(valor, index) {
    document.getElementById('c' + index).value = valor.toFixed(2);
}

function valorVenta(index) {
    var costoValor = parseFloat(costoElements[index - 1].value);
    var iva = costoValor * 0.22;
    var venta = (costoValor + iva) * 1.3;
    mostrarVenta(venta, index);
}

function mostrarVenta(valor, index) {
    ventaElements[index - 1].value = valor.toFixed(2);
}

function comisionML(index) {
    var costoComision = parseFloat(ventaElements[index - 1].value) * 0.14;
    mostrarComision(costoComision, index);
}

function mostrarComision(valor, index) {
    comisionElements[index - 1].value = valor.toFixed(2);
}

function margenReal(index) {
    var margenGanancia = parseFloat(ventaElements[index - 1].value) - parseFloat(comisionElements[index - 1].value) - (parseFloat(costoElements[index - 1].value) * 1.22);
    mostrarMargen(margenGanancia, index);
}

function mostrarMargen(valor, index) {
    document.getElementById('f' + index).value = valor.toFixed(2);
}
