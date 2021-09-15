import React, { useRef, useState } from "react";

import "./App.css";

interface NameProps {
    firstName: string;
    email: string;
    phone: string;
    updateEmailAndPhone: (
        e: React.MouseEvent,
        email: string,
        phone: string
    ) => void;
}

export const EmailAndPhone: React.FC<NameProps> = ({
    updateEmailAndPhone,
    firstName,
    email,
    phone,
}) => {
    const [emailAddress, setEmailAddress] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");

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

    function handleClick(e: React.MouseEvent) {
        console.log(emailAddress, phoneNumber);
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
            <button onClick={handleClick}>Next</button>
        </div>
    );
};
