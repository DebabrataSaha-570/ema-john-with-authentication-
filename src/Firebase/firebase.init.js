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
-------------------------
Step-2:
1. Create login Component
2. Create Register component .
3. Create Route For login and register
------------------------
Step-3:
1. set up sign in method
2. set up sign out method
3. User state
4. special observer
5. return necessary methods and states from useFirebase .
------------------------
step-4:
1. Create a auth context
2. crate context provider
3. use Auth provider
4. Create useAuth hook
*/
