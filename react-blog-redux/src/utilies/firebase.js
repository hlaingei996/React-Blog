  import firebase from 'firebase'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCuAcyzP66VkIb1uCIbjGiHQcZXZdgksCA",
    authDomain: "react-blog-f2155.firebaseapp.com",
    databaseURL: "https://react-blog-f2155.firebaseio.com",
    projectId: "react-blog-f2155",
    storageBucket: "react-blog-f2155.appspot.com",
    messagingSenderId: "225528434233"
  };
  firebase.initializeApp(config);

  export default firebase.firestore();