import Calculator from "./Calculator.js"

const calculator = new Calculator()
calculator.clearDisplay()

document.addEventListener('click', (e)=>{
    if(e.target.matches('[data-input]')){
        const value = e.target.textContent
        calculator.addNumber(value)
    }
    if(e.target.matches('[data-operation]')){
        console.log('oper');
    }
    if(e.target.matches('[data-evaluate]')){
        console.log('eval');
    }
    if(e.target.matches('[data-delete]')){
        calculator.deleteNumber()
    }
    if(e.target.matches('[data-clear]')){
        calculator.clearDisplay()
    }
})

 