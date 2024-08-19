/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react"
/* eslint-disable react/prop-types */
function Button({ id, name, func, bkey }){
    return(<button id={id} className="up-down" onClick={func(bkey)}>{name}</button>)
}
const times =()=>{
   return(Date.now())
}
const timex = Date.now();
function Apps (){
    const [breakLength, setBreakLength] = useState('5');
    const [sessionLength, setSessionLength] = useState('25');
    const [counting, setCounting] =useState(0);
    const [switchh, setSwitchh] =useState(0);
    const [loops, setLoops] = useState(1);
    function handleDecrementB(bkey){
        return()=>{
            setCounting(0);
            if(breakLength == 1){
                setBreakLength(1)
            }else{
            setBreakLength((prev)=> Number(prev)-1)
            }
        }
    }
    function handleIncrementB(bkey){
        return()=>{
            setCounting(0);
            if(breakLength == 60){
               setBreakLength(60) 
            }else{
            setBreakLength((prev)=> Number(prev)+1)
            }
        }
    }
    function handleDecrementS(){
        return()=>{
            setCounting(0);
            if(sessionLength == 1){
                setSessionLength(1)
            }else{
            setSessionLength((prev)=> Number(prev)-1)
            }
        }

    }
    function handleIncrementS(){
        return()=>{
            setCounting(0);
            if(sessionLength == 60){
                setSessionLength(60)
            }else{
            setSessionLength((prev)=>Number(prev)+ 1)
            }
        }
    }
    function reset(){
        return()=>{
            setBreakLength("5");
            setSessionLength("25")
            setSwitchh(0);
            setCounting(0);
            setLoops(1);
            if(document.getElementById("beep").play()){
                document.getElementById("beep").pause();
            }
            
            
            
        }
    }
    function stopstart(){
        
        return()=>{
            if(switchh == 1){
            setSwitchh(0);
        }if(switchh == 0){
            setSwitchh(1);
        }
        }
    }
    
    const minn = loops == 1? String(parseInt(((sessionLength*60)-counting)/60)).padStart(2, "0") :
        String(parseInt(((breakLength*60)-counting)/60)).padStart(2,"0");
    const secx  = loops == 1? String(parseInt((sessionLength*60-(counting))%60)).padStart(2, "0") : 
        String(parseInt((breakLength*60-(counting))%60)).padStart(2, "0");
      
    useEffect(()=>{
    const key = setTimeout(()=>{
        
        if(switchh == 1){
        setCounting((prev)=> prev + 1);
        if(minn == "00" && secx == "00"){
            
            if(loops == 1){ 
                setLoops(2);
                setCounting(0)}
                if(loops == 2){
                    setLoops(1);
                    setCounting(0);
                }          
           
        }
        
    }}, 1000);
      return()=>clearInterval(key) ;
      
}, )
if(minn == '00' && secx == '00'){document.getElementById("beep").play()}
/*switch(loops){
    case 1:
        setMinRemain(parseInt(((sessionLength*60)-counting)/60));
        setSecRemain(parseInt((((sessionLength*60-(counting)))%60)));
        
        break;
    case 2:
        setMinRemain(parseInt((breakLength*60-counting)/60));
        setSecRemain((breakLength*60-counting)%60);
        
        break;
    default:
        setMinRemain((sessionLength*60-counting)/60);
        setSecRemain((sessionLength*60-counting)%60);
        
        break;
}*/
    
    
    
    return(
        <>
        <h1>25 + 5 clock</h1>
            <div id="break-session">
                <div id="break-label" className="label">
                    <h2 id="break-label">break</h2>
                    <Button id="break-increment" name="&#9650;" func={handleIncrementB}/>
                    <div id="break-length" className="length">{breakLength}</div>
                    <Button id="break-decrement" name="&#9660;" func={handleDecrementB}/>
                </div>
                <div id="session-label" className="label">
                    <h2 id="session-label">session</h2>
                    <Button id="session-increment" name="&#9650;" func={handleIncrementS}/>
                    <div id="session-length" className="length">{sessionLength}</div>
                    <Button id="session-decrement" name="&#9660;" func={handleDecrementS}/>    
                </div>
            </div>
            <div id="container">
                <div id="disp">
                    <h2 id="timer-label">{loops == 1?"session": "break"}</h2>
                    <p id="time-left">{minn}:{secx}</p>
                    
                    
                </div>
                <div id="controls">
                <Button id="start_stop" name="&#9665;&#10074;&#10074;" func={stopstart}/>
                <Button id="reset" name="&#8634;" func={reset}/>
                <audio key="beep" id="beep"src="https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/the-surest-way-out-is-through.mp3"></audio>
                </div>
            </div>
            <p id="notes"> produced by Emmmanuel kunsanama(BEYSTAT)</p>
        </>
    )
}
export default Apps;