import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBibiUcWR86AxAMdq1T_sZSyP7tG1zfPjI",
    authDomain: "buddytalk-b333.firebaseapp.com",
    databaseURL: "https://buddytalk-b333.firebaseio.com",
    projectId: "buddytalk-b333",
    storageBucket: "buddytalk-b333.appspot.com",
    messagingSenderId: "1006666237282",
    appId: "1:1006666237282:web:7cf68c27af088744ac183b",
    measurementId: "G-KMM81172S6",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;




