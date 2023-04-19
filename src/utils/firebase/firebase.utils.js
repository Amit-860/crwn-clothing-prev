import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";
import {
	getFirestore,
	query,
	doc,
	getDoc,
	getDocs,
	setDoc,
	collection,
	writeBatch,
} from "firebase/firestore";

// Your web app's Firebase configuration
// const firebaseConfig = {
// 	apiKey: "",
// 	authDomain: "",
// 	projectId: "",
// 	storageBucket: "",
// 	messagingSenderId: "",
// 	appId: "",
// };

const firebaseConfig = {
	apiKey: "AIzaSyDYYIVwQXH52dxhfEBen7zSTpqE-aZ_pgk",
	authDomain: "crwn-clothing-db-a8853.firebaseapp.com",
	projectId: "crwn-clothing-db-a8853",
	storageBucket: "crwn-clothing-db-a8853.appspot.com",
	messagingSenderId: "488190944330",
	appId: "1:488190944330:web:426fbc50911ffeaf7ef2b3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
	signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
	signInWithRedirect(auth, googleProvider);
export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) {
		return;
	}
	return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) {
		return;
	}
	return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = () => signOut(auth);

export const db = getFirestore();
export const addCollectionAndDocuments = async (
	collectionkey,
	objectsToAdd,
	field,
) => {
	const collectionRef = collection(db, collectionkey);
	const batch = writeBatch(db);

	objectsToAdd.forEach((object) => {
		const docRef = doc(collectionRef, object[field].toLowerCase());
		batch.set(docRef, object);
	});
	await batch.commit();
	console.log("DONE");
};

export const getCategoriesAndDocuments = async () => {
	const collectionRef = collection(db, "categories");
	const q = query(collectionRef);

	const querySnapshot = await getDocs(q);
	return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

export const createUserDocumentFromAuth = async (
	userAuth,
	additionalInformation,
) => {
	if (!userAuth) return;

	const userDocRef = doc(db, "users", userAuth.uid);
	const userSnapshot = await getDoc(userDocRef);
	// console.log(userSnapshot);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInformation,
			});
		} catch (err) {
			console.log(`error creating user ${err.message}`);
		}
	}

	return userDocRef;
};

export const onAuthStateChangedListner = (callback) =>
	onAuthStateChanged(auth, callback);
