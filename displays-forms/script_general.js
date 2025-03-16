document.addEventListener("DOMContentLoaded", () => {
  if (document.body.id === "1") {
    login();
  } else if (document.body.id === "2") {
    register();
  } else if (document.body.id === "3") {
    indexRequest();
  }
});

function login() {
  //Pantalla de login
  const inputUserLogin = document.getElementById("input-user-login");
  const inputPassLogin = document.getElementById("input-pass-login");
  const inputButtonAcceptLogin = document.getElementById("button-accept-login");

  const labelError = document.getElementById("label-error");

  function checkLogin() {
    //Lo mismo, si el usuario es válido, pasamos a ver si la contraseña es válida
    //Si ambos dan true, entrará hasta la última condición
    if (checkUserLogin()) {
      if (checkPassLogin()) {
        window.location.href = "../index.html";
      } else {
        labelError.style.display = "block";
      }
    } else {
      labelError.style.display = "block";
    }
  }

  function checkUserLogin() {
    //Si existe, entonces pasamos a comprobar la contraseña
    if (inputUserLogin.value === "Ismael Alejo") {
      return true;
    } else if (inputUserLogin.value === "") {
      labelError.innerText = "Debes llenar todos los espacios";
    } else {
      labelError.innerText = "Uno de los datos es incorrecto";
      return false;
    }
  }

  function checkPassLogin() {
    //Si la contraseña es igual a la que está enlazada con el usuario, entonces entra
    if (inputPassLogin.value === "ismaelalejo24") {
      return true;
    } else if (inputPassLogin.value === "") {
      labelError.innerText = "Debes llenar todos los espacios";
    } else {
      labelError.innerText = "Uno de los datos es incorrecto";
      return false;
    }
  }

  inputButtonAcceptLogin.addEventListener("click", checkLogin);
}

function register() {
  //Pantalla de registro
  const inputPassRegister = document.getElementById("input-pass-register");
  const inputConfirmPass = document.getElementById("input-confirm-pass");
  const buttonAcceptRegister = document.getElementById(
    "button-accept-register"
  );

  const inputUserRegister = document.getElementById("input-user-register");
  const inputEmailRegister = document.getElementById("input-email-register");

  //Variables de error
  const labelUserError = document.getElementById("label-user-error");
  const labelEmailError = document.getElementById("label-email-error");
  const labelNewPassError = document.getElementById("label-newpass-error");
  const labelConfirmPassError = document.getElementById(
    "label-confirmpass-error"
  );

  function checkRegister() {
    //Probando algo
    let confirm = false;
    inputUserRegister.addEventListener("input", checkUserRegister);
    inputEmailRegister.addEventListener("input", checkEmailRegister);
    inputPassRegister.addEventListener("input", lengthPassRegister);
    inputConfirmPass.addEventListener("input", checkEqualPass);
    checkUserRegister();
    checkEmailRegister();
    lengthPassRegister();
    //Esta función hará el chequeo general, es decir, función por función
    //Si el usuario está disponible se mostrará todo el tiempo.
    //Verificamos si contiene lo suficiente para ser un correo
    //Antes de ver si las contraseñas son iguales,
    //Verificamos si cumple con el requisito principal
    if (checkUserRegister()) {
      if (checkEmailRegister()) {
        if (lengthPassRegister()) {
          if (checkEqualPass()) {
            window.location.href = "login.html";
          }
        }
      }
    }
  }

  function checkUserRegister() {
    //Del usuario requerimos que exista disponibilidad
    //De no existir, entonces puede usarlo
    if (inputUserRegister.value !== "") {
      if (inputUserRegister.value === "Ismael Alejo") {
        //No disponible
        inputUserRegister.style.border = "1px solid #FF3333";
        labelUserError.innerText = "Este usuario ya existe.";
        labelUserError.style.color = "#FF3333";
        labelUserError.style.display = "block";
        return false;
      } else {
        //Disponible
        inputUserRegister.style.border = "1px solid #437a36";
        labelUserError.innerText = "Este usuario está disponible.";
        labelUserError.style.color = "#437a36";
        labelUserError.style.display = "block";
        return true;
      }
    } else {
      //No hay nada escrito
      inputUserRegister.style.border = "1px solid #888";
      labelUserError.style.display = "none";
      return false;
    }
  }

  function checkEmailRegister() {
    if (
      inputEmailRegister.value.includes("@") &&
      inputEmailRegister.value.includes(".com")
    ) {
      inputEmailRegister.style.border = "1px solid #888";
      labelEmailError.style.display = "none";
      return true;
    } else {
      inputEmailRegister.style.border = "1px solid #FF3333";
      labelEmailError.innerText = "Correo no válido.";
      labelEmailError.style.color = "#FF3333";
      labelEmailError.style.display = "block";
      return false;
    }
  }

  function lengthPassRegister() {
    if (inputPassRegister.value.length < 5) {
      inputPassRegister.style.border = "1px solid #FF3333";
      labelNewPassError.innerText = "La contraseña es muy corta.";
      labelNewPassError.style.color = "#FF3333";
      labelNewPassError.style.display = "block";
      return false;
    } else {
      inputPassRegister.style.border = "1px solid #888";
      labelNewPassError.style.display = "none";
      return true;
    }
  }

  function checkEqualPass() {
    if (inputPassRegister.value === inputConfirmPass.value) {
      inputConfirmPass.style.border = "1px solid #888";
      labelConfirmPassError.style.display = "none";
      return true;
    } else {
      inputConfirmPass.style.border = "1px solid #FF3333";
      labelConfirmPassError.style.color = "#FF3333";
      labelConfirmPassError.innerText = "Las contraseñas no coinciden.";
      labelConfirmPassError.style.display = "block";
      return false;
    }
  }

  buttonAcceptRegister.addEventListener("click", checkRegister);
}

