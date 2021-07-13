//YOUR FIREBASE LINKS
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
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

    function send() { 
     msg = document.getElementById("msg").value; 
    firebase.database().ref(room_name).push({ name:user_name, message:msg, like:0 });
     document.getElementById("msg").value = "";
 }
    


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";





}
