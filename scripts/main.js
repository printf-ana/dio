function botao() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
    console.log(document.getElementById("agradecimento"));
}

function redirecionar() {
    window.open("https://github.com/printf-ana");
    window.location.href = "https://github.com/printf-ana";
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!"
    elemento.innerHTML = "Obrigado por passar o mouse!"
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!"
    elemento.innerHTML = "Passe o mouse aqui!"
}

function load() {
    alert("Página carregada!");
}

function funcaoChange(elemento) {
    console.log(elemento.value)
} //coleta valores