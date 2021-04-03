import './BreakLength.css';

import plus from "../../icons/plus.svg";
import minus from "../../icons/minus.svg";
function BreakLength({breakLength, setBreakLength, isRunning}) {
    const increase = () => setBreakLength(prevBreakLength => prevBreakLength + 1);
    const decrease = () => setBreakLength(prevBreakLength => prevBreakLength - 1);
    return (
        <div className="BreakLength">
            <h3 className="BreakLengthTitle">Break Length</h3>
            <div className="BreakLengthActions">
                <button className="Decrease" disabled={isRunning} onClick={decrease}><img src={minus} alt=""/></button>
                <span className="BreakTimeCount">{breakLength}</span>
                <button className="Increase" disabled={isRunning} onClick={increase}><img src={plus} alt=""/></button>
            </div>
        </div>
    )
}

export default BreakLength
