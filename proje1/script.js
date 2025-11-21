const inputDOM = document.getElementById("taskInput");
const btnDOM = document.getElementById("addBtn");
let taskListDOM=document.getElementById("taskList");
const deleteBtn =document.getElementById("temizleme")
const silBtn = document.getElementById("delete")
const nameBtn = document.getElementById("isim")
const nameInputDOM = document.getElementById("name")
const spanName = document.getElementById("spaname")
const  kaydetBtn = document.getElementById("gönder")
const selectDOM = document.getElementById("cins")
let eventList = [];

    btnDOM.addEventListener("click",addEvent);
function addEvent(event){
    let myEvent = inputDOM.value;
    eventList.push(myEvent)
    if (eventList[eventList.length-1]===eventList[eventList.length-2]){
        eventList.pop()
    }else{
        console.log("silme");
        
    }
    inputDOM.value = "";
    
    taskListDOM.innerHTML += `<ul id="taskList">
    <li>${myEvent}<button id="delete" style="display:inline-block">Sil</button></li> 
    </ul>`
    let MyChoice = selectDOM.value;
    eventList.push(MyChoice);
    console.log(eventList);
    event.preventDefault();
    
}

deleteBtn.addEventListener("click",deleteAll);
function deleteAll(){
    taskListDOM.innerHTML = `<ul id="taskList">
    <li><button id="delete">Sil</button></li> 
    </ul>`;
    eventList.length = 0;

}
taskListDOM.addEventListener("click", function(event){
    if(event.target.id === "delete"){  
        event.target.parentElement.remove();
    }
});

nameBtn.addEventListener("click",getName);
function getName(event){
    let name = nameInputDOM.value
    if(name ===""){
        spanName.innerHTML = "Lütfen isminizi giriniz!"
    }else{
    spanName.innerHTML = `Hoş Geldin ${name}😊!`}
}
let dataObject={};
let clicked=0;
kaydetBtn.addEventListener("click",loadData);
function loadData(event){
    let name = nameInputDOM.value.trim()
    if(name ==""){
        spanName.innerHTML="Lütfen isminizi giriniz."
        return;
    }
    clicked++;
    for(i=0;i<clicked;i++){
        let nextUser = [...eventList];
        dataObject[name]=nextUser;
        
        

    }
    eventList.length = 0;
    taskListDOM.innerHTML = `<ul id="taskList" style = "display:none">
    <li><button id="delete">Sil</button></li> 
    </ul>`;
    localStorage.setItem("userData",JSON.stringify(dataObject)); 
    console.log("kullanıcı infoları",localStorage.getItem("userData"));
    console.log(clicked);
    
}


