import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from "./router/index"

import "bootstrap/dist/css/bootstrap.min.css"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOYZ6wgSv_h_GLD2QKW_hbKquVwc2QZNs",
  authDomain: "vite-project-657aa.firebaseapp.com",
  projectId: "vite-project-657aa",
  storageBucket: "vite-project-657aa.appspot.com",
  messagingSenderId: "502906839212",
  appId: "1:502906839212:web:17c2ade981591c16c4bf09",
  measurementId: "G-DEQZWK49W5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createApp(App).use(VueRouter).mount('#app')
