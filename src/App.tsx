import React, { useState } from "react";
import "./App.css";
import { ProgressBar } from "./ProgressBar";
import { FullName } from "./fullName";

const App: React.FC = () => {
    const [userData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: null,
        salaryRange: null,
        progress: 1,
    });

    return (
        <div className="App">
            <header className="App-header">
                <p>Register with Home and start booking apartments today.</p>
                <ProgressBar />
            </header>
            <div className="registration-form">
                {userData.progress === 1 && (
                    <div>
                        <h1>You're at stage 1!</h1>
                        <FullName firstName="" lastName="" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;
