const saveBtn = document.getElementById('btnSave');
const inputToDo = document.getElementById('name');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max= Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

if(saveBtn) {
    saveBtn.addEventListener('click', () => {

        const myToDo = {
            id: getRandomInt(1, 100000),
            name: inputToDo.value
        };

        const currentTodoStr = localStorage.getItem('todo');

        if(currentTodoStr) {
            const currentTodo = JSON.parse(currentTodoStr)
            currentTodo.push(myToDo) // ✅ đúng biến
            localStorage.setItem('todo', JSON.stringify(currentTodo))
        } else {
            localStorage.setItem('todo', JSON.stringify([myToDo]))
        }
    })
}