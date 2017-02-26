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
  const txtEmail2 = document.getElementById('txtEmail2');
  const txtPassword2 = document.getElementById('txtPassword2');


  btnLogin.addEventListener('click', e => {
  	const email = txtEmail.value;
  	const pass = txtPassword.value;
  	const auth = firebase.auth();

  	const promise = auth.signInWithEmailAndPassword(email, pass);
  	promise.catch(e => console.log(e.message));

  });


  btnSignUp.addEventListener('click', e => {
  	const email = txtEmail2.value;
  	const pass = txtPassword2.value;
  	const auth = firebase.auth();
  		console.log(email);
  		console.log(pass);
  	const promise = auth.createUserWithEmailAndPassword(email, pass);
  	promise.then(function(result) {
  		console.log(result);
  	}, function(err) {
  		console.log(err);

	});


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
