const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");

inputBox.addEventListener('keyup' ,()=>{
    let userdata = inputBox.value;

    if(userdata.trim()!=0){
        addBtn.classList.add("active");
    }
    else{
        addBtn.classList.remove("active");
    }
})

showtasks();

addBtn.addEventListener('click' ,()=>{
const userdata = inputBox.value;
const getlocalstorage = localStorage.getItem("new todo");

if(getlocalstorage == null){ 
    listArray = []; 
  }else{
    listArray = JSON.parse(getlocalstorage);  
  }
listArray.push(userdata);
localStorage.setItem("new todo" , JSON.stringify(listArray));
showtasks();
addBtn.classList.remove('active');
})



function showtasks(){
    const getlocalstorage = localStorage.getItem("new todo");

    if(getlocalstorage == null){ 
        listArray = []; 
      }else{
        listArray = JSON.parse(getlocalstorage);  
      }

      const pendingTasks = document.querySelector('.pendingTasks')
      pendingTasks.textContent= listArray.length;

      if(listArray.length>0){
          deleteAllBtn.classList.add('active');
      }
      else{
        deleteAllBtn.classList.remove('active');
      }

      let newlitag ="";
      listArray.forEach((element, index)=>{
          newlitag+= `<li>${element}<span class="icon" onclick = "deletetask(${index})"><i class="fas fa-trash"></i></span></li>`;
      });
      todoList.innerHTML= newlitag;
      inputBox.value='';
}

function deletetask(index){
let getlocalstorage = localStorage.getItem("new todo");
listArray = JSON.parse(getlocalstorage);

listArray.splice(index, 1);
localStorage.setItem("new todo" , JSON.stringify(listArray));
showtasks();
}

deleteAllBtn.addEventListener('click', ()=>{
listArray=[];
localStorage.setItem('new todo',JSON.stringify(listArray) );
showtasks();
})