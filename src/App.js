import './App.css';
import { useReducer } from 'react';
import DigitButton from './DigitButton';
import OperationButton from './OperationButton';

export const ACTIONS = { 
  ADD_DIGIT: 'add-digit',
  CLEAR: 'clear', 
  DELETE_DIGIT: 'delete-digit',
  CHOOSE_OPERATION: 'choose-operation',
  EVALUATE: 'evaluate'
}

function reducer(state, {type, payload}) { 
  switch(type) { 
    case ACTIONS.ADD_DIGIT: 
      if (state.overwrite) { 
        return { 
          ...state, 
          currentOperand: payload.digit,
          overwrite: false
        }
      }

      if (payload.digit ==='0' && state.currentOperand ==='0') {
        return state
      }
      if (payload.digit ==='.' && state.currentOperand.includes('.')) {
        return state
      }
      return {
        ...state, 
        currentOperand: `${state.currentOperand || ''}${payload.digit}`
      }
    
    case ACTIONS.CLEAR: 
      return {}
    
    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
      return { 
        ...state, 
        overwrite: false,
        currentOperand: null
      }
      if (state.currentOperand == null) { 
        return state
      }
      if (state.currentOperand.length === 1) { 
        return { 
          ...state, 
          currentOperand: null
        }
      }

      return { 
        ...state, 
        currentOperand: state.currentOperand.slice(0, -1)
      }
    }
    case ACTIONS.EVALUATE:
      if (state.operation == null || 
          state.currentOperand == null ||
          state.previousOperand == null
        ) {
        return state
      }

      return {
        ...state,
        overwrite: true,
        previousOperand: null, 
        operation: null,
        currentOperand: evaluate(state)
      }

    case ACTIONS.CHOOSE_OPERATION: 
      if(state.currentOperand == null && state.previousOperand == null) { 
        return state
      }

      if(state.previousOperand == null) { 
        return { 
          ...state, 
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null
        }
      }

      return { 
        ...state,
        previousOperand: evaluate(state), 
        currentOperand: null, 
        operation: payload.operation
      }
  }
}

function evaluate ( {currentOperand, previousOperand, operation} ) { 
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);

  if(isNaN(prev) || isNaN(current)) { 
    return ''
  }
  // returning an empty string if either value is not a number 

  let computation = ''

  switch(operation) {
    case '+' :
      computation = prev + current 
      break
    case '-': 
      computation = prev - current 
      break 
    case '*': 
      computation = prev * current 
      break 
    case '/': 
      computation = prev / current
  }

  return computation.toString
}

const INTEGER_FORMATTER =  new Intl.NumberFormat('en-us', {maximumFractionDigits: 0});

function formatOperand (operand) { 
  if (operand == null ) return

  const [integer, decimal] = operand.split('.');

  if (decimal == null) { 
    return INTEGER_FORMATTER.format(integer)
  }
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`
}

function App() {
  const [ { currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer, {} );

  return (
    <div className="App">
      <div className="output">
        <div className="previous-operand">{formatOperand(previousOperand)} {operation} </div>
        <div className="current-operand"> {formatOperand(currentOperand)} </div>
      </div>
      <button 
        onClick={() => dispatch( {type: ACTIONS.CLEAR} )} 
        className='wide-button'
      >
        AC
      </button>

      <button 
        onClick={ () => dispatch( {type: ACTIONS.DELETE_DIGIT} )}
      >
        DEL
      </button>

      <OperationButton operation='/' dispatch={dispatch} />
      <DigitButton digit='1' dispatch={dispatch} />
      <DigitButton digit='2' dispatch={dispatch} />
      <DigitButton digit='3' dispatch={dispatch} />
      <OperationButton operation='*' dispatch={dispatch} />
      <DigitButton digit='4' dispatch={dispatch} />
      <DigitButton digit='5' dispatch={dispatch} />
      <DigitButton digit='6' dispatch={dispatch} />
      <OperationButton operation='+' dispatch={dispatch} />
      <DigitButton digit='7' dispatch={dispatch} />
      <DigitButton digit='8' dispatch={dispatch} />
      <DigitButton digit='9' dispatch={dispatch} />
      <OperationButton operation='-' dispatch={dispatch} />
      <DigitButton digit='.' dispatch={dispatch} />
      <DigitButton digit='0' dispatch={dispatch} />
      <button 
         onClick={() => dispatch( {type: ACTIONS.EVALUATE} )} 
        className='wide-button'
      >
        =
      </button>
    </div>
  );
}

export default App;

// destructuring when passing in different variables into a state variable while using hooks. Also while passing in multiple arguments within the parameters  