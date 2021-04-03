import {useState, useEffect, useRef} from 'react';
import Timer from '../Timer/Timer';
import SessionLength from '../SessionLength/SessionLength';
import BreakLength from '../BreakLength/BreakLength';

import play from '../../icons/play.svg';
import pause from '../../icons/pause.svg';
import refresh from '../../icons/refresh.svg';
import audio1 from '../../audio/audio1.mp3'
import "./Clock.css";
function Clock() {
    const [breakLength, setBreakLength] = useState(5);
    const [sessionLength, setSessionLength] = useState(25);
    const [clockCount, setClockCount] = useState(25 * 60);
    const [type, setType] = useState("Session");

    let interval = useRef();
    const tone = useRef();
    
    
    const [isRunning, setIsRunning] = useState(false);
    const [tenLeft, setTenLeft] = useState(false);

    const playClock = () => {
        setIsRunning(true);
        
    }
    const pauseClock = () => {
        setIsRunning(false);
        
    }
    const reset = () => {
        setIsRunning(false);
        setClockCount(sessionLength * 60);
        setType("Session");
    }

    useEffect(() => {
        if(isRunning){
            interval.current = setInterval(() => {
                if(clockCount === 11){
                    setTenLeft(true);
                }
                if(clockCount === 1){
                    tone.current.play();
                }
                if(clockCount === 0){
                    setTenLeft(false);
                    setType(type => type === "Session" ? "Break": "Session");
                    setClockCount(type === "Session" ? breakLength * 60 : sessionLength * 60);
                    
                }else{
                    setClockCount(prevCount => prevCount - 1);
                }
            },1000);
        }else{
            clearInterval(interval.current);
        }
        return () => clearInterval(interval.current);
    }, [isRunning, clockCount, breakLength, sessionLength, type, tenLeft]);
    return (
       <section className="Clock">
           <div className="container">
               <Timer clockCount={clockCount} type={type} tenLeft={tenLeft}/>
               <audio ref={tone}>
                   <source src={audio1} type="audio/mpeg"/>
               </audio>
               <div className="ClockSettings">
                   <SessionLength sessionLength={sessionLength} setSessionLength={setSessionLength} setClockCount={setClockCount} isRunning={isRunning}/>
                   
                   <BreakLength breakLength={breakLength} setBreakLength={setBreakLength} isRunning={isRunning}/>
               </div>
               <div className="ClockControls">
                   {isRunning ? <button onClick={pauseClock} className="Pause"><img src={pause} alt=""/></button> : <button onClick={playClock} className="Play"><img src={play} alt=""/></button>}
                   
                   
                   <button className="Reset" onClick={reset}><img src={refresh} alt=""/></button>
               </div>
           </div>
       </section>
    )
}

export default Clock
