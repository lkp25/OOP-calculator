export default class Calculator{
    constructor(previousNumber, currentNumber, operation){
        this.previousNumber = previousNumber
        this.currentNumber = currentNumber
        this.operation = operation
    }
    operationDisplay = document.querySelector('.operationType')
    prevValDisplay = document.querySelector('.previousValue')
    currentValDisplay = document.querySelector('.currentValue')
    
    clearDisplay(){
        this.operationDisplay.textContent = ''
        this.prevValDisplay.textContent = ''
        this.currentValDisplay.textContent = 0
        console.log('dupasd');
    }
    addNumber(value){
        if(this.currentValDisplay.textContent === '0'){
            this.currentValDisplay.textContent = ''
        }
        this.currentValDisplay.textContent += value
    }
    deleteNumber(){
        const curr = this.currentValDisplay
       
        if(curr.textContent.length <= 1){
            curr.textContent = '0'
            return
        }
        curr.textContent = curr.textContent.substr(0, curr.textContent.length -1)
    }
}


