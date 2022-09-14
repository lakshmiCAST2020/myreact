import React from "react";

function SayHello(props){
    const sayhello1 = () => {
        console.log("Changed Hello");
       
    };
    return (
       <div> 
       <button className="mycolor" id="mybbutton" onClick={sayhello1}> Submit </button>
       <h2>{props.message}  </h2>
<h1 > hello world</h1>
<p>
          Edit <code>src/App1.js</code> and save to reload.
        </p>

 </div>
    );
}
export default SayHello; 