import {initializeApp} from "firebase/app"
import {getFirestore}  from "firebase/firestore"
import {GoogleAuthProvider,getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"
const firebaseConfig = {
    apiKey: "AIzaSyBsgDasNcXlqHbmAkBaJh3zVsWxSLC6Z2U",
    authDomain: "fb-clone-4c8a1.firebaseapp.com",
    projectId: "fb-clone-4c8a1",
    storageBucket: "fb-clone-4c8a1.appspot.com",
    messagingSenderId: "658782112070",
    appId: "1:658782112070:web:b8b6c7301f373b8462bd47"
  };
  const firebaseApp=initializeApp(firebaseConfig);
  const db=getFirestore(firebaseApp);
  const auth=getAuth();
  const provider=new GoogleAuthProvider()
  const storage=getStorage()
export {auth,provider,storage}
export default db;
