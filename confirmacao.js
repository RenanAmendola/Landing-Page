let email = document.querySelector('#email')
let assunto = document.querySelector("#assunto")

let emailOk = false
let assuntoOk = false




function validarEmail(){

    let txtEmail = document.querySelector("#txtEmail")

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        txtEmail.innerHTML = "E-mail invalido"
        txtEmail.style.color = "red"
    }else{
        txtEmail.innerHTML = "E-mail valido"
        txtEmail.style.color = "green"
        emailOk = true
    }

}

function validarAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")

    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = "Texto é muito garnde, digite no maximo 100 caracteres"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    }else{
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar(){
    if ( emailOk == true && assuntoOk == true){
        alert("Formulario enviado com sucesso")
    }else{
        alert("preencha corretamente o formulario")
    }
}