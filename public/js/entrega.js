
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

var ref
const db = getFirestore(app);

 function autoUpdate() {
    navigator.geolocation.getCurrentPosition(function(position) {  
      var marker = null;
      
      var newPoint = new google.maps.LatLng(position.coords.latitude, 
                                            position.coords.longitude);
        console.log("geolocation")
        console.log(position.coords.latitude)
        if(!ref){
          console.log("entrei no if")
        try {
          console.log("ref", ref)
           var hello = fireb(position.coords.latitude,position.coords.longitude)

           var p = Promise.resolve(hello)
           p.then(function(v){
             console.log("agora vai",v.id)
             ref = v.id
             console.log("agora vai ref",ref)
           })

            console.log("Document written with ID if: ", ref);
        
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        }else{
          console.log("entrei no else");
          console.log("ref1", ref);
          /* 
          var atualiza = (async ()=>{
             var re = await upfireb(position.coords.latitude,position.coords.longitude)
             
          })()
            atualiza.then(function(){
              console.log('atualiza ', atualiza)
              
            }).catch(function(erro){
                console.log(erro)
            })
            */
            //(async ()=>{
              var re = upfireb(position.coords.latitude,position.coords.longitude)
              var p = Promise.resolve(re)
           p.then(function(v){
             console.log("agora vai else",v)
             
           })
           //})()
            

           
          //console.log("Document written with ID: ", ref.PromiseResult);
          //console.log("ref1", ref)
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

  



  
  async function fireb(lat,long){
    const docRef = await addDoc(collection(db, "rastreio"), {
        lat: lat,
        long: long
      }).then(function(artigos){
        var up = artigos
        console.log("artigos",up)
        return up
      })
      //console.log("teste",docRef.id)
     //var re = docRef.id
      return docRef;
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