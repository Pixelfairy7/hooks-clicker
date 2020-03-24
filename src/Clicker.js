import React, { useState } from 'react';


function Clicker(){
    const [count,setCount] = useState(0);

    function increaseCount(e){
    e.preventDefault();
    return setCount(count+1);
}
    function decreaseCount(e){
        e.preventDefault();
        return setCount(count-1);
    }

    function clearCount(e){
        e.preventDefault();
        return setCount(count-count);
    }

    return(
        <div className="Clicker-container">
           <button className="count-button" onClick={increaseCount}>+</button>
           <div className="count-space">
           <p>{count}</p>
           </div>
           <button className="count-button" onClick={decreaseCount}>-</button>
           <button className="count-button clear" onClick={clearCount}>Reset</button>

        </div>
    )
}

export default Clicker