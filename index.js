const ul = document.querySelector('.tasks')
const input = document.querySelector('input')
const tasks = []
const del = document.querySelector('.delete')
const addButton = document.querySelector('button')

function addTask() {
    let task = input.value.trim()

    if (task == '' || task == null)
        alert('Adicione  uma tarefa')
    else {
        tasks.push(task)
        li = document.createElement('li')
        li.innerHTML = task
        ul.appendChild(li)
        saveStorage()
        input.value = ''
    }
}

function markTask() {
    let lis = document.querySelectorAll('.tasks li')
    lis.forEach((e) => {
        e.onclick = () => {
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
    let lis = document.querySelectorAll('.tasks li')

    lis.forEach(e => {
        e.onclick = () => {
            ul.removeChild(e)
            tasks.pop(e)
            saveStorage()
        }
    })
    lis = document.querySelectorAll('li')
}

function saveStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

addButton.onclick = () => {
    addTask()
    lis = document.querySelectorAll('li')
    markTask()
    del.classList.remove('off')
    del.classList.add('on')
}
document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {

        addTask()
        lis = document.querySelectorAll('li')
        markTask()
        del.classList.remove('off')
        del.classList.add('on')
    }
})

window.onload = () => {
    const storageTasks = localStorage.getItem('tasks')

    if (storageTasks) {
        tasks.push(...JSON.parse(storageTasks))
        tasks.map(task => {
            const li = document.createElement('li')
            li.innerHTML = task
            ul.appendChild(li)
        })
    }
    markTask()
}

del.onclick = () => {
    let classes = del.classList
    if (classes.contains('on')) {
        del.classList.remove('on')
        del.classList.add('off')
        removeTask()
    } else {
        del.classList.remove('off')
        del.classList.add('on')
        markTask()
    }
}


