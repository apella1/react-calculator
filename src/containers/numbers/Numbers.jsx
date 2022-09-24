import { useReducer } from 'react';
import { Digit, Operation } from '../../components';
import { ACTIONS, reducer } from '../../components/computation/Computation';
import './numbers.css';

const Numbers = () => {
  const [ { currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer, {} );
  return (
    <div className='numbers-display'>
        <Digit digit='7' dispatch={dispatch}/>
        <Digit digit='8' dispatch={dispatch}/>
        <Digit digit='9' dispatch={dispatch}/>
        <button 
          onClick={ () => dispatch( {type: ACTIONS.DELETE_DIGIT} )}
        >
          DEL
        </button>
        <button 
          onClick={() => dispatch( {type: ACTIONS.CLEAR} )} 
        >
          AC
        </button>
        <Digit digit='4' dispatch={dispatch}/>
        <Digit digit='5' dispatch={dispatch}/>
        <Digit digit='6' dispatch={dispatch}/>
        <Operation  operation='X' dispatch={dispatch}/>
        <Operation  operation='/' dispatch={dispatch}/>
        <Digit digit='1' dispatch={dispatch}/>
        <Digit digit='2' dispatch={dispatch}/>
        <Digit digit='3' dispatch={dispatch}/>
        <Operation operation='+' dispatch={dispatch}/>
        <Operation  operation='-' dispatch={dispatch}/>
        <Digit digit='0' dispatch={dispatch}/>
        <Digit digit='.' dispatch={dispatch}/>
        <button>EXP</button>
        <button>ANS</button>
        <button 
          onClick={() => dispatch( {type: ACTIONS.EVALUATE} )} 
        >
          =
        </button>
    </div>
  )
}

export default Numbers