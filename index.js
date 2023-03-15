const salary = (wage, hours, days) => {
    return Math.round(wage * hours * days)
}

const taxed = (salary, taxPercent) => {
    return Math.round((salary * (100 - taxPercent)) / 100)
}

const wage = 350
const hours = 4
const days = 20
const beforeTax = salary(wage, hours, days)
const afterTax = taxed(beforeTax, 15)

document.body.innerHTML = `<p>Wage: ${wage} Kč</p><p>Hours: ${hours}</p><p>Days: ${days}</p><p>Before taxation: ${beforeTax} Kč</p><p>After taxation: ${afterTax} Kč</p>`




const calculate = (number1, operation, number2) => {
    if (operation === '+') {
        return number1 + number2
    }
    if (operation === '-') {
        return number1 - number2
    }
    if (operation === '*') {
        return number1 * number2
    }
    if (operation === '/') {
        return number1 / number2
    }
}



