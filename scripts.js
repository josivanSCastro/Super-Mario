

const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")
const faleconosco = document.querySelector(".faleconosco")

function mostrarform() {
    form.style.left = "50%"
    form.style.transform = "translatex(-50%)"
    mascara.style.visibility = "visible"
}

function escondermascara() {
    form.style.left = "-300%"
    form.style.transform = "translatex(0%)"
    mascara.style.visibility = "hidden"
}

/*function faleconosco (){
    form.style.left = "50%"
    form.style.transform = "translatex(-50%)"
    mascara.style.visibility = "visible"
   } 
   */




/*function cliquenobotao() {
alert("voce clicou no botao")
}*/