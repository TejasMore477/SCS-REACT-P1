import React, { useState } from "react";
import Card from "./components/Card";
import Songs from "./components/Songs";
import ImgSlider from "./components/ImgSlider";
import LrnProps from "./components/LrnProps";
import ExForProps from "./components/ExForProps";

function App(){

    const [value , setValue] = useState({name:"tejas", isBanned:false});

    const [data , setData] = useState(12);

    const [nums, setNums] = useState([1,2,3,4,5,6]);

    const [nos, setNos] = useState([1, 2, 31, 12, 13, 14, 15]);

    const [val, setVal] = useState([1, 20, 11, 12, 13, 14, 15, 23 ,46 , 54, 75]);
   
    const [item, setItem] = useState([1,2,3,4,5]);
    
    const data2 = [ 
        {name: 'John', profession: 'Painter', image:'https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWVuJTIwcG9ydHJhdGVzfGVufDB8fDB8fHww', friends: false},
        {name: 'Tiger', profession: 'Hacker', image:'https://images.unsplash.com/photo-1521151716396-b2da27b1a19f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1lbiUyMHBvcnRyYXRlc3xlbnwwfHwwfHx8MA%3D%3D', friends: false},
        {name: 'Niks', profession: 'Police', image:'https://images.unsplash.com/photo-1463453091185-61582044d556?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1lbiUyMHBvcnRyYXRlc3xlbnwwfHwwfHx8MA%3D%3D', friends: false},
        {name: 'Miya', profession: 'Model', image:'https://images.unsplash.com/photo-1512310604669-443f26c35f52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWVuJTIwbW9kZWwlMjBwb3J0cmF0ZXN8ZW58MHx8MHx8fDA%3D', friends: false},
    ];

    const [realData, setRealData] = useState(data2);
    const handelFriendsButton = (cardIndex)=>{
        setRealData((previous)=>{
            return previous.map((itema, indexa)=>{
                if(indexa === cardIndex){
                    return {...itema, friends: !itema.friends}
                }
                return itema;
            })
        });
    };


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
                    {item.map((elements)=> <h1>{elements}</h1>)}
                    <button onClick={()=>setItem([...item,item.length+1])} className="px-3 py-1 bg-lime-300 font-medium text-lg">Click to add new</button>
                </div>
            </div>

            <ImgSlider />

            <div className="h-screen w-full bg-red-400 p-4">
                <h1 className=" text-2xl font-medium mb-5 ">Learning Props in React</h1>
                <LrnProps chacha="Know More"color="bg-blue-400"/>
                <LrnProps chacha="Click Me" color="bg-yellow-400"/>
                <LrnProps chacha="About"color="bg-blue-400"/>
            </div>
            <div className="h-screen w-full bg-black p-8">
                <h1 className="text-white font-medium text-lg text-center mb-8">Handelling state fom component "hard topic"</h1>
                <div className="flex items-center justify-center gap-2">
                    {realData.map((subData, indexs)=>(
                         <ExForProps key={indexs} index={indexs} values={subData} handelFriendsButton={handelFriendsButton}/>
                    ))}
                </div>
            </div>
        </>
    );
}

export default App;



































