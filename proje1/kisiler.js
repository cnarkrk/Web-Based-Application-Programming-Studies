// Kişiler Sayfası
let picture_men =["erkek1.jpg","erkek2.jpg","erkek3.jpg","erkek4.jpg"];
let picture_women = ["kadın1.webp","kadin2.jpg","kadın3.jpg","kadın4.jpg"];
const nameOutput=document.querySelector(".isim");
const kisiResmi = document.querySelector(".profilephoto")
const dataAddBtn = document.getElementById("dataAdd")
const eventList = document.querySelector(".eventList")
const profileContent = document.querySelector(".profile-container")
dataAddBtn.addEventListener("click",listEvents);


function listEvents(event){
    event.preventDefault();
    profileContent.innerHTML="";
    const storedData = localStorage.getItem("userData");
    let parsedForm = JSON.parse(storedData);
    let keyList = Object.keys(parsedForm);
    let valuesList = Object.values(parsedForm);

    for(let i=0;i<Object.keys(parsedForm).length;i++){
        if(valuesList[i][valuesList[i].length-1]==="erkek"){
        valuesList[i].pop();
        profileContent.innerHTML += `
      
        <div class="profile">
    
        <img src="${"images/"+picture_men[Math.floor(Math.random()*picture_men.length)]}" alt="Profil Resmi" class="profilephoto">
        <h4 class ="isim">${keyList[i]}</h4>
        <p class ="datado">Yapacağı İşler:</p>
        <ul>
            <li class="eventList">${valuesList[i]}</li>
        </ul>
        
        </div>
        
        `}
        if(valuesList[i][valuesList[i].length-1]==="kadın"){
            valuesList[i].pop();
            profileContent.innerHTML += `
      
        <div class="profile">
    
        <img src="${picture_women[Math.floor(Math.random()*picture_women.length)]}" alt="Profil Resmi" class="profilephoto">
        <h4 class ="isim">${keyList[i]}</h4>
        <p class ="datado">Yapacağı İşler:</p>
        <ul>
            <li class="eventList">${valuesList[i]}</li>
        </ul>
        
        </div>
        
        `}

    }

}