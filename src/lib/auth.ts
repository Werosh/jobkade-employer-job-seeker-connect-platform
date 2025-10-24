import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  User,
  onAuthStateChanged 
} from 'firebase/auth';
import { auth } from './firebase';

export const loginUser = async (email: string, password: string) => {
  try {
    // Check if Firebase is properly configured
    if (!process.env.NEXT_PUBLIC_FIREBASE_API_KEY || process.env.NEXT_PUBLIC_FIREBASE_API_KEY === "placeholder-api-key") {
      return { user: null, error: "Firebase not configured. Please set up your environment variables." };
    }
    
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user, error: null };
  } catch (error: any) {
    return { user: null, error: error.message };
  }
};

export const registerUser = async (email: string, password: string) => {
  try {
    // Check if Firebase is properly configured
    if (!process.env.NEXT_PUBLIC_FIREBASE_API_KEY || process.env.NEXT_PUBLIC_FIREBASE_API_KEY === "placeholder-api-key") {
      return { user: null, error: "Firebase not configured. Please set up your environment variables." };
    }
    
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user, error: null };
  } catch (error: any) {
    return { user: null, error: error.message };
  }
};

export const logoutUser = async () => {
  try {
    // Check if Firebase is properly configured
    if (!process.env.NEXT_PUBLIC_FIREBASE_API_KEY || process.env.NEXT_PUBLIC_FIREBASE_API_KEY === "placeholder-api-key") {
      return { error: "Firebase not configured. Please set up your environment variables." };
    }
    
    await signOut(auth);
    return { error: null };
  } catch (error: any) {
    return { error: error.message };
  }
};

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};
