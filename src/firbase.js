import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyBsgDasNcXlqHbmAkBaJh3zVsWxSLC6Z2U",
    authDomain: "fb-clone-4c8a1.firebaseapp.com",
    projectId: "fb-clone-4c8a1",
    storageBucket: "fb-clone-4c8a1.appspot.com",
    messagingSenderId: "658782112070",
    appId: "1:658782112070:web:b8b6c7301f373b8462bd47"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider()
export {auth,provider}
export default db;