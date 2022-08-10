import  firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyC_LHECSKL_xZocQBj7i-U9UqVQjK8_GRU",
    authDomain: "reacteccomerce2022.firebaseapp.com",
    projectId: "reacteccomerce2022",
    storageBucket: "reacteccomerce2022.appspot.com",
    messagingSenderId: "32104218590",
    appId: "1:32104218590:web:481112ffa88f1cda77a74f"
  };




  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  export {auth}