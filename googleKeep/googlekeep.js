const addBox=document.querySelector(".text"),
modalBox=document.querySelector(".modalBox"),
// addBtn=modalBox.querySelector("#addBtn"),
getTitle=modalBox.querySelector("input"),
descri=modalBox.querySelector("textarea");
const addBtn=document.getElementById("addBtn");
const closeBtn=document.getElementById("closeBtn");


const notes = JSON.parse(localStorage.getItem("notes") || "[]");


window.onclick = function(e){
    if(e.target == modalBox){
        modalBox.classList.remove("show")
    }
}
addBox.addEventListener("click", ()=>{
    
    modalBox.classList.add("show");
});