import React, { useRef, useState } from "react";

import "./App.css";

interface NameProps {
    firstName: string;
    lastName: string;
    progress: number;
    updateName: (e: React.MouseEvent, first: string, last: string) => void;
    step: (e: React.MouseEvent<HTMLButtonElement>, direction: string) => void;
}

export const FullName: React.FC<NameProps> = ({
    firstName,
    lastName,
    progress,
    updateName,
    step,
}) => {
    const [first, setFirst] = useState<string>(firstName);
    const [last, setLast] = useState<string>(lastName);
    const [error, setError] = useState<boolean>(false);
    const firstRef = useRef<HTMLInputElement>(null);
    const lastRef = useRef<HTMLInputElement>(null);

    function handleChange(e: React.FormEvent<HTMLInputElement>) {
        if (e.currentTarget.name === "firstName") {
            setFirst(e.currentTarget.value);
        }
        if (e.currentTarget.name === "lastName") {
            setLast(e.currentTarget.value);
        }
    }

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        if (!first || !last) {
            return setError(true);
        }
        step(e, `${e.currentTarget.name}`);
        updateName(e, first, last);
    }

    return (
        <div className="registration-step">
            <h2>Let's get started. Tell us your name...</h2>

            <input
                placeholder="First"
                ref={firstRef}
                name="firstName"
                type="text"
                value={first}
                onChange={handleChange}
            ></input>
            <input
                placeholder="Last"
                ref={lastRef}
                name="lastName"
                type="text"
                value={last}
                onChange={handleChange}
            ></input>
            <div className="step-buttons">
                {progress !== 20 && (
                    <button name="back" onClick={handleClick}>
                        Back
                    </button>
                )}
                {progress !== 100 && (
                    <button name="next" onClick={handleClick}>
                        Next
                    </button>
                )}
            </div>
            {error && <div className="error">Please complete all fields.</div>}
        </div>
    );
};
