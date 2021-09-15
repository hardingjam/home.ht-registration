import React from "react";

interface ProgressProps {
    percentage: number;
}

export const ProgressBar: React.FC<ProgressProps> = ({ percentage }) => {
    const style = {
        width: `${percentage}%`,
    };

    return (
        <div id="prog-bar" className="progress">
            <div className="progress-bar" style={style} />
        </div>
    );
};
