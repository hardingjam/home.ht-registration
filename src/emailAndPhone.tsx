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
    const emailRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const [error, setError] = useState<boolean>(false);
    const [badEmail, setBadEmail] = useState<boolean>(false);

    function validateEmail(email: string) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

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
        if (!validateEmail(emailAddress)) {
            return setBadEmail(true);
        }
        step(e, `${e.currentTarget.name}`);
        updateEmailAndPhone(e, emailAddress, phoneNumber);
    }

    return (
        <div className="registration-step">
            <h2>How can we contact you, {firstName}?</h2>
            <input
                className="text-input"
                placeholder="Email"
                ref={emailRef}
                name="email"
                type="text"
                value={emailAddress}
                onChange={handleChange}
            ></input>
            <input
                className="text-input"
                placeholder="Phone"
                ref={phoneRef}
                name="phone"
                type="text"
                value={phoneNumber}
                onChange={handleChange}
            ></input>
            <div className="step-buttons">
                <button name="back" onClick={handleClick}>
                    Back
                </button>

                <button name="next" onClick={handleClick}>
                    Next
                </button>
            </div>
            {error && <div className="error">Please complete all fields.</div>}
            {badEmail && (
                <div className="error">
                    That doesn't look like a valid email address.
                </div>
            )}
        </div>
    );
};
