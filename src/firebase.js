import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
          apiKey: "AIzaSyC75F5NCBGhNPV9d4rqEVEQMCWRejq4Hqw",
          authDomain: "mychat-app-4589d.firebaseapp.com",
          projectId: "mychat-app-4589d",
          storageBucket: "mychat-app-4589d.appspot.com",
          messagingSenderId: "833526308375",
          appId: "1:833526308375:web:1b65aee15182cb9e998652"
}).auth();