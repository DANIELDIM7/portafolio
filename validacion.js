// Haz tú validación en javascript acá

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.onfocus = () => {
    input.previousElementSibling.classList.add("top");
    input.previousElementSibling.classList.add("focus");
    input.parentNode.classList.add("focus");
  };
  input.onblur = () => {
    input.value.trim();
    if (input.value.trim().length == 0) {
      input.previousElementSibling.classList.remove("top");
    }

    input.previousElementSibling.classList.remove("focus");
    input.parentNode.classList.remove("focus");
  };
});

// VALIDACION

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
const form = document.getElementById("form");
const parrafo = document.getElementById("parrafo");
const btn = document.getElementById("submitButton");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let warnings = "";
  let entrar = false;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  parrafo.innerHTML = "";
  if (nombre.value.length < 1) {
    warnings += `El campo nombre no debe estar vacío <br>`;
    if (nombre.length > 50) {
      warnings += `El número máximo de caracteres es de 50`;
    }
    entrar = true;
  }
  if (!regexEmail.test(email.value)) {
    warnings += `El email no es válido <br>`;
    entrar = true;
  }

  if (asunto.value.length < 1) {
    warnings += `El campo asunto no debe estar vacío <br>`;
    if (asunto.length > 50) {
      warnings += `El número máximo de caracteres es de 50`;
    }
    entrar = true;
  }

  if (mensaje.value.length < 1) {
    warnings += `El campo mensaje no debe estar vacío <br>`;
    if (asunto.length > 300) {
      warnings += `El número máximo de caracteres es de 300`;
    }
  }

  if (entrar) {
    parrafo.innerHTML = warnings;
  }  
});
