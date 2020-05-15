import React, { Fragment, useState } from 'react'
import BMICalculator from './BMICalculator'

const BMI = () => {
    const [bmiValue, setBmiValue] = useState(0);

    const getBmiClass = bmi => {
        if (bmi >= 1 && bmi < 18.5) return "Underweight";
        if (bmi >= 18.5 && bmi < 24.9) return "Normal";
        if (bmi >= 24.9 && bmi < 29.9) return "Overweight";
        if (bmi >= 30) return "Obese";
    };

    const bmiCategory = getBmiClass(bmiValue);
    let bmiClass = "";
    if (bmiValue > 0 && bmiCategory) {
        bmiClass = bmiCategory.toLowerCase();
    };

    const bmiBackgroundColor = bmi => {
        if (bmi >= 1 && bmi < 18.5) return "#FED88B";
        if (bmi >= 18.5 && bmi < 24.9) return "#80ff80";
        if (bmi >= 24.9 && bmi < 29.9) return "#FF7F50";
        if (bmi >= 30) return "#FF5411";
    };

    return (
        <Fragment>
            <div className="calculator" style={{ backgroundColor: bmiBackgroundColor(bmiValue) }}>
                <h3>Body Mass Index Calculator</h3>
                <div className="bmi-result-container">
                    <div className="bmi-result">
                        <div className="bmi-result-number">
                            Body Mass Index (BMI) = {bmiValue}
                        </div>
                        <div className={bmiClass}>
                            {bmiCategory}
                        </div>
                    </div>
                </div>
                <BMICalculator getBmiValue={setBmiValue} />
            </div>
        </Fragment >
    )
}

export default BMI
