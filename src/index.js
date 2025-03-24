document.addEventListener("DOMContentLoaded", () => {
\  const form = document.getElementById('create-task-form');


  const taskList = document.getElementById('tasks');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskDescription = document.getElementById('new-task-description').value.trim();
    if (taskDescription !== '') {
      const li = document.createElement('li');

      //creating i  deleteBtn 

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'remove';

      deleteBtn.addEventListener('click', ()=>{
        taskList.removeChild(li);
      })

      li.textContent = taskDescription;

      li.appendChild(deleteBtn)
      taskList.appendChild(li);
      form.reset()
    }
  })

});
