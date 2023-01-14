import React,{useState} from 'react';

function Sex (props){
    
const [Count,setCount]=useState(0);
function increase(){
setCount(Count +1)
}
function decrease(){
    setCount(Count -1)
    }
function reset(){
    setCount(Count*0)
};
    return(
        <div className='pp'> 
            <h1> Countering: {Count} </h1> 
        <button onClick={decrease}>decrease</button>
        <button onClick={increase}>increase</button>
        <button onClick={reset}>reset</button>
        </div>

    )
}
export default Sex;