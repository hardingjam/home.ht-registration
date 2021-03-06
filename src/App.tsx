import React, { useState } from "react";
import "./App.css";
import { ProgressBar } from "./ProgressBar";
import { FullName } from "./fullName";
import { EmailAndPhone } from "./emailAndPhone";
import { SalaryRange } from "./salaryRange";
import { Summary } from "./summary";
import { Success } from "./success";

const App: React.FC = () => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [salary, setSalary] = useState<string>("");
    const [progress, setProgress] = useState<number>(0);

    // useEffect(() => {
    //     const progressBar = document.getElementById("prog-bar");
    // }, []);

    const step = (
        e:
            | React.MouseEvent<HTMLButtonElement>
            | React.KeyboardEvent<HTMLDivElement>,
        direction: string
    ) => {
        if (direction === "next") {
            setProgress((currProgress) => currProgress + 25);
        }
        if (direction === "back") {
            setProgress((currProgress) => currProgress - 25);
        }
    };

    const updateName = (
        e: React.MouseEvent | React.KeyboardEvent,
        firstName: string,
        lastName: string
    ) => {
        setFirstName(firstName);
        setLastName(lastName);
    };

    const updateEmailAndPhone = (
        e: React.MouseEvent | React.KeyboardEvent,
        email: string,
        phone: string
    ) => {
        setEmail(email);
        setPhone(phone);
    };

    const updateSalary = (
        e: React.MouseEvent | React.KeyboardEvent,
        salary: string
    ) => {
        setSalary(salary);
    };

    return (
        <div className="bg">
            <div className="App">
                <header className="App-header">
                    <p>
                        Register with <span className="bolder">Home</span> {""}
                        and start booking apartments today.
                    </p>
                    <ProgressBar percentage={progress} />
                </header>

                <div className="registration-form">
                    {progress === 0 && (
                        <div>
                            <FullName
                                progress={progress}
                                firstName={firstName}
                                lastName={lastName}
                                updateName={(e, first: string, last: string) =>
                                    updateName(e, first, last)
                                }
                                step={(e, direction: string) =>
                                    step(e, direction)
                                }
                            />
                        </div>
                    )}
                    {progress === 25 && (
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
                                step={(e, direction: string) =>
                                    step(e, direction)
                                }
                            />
                        </div>
                    )}
                    {progress === 50 && (
                        <>
                            <SalaryRange
                                progress={progress}
                                salary={salary}
                                updateSalary={(e, salary: string) =>
                                    updateSalary(e, salary)
                                }
                                step={(e, direction: string) =>
                                    step(e, direction)
                                }
                            />
                        </>
                    )}
                    {progress === 75 && (
                        <>
                            <Summary
                                progress={progress}
                                firstName={firstName}
                                lastName={lastName}
                                email={email}
                                phone={phone}
                                salary={salary}
                                step={(e, direction: string) =>
                                    step(e, direction)
                                }
                            />
                        </>
                    )}
                    {progress === 100 && (
                        <>
                            <Success firstName={firstName} />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;
