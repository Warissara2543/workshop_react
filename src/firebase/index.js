import firebase from 'firebase';
import 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
        apiKey: "AIzaSyBRnh5Rw2bom1gF8MD0-VPw4lfZfidJamQ",
        authDomain: "workshop-keep-it.firebaseapp.com",
        databaseURL: "https://workshop-keep-it.firebaseio.com",
        projectId: "workshop-keep-it",
        storageBucket: "workshop-keep-it.appspot.com",
        messagingSenderId: "956837887081",
        appId: "1:956837887081:web:85f8a13990dd0f1c8df6f8",
        measurementId: "G-DQB6EYW23M"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;