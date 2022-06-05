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

room_name=localStorage.getItem("room_name");
username=localStorage.getItem("user_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);

name = message_data['name']
message = message_data['message']
like = message_data['like']

name_with_tag = "<h4>"+name+"<img src='tick.png' class='usertick'> </h4>";
message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
like_button = "<button class='btn btn-warning' onclick='updatelike(this.id)' id="+firebase_message_id+" value="+like+">";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like: "+like+"</span> </button> <hr>";
row = name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;

//End code
      } });  }); }
getData();
function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
name : username,
message : msg,
likes : 0
      });
      document.getElementById("msg").value ="";
}

function updatelike(message_id){
      console.log("Clicked on like button : "+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
           like:updated_likes 

      });
      }



function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location ="index.html";
}