import React, { useRef, useState } from "react";

import "./App.css";

interface NameProps {
    firstName: string;
    email: string;
    phone: string;
    progress: number;
    updateEmailAndPhone: (
        e: React.MouseEvent,
        email: string,
        phone: string
    ) => void;
    step: (e: React.MouseEvent<HTMLButtonElement>, direction: string) => void;
}

export const EmailAndPhone: React.FC<NameProps> = ({
    firstName,
    email,
    phone,
    progress,
    updateEmailAndPhone,
    step,
}) => {
    const [emailAddress, setEmailAddress] = useState<string>(email);
    const [phoneNumber, setPhoneNumber] = useState<string>(phone);
    const [error, setError] = useState<boolean>(false);
    const emailRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);

    function handleChange(e: React.FormEvent<HTMLInputElement>) {
        console.log("changing");
        if (e.currentTarget.name === "email") {
            setEmailAddress(e.currentTarget.value);
        }
        if (e.currentTarget.name === "phone") {
            setPhoneNumber(e.currentTarget.value);
        }
    }

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        if (!phoneNumber || !emailAddress) {
            return setError(true);
        }
        step(e, `${e.currentTarget.name}`);
        updateEmailAndPhone(e, emailAddress, phoneNumber);
    }

    return (
        <div className="registration-step">
            <h2>How can we contact you, {firstName}?</h2>
            <input
                ref={emailRef}
                name="email"
                type="text"
                value={emailAddress}
                onChange={handleChange}
            ></input>
            <input
                ref={phoneRef}
                name="phone"
                type="text"
                value={phoneNumber}
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
