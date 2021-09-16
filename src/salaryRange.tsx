import React, { useState, useEffect } from "react";

import "./App.css";

interface SalaryProps {
    progress: number;
    salary: string;
    updateSalary: (
        e:
            | React.MouseEvent<HTMLButtonElement>
            | React.KeyboardEvent<HTMLDivElement>,
        salary: string
    ) => void;
    step: (
        e:
            | React.MouseEvent<HTMLButtonElement>
            | React.KeyboardEvent<HTMLDivElement>,
        direction: string
    ) => void;
}

export const SalaryRange: React.FC<SalaryProps> = ({
    progress,
    salary,
    updateSalary,
    step,
}) => {
    const [salaryRange, setSalaryRange] = useState<string>(salary);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        console.log(salaryRange);
    }, [salaryRange]);

    function submit(
        e:
            | React.KeyboardEvent<HTMLDivElement>
            | React.MouseEvent<HTMLButtonElement>,
        salaryRange: string,
        direction: string
    ) {
        if (!salaryRange) {
            return setError(true); // add the error message
        }
        updateSalary(e, salaryRange);
        step(e, direction);
    }

    function handleKeyPress(e: React.KeyboardEvent<HTMLDivElement>) {
        if (e.code === "Enter") {
            submit(e, salaryRange, "next");
        }
    }

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        submit(e, salaryRange, `${e.currentTarget.name}`);
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSalaryRange(e.currentTarget.value);
    }

    return (
        <div className="registration-step" onKeyPress={handleKeyPress}>
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
            {error && (
                <div className="error">Please select a salary range.</div>
            )}
        </div>
    );
};
