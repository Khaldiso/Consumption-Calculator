export function validateInput(value, type) {
    if (type === 'number') {
        return !isNaN(value) && value > 0;
    }
    return true;
}

export function formatResult(value, unit) {
    return `${value.toFixed(2)} ${unit}`;
}

export function calculateWorkingDays(weeks, daysPerWeek) {
    return weeks * daysPerWeek;
}