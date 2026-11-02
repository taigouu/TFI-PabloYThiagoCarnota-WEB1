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
const imagenCarruselNueva = document.getElementById("imagenCarruselNueva");
let imagenVisible = imagenCarrusel;
let imagenOculta = imagenCarruselNueva;
const descripcionCarrusel = document.getElementById("descripcionCarrusel");

const contadorCarrusel = document.getElementById("contadorCarrusel");

let indiceActual = 0;
let cambiandoImagen = false;

function actualizarCarrusel() {
  descripcionCarrusel.textContent = imagenesCarrusel[indiceActual].descripcion;

  contadorCarrusel.textContent = `${indiceActual + 1} / ${imagenesCarrusel.length}`;
}

function cambiarImagen() {
  if (cambiandoImagen) return;

  cambiandoImagen = true;

  imagenOculta.setAttribute("src", imagenesCarrusel[indiceActual].src);
  imagenOculta.setAttribute("alt", imagenesCarrusel[indiceActual].alt);

  const informacion = document.querySelector(".infoCarrusel");

  informacion.addEventListener(
    "transitionend",
    (evento) => {
      if (evento.propertyName !== "opacity") return;

      actualizarCarrusel();
      informacion.classList.remove("desvaneciendo");
    },
    { once: true },
  );

  imagenVisible.addEventListener(
    "transitionend",
    (evento) => {
      if (evento.propertyName !== "opacity") return;

      let auxiliar = imagenVisible;
      imagenVisible = imagenOculta;
      imagenOculta = auxiliar;

      cambiandoImagen = false;
    },
    { once: true },
  );

  informacion.classList.add("desvaneciendo");
  imagenOculta.classList.add("imagenActiva");
  imagenVisible.classList.remove("imagenActiva");
}

botonSiguiente.addEventListener("click", () => {
  if (cambiandoImagen) return;

  indiceActual++;

  if (indiceActual >= imagenesCarrusel.length) {
    indiceActual = 0;
  }

  cambiarImagen();
});

botonAnterior.addEventListener("click", () => {
  if (cambiandoImagen) return;

  indiceActual--;

  if (indiceActual < 0) {
    indiceActual = imagenesCarrusel.length - 1;
  }

  cambiarImagen();
});

actualizarCarrusel();
