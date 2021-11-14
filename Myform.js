import { useState } from 'react';

function Myform(){
    const [fname,setName]=useState("");
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        alert("Hello "+fname);
    }

    return(
            <form onSubmit={handleSubmit}>
                <label>First Name:&nbsp;
                    <input type="text" value={fname} onChange={(e)=>setName(e.target.value)}/>
                </label>
                <input type="submit"/>
            </form>
    );
}

export default Myform;