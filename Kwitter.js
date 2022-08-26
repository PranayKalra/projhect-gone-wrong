function AddUser(){
person_name = document.getElementById("person_name").value;
localStorage.setItem("person_name", person_name); 
window.location = "kwitter_room.html";
}
    