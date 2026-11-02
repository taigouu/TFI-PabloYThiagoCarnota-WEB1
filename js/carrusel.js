const imagenesCarrusel = [
  {
    src: "../imagenes/carrusel1.jpg",
    descripcion: "Instalación de aire acondicionado Split Samsung",
    alt: "Aire acondicionado Samsung instalado sobre un ventanal.",
  },

  {
    src: "../imagenes/carrusel2.png",
    descripcion: "Mantenimiento y entrega de freezer",
    alt: "Mantenimiento y entrega de freezer",
  },

  {
    src: "../imagenes/carrusel3.png",
    descripcion: "Reparación de lavarropas Drean",
    alt: "Reparación de lavarropas Drean",
  },

  {
    src: "../imagenes/carrusel4.png",
    descripcion: "Reparación de unidad exterior de un aire central por ductos",
    alt: "Reparación de unidad exterior de un aire central por ductos",
  },

  {
    src: "../imagenes/carrusel5.png",
    descripcion: "Reparación de heladera con freezer",
    alt: "Reparación de heladera con freezer",
  },
];

const botonAnterior = document.getElementById("anterior");
const botonSiguiente = document.getElementById("siguiente");
const imagenCarrusel = document.getElementById("imagenCarrusel");

const descripcionCarrusel = document.getElementById("descripcionCarrusel");

const contadorCarrusel = document.getElementById("contadorCarrusel");

let indiceActual = 0;

function actualizarCarrusel() {
  imagenCarrusel.setAttribute("src", imagenesCarrusel[indiceActual].src);

  imagenCarrusel.setAttribute("alt", imagenesCarrusel[indiceActual].alt);

  descripcionCarrusel.textContent = imagenesCarrusel[indiceActual].descripcion;

  contadorCarrusel.textContent = `${indiceActual + 1} / ${imagenesCarrusel.length}`;
}

botonSiguiente.addEventListener("click", () => {
  indiceActual++;
  if (indiceActual >= imagenesCarrusel.length) {
    indiceActual = 0;
  }
  actualizarCarrusel();
});

botonAnterior.addEventListener("click", () => {
  indiceActual--;
  if (indiceActual < 0) {
    indiceActual = imagenesCarrusel.length - 1;
  }
  actualizarCarrusel();
});

actualizarCarrusel();
