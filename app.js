document.getElementById('btn').addEventListener('click', e => {
  const select = document.getElementById('select'),
    input = document.getElementById('input')
 
  if(select.value === 'binaryToDecimal') {
    if(validateBinary(input.value) ) {
      const numberConvert = binaryToDecimal(input.value)
      printResult(numberConvert)
      
    }else{
      printError('Por favor introduce un numero binario')
    }
    
  }
  else if(select.value === 'decimalToBynary') {
    if(Number(input.value)){ 
      const numberConvert = decimalToBinary(input.value)
      printResult(numberConvert)
    }else{
      printError('Por favor introduce un numero decimal valido')
    }
  }

  input.value = ''

})

const binaryToDecimal = number => {
  let arrayNumbers = number.split('').map(num => Number(num)).reverse(),
  indexsNumbers = []
  

  const getValuesOfIndex = arrayNumbers.filter( (elem , index) => {
    if( elem !== 0 ) {
      indexsNumbers.push(index)
      return true
    }   
  })

  const powOfIndexs = indexsNumbers.map(num => Math.pow(2,num))
  const sumIndexPow = powOfIndexs.reduce((total,num) => total + num)


  return  sumIndexPow
}

const decimalToBinary = number => {
  let num = Number(number)
  let arrBinarys = []
  
  for(let i = num; i > 0 ; i--){
    
    if( Math.floor(num) === 0  ) {
      break
    }
    else{
      arrBinarys.push(Math.floor(num % 2))
      num =Math.floor( num / 2 )
    }
  }
  
  return arrBinarys.reverse().join('')
}



const printResult = number => {
  const mensaje = document.querySelector('.mensaje')

  const result = document.createElement('p')
  result.classList.add('result')
  result.textContent = `${number}`

  mensaje.appendChild(result)

  setTimeout(() => {
    document.querySelector('.result').remove()
  }, 5000);

} 

const printError = err => {
  const mensaje = document.querySelector('.mensaje')

  const error = document.createElement('p')
  error.classList.add('error')
  error.textContent = err

  mensaje.appendChild(error)

  setTimeout(() => {
    document.querySelector('.error').remove()
  }, 2000);
  
}

const validateBinary = number => {
  let regex = /^[0-1]{1,}$/

  return regex.test(number)
}

