//Firebase, thanks for giving me these links, my css is nice though
var firebaseConfig = {
    apiKey: "AIzaSyAKsd2sPGe49t302jbgTjY6TSS_ZuDGfxQ",
    authDomain: "kwitter-chat-project.firebaseapp.com",
    projectId: "kwitter-chat-project",
    storageBucket: "kwitter-chat-project.appspot.com",
    messagingSenderId: "258991975091",
    appId: "1:258991975091:web:5084d1f46ec127b86fdec6",
    measurementId: "G-SGL8CRR8ML"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey; 
     var row="<div class='room_name' id='+Room_names+' onclick='RedirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
     document.getElementById("output").innerHTML+=row;
     });});}
 getData();

function redirectToRoomName(name) {
localStorage.setItem("Name", name);
window.location="kwitter_page.html";
}
function add_room() {
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"to add a room name"
  });
localStorage.setItem("room name", room_name);
window.location="kwitter_message_page.html";
}