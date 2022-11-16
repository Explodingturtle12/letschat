
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAkdq8GKoYRavrOcxZ0Zh4nBAnpRjOtOFQ",
      authDomain: "kwitter-app-e07d3.firebaseapp.com",
      databaseURL: "https://kwitter-app-e07d3-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-e07d3",
      storageBucket: "kwitter-app-e07d3.appspot.com",
      messagingSenderId: "83376440089",
      appId: "1:83376440089:web:698ce5dec88b8ee5777b88"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
