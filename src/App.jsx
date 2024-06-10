import { useState , useEffect} from 'react'
//import './App.css'
import axios from 'axios'
function App() {
  const [name,setName]=useState("");
useEffect(() => {
  axios.get("https://bads.onrender.com/ping/",{headers:{"Authorization":`Bearer ${localStorage.getItem("access_token")}`}}).then(resp=>{
    console.log(resp)
  }
  )
  .catch(err=>{
    console.log(err)
    if(err.response.status==401){
      window.location.href="/login"
    }
}
)
}, [])
  return (
    <>
      <div className="">
        <h1>Search for a Patient</h1>
        <input
          type="text"
          placeholder="Search..."
          className="rounded-xl m-3 h-10 px-1 w-[90%]"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button
          onClick={() => {
            if (name.length > 32)
              window.location.href = "/patientData?address=" + name;
            else alert("Invalid Address");
          }}
        >
          Search
        </button>
        <p className="pb-5">OR</p>
        <hr />
        <a href="/addData" className="block pt-5">
          Add Patient Data
        </a>
      </div>
    </>
  );
}

export default App
