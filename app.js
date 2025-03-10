//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adcionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nomeAmigo = inputAmigo.value;

    if (!nomeAmigo) {
        alert("Digite o nome do amigo");
        return;
    }
    amigos.push(nomeAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    atualizalista();
}

function atualizarlista(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerhtml = "";

    for(let i = 0; i , amigos.length; i++){
        let item = document.createElement("li");
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}
function sortearAmigo(){
    if(amigos.length === 0){
        alert("Nenhum amigo adcionado");
        return;
    }
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resutaldo.innerHTML = `O amigo sorteado foi ${sorteado}`;

    let limparLista = document.getElementById("listaAmigos");
    limparLista.innerHTML = "";
    amigos = [];
}