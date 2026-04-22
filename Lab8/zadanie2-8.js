// --- ZADANIE 2 ---
class ComplexNumber {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }

    wypisz() {
        const sign = this.imaginary >= 0 ? '+' : '-';
        return `${this.real} ${sign} ${Math.abs(this.imaginary)}i`;
    }

    module() {
        return Math.sqrt(this.real ** 2 + this.imaginary ** 2);
    }
}

// --- ZADANIE 3 ---
const generateComplexArray = (n) => {
    const arr = [];
    for (let i = 0; i < n; i++) {
        const randomReal = Math.floor(Math.random() * 21) - 10;
        const randomImaginary = Math.floor(Math.random() * 21) - 10;
        arr.push(new ComplexNumber(randomReal, randomImaginary));
    }
    return arr;
};

const testArray = generateComplexArray(5);

console.log("--- WYGENEROWANA TABLICA ---");
testArray.forEach(c => console.log(`${c.wypisz()} (moduł: ${c.module().toFixed(2)})`));


// --- ZADANIE 4 ---
const getPositiveParts = (arr) => arr.filter(c => c.real > 0 && c.imaginary > 0);

console.log("\n--- ZADANIE 4 (Tylko dodatnie części) ---");
const positiveArray = getPositiveParts(testArray);
positiveArray.forEach(c => console.log(c.wypisz()));


// --- ZADANIE 5 ---
const swapRealAndImaginary = (arr) => arr.map(c => new ComplexNumber(c.imaginary, c.real));

console.log("\n--- ZADANIE 5 (Zamienione części) ---");
const swappedArray = swapRealAndImaginary(testArray);
swappedArray.forEach(c => console.log(c.wypisz()));


// --- ZADANIE 6  ---
const sumOfModules = (arr) => arr.reduce((sum, c) => sum + c.module(), 0);

console.log("\n--- ZADANIE 6 (Suma modułów) ---");
console.log(sumOfModules(testArray).toFixed(2));


// --- ZADANIE 7 ---
const getMinModuleValue = (arr) => arr.reduce((min, c) => Math.min(min, c.module()), arr[0].module());

console.log("\n--- ZADANIE 7 (Najmniejszy moduł) ---");
console.log(getMinModuleValue(testArray).toFixed(2));


// --- ZADANIE 8 ---
const getMaxModuleObject = (arr) => arr.reduce((maxObj, c) => (c.module() > maxObj.module() ? c : maxObj), arr[0]);

console.log("\n--- ZADANIE 8 (Liczba zespolona z największym modułem) ---");
const maxComplex = getMaxModuleObject(testArray);
console.log(maxComplex.wypisz());