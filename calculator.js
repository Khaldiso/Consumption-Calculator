class Calculator {
    constructor(fuelType, unit, workingDays) {
        this.fuelType = fuelType;
        this.unit = unit;
        this.workingDays = workingDays;
        this.conversionFactors = {
            'liters': 1,
            'tonne': 1000,
            'BTU': 0.000293071
        };
    }

    calculateConsumption(invoiceData) {
        const { quantity, unit } = invoiceData;
        const convertedQuantity = this.convertToLiters(quantity, unit);
        const dailyConsumption = this.calculateDailyConsumption(convertedQuantity);
        return dailyConsumption;
    }

    convertToLiters(quantity, unit) {
        if (unit === 'liters') {
            return quantity;
        } else if (unit === 'tonne') {
            return quantity * this.conversionFactors['tonne'];
        } else if (unit === 'BTU') {
            return quantity / this.conversionFactors['BTU'];
        }
        throw new Error('Invalid unit');
    }

    calculateDailyConsumption(totalLiters) {
        const daysInMonth = this.workingDays === 5 ? 20 : 30;
        return totalLiters / daysInMonth;
    }
}

export default Calculator;