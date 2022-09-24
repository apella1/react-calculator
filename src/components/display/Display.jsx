import { useReducer } from 'react';
import { reducer } from '../computation/Computation';
import './display.css';

const INTEGER_FORMATTER =  new Intl.NumberFormat('en-us', {maximumFractionDigits: 0});

  function formatOperand (operand) { 
    if (operand == null ) return

    const [integer, decimal] = operand.split('.');

    if (decimal == null) { 
      return INTEGER_FORMATTER.format(integer)
    }
    return `${INTEGER_FORMATTER.format(integer)}.${decimal}`
  }

const Display = () => {
  const [ { currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer, {} );
  return (
    <div className="output">
        <div className="previous-operand">{formatOperand(previousOperand)} {operation} </div>
        <div className="current-operand"> {formatOperand(currentOperand)} </div>
    </div>
  )
}

export default Display