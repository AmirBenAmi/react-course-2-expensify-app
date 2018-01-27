import * as firebase from 'firebase';

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyC6VKJvtYpO7zIHiRGpASKHyojfVizksrI",
    authDomain: "expensify-8fe36.firebaseapp.com",
    databaseURL: "https://expensify-8fe36.firebaseio.com",
    projectId: "expensify-8fe36",
    storageBucket: "expensify-8fe36.appspot.com",
    messagingSenderId: "9938646300"
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  database.ref().on('value', (snapshot) => {
      const val = snapshot.val();
      console.log(val.name);
  });

//   database.ref().on('value', (snapshot) => {
//       console.log(snapshot.val());
//   });
///////////database.ref().off();




  //   database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });


//   database.ref('isSingle').remove().then(() => {
//       console.log('data removed!');
//   }).catch((e) => {
//       console.log('there was a problem');
//   });

//   database.ref().update({
//       age: 40,
//       'location/city': 'Boston'
//   });


//   database.ref().set({
//       name: "Matka",
//       isSingle: false,
//       location:{
//           city: 'TLV',
//           country: 'Israel'
//       }
//   }).then(() => {
//       console.log('Data is saved');
//   }).catch((e) => {
//       console.log('This failed', e);
//   });

// //   database.ref('location/city').set('New York');

//   database.ref('attributes').set({
//       height: 1,
//       weight: 78
//   }).then(() => {
//     console.log('Data is saved!');
// }).catch((e) => {
//     console.log('This failed', e);
// });
