import React, { useState, useEffect } from "react";
import "./App.css";
import { ProgressBar } from "./ProgressBar";
import { FullName } from "./fullName";

const App: React.FC = () => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [salary, setSalary] = useState<string>("");
    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        console.log("first", firstName);
        console.log("last", lastName);
        console.log("email", email);
        console.log("phone", phone);
        console.log("salary", salary);
        console.log("progress", progress);
    });

    const updateName = (
        e: React.MouseEvent,
        firstName: string,
        lastName: string
    ) => {
        console.log("updating state!");
        setFirstName(firstName);
        setLastName(lastName);
    };

    return (
        <div className="App">
            <header className="App-header">
                <p>Register with Home and start booking apartments today.</p>
                <ProgressBar />
            </header>
            <div className="registration-form">
                {progress === 0 && (
                    <div>
                        <FullName
                            firstName={""}
                            lastName={""}
                            updateName={(e, first: string, last: string) =>
                                updateName(e, first, last)
                            }
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;
