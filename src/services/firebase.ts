import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtsb09AnXNkUa7fquPvUHrmOxVCtd8Rzc",
  authDomain: "auth-3b568.firebaseapp.com",
  projectId: "auth-3b568",
  storageBucket: "auth-3b568.appspot.com",
  messagingSenderId: "732757993073",
  appId: "1:732757993073:web:c445478710eac9de619dd0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);