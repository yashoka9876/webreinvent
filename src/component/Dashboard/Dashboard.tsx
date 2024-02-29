import React, { useEffect, useState } from 'react'

const Dashboard = () => {
    const[listItem,setListItem]=useState([]);
    useEffect(()=>{
        const getData=async()=>{
            try{

                const response=await fetch("https://reqres.in/api/users?page=2");
            if(!response.ok){
                throw new Error('we got one error');
            }
            const listData=await response.json();
            setListItem(listData.data);

            }catch(error){
                console.log(error)
            }
        }
        getData();
    },[])
  return <div className="grid grid-cols-2 w-3/4 gap-4 mx-auto">
    {
        listItem.map((item:any)=><div  className="bg-gray-200 p-4 flex flex-col items-center justify-center ">
            <p>{item.first_name}</p>
            <p>{item.last_name}</p>
            <img src={item.avatar} alt='imagess'/>
        </div>)
    }
  </div>
}

export default Dashboard