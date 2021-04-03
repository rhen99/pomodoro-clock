import "./Timer.css"
function Timer({clockCount, type, tenLeft}) {
    const convertTime = (count) => {
        const minutes = Math.floor(count / 60);
        const seconds = count % 60;

        return `${minutes < 10 ? '0'+minutes: minutes}:${seconds < 10 ? '0'+seconds : seconds}`;
    }
    return (
        <div className="Timer">
            <h2 className="TimerType">{type}</h2>
            <h1 className={tenLeft ? "TimerCount ten-seconds" : "TimerCount"}>{convertTime(clockCount)}</h1>
        </div>
    )
}

export default Timer
