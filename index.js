const ul = document.querySelector('.tasks')
const input = document.querySelector('input')
let lis = document.querySelectorAll('li')
const del = document.querySelector('.delete')

function addTask() {
    let task = input.value.trim()
    if (task == '' || task == null)
        alert('Adicione  uma tarefa')
    else {
        let li = document.createElement('li')
        li.innerHTML = task
        ul.appendChild(li)
        input.value = ''
    }
}

function markTask() {

    lis.forEach((e, i) => {
        e.onclick = event => {
            let elementStyle = e.style
            if (elementStyle.textDecoration === 'line-through') {
                elementStyle.textDecoration = 'none'
            } else {
                elementStyle.textDecoration = 'line-through'
            }
        }
    })
    lis = document.querySelectorAll('li')
}

function removeTask() {
    lis.forEach(e => {
        e.onclick = event => {
            ul.removeChild(e)
        }
    })
    lis = document.querySelectorAll('li')
}


document.querySelector('button').onclick = () => {
    addTask()
    lis = document.querySelectorAll('li')
    markTask()
    del.classList.remove('off')
    del.classList.add('on')

}

del.onclick = () => {
    let on = del.classList
    if (on.contains('on')) {
        del.classList.remove('on')
        del.classList.add('off')
        removeTask()
    } else {
        del.classList.remove('off')
        del.classList.add('on')
        markTask()
    }
}

window.onload = () => {
    markTask()
}

