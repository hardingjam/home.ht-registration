import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { ProgressBar } from "./ProgressBar";
import { FullName } from "./fullName";
import { EmailAndPhone } from "./emailAndPhone";
import { SalaryRange } from "./salaryRange";

const App: React.FC = () => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [salary, setSalary] = useState<string>("");
    const [progress, setProgress] = useState<number>(20);

    const nextRef = useRef<HTMLButtonElement>(null);
    const backRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const progressBar = document.getElementById("prog-bar");
        console.log(progressBar);
    }, []);

    useEffect(() => {
        console.log("first:", firstName);
        console.log("last:", lastName);
        console.log("email:", email);
        console.log("phone:", phone);
        console.log("salary:", salary);
        console.log("progress:", progress);
    });

    const step = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log("stepping");
        console.log(e.target);
        if (e.currentTarget.name === "back") {
            setProgress((currProgress) => currProgress - 20);
        }
        if (e.currentTarget.name === "next") {
            setProgress((currProgress) => currProgress + 20);
        }
    };

    const updateName = (
        e: React.MouseEvent,
        firstName: string,
        lastName: string
    ) => {
        console.log("updating state!");
        setFirstName(firstName);
        setLastName(lastName);
        setProgress(40);
    };

    const updateEmailAndPhone = (
        e: React.MouseEvent,
        email: string,
        phone: string
    ) => {
        console.log("updating email and phone");
        setEmail(email);
        setPhone(phone);
        setProgress(60);
    };

    return (
        <div className="App">
            <header className="App-header">
                <p>Register with Home and start booking apartments today.</p>
                <ProgressBar percentage={progress} />
            </header>
            <div className="registration-form">
                {progress === 20 && (
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
                {progress === 40 && (
                    <div>
                        <EmailAndPhone
                            firstName={firstName}
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
                {progress === 60 && (
                    <>
                        <SalaryRange salaryRange={""} />
                    </>
                )}
            </div>
            <div className="step-buttons">
                {progress !== 20 && (
                    <button ref={backRef} name="back" onClick={step}>
                        Back
                    </button>
                )}
                {progress !== 100 && (
                    <button ref={nextRef} name="next" onClick={step}>
                        Next
                    </button>
                )}
            </div>
        </div>
    );
};

export default App;
