import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { FirebaseProvider } from "./FirebaseContext";

ReactDOM.render(
    <FirebaseProvider>
        <App />
    </FirebaseProvider>,
    document.getElementById("root")
);
