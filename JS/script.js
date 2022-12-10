// Select elements and create variables
const inputTask = document.querySelector('.add-task input')
const selectTaskMood = document.querySelector('.add-task select')
const addTaskBtn = document.querySelector('.add-task-btn')





// Handle add task btn
addTaskBtn.addEventListener('click', () => {
    // Check, create element if the input was not empty
    if (!(inputTask.value == "")) {
        const element = document.createElement('div')
        element.classList.add('tasks')
        element.innerHTML = `<div class="tasks">
    <div class="d-flex justify-content-between align-items-center bg-${selectTaskMood.value == 1 ? "success" : selectTaskMood.value == 2 ? "warning" : selectTaskMood.value == 3 ? "danger" : "white"} m-4 task">
        <div class="d-flex justify-content-around align-items-center">
            <img src="Img/Circle.png" alt="" style="width: 30; height: 30px; padding-right: 7px;">
            <p class="mt-3 fw-bold text-${selectTaskMood.value == 1 ? "white" : selectTaskMood.value == 2 ? "dark" : selectTaskMood.value == 3 ? "white" : "dark"}">${inputTask.value}</p>
        </div>
        <img src="Img/multiply-icon-12.png" alt="" style="width: 30; height: 30px;">
    </div>
</div>`
        document.querySelector('.task-list').appendChild(element)
    }
})







