document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form');


  const taskList = document.getElementById('tasks');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskDescription = document.getElementById('new-task-description').value.trim();
    if (taskDescription !== '') {
      const li = document.createElement('li');

      li.textContent = taskDescription;
      taskList.appendChild(li);
      form.reset()
    }
  })

});
