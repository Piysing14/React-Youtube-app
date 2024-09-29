import { useState } from "react";

function Counter(){
    const [count,setCount]=useState(0);
    let handleClick=(e)=>{
        e.stopPropagation();
        setCount(count=>count+1);
    

    }
    return (<>
    <h1>{count}</h1>
    <button onClick={handleClick}>+1</button>
    </>);

}


export default Counter;