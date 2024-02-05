import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCV-ds_MsKXn8D4f3k-r6LzpkA6obLjVfU",
    authDomain: "react-168f0.firebaseapp.com",
    projectId: "react-168f0",
    storageBucket: "react-168f0.appspot.com",
    messagingSenderId: "950891866034",
    appId: "1:950891866034:web:75d7e1f4b95713c33166ab",
    databaseURL:"https://react-168f0-default-rtdb.firebaseio.com"
  };


export  const app = initializeApp(firebaseConfig);