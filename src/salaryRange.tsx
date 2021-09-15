import React, { useRef, useState } from "react";

import "./App.css";

interface SalaryProps {
    salaryRange: string;
}

export const SalaryRange: React.FC<SalaryProps> = ({ salaryRange }) => {
    return (
        <div className="registration-step">
            <input type="radio" value="0" name="salary" />0 - 1.000
            <input type="radio" value="1.000 - 2.000" name="salary" />
            1.000 - 2.000
            <input type="radio" value="2.000 - 3.000" name="salary" />
            2.000 - 3.000
            <input type="radio" value="3.000 - 4.000" name="salary" />
            3.000 - 4.000
            <input type="radio" value="Mehr als 4.000" name="salary" />
            Mehr als 4.000
        </div>
    );
};
