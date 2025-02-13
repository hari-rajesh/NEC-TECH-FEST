import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain.firebaseapp.com",
  databaseURL: "https://your-project-id.firebaseio.com", // Make sure this line exists and follows the format
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id",
  measurementId: "your-measurement-id"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
