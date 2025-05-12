import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCZCMJ0TUXJIWjOvUEDxRthUV_clljqBGk",
  authDomain: "edulearn-88.firebaseapp.com",
  projectId: "edulearn-88",
  storageBucket: "edulearn-88.appspot.com",
  messagingSenderId: "844902153902",
  appId: "1:844902153902:web:2b9e408b2886a5860ff73f",
  measurementId: "G-7L4SCS2CD3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log('User signed in:', result.user);
  } catch (error) {
    console.error('Error during Google sign-in:', error);
  }
};

export { auth, signInWithGoogle };
