'use strict'

import firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyC_f0UDsm_ep2P8D1xEpDJlViT6wpO7oJ0',
  authDomain: 'reactflix-8422c.firebaseapp.com',
  databaseURL: 'https://reactflix-8422c.firebaseio.com',
  projectId: 'reactflix-8422c',
  storageBucket: 'reactflix-8422c.appspot.com',
  messagingSenderId: '783400366015'
})

const db = firebase.database()

export { db }
