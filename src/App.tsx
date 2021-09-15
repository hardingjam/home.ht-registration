import React, { useState, useEffect } from "react";
import "./App.css";
import { ProgressBar } from "./ProgressBar";
import { FullName } from "./fullName";
import { EmailAndPhone } from "./emailAndPhone";
import { SalaryRange } from "./salaryRange";
import { Summary } from "./summary";

const App: React.FC = () => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [salary, setSalary] = useState<string>("");
    const [progress, setProgress] = useState<number>(20);

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

    const step = (
        e: React.MouseEvent<HTMLButtonElement>,
        direction: string
    ) => {
        console.log("stepping from app.js");
        if (direction === "next") {
            setProgress((currProgress) => currProgress + 20);
        }
        if (direction === "back") {
            setProgress((currProgress) => currProgress - 20);
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
    };

    const updateEmailAndPhone = (
        e: React.MouseEvent,
        email: string,
        phone: string
    ) => {
        console.log("updating email and phone");
        setEmail(email);
        setPhone(phone);
    };

    const updateSalary = (e: React.MouseEvent, salary: string) => {
        console.log("updating salary!");
        setSalary(salary);
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
                            progress={progress}
                            firstName={firstName}
                            lastName={lastName}
                            updateName={(e, first: string, last: string) =>
                                updateName(e, first, last)
                            }
                            step={(e, direction: string) => step(e, direction)}
                        />
                    </div>
                )}
                {progress === 40 && (
                    <div>
                        <EmailAndPhone
                            firstName={firstName}
                            email={email}
                            phone={phone}
                            progress={progress}
                            updateEmailAndPhone={(
                                e,
                                email: string,
                                phone: string
                            ) => updateEmailAndPhone(e, email, phone)}
                            step={(e, direction: string) => step(e, direction)}
                        />
                    </div>
                )}
                {progress === 60 && (
                    <>
                        <SalaryRange
                            progress={progress}
                            salary={salary}
                            updateSalary={(e, salary: string) =>
                                updateSalary(e, salary)
                            }
                            step={(e, direction: string) => step(e, direction)}
                        />
                    </>
                )}
                {progress === 80 && (
                    <>
                        <Summary
                            progress={progress}
                            firstName={firstName}
                            lastName={lastName}
                            email={email}
                            phone={phone}
                            salary={salary}
                            step={(e, direction: string) => step(e, direction)}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default App;
