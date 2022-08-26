var firebaseConfig = {
      apiKey: "AIzaSyDgsePKC9Kj-2wamyPbv3esst2XeArkTyM",
      authDomain: "c93-97-22cfd.firebaseapp.com",
      databaseURL: "https://c93-97-22cfd-default-rtdb.firebaseio.com",
      projectId: "c93-97-22cfd",
      storageBucket: "c93-97-22cfd.appspot.com",
      messagingSenderId: "193723579181",
      appId: "1:193723579181:web:2f6a4c2d1ebee5b530f1a4"
    };
    
    firebase.initializeApp(firebaseConfig);
    





person_name = localStorage.getItem("person_name");
document.getElementById("person_name").innerHTML = "Welcome  " + person_name + "!";

function AddRoom(){
      Closet_name = document.getElementById("Closet_name").value;
      firebase.database().ref("/").child(Closet_name).update({
            purpose: "adding room name"
      
      });
      localStorage.setItem("Closet_name", Closet_name);
      window.location = "kwitter_page.html";
      document.getElementById("room_name").value = ""
      }
      
function getData() {
        firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Closet_names = childKey;
        console.log("Closet names " + Closet_names);
        row = "<div class='Closet_name' id=" + Closet_names + " onclick = 'redirecttoRoomName(this.id)'>#" + Closet_names + "</div><hr>";
        document.getElementById("output").innerHTML += row;
  
  
  });});}
  getData();
  
  
  
  
  
  function redirecttoRoomName(name){
        console.log(name);
        localStorage.setItem("Closet_name", name);
        window.location = "kwitter_page.html";
  
}
  

function Logout(){
localStorage.removeItem("person_name");
localStorage.removeItem("Closet_name");
      window.location ="index.html"
}