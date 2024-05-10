import React from "react";

function Songs(){

    const data = [
        {
            name: "Track 1",
            description: "Lorem ipabo corporis, porro ipsum dupudianda veritatis eos sint.",
        },

        {
            name: "Track 2",
            description: "Lorem ipabo corporis, porro ipsum dupudianda veritatis eos sint.",
        },

        {
            name: "Track 3",
            description: "Lorem ipabo corporis, porro ipsum dupudianda veritatis eos sint.",
        },
    ]

    const downlodeFunctoin = ()=>{alert("go and continue downloading your track");};

    return (
        <>
            <div className=" w-full h-screen bg-gray-900 flex flex-col items-center justify-center gap-2">
                {data.map((element, index) => (
                    <div key={index} className=" w-90 bg-slate-200 px-2 py-2 rounded">
                        <h1 className=" font-medium text-lg mb-1">{element.name}</h1>
                        <p className=" font-light text-sm ">{element.description}</p>
                        <button onClick={downlodeFunctoin} className=" bg-blue-400 font-medium text-sm px-2 py-1 mt-2">Downlode</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Songs;