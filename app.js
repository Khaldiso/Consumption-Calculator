const fuelTypes = ["Diesel", "Gasoline", "LPG", "NG", "Light Fuel Oil", "Heavy Fuel Oil", "Base Oil", "Used Oil"];

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("fuel-calculator-form");
    const resultContainer = document.getElementById("result");
    
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const fuelType = document.getElementById("fuel-type").value;
        const fuelAmount = parseFloat(document.getElementById("fuel-amount").value);
        const unit = document.getElementById("unit").value;
        const workingDays = document.querySelector('input[name="working-days"]:checked').value;

        if (isNaN(fuelAmount) || fuelAmount <= 0) {
            alert("Please enter a valid fuel amount.");
            return;
        }

        const calculator = new Calculator();
        const consumption = calculator.calculateConsumption(fuelType, fuelAmount, unit, workingDays);
        
        resultContainer.innerHTML = `Total Fuel Consumption: ${consumption.toFixed(2)} ${unit}`;
    });

    populateFuelTypes();
});

function populateFuelTypes() {
    const fuelTypeSelect = document.getElementById("fuel-type");
    fuelTypes.forEach(type => {
        const option = document.createElement("option");
        option.value = type;
        option.textContent = type;
        fuelTypeSelect.appendChild(option);
    });
}