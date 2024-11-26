import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSignUp = async () => {
        if (password !== confirmPassword) {
            setMessage("Passwords do not match!");
            return;
        }

        const auth = getAuth();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            setMessage(`User created: ${userCredential.user.email}`);
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
            <h2>Sign Up</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ display: "block", margin: "10px auto", padding: "8px", width: "100%" }}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ display: "block", margin: "10px auto", padding: "8px", width: "100%" }}
            />
            <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={{ display: "block", margin: "10px auto", padding: "8px", width: "100%" }}
            />
            <button onClick={handleSignUp} style={{ padding: "10px 20px", marginTop: "10px" }}>
                Sign Up
            </button>
            {message && <p style={{ color: "red" }}>{message}</p>}
        </div>
    );
};

export default SignUp;
