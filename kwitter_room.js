const firebaseConfig = { apiKey: "AIzaSyDBHt4jflQSN9vBM8V2aWDRu0M97AaT5bM",
 authDomain: "kwitter-jash.firebaseapp.com",
  databaseURL: "https://kwitter-jash-default-rtdb.firebaseio.com",
   projectId: "kwitter-jash",
    storageBucket: "kwitter-jash.appspot.com",
    messagingSenderId: "746489923854",
     appId: "1:746489923854:web:3b9f94fe67d9addb872f5f" };
//ADD YOUR FIREBASE LINKS HERE
firebase.initialiseApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function getData() {firebase.database().ref("/").on('value',
 function(snapshot) {document.getElementById("output").innerHTML = "";
 snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;}
