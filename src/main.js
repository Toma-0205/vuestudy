import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false


// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9P6S9mYUEa4-41b9ZY_fwXs2ptAIac7Y",
  authDomain: "vue-address-90ac6.firebaseapp.com",
  projectId: "vue-address-90ac6",
  storageBucket: "vue-address-90ac6.appspot.com",
  messagingSenderId: "879037097157",
  appId: "1:879037097157:web:80045280da340c79283cac",
  measurementId: "G-N08MF67PDB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
