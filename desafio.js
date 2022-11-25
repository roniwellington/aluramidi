const listaDeTeclas = document.querySelectorAll('input[type=button]');
const inputTel = document.querySelector('input[type=tel]')

for (indice = 0; indice < listaDeTeclas.length; indice++) {
    //const tecla = listaDeTeclas[indice];
    const tecla = listaDeTeclas[indice];

    tecla.onclick = function () {
        inputTel.value = inputTel.value + tecla.value;
    }

    tecla.onkeydown = function (evento) {
        if(evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}



// codigo do forum
// const teclas = document.querySelectorAll("input[type=button")

// for (let i = 0; i < teclas.length; i++){
//     teclas[i].addEventListener('click', myFunc);
// }

// function myFunc(){
//     const valor = this.value;
//     const display = document.querySelector("input[type=tel");
//     display.value += valor;
// }

// const teclalist = document.querySelectorAll("input[type=button]")
// const tel = document.querySelector("input[type=tel]")

// function teclar (vtecla) {
//     tel.value += vtecla;
// }

// for (let t = 0; t < teclalist.length; t++) {
//     teclalist[t].onclick = () => {
//         teclar(teclalist[t].value)
//     }

//     teclar.onkeydown = function () {
//         teclar.classList.add('ativa');
//     }

//     teclar.onkeyup = function () {
//         teclar.classList.remove('ativa')
//     }
// }

// const teclas = document.querySelectorAll('input[type=button]');


// for (let i = 0; i < teclas.length; i++) {
//   teclas[i].onkeydown = function (key) {
//     if (key.code === "Enter" || key.code === "Space") {
//       teclas[i].classList.add("ativa");
//     }
//   };
//   teclas[i].onkeyup = function () {
//      teclas[i].classList.remove('ativa');
//   };
// }
