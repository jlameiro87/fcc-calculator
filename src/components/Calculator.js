import React, { useState } from 'react';
import Buttons from './Buttons';
import Formula from './Formula';
import Result from './Result';

const Calculator = () => {
  const [formula, setFormula] = useState(['0']);
  const [result, setResult] = useState(0);

  const handleAC = () => {
    setFormula(['0']);
    setResult(0);
  }

  const handleNumber = (value) => {
    const newFormula = [...formula, value];
    if (newFormula[0] === '0' && newFormula[1] !== '.') newFormula.splice(0, 1);
    setFormula(newFormula);
  }

  const handleDecimal = (value) => {
    // Check if a decimal was already added
    if (formula.includes('.')) return;
    const newFormula = [...formula, value];
    setFormula(newFormula);
  }

  const isOperator = (value) => {
    const operators = ['/', '*', '-', '+']
    return operators.includes(value);
  }

  const handleOperator = (value) => {
    let newFormula;
    // Check if a result was already calculated
    if (result !== 0) {
      newFormula = [`${result}`];
    } else {
      newFormula = [...formula];
    }
    // Check if the last value entered was an operator
    const lastPos = newFormula.length - 1;
    if (isOperator(newFormula[lastPos])) newFormula.splice(lastPos, 1, value);
    else newFormula.push(value);
    
    setFormula(newFormula);
  }

  const handleEqualsOperator = () => {
    // eslint-disable-next-line no-eval
    let res = eval(formula.join(''));
    setResult(res);
  }

  const handleButtonClick = (value) => {
    switch (value) {
      case 'AC':
        handleAC();
        break;
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        handleNumber(value);
        break;
      case '.':
        handleDecimal(value);
        break;
      case '/':
      case '*':
      case '-':
      case '+':
        handleOperator(value);
        break;
      case '=':
        handleEqualsOperator();
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <Formula formula={formula} />
      <Result result={result} />
      <Buttons handleButtonClick={handleButtonClick} />
    </div>
  )
}

export default Calculator;