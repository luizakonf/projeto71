import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui
  
    apiKey: "AIzaSyDi7mQHF30yUhyEfqpqgnEUnzCQ7G0THnI",
    authDomain: "projeto71-b51bd.firebaseapp.com",
    projectId: "projeto71-b51bd",
    storageBucket: "projeto71-b51bd.appspot.com",
    messagingSenderId: "820875800241",
    appId: "1:820875800241:web:d562ba0f9be25f6f7d3c90"
  };


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
