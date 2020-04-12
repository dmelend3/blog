import Vue from "vue"

import firebase from "firebase/app"
import "firebase/firebase-auth"

import * as firebaseui from "firebaseui"

const firebaseConfig = {
  apiKey: "AIzaSyALhAIDT5ggZbm9rBw9CDmR3Sj-gdwS8no",
  authDomain: "blog-7b62b.firebaseapp.com",
  databaseURL: "https://blog-7b62b.firebaseio.com",
  projectId: "blog-7b62b",
  storageBucket: "blog-7b62b.appspot.com",
  messagingSenderId: "78533651571",
  appId: "1:78533651571:web:df490c786807337069ce06"
};

firebase.initializeApp(firebaseConfig)
const ui = new firebaseui.auth.AuthUI(firebase.auth())

Vue.prototype.$firebase = firebase
Vue.prototype.$firebaseui = ui