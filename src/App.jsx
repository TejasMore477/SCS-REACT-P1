import React, { useState } from "react";
import Card from "./components/Card";
import Songs from "./components/Songs";
import ImgSlider from "./components/ImgSlider";

function App(){

    const [value , setValue] = useState({name:"tejas", isBanned:false});

    const [data , setData] = useState(12);

    const [nums, setNums] = useState([1,2,3,4,5,6]);

    const [nos, setNos] = useState([1, 2, 31, 12, 13, 14, 15]);

    const [val, setVal] = useState([1, 20, 11, 12, 13, 14, 15, 23 ,46 , 54, 75]);
   
    const [item, setItem] = useState([1,2,3,4,5]);
    return(
        <> 
            <Card/>
            <Songs/>

            <div className=" w-full h-screen bg-red-200 p-5">
                <h1 className=" text-2xl font-medium mb-5 ">State in React and practice of useState in objects and arrays</h1>

                <div className="mt-4 bg-white p-5">
                    <h1>Terriorist Name: {value.name}</h1>
                    <h1>IS banned in Pakistan : {value.isBanned.toString()}</h1>
                    <button onClick={()=>setValue({...value, isBanned:!value.isBanned})} className={`px-3 py-1 ${value.isBanned ? 'bg-lime-300':'bg-red-300'} font-medium text-lg`}>Click to Change</button>
                </div>
                <div className="mt-4 bg-blue-50 p-5">
                    <h1> Data :{data}</h1>
                    <button onClick={()=>setData(data+1)} className=" px-3 py-1 bg-lime-300 font-medium text-lg">Click to Change</button>
                </div>
                <div className="mt-4 bg-blue-100 p-5">
                    {nums.map(elemts=> <h1>{elemts}</h1>)}
                    <button onClick={
                        ()=>setNums( 
                            ()=>nums.filter(
                                (elem, index)=> index!=nums.length-1
                            )
                        )
                    } className=" px-3 py-1 bg-lime-300 font-medium text-lg">Click to Change</button>
                </div>
            </div>

            <div className=" w-full h-screen bg-red-50 p-5">
                <div className="mt-4 bg-blue-200 p-5">
                        {nos.map(elem=> <h1>{elem}</h1>)}
                        <button onClick={
                            ()=>setNos( 
                                ()=>nos.filter(
                                    (elem, index)=> index != 2
                                )
                            )
                        } className=" px-3 py-1 bg-lime-300 font-medium text-lg">Click to remove every 2nd index no</button>
                </div>
                <div className="mt-4 bg-blue-100">
                    {val.map((elemnt=><h1>{elemnt}</h1>))}
                    <button onClick={()=>setVal(()=>val.filter(ele=>ele%2 === 0))} className="px-2 py-1 bg-red-300 mt-2">click to get even nos</button>
                </div>
            </div>

            <div className=" w-full h-screen bg-orange-300 p-5">
                <div className="mt-4 bg-yellow-200 p-5">
                    {item.map((elements)=><h1>{elements}</h1>)}
                    <button onClick={()=>setItem([...item,item.length+1])} className="px-3 py-1 bg-lime-300 font-medium text-lg">Click to add new</button>
                </div>
                <div className="mt-4 bg-yellow-300">
                    <button className="px-2 py-1 bg-red-300 mt-2">click to get even nos</button>
                </div>
            </div>

            <ImgSlider />
        </>
    );
}

export default App;



































