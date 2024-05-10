import React from "react";

function Card(){

    const data = [
        {
            image: `https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`, 
            name: `Amazon 1`, 
            description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quibusdam explicabo voluptates?`,
            instock:true,
        },

        {
            image: `https://images.unsplash.com/photo-1591270551371-3401a1a9382f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`, 
            name: `Amazon 2`, 
            description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quibusdam explicabo voluptates?`,
            instock:false,
        },

        {
            image: `https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`, 
            name: `Amazon 3`, 
            description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quibusdam explicabo voluptates?`,
            instock:false,
        },

        {
            image: `https://images.unsplash.com/photo-1595246135406-803418233494?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`, 
            name: `Amazon 4`, 
            description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quibusdam explicabo voluptates?`,
            instock:true,
        },

        {
            image: `https://images.unsplash.com/photo-1618381297523-e6c0ab13a5b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8`, 
            name: `Amazon 7`, 
            description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quibusdam explicabo voluptates?`,
            instock:false,
        },

    ];

    return(
        <div className="w-full h-screen px-4 bg-slate-500 flex gap-4 items-center justify-center">  
            {data.map((elem,index) => (
                <div key={index} className="bg-zinc-100 rounded-md overflow-hidden w-fit">
                    <div className="w-52 h-32 bg-zinc-300">
                        <img className="h-full w-full object-cover" src= {elem.image} />
                    </div>
                    <div className="w-52 px-3 py-4">
                        <h2 className=" font-semibold">{elem.name}</h2>
                        <p className=" text-sm mt-5">{elem.description}</p>
                        <button className= {` px-2 py-1 ${elem.instock ? ' bg-emerald-300' : 'bg-red-300'} rounded text-xs font-medium mt-2`} >
                            {elem.instock ? "In Stock": "Out of Stock"}
                        </button>
                    </div>
                </div>    
            ))}
        </div>
    )
}

export default Card;