const tamanho = document.querySelector("#tamanho");
const maiusculas = document.querySelector("#maiusculas");
const minusculas = document.querySelector("#minusculas");
const numeros = document.querySelector("#numeros");
const especiais = document.querySelector("#especiais");
const gerarSenhabtn = document.querySelector("#gerarSenha");
const limparSenhabtn = document.querySelector("#limparSenha");
const senhaGerada = document.querySelector("#senhaGerada");

let caracteres = "";

function gerarSenha() {
    if (tamanho.value < 4 || tamanho.value > 24) {
        alert("O tamanho da senha deve ser entre 4 e 24 caracteres.");
        return;
    }

    if (maiusculas.checked) {
        caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (minusculas.checked) {
        caracteres += "abcdefghijklmnopqrstuvwxyz";
    }

    if (numeros.checked) {
        caracteres += "0123456789";
    }

    if (especiais.checked) {
        caracteres += "!@#$%&*_.?";
    }

    if (caracteres === "") {
        alert("Selecione pelo menos uma opção de caractere.");
        return;
    }

    let senha = "";

    for (let i = 0; i < tamanho.value; i++) {
        const índice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[índice];
    }

    senhaGerada.value = senha;
}

function limparSenha() {
    senhaGerada.value = "";
    caracteres = "";
}

function copiarSenha() {
    if (senhaGerada.value === "") {
        alert("Não há senha para copiar.");
        return;
    }

    navigator.clipboard.writeText(senhaGerada.value);
    alert("Senha copiada!");
}

const copiarSenhabtn = document.querySelector("#copiarSenha");

copiarSenhabtn.addEventListener("click", copiarSenha);

gerarSenhabtn.addEventListener("click", gerarSenha);
limparSenhabtn.addEventListener("click", limparSenha);