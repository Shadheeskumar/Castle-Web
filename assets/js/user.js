(function() {
 
  const config = {
    apiKey: "AIzaSyCmXs-IE0jb12gN2xd8i6IROpKmq8spfhs",
    authDomain: "castle-a5dcc.firebaseapp.com",
    databaseURL: "https://castle-a5dcc.firebaseio.com",
    storageBucket: "castle-a5dcc.appspot.com",
    messagingSenderId: "745453466159"
  };
  firebase.initializeApp(config);



  const username = document.getElementById('username');
  const firstname = document.getElementById('firstname');
  const lastname = document.getElementById('lastname');

  const userId = firebase.auth().currentUser.uid;
  firebase.database().ref('/Users' + userId)
    .once('value', (snapshot) => {
      console.log(snapshot.val())
    })




  // const userId = firebase.auth().currentUser.uid;
  //   return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
  // var username = snapshot.val().username;
  // ...
  // });


}());



























