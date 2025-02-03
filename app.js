let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }
    
    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado.");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        
        const buttonRemover = document.createElement("button");
        buttonRemover.textContent = "X";
        buttonRemover.onclick = () => removerAmigo(index);
        
        li.appendChild(buttonRemover);
        lista.appendChild(li);
    });
}

function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para realizar o sorteio.");
        return;
    }
    
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    
    exibirResultado(sorteado);
}

function exibirResultado(sorteado) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
    
    const li = document.createElement("li");
    li.textContent = `Amigo sorteado: ${sorteado}`;
    listaResultado.appendChild(li);
}
