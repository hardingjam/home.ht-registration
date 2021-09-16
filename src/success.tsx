import React from "react";

import "./App.css";

interface SuccessProps {
    firstName: string;
}

export const Success: React.FC<SuccessProps> = ({ firstName }) => {
    return (
        <div className="registration-step">
            <h2>Thanks, {firstName}!</h2>
            <h2>We'll be in touch very soon.</h2>
            <h2>
                In the meantime, here's{" "}
                <a href={"https://www.home.ht/homes/listings/map"}>
                    what you can expect
                </a>{" "}
                from Home...
            </h2>
        </div>
    );
};
