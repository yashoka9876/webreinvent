import { authActions } from "../store/authSlice";



export const signUp=async(obj:any)=>{

    const response=await fetch(obj.url, {
    method: "POST",
    headers: {
    "Content-Type": "application/json"
    },
    body: JSON.stringify({
    email: "eve.holt@reqres.in",
    password: obj.password
    })
    })
    //when response is not okay
    if(!response.ok){
        throw new Error('this one is at another level');
    }
    const data=response.json();
    //here we call reducer action to chnge the data when signup
    return data
    
}