function indexRequest() {
  /*Cosas a tomar en cuenta:
  1. El número de tarjeta es de 16 dígitos
  2. La fecha se compone de 7 dígitos (contando '/')
  3. El código de seguridad es de 3 dígitos
  4. Contando el '+', el número es de 12 dígitos (sin contar espacios)
  */
  const inputCard = document.getElementById("input-card");
  const inputDate = document.getElementById("input-date");
  const inputCode = document.getElementById("input-code");
  const inputNumberPhone = document.getElementById("input-number-phone");
  const buttonAceptar = document.getElementById("button-accept-request");

  const labelCardError = document.getElementById("label-card-error");
  const labelDateError = document.getElementById("label-date-error");
  const labelCodeError = document.getElementById("label-code-error");
  const labelNumberPhoneError = document.getElementById("label-number-error");

  function checkCardAll() {
    inputCard.addEventListener("input", checkCard);
    inputDate.addEventListener("input", checkDate);
    inputCode.addEventListener("input", checkCode);
    inputNumberPhone.addEventListener("input", checkPhone);
    //Llamo a todos al menos una vez
    checkCard();
    checkDate();
    checkCode();
    checkPhone();

    if (checkCard()) {
      if (checkDate()) {
        if (checkCode()) {
          if (checkPhone()) {
            //Cambia de pantalla
            window.location.href = "../index.html"
          }
        }
      }
    }
  }

  function checkCard() {
    if (inputCard.value !== "") {
      if (inputCard.value.length === 16) {
        labelCardError.style.display = "none";
        return true;
      } else {
        labelCardError.innerText = "El número debe ser de 16 dígitos";
        labelCardError.style.display = "block";
        return false;
      }
    } else {
      labelCardError.innerText = "Debes ingresar tu número de tarjeta*";
      labelCardError.style.display = "block";
      return false;
    }
  }

  function checkDate() {
    if (inputDate.value !== "") {
      if (inputDate.value.includes("/")) {
        if (inputDate.value.length === 7) {
          labelDateError.style.display = "none";
          return true;
        } else {
          labelDateError.innerText = "Ingresa una fecha válida";
          labelDateError.style.display = "block";
          return false;
        }
      } else {
        labelDateError.innerText = "Falta '/'";
        labelDateError.style.display = "block";
        return false;
      }
    } else {
      labelDateError.innerText = "Debes ingresar una fecha*";
      labelDateError.style.display = "block";
      return false;
    }
  }

  function checkCode() {
    if (inputCode.value.length === 3) {
      labelCodeError.style.display = "none";
      return true;
    } else {
      labelCodeError.innerText = "El código consta de 3 dígitos";
      labelCodeError.style.display = "block";
      return false;
    }
  }

  function checkPhone() {
    if (inputNumberPhone.value !== "") {
      if (inputNumberPhone.value.includes(" ")) {
        labelNumberPhoneError.innerText = "No se aceptan espacios";
        labelNumberPhoneError.style.display = "block";
        return false;
      } else if (inputNumberPhone.value.length === 10) {
        labelNumberPhoneError.style.display = "none";
        return true;
      } else {
        labelNumberPhoneError.innerText = "Más o faltan dígitos";
        labelNumberPhoneError.style.display = "block";
        return false;
      }
    } else {
      labelNumberPhoneError.innerText = "Faltan dígitos (deben de ser 10)";
      labelNumberPhoneError.style.display = "block";
      return false;
    }
  }

  buttonAceptar.addEventListener("click", checkCardAll);
}
