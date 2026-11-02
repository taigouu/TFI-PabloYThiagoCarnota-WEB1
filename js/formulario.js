const formulario = document.getElementById("formContacto");
const nombre = document.getElementById("nombreForm");
const correo = document.getElementById("correoForm");
const telefono = document.getElementById("telefonoForm");
const localidad = document.getElementById("localidadForm");
const equipo = document.getElementById("equipoForm");
const servicio = document.getElementById("servicioForm");
const descripcion = document.getElementById("descripcionForm");

const errorNombre = document.querySelector(".errorNombre");
const errorCorreo = document.querySelector(".errorCorreo");
const errorTelefono = document.querySelector(".errorTelefono");
const errorLocalidad = document.querySelector(".errorLocalidad");
const errorEquipo = document.querySelector(".errorEquipo");
const errorServicio = document.querySelector(".errorServicio");
const errorDescripcion = document.querySelector(".errorDescripcion");

const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const patronTelefono = /^\+?[0-9]+([ -]?[0-9]+)*$/;

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  let formularioValido = true;

  errorNombre.textContent = "";
  errorCorreo.textContent = "";
  errorTelefono.textContent = "";
  errorLocalidad.textContent = "";
  errorEquipo.textContent = "";
  errorServicio.textContent = "";
  errorDescripcion.textContent = "";

  // validacion de nombre
  if (nombre.value.trim().length < 3) {
    errorNombre.textContent =
      "Ingresá tu nombre y apellido (mínimo 3 caracteres).";
    formularioValido = false;
  }

  // validacion de correo
  if (!patronCorreo.test(correo.value.trim())) {
    errorCorreo.textContent = "Ingresá un correo electrónico válido.";
    formularioValido = false;
  }

  //validacion de telefono
  const telefonoLimpio = telefono.value.replace(/[^0-9]/g, "");

  if (!patronTelefono.test(telefono.value.trim())) {
    errorTelefono.textContent = "Ingresá un teléfono válido.";
    formularioValido = false;
  } else if (telefonoLimpio.length < 8 || telefonoLimpio.length > 15) {
    errorTelefono.textContent = "El teléfono debe tener entre 8 y 15 dígitos.";
    formularioValido = false;
  }

  //validacion de localidad
  if (localidad.value.trim().length < 3) {
    errorLocalidad.textContent =
      "Ingresá una localidad válida (mínimo 3 caracteres).";
    formularioValido = false;
  }

  //validacion de equipo
  if (equipo.value === "") {
    errorEquipo.textContent = "Seleccioná un equipo de la lista.";
    formularioValido = false;
  }

  //validacion de servicio
  if (servicio.value === "") {
    errorServicio.textContent = "Seleccioná un servicio de la lista.";
    formularioValido = false;
  }

  //validacion de descripcion
  if (descripcion.value.trim().length < 10) {
    errorDescripcion.textContent =
      "Ingresá una descripción más detallada (mínimo 10 caracteres).";
    formularioValido = false;
  }

  //corroborar si el formulario es válido y enviar los datos
  if (formularioValido) {
    const mensajeWhatsapp =
      "Hola, soy " +
      nombre.value +
      ". Quería realizar una consulta por el siguiente servicio:\n\n" +
      "_*Equipo:*_ " +
      equipo.options[equipo.selectedIndex].text +
      "\n" +
      "_*Servicio:*_ " +
      servicio.options[servicio.selectedIndex].text +
      "\n" +
      "_*Localidad:*_ " +
      localidad.value +
      "\n" +
      "_*Descripción:*_ " +
      descripcion.value +
      "\n\n" +
      "¡Desde ya, muchas gracias!";

    const mensajeCodificado = encodeURIComponent(mensajeWhatsapp);

    const enlaceWhatsApp =
      "https://wa.me/5492664207109?text=" + mensajeCodificado;

    //creacion de variables y asignacion de valores del formulario
    const datosConsulta = {
      nombre: nombre.value,
      correo: correo.value,
      telefono: telefono.value,
      localidad: localidad.value,
      equipo: equipo.value,
      servicio: servicio.value,
      descripcion: descripcion.value,
    };

    const resumen = document.createElement("div");
    resumen.classList.add("resumenConsulta");

    const tituloResumen = document.createElement("h3");
    tituloResumen.textContent = "¡Consulta preparada correctamente!";
    resumen.appendChild(tituloResumen);

    const parrafoNombre = document.createElement("p");
    parrafoNombre.textContent = "Nombre: " + nombre.value;
    resumen.appendChild(parrafoNombre);

    const parrafoCorreo = document.createElement("p");
    parrafoCorreo.textContent = "Correo: " + correo.value;
    resumen.appendChild(parrafoCorreo);

    const parrafoTelefono = document.createElement("p");
    parrafoTelefono.textContent = "Teléfono: " + telefono.value;
    resumen.appendChild(parrafoTelefono);

    const parrafoLocalidad = document.createElement("p");
    parrafoLocalidad.textContent = "Localidad: " + localidad.value;
    resumen.appendChild(parrafoLocalidad);

    const parrafoEquipo = document.createElement("p");
    parrafoEquipo.textContent =
      "Equipo: " + equipo.options[equipo.selectedIndex].text;
    resumen.appendChild(parrafoEquipo);

    const parrafoServicio = document.createElement("p");
    parrafoServicio.textContent =
      "Servicio: " + servicio.options[servicio.selectedIndex].text;
    resumen.appendChild(parrafoServicio);

    const parrafoDescripcion = document.createElement("p");
    parrafoDescripcion.textContent = "Descripción: " + descripcion.value;
    resumen.appendChild(parrafoDescripcion);

    const botonWhatsApp = document.createElement("a");
    botonWhatsApp.href = enlaceWhatsApp;
    botonWhatsApp.target = "_blank";
    botonWhatsApp.rel = "noopener noreferrer";
    botonWhatsApp.classList.add("botonWhatsApp");
    botonWhatsApp.innerHTML =
      '<i class="fa-brands fa-whatsapp"></i> Enviar consulta por WhatsApp';
    resumen.appendChild(botonWhatsApp);

    const botonEditar = document.createElement("button");
    botonEditar.type = "button";
    botonEditar.innerHTML =
      '<i class="fa-solid fa-pen-to-square"></i> Editar consulta';
    botonEditar.classList.add("botonEditar");
    resumen.appendChild(botonEditar);

    botonEditar.addEventListener("click", () => {
      nombre.value = datosConsulta.nombre;
      correo.value = datosConsulta.correo;
      telefono.value = datosConsulta.telefono;
      localidad.value = datosConsulta.localidad;
      equipo.value = datosConsulta.equipo;
      servicio.value = datosConsulta.servicio;
      descripcion.value = datosConsulta.descripcion;

      resumen.classList.add("saliendo");

      resumen.addEventListener(
        "animationend",
        () => {
          resumen.remove();

          document.querySelector(".formularioContacto").scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        },
        { once: true },
      );
    });

    //creacion html del resumen
    const resumenAnterior = document.querySelector(".resumenConsulta");
    if (resumenAnterior) {
      resumenAnterior.remove();
    }

    formulario.insertAdjacentElement("afterend", resumen);

    resumen.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    //reseteamos el form
    formulario.reset();
  }
});
