import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCb89nHT6sYJifhDa2aTsGfDFCbH7WiSnM",
    authDomain: "c-67-599b9.firebaseapp.com",
    databaseURL: "https://c-67-599b9-default-rtdb.firebaseio.com",
    projectId: "c-67-599b9",
    storageBucket: "c-67-599b9.appspot.com",
    messagingSenderId: "979182835456",
    appId: "1:979182835456:web:cc0f265463a479f5b585e5"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();