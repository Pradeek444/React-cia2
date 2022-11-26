 import React from "react";
 import '../ca/CA2.css'
import {useState} from "react";
function Dropdown(){
    const[color,setcolor]=useState("white");
    return(
        <>
        <h1 className="head">Dropdown Bar</h1>
        <div className="drop">
        <select onChange={e=>setcolor(e.target.value)} style={{backgroundColor:color}}> 
        <option value="choose a color">Choose A Color</option>
        <option value="green">green</option>
        <option value="red">red</option>
        <option value="pink">pink</option>
        <option value="violet">violet</option>
        <option value="lightgreen">light green</option>
        <option value="brown">brown</option>
        </select>
        
        
        </div>
        </>
    )
}
export default Dropdown

