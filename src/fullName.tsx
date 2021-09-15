import React, { useRef, useState } from "react";

import "./App.css";

interface NameProps {
    firstName: string;
    lastName: string;
    updateName: (e: React.MouseEvent, first: string, last: string) => void;
}

export const FullName: React.FC<NameProps> = ({
    updateName,
    firstName,
    lastName,
}) => {
    const [first, setFirst] = useState<string>("");
    const [last, setLast] = useState<string>("");
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

    function handleClick(e: React.MouseEvent) {
        console.log(first, last);
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
            <button onClick={handleClick}>Next</button>
        </div>
    );
};
