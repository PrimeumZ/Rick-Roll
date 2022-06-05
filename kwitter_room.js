var firebaseConfig = {
      apiKey: "AIzaSyDSRQ8U646y07ucVupsvKoIU6VGPCiHHaE",
      authDomain: "kwitter2-0-7f7f0.firebaseapp.com",
      databaseURL: "https://kwitter2-0-7f7f0-default-rtdb.firebaseio.com",
      projectId: "kwitter2-0-7f7f0",
      storageBucket: "kwitter2-0-7f7f0.appspot.com",
      messagingSenderId: "962437346579",
      appId: "1:962437346579:web:2a95e737bfcd63273716e6"
    };
  
  firebase.initializeApp(firebaseConfig);

username=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome" +username+"!";



function add_room(){
 room_name=document.getElementById("room_name").value ;
 firebase.database().ref("/").child(room_name).update({
purpose:"room_name"
 });
 localStorage.setItem("room_name", room_name);
 window.location="kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name:"+Room_names);
row="<div 'class='room_name' id=  "+Room_names+"  onclick='go_to_room_name(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function go_to_room_name(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location ="index.html";
}