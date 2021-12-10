
//import {fire} from "./teste.js"

//var firestore = require('./teste')
//import { initializeApp } from "/fireb.js"
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js"
import { getFirestore, collection, addDoc, setDoc , doc, updateDoc } from "/script.js"


const firebaseConfig = {
  apiKey: "AIzaSyAc-8qZIk7sIMdzy1R3TIsSsPtUxM52JQ8",
  authDomain: "ta-chegando-final.firebaseapp.com",
  databaseURL: "https://ta-chegando-final-default-rtdb.firebaseio.com",
  projectId: "ta-chegando-final",
  storageBucket: "ta-chegando-final.appspot.com",
  messagingSenderId: "652860417703",
  appId: "1:652860417703:web:8f5bebd5c8716c48fa1d82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

/*
const firebaseApp = initializeApp({
    apiKey: "AIzaSyAc-8qZIk7sIMdzy1R3TIsSsPtUxM52JQ8",
    authDomain: "ta-chegando-final.firebaseapp.com",
    projectId: "ta-chegando-final"
});
*/

var ref = document.getElementById("rastrk").innerText
console.log(ref)
const db = getFirestore(app);

 function autoUpdate() {
    navigator.geolocation.getCurrentPosition(function(position) {  
      var marker = null;
      
      var newPoint = new google.maps.LatLng(position.coords.latitude, 
                                            position.coords.longitude);
        //console.log("geolocation")
        //console.log(position.coords.latitude)
        if(!ref){
          window.alert("codigo de rastreio não identificado")
        }else{
          
              var re = upfireb(position.coords.latitude,position.coords.longitude)
              var p = Promise.resolve(re)
           p.then(function(v){
             console.log("agora vai else",v)
             
           })
          
        }


      if (marker) {
        // Marker already created - Move it
        
        marker.setPosition(newPoint);
        //upTracker(newPoint[0], newPoint[1])
      }
      else {
        // Marker does not exist - Create it
        marker = new google.maps.Marker({
          position: newPoint
         // map: map
        });
      }
  
      // Center the map on the new position
     // map.setCenter(newPoint);
    }); 
  
    // Call the autoUpdate() function every 5 seconds
    setTimeout(autoUpdate, 5000);
  }



  async function upfireb(lat,long){
    const docRefup = await updateDoc(doc(db, "rastreio", ref), {
        lat: lat,
        long: long
      }).then(function(artigos){
        var up = artigos
        console.log("artigos",artigos)
        return up
      })
      console.log("teste",docRefup)
     //var re = docRefup.id
      return docRefup
  }

  autoUpdate()

 // module.export = autoUpdate();