import Calculator from "./Calculator.js"

const calculator = new Calculator()

document.addEventListener('click', (e)=>{
    if(e.target.matches('[data-input]')){
        console.log('input');
    }
    if(e.target.matches('[data-operation]')){
        console.log('oper');
    }
    if(e.target.matches('[data-evaluate]')){
        console.log('eval');
    }
    if(e.target.matches('[data-delete]')){
        console.log('del');
    }
    if(e.target.matches('[data-clear]')){
        console.log('clea');
    }
})