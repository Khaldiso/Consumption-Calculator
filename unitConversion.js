export function litersToTonnes(liters, density) {
    return liters * density / 1000; // Assuming density is in kg/L
}

export function tonnesToLiters(tonnes, density) {
    return tonnes * 1000 / density; // Assuming density is in kg/L
}

export function litersToBTU(liters, energyContent) {
    return liters * energyContent; // Assuming energyContent is in BTU/L
}

export function BTUToLiters(BTU, energyContent) {
    return BTU / energyContent; // Assuming energyContent is in BTU/L
}

export function tonnesToBTU(tonnes, energyContent, density) {
    const liters = tonnesToLiters(tonnes, density);
    return litersToBTU(liters, energyContent);
}

export function BTUToTonnes(BTU, energyContent, density) {
    const liters = BTUToLiters(BTU, energyContent);
    return litersToTonnes(liters, density);
}