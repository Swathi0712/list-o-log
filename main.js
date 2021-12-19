document.body.style.backgroundImage = "url('time.png')";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";


var todoList=document.querySelector('.todo-list');
todoList.addEventListener('click',deleteFunction);
todoList.addEventListener('click',submitFunction);

function myTodo(event)
            {

                var task = document.getElementById('task').value;
                var listNode = document.getElementById('list');
                var liNode = document.createElement("LI");
                taskNode = document.createTextNode(task);
            
                liNode.appendChild(taskNode);
                listNode.appendChild(liNode);
                event.preventDefault();

                if (task===" ") {
                    alert("Enter task");
                    submitOK = "False";
                    task.parentNode.removeChild(task);
                     }
                if (task=='') {
                    alert("Enter task");
                    submitOK = "False";
                    task.parentNode.removeChild(task);
                }
                else{
                    document.getElementById("task").innerHTML = task;
                     }



                var deleteButton=document.createElement('button');
                deleteButton.innerHTML='<i>DELETE</i>';
                deleteButton.classList.add("delete-btn");
                liNode.appendChild(deleteButton);
                todoList.appendChild(liNode);

                var submitButton=document.createElement('buttonn');
                submitButton.innerHTML='<i>DONE</i>';
                submitButton.classList.add("submit-btn");
                liNode.appendChild(submitButton);
                todoList.appendChild(liNode);

}

function deleteFunction(tasks){
                const tsks =tasks.target;
                if(tsks.classList[0]==="delete-btn"){
                    const taskList=tsks.parentElement;
                    taskList.remove();
                }
            }

function submitFunction(tasks){
                const tsks=tasks.target;
                if(tsks.classList[0]==='submit-btn'){
                    const taskList=tsks.parentElement;
                    taskList.classList.toggle("done");
                }
}

