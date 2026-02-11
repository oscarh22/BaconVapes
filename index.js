
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

/* ===================== */
/* Encabezado */
/* ===================== */
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

