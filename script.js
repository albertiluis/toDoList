let colecaoTarefas = []

function criarTarefa() {
    let tarefa = pegarTarefa()
    tarefa = tarefa.trim()

    if (tarefa !== '' && tarefa !== ' ') {
        colecaoTarefas.push(tarefa)
        listarTarefas(colecaoTarefas)
    } else {
        mensagemErro('Verifique o campo de texto.')
    }
}

function listarTarefas(todasTarefas){
    limparLista()
    todasTarefas.forEach(adicionarTarefa);
}

function removerTarefa(tarefaSelecionada){
    let idTarefa = retornarIdTarefa(tarefaSelecionada) 
    colecaoTarefas.splice(idTarefa, 1)
    listarTarefas(colecaoTarefas)
}

function marcarTarefas() {
    const todosCheckbox = pegarCheckbox()
    todosCheckbox.forEach((checkbox) => {
        checkbox.checked = true
    })
}

function desmarcarTarefas() {
   const todosCheckbox = pegarCheckbox()
   todosCheckbox.forEach((checkbox) => {
       checkbox.checked = false
   })
}

function deletarTarefas() {
    limparLista()
    colecaoTarefas.splice(0, colecaoTarefas.length)
}
