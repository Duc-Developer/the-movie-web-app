import * as firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIRE_BASE_API_KEY,
    authDomain: process.env.REACT_APP_FIRE_BASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIRE_BASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIRE_BASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIRE_BASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIRE_BASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIRE_BASE_APP_ID,
    measurementId: process.env.REACT_APP_FIRE_BASE_MEASUREMENT_ID
};

const defaultProject = firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const storage = firebase.storage();

export { database, storage, defaultProject as default };