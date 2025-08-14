// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombre = String(document.getElementById("amigo").value);
    if (nombre === "") {
        alert("El nombre no puede estar vacío.");
        return;
    } else {
        amigos.push(nombre);
        actualizarLista();
        limpiarCaja();
    };
}

function limpiarCaja() {
    document.getElementById("amigo").value = "";
}

function limpiarLista() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(function (nombre) {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
};

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    } else {
        let amigoAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[amigoAleatorio];
        document.getElementById("resultado").textContent = "El amigo sorteado es: " + amigoSorteado;
        limpiarLista();
        return amigoSorteado;
    };
};