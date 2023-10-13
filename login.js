import{initializeApp} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js"
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";



console.log("Login.js is running");

const firebaseConfig={
 //Firebase config 
 apiKey: "AIzaSyAlrTgCod6VG5YReeZ1pOgL05dtwSXPQ8s",
  authDomain: "authpizzeria.firebaseapp.com",
  databaseURL: "https://authpizzeria-default-rtdb.firebaseio.com",
  projectId: "authpizzeria",
  storageBucket: "authpizzeria.appspot.com",
  messagingSenderId: "1021674523157",
  appId: "1:1021674523157:web:53b852204516f50b081c1c"
};
   //const db = firebaseApp.firestore();
   //const auth = firebaseApp.auth();
  
   const app=initializeApp(firebaseConfig);
   
  

  

   const auth = getAuth(app);
   const db=getDatabase(app);
   


   const loginBtn=document.getElementById('login-btn'); 


const signIn=document.getElementById('signIn');  

signIn.addEventListener('click', () =>{
  const email=document.getElementById("email").value;
const password=document.getElementById("pass").value;
console.log(email,password);

//firebase code
signInWithEmailAndPassword(auth,email, password)
.then((userCredential) => {
// Signed in
var user = userCredential.user;
localStorage.setItem('isLoggedIn', 'true');
// Redirect to main.html
window.location.assign("index.html");
console.log("Successfully Signed In");

alert("Successfully Signed In");


})
.catch((error) => {
console.log(error.code);
console.log(error.message);

alert("Please Enter Valid email and password");


});
});



 



auth.onAuthStateChanged(user => {
    if (user) {
      console.log(user.email + " is logged in!");
      
      console.log(user.uid);
      const databaseRef = ref(db, `users/`);
      
      databaseRef.on("value", function(snapshot){
        
        snapshot.forEach(function(element){
          console.log(element.val());
        });



      })
     
   
    } else {
      console.log('User is logged out!');
     
    }
  });

  
 


    
