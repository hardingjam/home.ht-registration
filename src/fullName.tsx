import React, { useRef, useState } from "react";
import "./App.css";

interface Props {
    firstName: string;
    lastName: string;
}

export const FullName: React.FC<Props> = ({ firstName, lastName }) => {
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

    function handleClick(e: React.FormEvent<HTMLButtonElement>) {
        console.log(first, last);
        // pass this information to the top-level userData
        // increment form progress
        // render the next stage in the form
    }

    return (
        <div className="registration-step">
            <h2>Step in registration!</h2>
            <input
                ref={firstRef}
                name="firstName"
                type="text"
                value={first}
                onChange={handleChange}
            ></input>
            <input
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
