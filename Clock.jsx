import React, {useState, useEffect} from "react";
function Clock(){
    const [time, settime]=useState(new Date())
    useEffect(()=>{
        const setintervalids= setInterval(() => {
            settime(new Date())
        }, 1000);
        return ()=>{
            clearInterval(setintervalids)
        }
    },[])

    function managetime(){
        let hour= time.getHours();
        let minute= time.getMinutes();
        let sec= time.getSeconds();
        const ampm= hour>12?"pm":"am"
        hour= hour%12
        return `${hour}:${minute}:${sec} ${ampm}`

    }
return(
 <>
   <div id="main">
   <p id="clock">clock</p>
    <div id="times">
        <span>{managetime()}</span>
    </div>
   </div>
 </>
)
}
export default Clock