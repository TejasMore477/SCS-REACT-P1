import React from "react";

function ExForProps({values, handelFriendsButton, index}) {
    const {name, profession, image, friends} = values;
  return (
    <>
        <div className="w-52 bg-zinc-50 p-3 shrink-0">
            <div className="w-full bg-sky-200 h-32">
                <img className="h-full w-full object-cover object-center" src={image} />
            </div>
            <div className="w-full p-3">
                <h3 className="text-lg font-medium">{name}</h3>
                <h5 className="text-lg font-light">{profession}</h5>
                <button onClick={()=>handelFriendsButton(index)} className={`px-3 mt-4 py-1 text-sm font-medium text-white ${friends=== true ? "bg-green-500":"bg-blue-500"}`}>
                    {friends=== true ? "Friends" : "Add Friends"}
                </button>
            </div>
        </div>
    </>
  );
}

export default ExForProps;
