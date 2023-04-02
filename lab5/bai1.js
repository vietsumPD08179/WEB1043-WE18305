const input_value = document.getElementById("input_value");
const btn_todo = document.getElementById("btn_todo");
const list_todo = document.getElementById("todo-list");
const filter_todo = document.getElementById("select_todo");

document.addEventListener("DOMContentLoaded", listTodoStorage);
btn_todo.addEventListener("click",addtodo);
list_todo.addEventListener("click",deleteTodo);
filter_todo.addEventListener("click",filterTodo);

function filterTodo(e) {
  const task = list_todo.childNodes;
  task.forEach(function(todo) {
    switch (e.target.value) {
      case "tatca":
        todo.style.display = "block";
        break;
      case "hoanthanh":
        if (todo.classList.contains("completed")) {
          todo.style.display = "block";
        } else {
          todo.style.display = "none";
        }
        break;
      case "chuahoanthanh":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "block";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

function addtodo(e){
	e.preventDefault();
	todo = input_value.value;
	if(todo){

		const newDiv = document.createElement("div");
		newDiv.classList.add('todo');
		//tao list todo
		const newTodo = document.createElement("li");
		newTodo.innerText = todo;
		newTodo.classList.add('todo-item');
		newDiv.appendChild(newTodo);
		//add to local
		saveLocalStorage(todo);
		input_value.value = "";
		const btn_hoanthanh = document.createElement("button");
		btn_hoanthanh.innerText = "Hoàn thành";
		btn_hoanthanh.classList.add("completed_btn");
		newDiv.appendChild(btn_hoanthanh);

		const btn_xoa = document.createElement("button");
		btn_xoa.innerText = "Xóa";
		btn_xoa.classList.add("delete_btn");
		newDiv.appendChild(btn_xoa);

		list_todo.appendChild(newDiv);

		

	}
}
function deleteTodo(e){
	const item = e.target;
	//delete todo
	if(item.classList[0]==='delete_btn'){
		const todo = item.parentElement;
		todo.remove();
		removeStorageToDo(todo);
	}
	//completed button
	if(item.classList[0]==='completed_btn'){
		const todo = item.parentElement;
		todo.classList.toggle("completed");
		updateStorageItem(todo);
	}

}	

function saveLocalStorage(todo){
	let task;
	if(localStorage.getItem("task")===null){
		task = [];
	}else{
		task = JSON.parse(localStorage.getItem("task"))
	}
	task.push({
		text:todo,
		complete:false
	});
	localStorage.setItem("task", JSON.stringify(task));
}

function listTodoStorage(){
	let task;
	if(localStorage.getItem("task")===null){
		task = [];
	}else{
		task = JSON.parse(localStorage.getItem("task"))
	}
	task.forEach(nhiemvu => {
		const newDiv = document.createElement("div");
		newDiv.classList.add('todo');
		//tao list todo
		const newTodo = document.createElement("li");
		newTodo.innerText = nhiemvu.text;
		newTodo.classList.add('todo-item');
		newDiv.appendChild(newTodo);
	
		const btn_hoanthanh = document.createElement("button");
		btn_hoanthanh.innerText = "Hoàn thành";
		btn_hoanthanh.classList.add("completed_btn");
		newDiv.appendChild(btn_hoanthanh);

		const btn_xoa = document.createElement("button");
		btn_xoa.innerText = "Xóa";
		btn_xoa.classList.add("delete_btn");
		newDiv.appendChild(btn_xoa);

		list_todo.appendChild(newDiv);

		if(nhiemvu.complete == true){
			newDiv.classList.add('completed');
			btn_hoanthanh.innerText = "Đã hoàn thành";
			btn_hoanthanh.style.color = "green";
			btn_hoanthanh.disabled = true;
		}
	})
	
}
function updateStorageItem(todo){
	let task;
	if(localStorage.getItem("task")===null){
		task = [];
	}else{
		task = JSON.parse(localStorage.getItem("task"))
	}
	const todoIndex = todo.children[0].innerText;

	index = task.findIndex(object => object.text === todoIndex);
	task[index].complete = true;
	localStorage.setItem("task", JSON.stringify(task));
}
function removeStorageToDo(todo){
	let task;
	if(localStorage.getItem("task")===null){
		task = [];
	}else{
		task = JSON.parse(localStorage.getItem("task"))
	}
	const todoIndex = todo.children[0].innerText;
	task.splice(task.indexOf(todoIndex),1);
	localStorage.setItem("task", JSON.stringify(task));
}