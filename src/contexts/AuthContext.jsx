import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { ADMINS } from "../utils/consts";

const authContext = createContext();

export function useAuthContext() {
	return useContext(authContext);
}

const AuthContext = ({ children }) => {
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);

	async function register(email, password, displayName, photoURL) {
        if (!displayName) {
            setError('Please, enter your name')
            return
        }
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			await updateProfile(auth.currentUser, { displayName, photoURL });
		} catch (e) {
			console.log(e);
            e.message.includes('password')? setError('Please, enter valid password') : setError('Please, enter valid e-mail') 
		}
	}

	async function login(email, password) {
		try {
			await signInWithEmailAndPassword(auth, email, password);
		} catch (e) {
			console.log(e);
            e.message.includes('password')? setError('Please, enter valid password') : setError('Please, enter valid e-mail')  
		}
	}

	async function logout() {
		try {
			await signOut(auth);
		} catch (e) {
			console.log(e);
		}
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setUser(user);
		});

		return () => unsubscribe();
	}, []);

	function clearError() {
		setError(null);
	}

	function isAdmin() {
		if (!user) {
			return false;
		}

		return ADMINS.includes(user.email);
	}

	const value = {
		user,
		register,
		login,
		logout,
		isAdmin,
		error,
        setError,
		clearError,
	};

	return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthContext;
