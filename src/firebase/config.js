import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyA__gbK0eO9mBe115Mr_1qaMAda5a9OlaA',
  authDomain: 'thedojosite-b7017.firebaseapp.com',
  projectId: 'thedojosite-b7017',
  storageBucket: 'thedojosite-b7017.appspot.com',
  messagingSenderId: '243108955809',
  appId: '1:243108955809:web:98824b09350d8c4afdd2e0',
}

// initialize firebase
firebase.initializeApp(firebaseConfig)

// initialize services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// Timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }
