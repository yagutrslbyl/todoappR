let myInput=document.getElementById('text')
let myBtn=document.getElementById('btn')
let read=document.getElementById('read')
let myUl=document.getElementById('ul')

const items=document.getElementsByClassName('item')
let editIndex=null;
function getTodos(){
    return JSON.parse(localStorage.getItem("todos") || "[]")
}

myBtn.addEventListener('click', ()=>{
    if(!myInput.value){
        alert("Write something to add")
    }
    else{
            if(myBtn.textContent=="Save"){
                let todos=getTodos()
                todos[editIndex]=myInput.value
                localStorage.setItem("todos", JSON.stringify(todos))

                myBtn.textContent="Create Todo"
                myInput.value=""
                editIndex=null
                showElements();
                return;

            }


        let todos=getTodos();
        todos.push(myInput.value)
        localStorage.setItem("todos", JSON.stringify(todos))
    
        myInput.value = ""  
        showElements()


    }
})

function showElements(){

    let todos =getTodos()
    myUl.innerHTML = ""; 
    todos.forEach(todo => {
        let myLi=document.createElement('li')
        myLi.className="item"
        myLi.textContent=todo;

        let check=document.createElement('p')
        check.textContent = '☑️';
        let edit=document.createElement('p')
        edit.textContent = '🖊️';
        let del=document.createElement('p')
        del.textContent = '🗑️';
        myLi.append(check,edit,del)
        myLi.style.display="flex"
        myLi.style.alignItems='center'
        myUl.append(myLi)
        del.addEventListener('click', ()=>{
            myLi.remove()
        })

        del.addEventListener('click', ()=>{
            let todos = getTodos();
            todos.splice(index, 1); 
            localStorage.setItem("todos", JSON.stringify(todos));
            showElements(); 
        })
            myUl.append(myLi)
    });

}
window.onload=showElements;
    
