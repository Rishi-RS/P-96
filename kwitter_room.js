
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDV_eyi01W3YEDUGXhVA_pVQRrzr1Si1zs",
    authDomain: "kwittert-66ed1.firebaseapp.com",
    databaseURL: "https://kwittert-66ed1-default-rtdb.firebaseio.com",
    projectId: "kwittert-66ed1",
    storageBucket: "kwittert-66ed1.appspot.com",
    messagingSenderId: "219128142589",
    appId: "1:219128142589:web:d99f752fe5a311c5a73c94"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
