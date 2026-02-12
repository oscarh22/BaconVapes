
function abrirModal(img) {
  document.getElementById("modalProducto").style.display = "flex";
  document.getElementById("modalImg").src = img.src;
  document.getElementById("modalNombre").innerText = img.dataset.nombre;
  document.getElementById("modalDesc").innerText = img.dataset.desc;
  document.getElementById("modalPrecio").innerText = img.dataset.precio;
}


function cerrarModal() {
  document.getElementById("modalProducto").style.display = "none";
}


function toggleMenu() {
  const nav = document.querySelector('.header nav');
  const toggle = document.querySelector('.menu-toggle');

  nav.classList.toggle('active');
  toggle.classList.toggle('active');
}

document.querySelectorAll('.header nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.header nav').classList.remove('active');
    document.querySelector('.menu-toggle').classList.remove('active');
  });
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');

  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});




let productoModal = '';
let precioModal = 0;
let metodoPago = '';
let producto = '';
let precioUnitario = 0;
let cantidad = 1;

function comprarDesdeImagen() {

  if (!productoModal || !precioModal) {
    alert("Error al obtener producto");
    return;
  }


  document.getElementById("modalProducto").style.display = "none";


  abrirCompra(productoModal, precioModal);
}


function abrirModal(img) {
  document.getElementById("modalProducto").style.display = "flex";

  document.getElementById("modalImg").src = img.src;
  document.getElementById("modalNombre").innerText = img.dataset.nombre;
  document.getElementById("modalDesc").innerText = img.dataset.desc;
  document.getElementById("modalPrecio").innerText = img.dataset.precio;


  productoModal = img.dataset.nombre;
  precioModal = parseInt(img.dataset.precio.replace('$', ''));
}

function abrirCompra(nombre, precio) {
  producto = nombre;
  precioUnitario = precio;
  cantidad = 1;

  document.getElementById('nombreProducto').innerText = nombre;
  document.getElementById('cantidad').innerText = cantidad;
  actualizarPrecio();

  document.getElementById('ubicaciones').style.display = 'none';
  document.getElementById('msgForaneo').style.display = 'none';
  document.getElementById('modalCompra').style.display = 'flex';
}

function cerrarModalCompra() {
  document.getElementById('modalCompra').style.display = 'none';
}

function cambiarCantidad(valor) {
  cantidad += valor;
  if (cantidad < 1) cantidad = 1;
  document.getElementById('cantidad').innerText = cantidad;
  actualizarPrecio();
}

function actualizarPrecio() {
  document.getElementById('precioTotal').innerText =
    `$${precioUnitario * cantidad} MXN`;
}

function seleccionarPago(btn) {
  metodoPago = btn.dataset.pago;
  document.querySelectorAll('.btn-pago').forEach(b => b.classList.remove('activo'));
  btn.classList.add('activo');
}

function seleccionarEntrega(tipo) {
  const ubicaciones = document.getElementById("ubicaciones");
  const msgForaneo = document.getElementById("msgForaneo");

  if (tipo === "local") {
    ubicaciones.style.display = "block";
    msgForaneo.style.display = "none";
  } else {
    ubicaciones.style.display = "none";
    msgForaneo.style.display = "block";
  }
}

function enviarWhats() {

  const nombre = document.getElementById('cliente').value || 'Cliente';
  const direccion = document.getElementById('direccion').value || 'No especificada';
  const total = precioUnitario * cantidad;
  const pago = metodoPago || 'No especificado';

  if (!direccion || !direccion.trim()) {
    alert("Por favor ingresa tu dirección");
    return; 
  }

  const mensaje =
    `Hola, soy ${nombre}
🛍 Producto: ${producto}
🔢 Cantidad: ${cantidad}
💰 Total: $${total} MXN
💳 Pago: ${pago}
📍 Dirección: ${direccion}`;

  const url = `https://wa.me/5213513483622?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
}