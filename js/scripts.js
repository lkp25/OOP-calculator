import Calculator from "./Calculator.js"

const calculator = new Calculator()

document.addEventListener('click', (e)=>{
    if(e.target.dataset.action.matches('clear')){
        console.log('dupa');
    }
})