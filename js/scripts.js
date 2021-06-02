import Calculator from "./Calculator.js"

const NUMBER_FORMATTER = new Intl.NumberFormat("en", {maximumFractionDigits: 20})

const calculator = new Calculator()
calculator.clearDisplay()

document.addEventListener('click', (e)=>{
    if(e.target.matches('[data-input]')){
        const value = e.target.textContent
        calculator.addNumber(value)
    }
    if(e.target.matches('[data-operation]')){
        const oper = e.target.textContent
        calculator.defineOperation(oper)
    }
    if(e.target.matches('[data-evaluate]')){
        calculator.evaluate()
    }
    if(e.target.matches('[data-delete]')){
        calculator.deleteNumber()
    }
    if(e.target.matches('[data-clear]')){
        calculator.clearDisplay()
    }
})

 