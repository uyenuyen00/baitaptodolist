let addTask = document.querySelector('button') 
let nameTask = document.querySelector('#box1')

addTask.addEventListener('click', () => {
    if(!nameTask.value){
        alert('NHẬP TÊN TASK ')
    }
    let tasks = []
    tasks.push({name: nameTask.value})
    nameTask.value =''

    renderTasks(tasks)

})

function renderTasks(tasks=[]){
    let content ='<div id ="form">'

    tasks.forEach((task) => {
        content += `<div class = "form">
        <input type="checkbox" class="checkbox">

        <a href="" > ${task.name}</a>

        <button class ="box3">
            <a href="">
                <i class="fa-solid fa-trash-can"></i>
            </a>
        </button>

        <button class ="box4">
            <a href="">
                <i class="fa-solid fa-pen"></i>
            </a>
        </button>
    </div>`

    })

    content += '</div>'
    document.querySelector('#result').innerHTML = content

}