import React, { useRef, useState } from "react";

import "./App.css";

interface NameProps {
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
    email,
    phone,
}) => {
    const [last, setEmail] = useState<string>("");
    const [first, setPhone] = useState<string>("");

    const emailRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);

    function handleChange(e: React.FormEvent<HTMLInputElement>) {
        if (e.currentTarget.name === "firstName") {
            setEmail(e.currentTarget.value);
        }
        if (e.currentTarget.name === "lastName") {
            setPhone(e.currentTarget.value);
        }
    }

    function handleClick(e: React.MouseEvent) {
        console.log(first, last);
        updateEmailAndPhone(e, first, last);
    }

    return (
        <div className="registration-step">
            <h2>Step two in registration!</h2>
            <input
                ref={emailRef}
                name="email"
                type="text"
                value={email}
                onChange={handleChange}
            ></input>
            <input
                ref={phoneRef}
                name="phone"
                type="text"
                value={phone}
                onChange={handleChange}
            ></input>
            <button onClick={handleClick}>Next</button>
        </div>
    );
};
