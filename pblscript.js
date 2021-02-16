// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
   apiKey: "AIzaSyC_UY5cNHlJRD99kFbKPlAzZOyjXoTA9Rw",
   authDomain: "attendance-pict.firebaseapp.com",
   projectId: "attendance-pict",
   storageBucket: "attendance-pict.appspot.com",
   messagingSenderId: "508641098466",
   appId: "1:508641098466:web:248ce938885aa65e4ffcbb",
   measurementId: "G-45TB341MPE"
 };
 // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

//all elements
const email=document.getElementById("email");
const pass=document.getElementById("pass");
const submit=document.getElementById("submit");
const signout=document.getElementById("signout");
const demo=document.getElementById("demo");

const auth=firebase.auth();
var user=null;

submit.addEventListener('click',()=>{
  // TODO: check for real email validity
  const promise=auth.signInWithEmailAndPassword(email.value,pass.value);
  email.value="";pass.value="";
  //for creating: auth.createUserWithEmailAndPassword(email.value,pass.value);
  promise.catch(e=>demo.innerHTML=e);
});

signout.addEventListener('click',()=>{
  const promise=auth.signOut();
  promise.catch(e=>demo.innerHTML=e);
});

//adding realtime auth listener
auth.onAuthStateChanged(e=>{
  user=auth.currentUser;
  if(e){
    demo.innerHTML=user.email+" has logged in";
  }else{
    demo.innerHTML="Not logged in yet";
  }
});
