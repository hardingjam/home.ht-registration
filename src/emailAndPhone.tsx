import React, { useRef, useState } from "react";

import "./App.css";

interface NameProps {
    firstName: string;
    email: string;
    phone: string;
    progress: number;
    updateEmailAndPhone: (
        e:
            | React.MouseEvent<HTMLButtonElement>
            | React.KeyboardEvent<HTMLDivElement>,
        email: string,
        phone: string
    ) => void;
    step: (
        e:
            | React.MouseEvent<HTMLButtonElement>
            | React.KeyboardEvent<HTMLDivElement>,
        direction: string
    ) => void;
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

    function submit(
        e:
            | React.KeyboardEvent<HTMLDivElement>
            | React.MouseEvent<HTMLButtonElement>,
        emailAddress: string,
        phoneNumber: string,
        direction: string
    ) {
        if (direction === "next") {
            if (!phoneNumber || !emailAddress) {
                return setError(true);
            }
            if (!validateEmail(emailAddress)) {
                return setBadEmail(true);
            }
            updateEmailAndPhone(e, emailAddress, phoneNumber);
            step(e, direction);
        } else if (direction === "back") {
            step(e, direction);
        }
    }

    function handleKeyPress(e: React.KeyboardEvent<HTMLDivElement>) {
        if (e.code === "Enter") {
            submit(e, emailAddress, phoneNumber, "next");
        }
    }

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        submit(e, emailAddress, phoneNumber, `${e.currentTarget.name}`);
    }

    return (
        <div className="registration-step" onKeyPress={handleKeyPress}>
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
