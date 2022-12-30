import { useState, useEffect } from "react"
import { Calculator } from "../models/Calculator"

export const useCalculator = () => {
  const [calculator, setCalculator] = useState<Calculator>({
    firstNumber: '',
    secondNumber: '',
    operator: null,
    total: 0,
    state: 1
  })
  useEffect(() => {
    if (calculator.state === 2 && calculator.secondNumber !== '') {
      calculateTotal()
    }
  }, [calculator.operator])
  const setOperation = (operation: Calculator['operator']) => {
    if (calculator.state === 1) {
      setCalculator({
        ...calculator,
        operator: operation,
        state: 2
      })
    } else if (calculator.state === 2) {
      if (operation === calculator.operator) {
        calculateTotal()
      } else {
        setCalculator({
          ...calculator,
          operator: operation
        })
      }
    } else {
      clearCalculator() 
    }
  }
  const setState = (state: Calculator['state']) => {
    // set current of 3 states
  }
  const addDigit = (digit: string) => {
    if (calculator.state !== 3) {
      if (calculator.operator === null) {
        setCalculator({
          ...calculator,
          firstNumber: calculator.firstNumber.concat(digit),
        })
      } else {
        setCalculator({
          ...calculator,
          secondNumber: calculator.secondNumber.concat(digit)
        })
      }
    } else {
      setCalculator({
        ...calculator,
        firstNumber: digit,
        state: 1,
        operator: null,
        secondNumber: ''
      })
    }
  }
  const calculateTotal = () => {
    switch(calculator.operator) {
      case 'sum':
        setCalculator({
          ...calculator,
          total: parseInt(calculator.firstNumber) + parseInt(calculator.secondNumber),
          state: 3
        })
        break;
      case 'subtract':
        setCalculator({
          ...calculator,
          total: parseInt(calculator.firstNumber) - parseInt(calculator.secondNumber),
          state: 3
        })
        break;
      case 'multiplication':
        setCalculator({
          ...calculator,
          total: parseInt(calculator.firstNumber) * parseInt(calculator.secondNumber),
          state: 3
        })
        break;
      case 'division':
        setCalculator({
          ...calculator,
          total: parseInt(calculator.firstNumber) / parseInt(calculator.secondNumber),
          state: 3
        })
        break;
    }
  }

  const clearCalculator = () => {
    setCalculator({
      firstNumber: '',
      secondNumber: '',
      operator: null,
      total: 0,
      state: 1
    })
  }
  return {
    calculator,
    setOperation,
    addDigit,
    calculateTotal,
    setState,
    clearCalculator
  }
}