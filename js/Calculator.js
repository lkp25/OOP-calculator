const NUMBER_FORMATTER = new Intl.NumberFormat("en", {maximumFractionDigits: 20})
NUMBER_FORMATTER.format()
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

        this.operation = null
        this.currentNumber = 0
        this.previousNumber = 0
       
    }
    addNumber(value){
        console.log(this.currentNumber)
        if(value === '.' && this.currentNumber?.length > 0){            
          const test = this.currentValDisplay.textContent.split('').find(char => char === '.')  
          if(test){
              return
          }
            
            
            
            
        }
        if(this.currentValDisplay.textContent === '0'){
            value === '.' ? 
            this.currentValDisplay.textContent = '0'
            :
            this.currentValDisplay.textContent = ''
        }
        const helper = this.currentValDisplay.textContent.split(',').join('')
        let result = helper + value

        this.currentValDisplay.textContent = result
        this.currentNumber = this.currentValDisplay.textContent
        this.currentValDisplay.dataset.value = result.split(',').join('')

        // this.currentValDisplay.textContent = this.formatToCommas(parseFloat(result))

        
    }
    defineOperation(oper){
        this.operation = oper
        // console.log(this.operation)

        this.previousNumber = this.currentNumber
        this.currentNumber = 0

        this.currentValDisplay.textContent = ''
        this.prevValDisplay.textContent = this.previousNumber
        this.operationDisplay.textContent = this.operation
    }

    deleteNumber(){
        const curr = this.currentValDisplay
       
        if(curr.textContent.length <= 1){
            curr.textContent = '0'
            return
        }
        curr.textContent = curr.textContent.substr(0, curr.textContent.length -1)
        this.formatToCommas(this.currentNumber)
        this.currentNumber = curr.textContent
    }
   evaluate(){
       const prev = parseFloat(this.previousNumber)
       const curr = parseFloat(this.currentValDisplay.dataset.value)
       const oper = this.operation
       let result
       
       switch (oper) {
           case '*':
               result = prev * curr
               break;
           case '+':
               result = prev + curr
               break;
           case '-':
               result = prev - curr
               break;
           case '/':
               if(curr === 0){
                   result = 0
               }else{
                   result = prev / curr
               }
               break;
       
           default:
               break;
       }
       this.prevValDisplay.textContent = `${this.currentNumber}  ${oper}  ${this.previousNumber}`
       this.currentNumber = result
       this.currentValDisplay.textContent = this.formatToCommas(this.currentNumber)
       this.operationDisplay.textContent = '='
   }
   formatToCommas(value){
       return NUMBER_FORMATTER.format(value)
   }
   formatToNumber(){

   }
}


