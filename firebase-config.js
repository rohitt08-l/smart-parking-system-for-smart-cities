// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmaWdtjuzC_eAbZjKbHWfz1ssMeQ-Dm3Y",
  authDomain: "smart-parking-system-19b85.firebaseapp.com",
  databaseURL: "https://smart-parking-system-19b85-default-rtdb.firebaseio.com",
  projectId: "smart-parking-system-19b85",
  storageBucket: "smart-parking-system-19b85.firebasestorage.app",
  messagingSenderId: "135956661862",
  appId: "1:135956661862:web:aac22db739883e4f7a8fa7"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const slotRef = database.ref("parkingSlot");