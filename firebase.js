//import { initializeApp } from "@firebase/app";
//const initializeApp = require("./node_modules/firebase/app")
const { initializeApp } = require('firebase/app');
const {getDatabase} = require("firebase/database")
const {collection , collectionGroup, getFirestore, addDoc, getDocs, doc, updateDoc } = require("firebase/firestore")
//const firebase = require('firebase')
//const firebase = require("./node_modules/@firebase")
//import { getDatabase } from "@firebase/database";

/*const createtest = (function(){
        // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAc-8qZIk7sIMdzy1R3TIsSsPtUxM52JQ8",
    authDomain: "ta-chegando-final.firebaseapp.com",
    projectId: "ta-chegando-final",
    storageBucket: "ta-chegando-final.appspot.com",
    messagingSenderId: "652860417703",
    databaseURL: "https://ta-chegando-final-default-rtdb.firebaseio.com/",
    appId: "1:652860417703:web:8f5bebd5c8716c48fa1d82"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const set = 


  
function createTeste(){
    firebase.database().ref('users/' + "userId").set({
        username: 'name',
        email: 'email',
        profile_picture : 'imageUrl'
      });
  }


  //.create = createTeste;

})()
*/






const firebaseConfig = {
    apiKey: "AIzaSyAc-8qZIk7sIMdzy1R3TIsSsPtUxM52JQ8",
    authDomain: "ta-chegando-final.firebaseapp.com",
    projectId: "ta-chegando-final",
    storageBucket: "ta-chegando-final.appspot.com",
    messagingSenderId: "652860417703",
    databaseURL: "https://ta-chegando-final-default-rtdb.firebaseio.com/",
    appId: "1:652860417703:web:8f5bebd5c8716c48fa1d82"
  };


//firebase.initializeApp(firebaseConfig)
// db = firebase.database()
//const rastreio = db.ref('rastreio/' + "rastreioId")

//module.exports=rastreio;







  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  //const db = collection('Firestore');
  //const db = collection('Firestore', 'Tracker','uID');
  const db = getFirestore();
  const colect = collection(db,'tracker')


  var adiciOnar ={ 
    async  testeObj(obj) {
      
    const docRef = await addDoc(colect, {
      cliente: "Ada",
      entregador: "Lovelace",
      enderecoCliente:{
        rua:'',
        numero:'',
        cidade:'',
        bairro:'',
        UF:''
      }, 
      locEntregador:{
        longitude:'',
        latitude:''
      }
    });
    console.log("Document written with ID: ", docRef.id);

    const querySnapshot = await getDocs(colect);
          querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data().cliente}`);
})
  },
  async upTracker(obj,obj1){
    const trackRef = doc(db, "tracker", "ZQrSES9R9qDgk8geZF0a");

// Set the "capital" field of the city 'DC'
  await updateDoc(trackRef, {
    locEntregador:{
      longitude:obj,
      latitude:obj1
    }
});
  }
}
  module.exports = adiciOnar;
  //const database = getDatabase(app);
  //const set = 


  /*

  
const createteste = async function createTeste(){
    firebase.database().ref('users/' + "userId").set({
        username: 'name',
        email: 'email',
        profile_picture : 'imageUrl'
      });
    }








module.exports = createteste;

// Import the functions you need from the SDKs you need
*/