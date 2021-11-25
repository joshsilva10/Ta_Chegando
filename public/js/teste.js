//const fireb = require('firebase/firestore')

import { getFirestore, collection, addDoc, setDoc , doc } from "/script.js"


const firebaseApp = initializeApp({
    apiKey: "AIzaSyAc-8qZIk7sIMdzy1R3TIsSsPtUxM52JQ8",
    authDomain: "ta-chegando-final.firebaseapp.com",
    projectId: "ta-chegando-final"
});



const db = getFirestore();


 var fire = { async  fireb(lat,long){
    const docRef = await addDoc(collection(db, "rastreio"), {
        lat: lat,
        long: long
      });
      
      return docRef.id;
  },

  async  upfireb(lat,long){
    const docRefup = await setDoc(doc(db, "rastreio", ref), {
        lat: lat,
        long: long
      });

      return docRefup.id
  }

}


exports = fire