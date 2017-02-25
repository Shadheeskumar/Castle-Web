(function() {
 
  const config = {
    apiKey: "AIzaSyCmXs-IE0jb12gN2xd8i6IROpKmq8spfhs",
    authDomain: "castle-a5dcc.firebaseapp.com",
    databaseURL: "https://castle-a5dcc.firebaseio.com",
    storageBucket: "castle-a5dcc.appspot.com",
    messagingSenderId: "745453466159"
  };
  firebase.initializeApp(config);

  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');


  btnLogin.addEventListener('click', e => {
  	const email = txtEmail.value;
  	const pass = txtPassword.value;
  	const auth = firebase.auth();

  	const promise = auth.signInWithEmailAndPassword(email, pass);
  	promise.catch(e => console.log(e.message));

  });


  btnSignUp.addEventListener('click', e => {
  	const email = txtEmail.value;
  	const pass = txtPassword.value;
  	const auth = firebase.auth();

  	const promise = auth.createUserWithEmailAndPassword(email, pass);
  	promise
  
  		.catch(e => console.log(e.message));


  });


   btnLogout.addEventListener('click', e => {
   		firebase.auth().signOut();

  	
  });



  firebase.auth().onAuthStateChanged(firebaseUser => {
  	if(firebaseUser) {
  		console.log(firebaseUser);
  		window.location = 'dashboard.html';
  	}
  	else {
  		console.log('not logged in');
  	}


  });










}());
