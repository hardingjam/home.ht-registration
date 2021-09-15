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
            <h2>Check your details, and if you're ready, submit!</h2>
            <div className="summary-info">
                <div className="info-labels">
                    <p>Name:</p>
                    <p>Email:</p>
                    <p>Phone:</p>
                    <p>Salary:</p>
                </div>
                <div className="info-values">
                    <p>
                        {firstName} {lastName}
                    </p>
                    <p>{email}</p>
                    <p>{phone}</p>
                    <p>{salary}</p>
                </div>
            </div>

            <div className="step-buttons">
                {progress !== 0 && (
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
