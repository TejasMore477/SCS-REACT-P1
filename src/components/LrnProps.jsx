import React from "react";

function LrnProps({chacha, color}){
return(
    <>
        <button className={`px-3 py-1 m-1 font-medium text-lg text-white ${color}`}>{chacha}</button>
    </>
)
}

export default LrnProps;