import { ACTIONS } from '../computation/Computation';
import './digit.css';

const Digit = ( {dispatch, digit} ) => {
  return (
    <button 
        onClick={ () => dispatch( {type: ACTIONS.ADD_DIGIT, payload: {digit} }) }
    >
        {digit}
    </button>
  )
}

export default Digit