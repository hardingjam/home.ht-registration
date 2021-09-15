import React from "react";

import "./App.css";

interface SummaryProps {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    salary: string;
    progress: number;
    step: (e: React.MouseEvent<HTMLButtonElement>, direction: string) => void;
}

export const Summary: React.FC<SummaryProps> = ({
    firstName,
    lastName,
    email,
    phone,
    salary,
    progress,
    step,
}) => {
    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        step(e, `${e.currentTarget.name}`);
    }

    return (
        <div className="registration-step">
            <h2>
                Here's your information. Feel free to go back and make changes,
                or if you're ready, submit!
            </h2>
            <div className="summary-info">
                <p>
                    Name: {firstName} {lastName}
                </p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Salary Range: {salary}</p>
            </div>

            <div className="step-buttons">
                {progress !== 20 && (
                    <button name="back" onClick={handleClick}>
                        Back
                    </button>
                )}
                {progress !== 100 && (
                    <button name="next" onClick={handleClick}>
                        Submit
                    </button>
                )}
            </div>
        </div>
    );
};
