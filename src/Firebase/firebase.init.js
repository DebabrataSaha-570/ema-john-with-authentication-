import { initializeApp } from "firebase/app";
import firebaseConfig from '../Firebase/firebase.config'
const initializeAuthentication = () => {
    initializeApp(firebaseConfig)
}
export default initializeAuthentication;


/*
 steps for authentication
------------------------------
step-1: initial setup

1. Firebase: Create project
2. Create web app
3. Get configuration .
4. Enable auth method .

Step-2:
1. Create login Component
2. Create Register component .
3. Create Route For login and register

*/
