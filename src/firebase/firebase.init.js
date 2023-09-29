// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC9VGD7DD3xF-W1H-kHcKR11KViWfz2PL8',
  authDomain: 'dragon-news-react-f5f25.firebaseapp.com',
  projectId: 'dragon-news-react-f5f25',
  storageBucket: 'dragon-news-react-f5f25.appspot.com',
  messagingSenderId: '341266818498',
  appId: '1:341266818498:web:622ab7445cbd33e419a25b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
