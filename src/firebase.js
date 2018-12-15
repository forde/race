import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCAilol4FoHOWzSlph_CRGJJCTOyRowVTM",
    authDomain: "race-9e4a2.firebaseapp.com",
    databaseURL: "https://race-9e4a2.firebaseio.com",
    projectId: "race-9e4a2",
    storageBucket: "",
    messagingSenderId: "256809436668"
};

firebase.initializeApp(config);

const fb = {

    dbRef: firebase.database().ref(),

    setTestValue: value => fb.dbRef.child('test').set(value),

    selectMap : value => fb.dbRef.child('selectedMap').set(value),
}

export default fb;
