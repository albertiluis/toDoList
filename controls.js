//Selecionar Campos
const campoTextoTarefa = document.getElementById('campo-texto-tarefa')
const botaoSubmitTarefa = document.getElementById('botao-submit-tarefa')
const listaTarefas = document.getElementById('lista-tarefas')

//Botões
document.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        criarTarefa()
    }
})
botaoSubmitTarefa.addEventListener('click', criarTarefa)

//Funções
function limparCampoTexto() {
    campoTextoTarefa.value = ''
}

function limparLista() {
    listaTarefas.innerHTML = ""
}

function pegarTarefa() {
    const tarefa = campoTextoTarefa.value

    limparCampoTexto()
    return tarefa
}

function adicionarTarefa(tituloTarefa, taskId) {
    document.querySelector('small').classList.remove('show')

    const li = document.createElement('li')
    li.id = taskId

    const input = document.createElement('input')
    input.type = "checkbox"
    input.id = "check-tarefa"
    input.name = "tarefa"

    const span = document.createElement('span')
    span.id = "titulo-tarefa"
    span.innerText = tituloTarefa

    const button = document.createElement('button')
    button.classList.add('botao-excluir')
    button.id = taskId
    button.innerHTML = 'Delete'

    const label = document.createElement('label')
    label.appendChild(input)
    label.appendChild(span)
    li.appendChild(label)
    li.appendChild(button)

    listaTarefas.appendChild(li)
    mapearIds()
}

function mensagemErro(mensagem) {
    document.querySelector('small').classList.add('show')
    document.querySelector('small').innerText = mensagem
}

function mapearIds() {
    let lixeiras = document.querySelectorAll('#tarefas-app .botao-excluir')

    lixeiras.forEach(lixeira => {
        lixeira.addEventListener('click', removerTarefa);
    })
}

function retornarIdTarefa(tarefa){
    return tarefa.target.id
}

function pegarCheckbox(){
    return document.getElementsByName('tarefa')
}

document.getElementById('marcar-tarefas').addEventListener('click', marcarTarefas)

document.getElementById('desmarcar-tarefas').addEventListener('click', desmarcarTarefas)

document.getElementById('deletar-tarefas').addEventListener('click', deletarTarefas)