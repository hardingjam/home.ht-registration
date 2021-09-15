import React, { useState, useEffect } from "react";
import "./App.css";
import { ProgressBar } from "./ProgressBar";
import { FullName } from "./fullName";
import { EmailAndPhone } from "./emailAndPhone";

const App: React.FC = () => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [salary, setSalary] = useState<string>("");
    const [progress, setProgress] = useState<number>(25);

    useEffect(() => {
        const progressBar = document.getElementById("prog-bar");
        console.log(progressBar);
    }, []);

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
        setProgress(50);
    };

    const updateEmailAndPhone = (
        e: React.MouseEvent,
        email: string,
        phone: string
    ) => {
        console.log("updating email and phone");
        setEmail(email);
        setPhone(phone);
        setProgress(50);
    };

    return (
        <div className="App">
            <header className="App-header">
                <p>Register with Home and start booking apartments today.</p>
                <ProgressBar percentage={progress} />
            </header>
            <div className="registration-form">
                {progress === 25 && (
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
                {progress === 50 && (
                    <div>
                        <EmailAndPhone
                            email={""}
                            phone={""}
                            updateEmailAndPhone={(
                                e,
                                email: string,
                                phone: string
                            ) => updateEmailAndPhone(e, email, phone)}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;
