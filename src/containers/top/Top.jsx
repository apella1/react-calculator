import './top.css';

const Top = () => {
  return (
    <div className='top-section'>
        <div className="top-left">
          <button>Shift</button>
          <button>Alpha</button>
          <button>X-1</button>
          <button>nCr</button>
        </div>

        <div className="top-middle">
            <button>A</button>
            <button>B</button>
            <button>Replay</button>
            <button>C</button>
            <button>D</button>
        </div>

        <div className="top-right">
          <button>Mode</button>
          <button>On</button>
          <button>Pol</button>
          <button>X3</button>
        </div>
    </div>
  )
}

export default Top