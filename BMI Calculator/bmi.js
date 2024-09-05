function calculate() {
    var age = parseInt(document.getElementById("age").value);
    var height = parseFloat(document.getElementById("height").value);
    var weight = parseFloat(document.getElementById("weight").value);
    var units = document.getElementById("units").value;
    
    if (isNaN(age) || isNaN(height) || isNaN(weight) || age <= 0 || height <= 0 || weight <= 0) {
        alert('Please enter valid numbers for age, height, and weight');
        return;
    }  
    
    if (units === "imperial") {
        height *= 2.54; // convert height to cm
        weight *= 0.453592; // convert weight to kg
    }

    var bmi = weight / Math.pow((height / 100), 2);
    var bmiCategory;
    if (bmi < 18.5) {
        bmiCategory = "Underweight";
        setNeedlePosition(mapRange(bmi, 0, 18.5, 30, 90)); 
    } else if (bmi >= 18.5 && bmi < 25) {
        bmiCategory = "Normal weight";
        setNeedlePosition(mapRange(bmi, 18.5, 25, 90, 150)); 
    } else if (bmi >= 25 && bmi < 30) {
        bmiCategory = "Overweight";
        setNeedlePosition(mapRange(bmi, 25, 30, 150, 210)); 
    } else {
        bmiCategory = "Obese";
        setNeedlePosition(mapRange(bmi, 30, 50, 210, 270)); 
    }

    document.getElementById("result").innerHTML = "Your BMI is: " + bmi.toFixed(2) + ". This falls into the category of: " + bmiCategory;
}

function setNeedlePosition(angle) {
    var needle = document.getElementById("needle");
    needle.style.transform = "rotate(" + angle + "deg)";
}

// Function to map a range of values to another range
function mapRange(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}
