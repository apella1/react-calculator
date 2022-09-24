import { ACTIONS } from '../computation/Computation';
import './operations.css';

const Operation = ( { dispatch, operation} ) => {
  return (
    <button 
        onClick={ () => dispatch( {type: ACTIONS.CHOOSE_OPERATION, payload: {operation}} ) }
    >
        {operation}
    </button>
  )
}

export default Operation