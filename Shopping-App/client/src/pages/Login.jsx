import { useState } from "react"
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [uname,setUname]=useState("");
    const [pass,setPass]=useState("");
    const [error,setError]=useState("")
    const navigate=useNavigate();
    function handleSubmit(){
        if(uname=="admin" && pass=="manager")
        {
          navigate("/user")
        }
        else{
          setError("Login failed: check credentials")  
        }
    }
  return (
    <div>
      <h1>Login Page</h1>
      <h2 style={{color: "red"}}>{error}</h2>
      <form onSubmit={handleSubmit}>
        User Name: 
        <input type="text"
               value={uname}
               placeholder="Enter the user Name"
               onChange={(e)=>setUname(e.target.value)}/>
               <br/>
         Password:
         <input type="password"
                value={pass}
                placeholder="Enter the password"
                onChange={(e)=>setPass(e.target.value)}/>
                <br/>
         <button>Login</button>
         <button>Reset</button>             
      </form>
    </div>
  )
}

export default Login