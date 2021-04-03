import plus from "../../icons/plus.svg";
import minus from "../../icons/minus.svg";
import "./SessionLength.css"
function SessionLength({sessionLength, setSessionLength, setClockCount, isRunning}) {
    const increase = () => {
        setSessionLength(prevSessionLength => prevSessionLength + 1);
        setClockCount(sessionLength * 60 + 60);
        
        
    }
    const decrease = () => {
        if(sessionLength === 0) return
        setSessionLength(sessionLength - 1);
        setClockCount(sessionLength * 60 - 60);
        
    }
    return (
        <div className="SessionLength">
            <h3 className="SessionLengthTitle">Session Length</h3>
            <div className="SessionLengthActions">
                
                <button className="Decrease" onClick={decrease} disabled={isRunning}><img src={minus} alt=""/></button>
                
                <span className="SessionTimeCount">{sessionLength}</span>
                
                <button className="Increase" onClick={increase} disabled={isRunning}><img src={plus} alt=""/></button>
            </div>
        </div>
    )
}

export default SessionLength
