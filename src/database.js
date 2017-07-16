import Firebase from 'firebase'
let config = {
  apiKey: 'AIzaSyBz0WaKvFVv3yAFuUvFbQyeNlafvlo1UiI',
  authDomain: 'hsk-app.firebaseapp.com',
  databaseURL: 'https://hsk-app.firebaseio.com',
  projectId: 'hsk-app',
  storageBucket: 'hsk-app.appspot.com',
  messagingSenderId: '551760078223'
}

let app = Firebase.initializeApp(config)
let db = app.database()

export default db
