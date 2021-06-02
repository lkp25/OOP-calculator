import Calculator from "./Calculator.js"



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

const allBtns =  [...document.querySelectorAll('button')]
// allBtns.forEach(btn => console.log(btn.textContent))
 document.addEventListener('keydown', (e)=>{
     
     switch (e.key) {
         case '=':
             allBtns.find(btn => btn.textContent === '=').click()
             break;
         case 'Delete':
             allBtns.find(btn => btn.textContent === 'DEL').click()
             break;
         case 'c':
             allBtns.find(btn => btn.textContent === 'AC').click()
             break;
         case '/':
             allBtns.find(btn => btn.textContent === '/').click()
             break;
         case '*':
             allBtns.find(btn => btn.textContent === '*').click()
             break;
         case '-':
             allBtns.find(btn => btn.textContent === '-').click()
             break;
         case '+':
             allBtns.find(btn => btn.textContent === '+').click()
             break;
         case '1':
             allBtns.find(btn => btn.textContent === '1').click()
             break;
         case '2':
             allBtns.find(btn => btn.textContent === '2').click()
             break;
         case '3':
             allBtns.find(btn => btn.textContent === '3').click()
             break;
         case '4':
             allBtns.find(btn => btn.textContent === '4').click()
             break;
         case '5':
             allBtns.find(btn => btn.textContent === '5').click()
             break;
         case '6':
             allBtns.find(btn => btn.textContent === '6').click()
             break;
         case '7':
             allBtns.find(btn => btn.textContent === '7').click()
             break;
         case '8':
             allBtns.find(btn => btn.textContent === '8').click()
             break;
         case '9':
             allBtns.find(btn => btn.textContent === '9').click()
             break;
         case '0':
             allBtns.find(btn => btn.textContent === '0').click()
             break;
         case '.':
             allBtns.find(btn => btn.textContent === '.').click()
             break;
     
         default:
             break;
     }
 })