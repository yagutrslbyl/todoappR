const myInput=document.getElementById("text")
const myCreate=document.getElementById("btn")
const myRead=document.getElementById("read")
const myUl=document.getElementById("list")

myCreate.addEventListener('click', ()=>{
    if(myInput.value==''){
        alert("Write something to enter")
    }
    else{
        const myLi=document.createElement('li')
        myLi.className="item"
    

        
const divİcon=document.createElement('div')
divİcon.className="icons"
const check=document.createElement('i')
check.className="fa-solid fa-circle-check"

const edit=document.createElement('i')
edit.className="fa-solid fa-pen-to-square"

const del=document.createElement('i')
del.className="fa-solid fa-trash-can"
        myLi.textContent=myInput.value
        myUl.append(myLi)

myLi.append(check,edit,del)
myLi.style.display='flex'
myLi.style.gap='10px'
myInput.value=''



del.addEventListener('click', ()=>{
myLi.remove()
})

check.addEventListener('click',()=>{
    myLi.style.color='green'
    myLi.style.textDecoration='line-through'
})

edit.addEventListener('click', ()=>{
    
    myInput.value=myLi.textContent
    myCreate.textContent="Save"
    isEditing=true;
    
})

myCreate.addEventListener('click', ()=>{
    if(!isEditing){
        myLi.textContent=myInput.value
    }
    else{
        myLi.textContent = myInput.value;
        myCreate.textContent = "Add Todo"; 
        isEditing = false;
    }
    myInput.value=''
})

    }
})