import React, { useState, useEffect } from "react";

import "./App.css";

interface SalaryProps {
    progress: number;
    salary: string;
    updateSalary: (e: React.MouseEvent, salary: string) => void;
    step: (e: React.MouseEvent<HTMLButtonElement>, direction: string) => void;
}

export const SalaryRange: React.FC<SalaryProps> = ({
    progress,
    salary,
    updateSalary,
    step,
}) => {
    const [salaryRange, setSalaryRange] = useState<string>(salary);

    useEffect(() => {
        console.log(salaryRange);
    }, [salaryRange]);

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        step(e, `${e.currentTarget.name}`);
        updateSalary(e, salaryRange);
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSalaryRange(e.currentTarget.value);
    }

    return (
        <div className="registration-step">
            <h2>What is your approximate household income per month?</h2>
            <div className="radio-buttons">
                <div className="button-and-label">
                    <input
                        type="radio"
                        value="0 - 1.000"
                        name="salary"
                        checked={salaryRange === "0 - 1.000"}
                        onChange={handleChange}
                    />
                    0 - 1.000
                </div>
                <div className="button-and-label">
                    <input
                        type="radio"
                        value="1.000 - 2.000"
                        name="salary"
                        checked={salaryRange === "1.000 - 2.000"}
                        onChange={handleChange}
                    />
                    1.000 - 2.000
                </div>
                <div className="button-and-label">
                    <input
                        type="radio"
                        value="2.000 - 3.000"
                        name="salary"
                        checked={salaryRange === "2.000 - 3.000"}
                        onChange={handleChange}
                    />
                    2.000 - 3.000
                </div>
                <div className="button-and-label">
                    <input
                        type="radio"
                        value="3.000 - 4.000"
                        checked={salaryRange === "3.000 - 4.000"}
                        onChange={handleChange}
                        name="salary"
                    />
                    3.000 - 4.000
                </div>
                <div className="button-and-label">
                    <input
                        type="radio"
                        value="Mehr als 4.000"
                        checked={salaryRange === "Mehr als 4.000"}
                        onChange={handleChange}
                        name="salary"
                    />
                    More than 4.000
                </div>
            </div>
            <div className="step-buttons">
                <button name="back" onClick={handleClick}>
                    Back
                </button>

                <button name="next" onClick={handleClick}>
                    Next
                </button>
            </div>
        </div>
    );
};
