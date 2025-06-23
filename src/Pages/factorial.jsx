import { useState } from "react"

export default function (){
    const [val,setVal] = useState('');
    const [fact, setFact] = useState(1);
    
    const calculateFactorial =()=>{
        let num = parseInt(val);
        let result=1;
        for(let i=2;i<=num;i++){
            result*=i;
        }
        setFact(result);
    }

    return(
        <>  
            <input type="text" placeholder="enter number" name="num" value={val} onChange={(e)=>setVal(e.target.value)}/>
            <button onClick={calculateFactorial}>sumbit</button>
            <div>{fact}</div>
        </>
    )
}
