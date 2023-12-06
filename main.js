let input;
let tarefas = [{input}];

function adicionarTarefa() {
    input = document.querySelector('#input').value;
    tarefas.unshift = input;
    document.querySelector('#listaTarefas').innerHTML = tarefas;
}
