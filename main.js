//1 inch = 2,54 cm
// 1 ft = 30,48

const resultText = document.querySelector('.result')
const button = document.querySelector('#convert')
const inputInch = document.querySelector('#inch')
const inputFt = document.querySelector('#feet')

const changeText = (text = '', isItNumber=true) => {
    resultText.style.display = 'block' 
    isItNumber === true? resultText.textContent = `${text} cm` : resultText.textContent = text
    
}

const calculate = (inch, ft) => {
    const inchResult = parseFloat(inch) * 2.54;
    const ftResult = parseFloat(ft) * 30.48
    const sum = inchResult + ftResult

    return sum
}

button.addEventListener('click', ()=>{
    
    const sum = calculate(inputInch.value, inputFt.value)
    if(typeof sum !== 'number' || isNaN(sum) ) changeText('Please enter a valid number!', false) 
    else changeText(sum)
} )