import React, { createContext, useContext, useReducer } from "react";
import { db, auth } from "./firebase";

// Create Context
const FirebaseContext = createContext();

// Reducer for state management (optional)
const initialState = {
    user: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return { ...state, user: action.payload };
        default:
            return state;
    }
};

export const FirebaseProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <FirebaseContext.Provider value={{ db, auth, state, dispatch }}>
            {children}
        </FirebaseContext.Provider>
    );
};

export const useFirebase = () => useContext(FirebaseContext);
