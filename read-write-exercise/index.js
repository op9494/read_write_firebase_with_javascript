var mainText = document.getElementById('mainText');
var submitBtn = document.getElementById('submitBtn');
var fireHeading = document.getElementById('fireHeading');




//this is changeing the text for the h1 tag and it changes instantly when you edit it in fireabse because its a realtime database

var firebaseHeadingRef = firebase.database().ref().child("Heading");

firebaseHeadingRef.on('value', function(datasnapshot){
    fireHeading.innerText = datasnapshot.val();

});


function submitClick() {

    var firebaseRef = firebase.database().ref();


    var messageText = mainText.value;

    //When you type something in the textbox and you hit submit...it changes the value in the server which also changes the text on website in realtime
    firebaseRef.child("Heading").set(messageText);

    // this makes a key in your database called "text" & a value called "Some Value"
    // firebaseRef.child("Text").set("Some Value");


    //this takes whatever is in the textbox and submits it to the database using the button. But if its submited twice it just replaces the value in the database
    // firebaseRef.child("Text").set(messageText);

    // this makes a random id/key for everytime form is submitted and puts the value in the database
    // firebaseRef.push().set(messageText);


}
