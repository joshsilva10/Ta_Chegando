import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js"
import { getFirestore, collection, addDoc, setDoc , doc, updateDoc, onSnapshot , getDoc } from "/script.js"

var referencia = document.getElementById('track').innerText
console.log("tracking", referencia)
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



var ref
const db = getFirestore(app);


/*function geoLocation(){
    if('geolocation' in navigator){
        console.log('sim')
        const local = navigator.geolocation.getCurrentPosition(function(position){
             mapInit()
            //console.log(position.coords.latitude)
        }, function(error){
            console.log(error)
        }
    )
        
        const rastreio = navigator.geolocation.watchPosition(function(position){
            var lat = position.coords.latitude
            var lng = position.coords.longitude
            markerMove(lat, lng)
            //console.log(position.coords.latitude)
        }, function(error){
            console.log(error)
        }, {enableHighAccuracy: true, maximumAge: 5000, timeout:5000})
    }else{
        console.log('nao')
    }
    
}
var map;
function mapInit(){
    map = new google.maps.Map(document.getElementById("map"),{
        center: {lat: -8.043123488579804, lng: -34.88161061673485},
        zoom: 18
    })

    var marker = new google.maps.Marker({
        position: {lat: -8.043123488579804, lng: -34.88161061673485},
        map: map 
    })
    //console.log(map)
}

function markerMove(lat, lng){
    var marker1 = new google.maps.Marker({
        position: {lat: lat, lng: lng},
        map: map 
    })
}
*/


mapInit()


 function mapInit() {
    //var pointFix
    var lat
    var lng
   
        
    if (navigator.geolocation){
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: {lat: -8.043123488579804, lng: -34.88161061673485},
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  var markerFix = new google.maps.Marker({
    position: {lat: -8.043123488579804, lng: -34.88161061673485},
    map: map
    });


    /*  navigator.geolocation.getCurrentPosition(function(position) {  
    var pointFix = new google.maps.LatLng(position.coords.latitude, 
                                          position.coords.longitude);
    
                                          
    //map.setCenter(pointFix)
    })
    */
   // map.setCenter(pointFix)
  
  var marker = null;
  
  async function autoUpdate() {

    const Refloc = doc(db, "rastreio", referencia)
    const docSnap = await getDoc(Refloc)
    /*(async()=>{
        const teste =await getDoc(Refloc)
        var p = Promise.resolve(teste)
          
        console.log(teste.lat)
        return teste    
    })()*/
    //docSnap.then(function(){

    //if (docSnap.exists()) {

        
            var newPoint = new google.maps.LatLng(docSnap.data().lat, 
                                                  docSnap.data().long);
              //localStorage.setItem("latitude", docSnap.data().lat)
              //localStorage.setItem("longitude", docSnap.data().long)
             // localStorage.setItem("latitude", position.coords.latitude)
             // localStorage.setItem("longitude", position.coords.longitude)
              console.log("lat", docSnap.data().lat)
              console.log("long", docSnap.data().long)
            if (marker) {
              // Marker already created - Move it
              
              marker.setPosition(newPoint);
              //upTracker(newPoint[0], newPoint[1])
            }
            else {
              // Marker does not exist - Create it
              marker = new google.maps.Marker({
                position: newPoint,
                map: map
              });
            }
        
            // Center the map on the new position
           // map.setCenter(newPoint);
          

    console.log("Document data:", docSnap.data());
   // } else {
    // doc.data() will be undefined in this case
   // console.log("No such document!");
   // }

//}).catch(function(erro){
    //alert("teste"+erro)
//})


    
  
    // Call the autoUpdate() function every 5 seconds
    setTimeout(autoUpdate, 2000);
  }
  
  autoUpdate();
}else{
    alert('W3C Geolocation API is not available');
}
}


/*
*/
//openEmp()
