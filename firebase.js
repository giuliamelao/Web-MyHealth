  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
  import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";
  import { getStorage } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-storage.js";



  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD_QQuH_1609t276ejSTbtUlpgkPotRHrE",
    authDomain: "myhealthweb-e2ddd.firebaseapp.com",
    projectId: "myhealthweb-e2ddd",
    storageBucket: "myhealthweb-e2ddd.appspot.com",
    messagingSenderId: "114156605987",
    appId: "1:114156605987:web:dc5f0799bfd35ab4ac9796"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const firestore = getFirestore(app);
  const storage = getStorage(app);
  export {auth, firestore, storage};
