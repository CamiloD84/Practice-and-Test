const formulario = document.querySelector("form");

const camposTexto = document.querySelectorAll(
  'input[type="text"], input[type="email"], textarea',
);
const radios = document.querySelectorAll('input[name="queryType"]');
const spanErrorRadio = document.getElementById("error-queryType");

const checkbox = document.getElementById("check");
const spanErrorCheckbox =
  checkbox.parentElement.querySelector(".error-mensaje");

function validarCamposTexto() {
  let hayErrores = false;

  camposTexto.forEach((campo) => {
    const spanError = campo.parentElement.querySelector(".error-mensaje");
    const valor = campo.value.trim();

    if (valor === "") {
      hayErrores = true;
      spanError.textContent = "This field is required";
      spanError.style.display = "block";
      campo.classList.add("input-error");
    } else if (campo.type === "email" && !campo.checkValidity()) {
      hayErrores = true;
      spanError.textContent = "Please enter a valid email address";
      spanError.style.display = "block";
      campo.classList.add("input-error");
    } else {
      spanError.style.display = "none";
      campo.classList.remove("input-error");
    }
  });

  return hayErrores;
}
function validarRadios() {
  const algunoSeleccionado = document.querySelector(
    'input[name="queryType"]:checked',
  );

  if (!algunoSeleccionado) {
    spanErrorRadio.textContent = "Please select a query type";
    spanErrorRadio.style.display = "block";
    document.querySelectorAll(".izquierda, .derecha").forEach((div) => {
      div.classList.add("input-error");
    });
    return true;
  } else {
    spanErrorRadio.style.display = "none";
    document.querySelectorAll(".izquierda, .derecha").forEach((div) => {
      div.classList.remove("input-error");
    });
    return false;
  }
}

function validarCheckbox() {
  if (!checkbox.checked) {
    spanErrorCheckbox.textContent =
      "To submit this form, please consent to being contacted";
    spanErrorCheckbox.style.display = "block";
    checkbox.classList.add("input-error");
    return true;
  } else {
    spanErrorCheckbox.style.display = "none";
    checkbox.classList.remove("input-error");
    return false;
  }
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault(); // Evitamos que se recargue la página

  const errorTexto = validarCamposTexto();
  const errorRadio = validarRadios();
  const errorCheckbox = validarCheckbox();

  if (errorTexto || errorRadio || errorCheckbox) {
    console.log("Hay errores en el formulario");
    return;
  }

  alert("¡Message Sent! Thanks for completing the form.");
});

camposTexto.forEach((campo) => {
  campo.addEventListener("input", function () {
    const spanError = this.parentElement.querySelector(".error-mensaje");
    spanError.style.display = "none";
    this.classList.remove("input-error");
  });
});

radios.forEach((radio) => {
  radio.addEventListener("change", function () {
    spanErrorRadio.style.display = "none";
    document.querySelectorAll(".izquierda, .derecha").forEach((div) => {
      div.classList.remove("input-error");
    });
  });
});

checkbox.addEventListener("change", function () {
  if (this.checked) {
    spanErrorCheckbox.style.display = "none";
    this.classList.remove("input-error");
  }
});
