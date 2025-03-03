const todoIpnut=document.querySelector("#todoInput");
const addtodo=document.querySelector("#addtodo");
const todolist=document.querySelector("#todolist");

addtodo.addEventListener("click",addTodo);

todoIpnut.addEventListener("keypress",function(e){
    if(e.key==='Enter'){
        addTodo();
    }
})
 
function addTodo(){
    const todoText=todoIpnut.value;
    if(todoText!==""){
        const li=document.createElement("li");
        li.textContent=todoText;
        todolist.appendChild(li);
        todoIpnut.value="";
        li.addEventListener("click",function(){
            this.classList.toggle('done');
        })
    }
}












 

 













