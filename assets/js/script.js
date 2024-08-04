// -------- BORDES -------- //

const imagen = document.querySelector(".foto");
let contador = 0;
const borde = () => {
  contador = contador + 1;
  console.log(contador);
  if (contador % 2 == 1) {
    imagen.style.border = "2px solid red";
  } else {
    imagen.style.border = "none";
  }
};
// -------- ------ -------- //

// -------- STICKERS -------- //
let cantidadUno = document.querySelector(".cantidad-sticker-1");
let cantidadDos = document.querySelector(".cantidad-sticker-2");
let cantidadTres = document.querySelector(".cantidad-sticker-3");
let total = document.querySelector(".cantidad-total");

const suma = () => {
  let contador =
    Number(cantidadUno.innerHTML) +
    Number(cantidadDos.innerHTML) +
    Number(cantidadTres.innerHTML);
  total.innerHTML = contador;
};
const comprobar = () => {
  let seccion = document.querySelector(".total-section");
  if (Number(total.innerHTML) > 10) {
    seccion.innerHTML = "<p> Llevas demasiados stickers</p>";
  } else {
    seccion.innerHTML = `<p> Llevas ${total.innerHTML} stickers.</p>`;
  }
};

const contadorMenosUno = () => {
  let numeroUnoMenos = Number(cantidadUno.innerHTML);
  if (numeroUnoMenos > 0) {
    numeroUnoMenos = numeroUnoMenos - 1;
    cantidadUno.innerHTML = numeroUnoMenos;

    suma();
    comprobar();
  }
};
const contadorMasUno = () => {
  let numeroUnoMas = Number(cantidadUno.innerHTML);
  numeroUnoMas = numeroUnoMas + 1;
  cantidadUno.innerHTML = numeroUnoMas;

  suma();
  comprobar();
};
const contadorMenosDos = () => {
  let numeroDosMenos = Number(cantidadDos.innerHTML);
  if (numeroDosMenos > 0) {
    numeroDosMenos = numeroDosMenos - 1;
    cantidadDos.innerHTML = numeroDosMenos;

    suma();
    comprobar();
  }
};
const contadorMasDos = () => {
  let numeroDosMas = Number(cantidadDos.innerHTML);
  numeroDosMas = numeroDosMas + 1;
  cantidadDos.innerHTML = numeroDosMas;

  suma();
  comprobar();
};

const contadorMenosTres = () => {
  let numeroTresMenos = Number(cantidadTres.innerHTML);
  if (numeroTresMenos > 0) {
    numeroTresMenos = numeroTresMenos - 1;
    cantidadTres.innerHTML = numeroTresMenos;

    suma();
    comprobar();
  }
};
const contadorMasTres = () => {
  let numeroTresMas = Number(cantidadTres.innerHTML);
  numeroTresMas = numeroTresMas + 1;
  cantidadTres.innerHTML = numeroTresMas;

  suma();
  comprobar();
};

// -------- -------- -------- //

// -------- CONTRASEÑAS -------- //

const contraseñaCorrecta1 = 911;
const contraseñaCorrecta2 = 714;

let btnEnviar = document.querySelector(".boton");
let checked = document.querySelector("#correcto");
let digito = document.querySelector("input");

btnEnviar.addEventListener("click", function () {
  if (digito.value == contraseñaCorrecta1) {
    checked.innerHTML = "Password 1 correcto";
  } else if (digito.value == contraseñaCorrecta2) {
    checked.innerHTML = "Password 2 es correcto";
  } else {
    checked.innerHTML = "Password incorrecto";
  }
});
// -------- ----------- -------- //
