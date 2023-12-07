 let tarefas = [];

function adicionarTarefa() {
    tarefas = document.getElementById('input').value;
    document.querySelector('#listaTarefas').innerHTML = tarefas;
}

function remover(){
    tarefas.shift();
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}
