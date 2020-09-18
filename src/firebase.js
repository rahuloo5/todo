
import firebase from 'firebase'
const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCPjNPTQ8D7vUFq3pYlDD49E9W-hb9Jbjw',
  authDomain: 'to-do-list-7a059.firebaseapp.com',
  databaseURL: 'https://to-do-list-7a059.firebaseio.com',
  projectId: 'to-do-list-7a059',
  storageBucket: 'to-do-list-7a059.appspot.com',
  messagingSenderId: '828914848337',
  appId: '1:828914848337:web:729ab608646c153aac5e70',
  measurementId: 'G-QBY0L5J094',
} )


const db = firebaseApp.firestore();
export default db ;