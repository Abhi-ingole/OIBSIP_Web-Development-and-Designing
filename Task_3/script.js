// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    const convertBtn = document.getElementById('convertBtn');

    convertBtn.addEventListener('click', function() {
        // 1. Get DOM elements
        const inputElement = document.getElementById('temperatureInput');
        const fromUnit = document.getElementById('fromUnit').value;
        const toUnit = document.getElementById('toUnit').value;
        const resultDisplay = document.getElementById('resultDisplay');
        const errorMsg = document.getElementById('errorMessage');

        // 2. Validate Input
        const inputValue = inputElement.value.trim();

        if (inputValue === '' || isNaN(inputValue)) {
            errorMsg.style.display = 'block';
            inputElement.style.borderColor = '#ff4d4d'; // Red border for error
            resultDisplay.innerText = '--';
            return;
        } else {
            errorMsg.style.display = 'none';
            inputElement.style.borderColor = '#ddd'; // Reset border
        }

        // 3. Convert input to number
        const temp = parseFloat(inputValue);
        let convertedTemp;
        let unitSymbol;

        // 4. Conversion Logic
        // Strategy: Convert From -> Celsius -> To
        let tempInCelsius;

        // Convert Input to Celsius
        if (fromUnit === 'C') {
            tempInCelsius = temp;
        } else if (fromUnit === 'F') {
            tempInCelsius = (temp - 32) * (5 / 9);
        } else if (fromUnit === 'K') {
            tempInCelsius = temp - 273.15;
        }

        // Convert Celsius to Target
        if (toUnit === 'C') {
            convertedTemp = tempInCelsius;
            unitSymbol = '°C';
        } else if (toUnit === 'F') {
            convertedTemp = (tempInCelsius * (9 / 5)) + 32;
            unitSymbol = '°F';
        } else if (toUnit === 'K') {
            convertedTemp = tempInCelsius + 273.15;
            unitSymbol = 'K';
        }

        // 5. Update Display (Round to 2 decimal places)
        resultDisplay.innerText = `${convertedTemp.toFixed(2)} ${unitSymbol}`;
    });
});