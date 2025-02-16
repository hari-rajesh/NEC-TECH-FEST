import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDpudog8qGtKGK_4rj2-lJLhXyUVgUjcm8",
  authDomain: "jonash-5a6cf.firebaseapp.com",
  projectId: "jonash-5a6cf",
  databaseURL: "https://jonash-5a6cf-default-rtdb.firebaseio.com/",
  storageBucket: "jonash-5a6cf.firebasestorage.app",
  messagingSenderId: "210774447563",
  appId: "1:210774447563:web:30c106d95893a24bbb524e",
  measurementId: "G-TFPSLZQDWE"
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const database = getDatabase(app);
export const analytics = getAnalytics(app);
