(function() {
 
  const config = {
    apiKey: "AIzaSyCmXs-IE0jb12gN2xd8i6IROpKmq8spfhs",
    authDomain: "castle-a5dcc.firebaseapp.com",
    databaseURL: "https://castle-a5dcc.firebaseio.com",
    storageBucket: "castle-a5dcc.appspot.com",
    messagingSenderId: "745453466159"
  };
  firebase.initializeApp(config);

 const btnLogout = document.getElementById('btnLogout');

	btnLogout.addEventListener('click', e => {
	   		firebase.auth().signOut();
	   		window.location = 'index.html';
	  	
	  });


}());



























