import React, { useRef, useState } from "react";

import "./App.css";

interface NameProps {
    firstName: string;
    lastName: string;
    progress: number;
    updateName: (
        e:
            | React.MouseEvent<HTMLButtonElement>
            | React.KeyboardEvent<HTMLDivElement>,
        first: string,
        last: string
    ) => void;
    step: (
        e:
            | React.MouseEvent<HTMLButtonElement>
            | React.KeyboardEvent<HTMLDivElement>,
        direction: string
    ) => void;
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

    function submit(
        e:
            | React.KeyboardEvent<HTMLDivElement>
            | React.MouseEvent<HTMLButtonElement>,
        first: string,
        last: string,
        direction: string
    ) {
        if (!first || !last) {
            return setError(true);
        }
        updateName(e, first, last);
        step(e, direction);
    }

    function handleKeyPress(e: React.KeyboardEvent<HTMLDivElement>) {
        if (e.code === "Enter") {
            submit(e, first, last, "next");
        }
    }

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        submit(e, first, last, `${e.currentTarget.name}`);
    }

    return (
        <div className="registration-step" onKeyPress={handleKeyPress}>
            <h2>Let's get started. Tell us your name...</h2>

            <input
                className="text-input"
                placeholder="First"
                ref={firstRef}
                name="firstName"
                type="text"
                value={first}
                onChange={handleChange}
            ></input>
            <input
                className="text-input"
                placeholder="Last"
                ref={lastRef}
                name="lastName"
                type="text"
                value={last}
                onChange={handleChange}
            ></input>
            <div className="step-buttons">
                <button name="next" onClick={handleClick}>
                    Next
                </button>
            </div>
            {error && <div className="error">Please complete all fields.</div>}
        </div>
    );
};
