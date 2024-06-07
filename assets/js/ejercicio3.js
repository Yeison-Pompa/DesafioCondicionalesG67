let ingresar = document.querySelector("#ingresar");

ingresar.addEventListener("click", () => {
  let numero_1 = parseInt(document.querySelector("#num_1").value);
  let numero_2 = parseInt(document.querySelector("#num_2").value);
  let numero_3 = parseInt(document.querySelector("#num_3").value);

  if (numero_1 === 9 & numero_2 === 1 && numero_3 === 1) {
    document.querySelector("p").innerHTML = "Contraseña 1 correcta";
  } else if (numero_1 === 7 && numero_2 === 1 && numero_3 === 4) {
    document.querySelector("p").innerHTML = "Contraseña 2 correcta";
  } else {
    document.querySelector("p").innerHTML = "Contraseña incorrecta";
  }
})
