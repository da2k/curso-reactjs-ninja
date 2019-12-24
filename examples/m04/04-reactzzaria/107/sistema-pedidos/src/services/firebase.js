import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyADubq8Pf-_nC6cM52PGZJLAJ_yT4UkWto',
  authDomain: 'reactzzaria-12649.firebaseapp.com',
  databaseURL: 'https://reactzzaria-12649.firebaseio.com',
  projectId: 'reactzzaria-12649',
  storageBucket: 'reactzzaria-12649.appspot.com',
  messagingSenderId: '190402590347'
}

firebase.initializeApp(config)

export default firebase
