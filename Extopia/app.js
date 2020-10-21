// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

const inputTextField = document.querySelector("#mainInput");
const saveButton = document.querySelector("#save");

saveButton.addEventListener("click", function(){
	
	const textToSave = inputTextField.value.trim();
    db.collection("posts").add({
    username: "Anonymous",
	message: textToSave,
	credits: 1,
	shieldPoints: 0,
	views: 0,
	dateCreated: firebase.firestore.FieldValue.serverTimestamp(),
	dateDeleted: null,
   })
   .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
		alert("Congratulations! You shared your thoughts with the world. We filed your message in very special location: at the very bottom of the website!");
		window.location.href = 'timeline.html'; //relative to domain
   })
    .catch(function(error) {
        console.error("Error adding document: ", error);
   });
  
   console.log("saving exco-message");
});