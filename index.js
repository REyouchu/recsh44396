// index.js

// 定义任务相关的模块
const tasks = [];

// 添加任务的函数
function addTask(task) {
    tasks.push(task);
}

// 显示任务列表
function displayTasks() {
    tasks.forEach(task => {
        console.log(`Task: ${task.name}, Deadline: ${task.deadline}`);
    });
}

// 处理添加任务表单提交事件
function handleAddTask(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    const taskNameInput = document.getElementById('task-name');
    const taskDeadlineInput = document.getElementById('task-deadline');

    const name = taskNameInput.value.trim(); // 获取输入的任务名称
    const deadline = taskDeadlineInput.value.trim(); // 获取输入的任务截止日期

    if (name !== '' && deadline !== '') {
        // 创建新任务对象并添加到任务数组中
        const newTask = { name, deadline };
        addTask(newTask);

        displayTasks(); // 添加任务后显示任务列表

        taskNameInput.value = ''; // 清空输入框
        taskDeadlineInput.value = ''; // 清空输入框
    }
}

// 当页面加载完成时执行初始化操作
window.addEventListener('load', () => {
    const addTaskForm = document.getElementById('add-task-form');
    addTaskForm.addEventListener('submit', handleAddTask); // 监听添加任务表单提交事件
});
