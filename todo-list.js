let tarefas = [];
let tarefa;
let listaTarefas;

function adicionarTarefa() {
    //RECUPERAR A TAREFA DIGITADA PELO USUARIO 
    tarefa = "<tr><td>" + document.querySelector('#tarefa').value
    + "</td><td><button class='btn btn-danger'>EXCLUIR</button></td></tr>";
    //ADICIONAR A TAREFA AO ARRAY TAREFAS
    tarefas.push(tarefa);
    console.log(tarefas);
    listarTarefas();
}

function listarTarefas() {
    tarefas.forEach(
        function (itemTarefa) { 
            listaTarefas += itemTarefa;
        }
    );
    document.querySelector('#listaTarefas').innerHTML = listaTarefas;
    listaTarefas = '';
}

function excluirTarefa() {
    tarefas.shift();
    listarTarefas();
}