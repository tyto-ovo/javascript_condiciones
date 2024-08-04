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
