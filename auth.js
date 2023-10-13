


//Setting up firebase
//import{getDatabase,ref,set,get,child} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js"
import{initializeApp} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js"
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";



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
   
  

   const db = getDatabase(app);

   const auth = getAuth(app);
  
//Signup function

const signUp=document.getElementById('signUp');
signUp.addEventListener('click', () =>{
   
    const email=document.getElementById("email").value;
    const password=document.getElementById("pass").value;
    const username=document.getElementById("username").value;
    const phone=document.getElementById("phone").value;
    
    
      //firebasecode
 
     
    createUserWithEmailAndPassword(auth,email, password)
    .then((success) => {
      console.log("Successfully Signed In");

      return set(ref(db, `users/${success.user.uid}`), 
      {
        username: username,
       email: email,
        phone:phone,
       id:success.user.uid
      });
    })
    .then(()=>{

      alert("Successfully Signed In");


      document.getElementById("email").value = "";
      document.getElementById("pass").value = "";
      document.getElementById("username").value="";

      document.getElementById("phone").value="";

      window.location.assign("login.html");

    
})

    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
  
      alert("Please Enter Valid email and password");
    });


  });

  

 



