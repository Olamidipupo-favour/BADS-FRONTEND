import { useState , useEffect} from 'react'
import './App.css'
import image from './assets/react.svg'
import axios from 'axios'
//import { getSearchParamsForLocation } from 'react-router-dom'
export default function Allergy(){
    //console.log(window.location)
    const url=new URL(window.location)
    //console.log(url.searchParams.get('address'))
    //alert(url.searchParams.get('address'))
    const address=url.searchParams.get('address')
    const [name,setName]=useState('')
    const [history,setHistory]=useState('')
    const [genotype,setGenotype]=useState('')
    const [bloodGroup,setBloodGroup]=useState('')
    const [allergy,setAllergy]=useState('')
    const [medical_history,setMedicalHistory]=useState('')
    useEffect(()=>{
        axios.get(`https://bads.onrender.com/allergysearch/${address}/?eth_address=${address}`,{headers:{"Authorization":`Bearer ${localStorage.getItem("access_token")}`}}).then(resp=>{
        //alert(resp.status)
        return resp.data
    }).then(data=>{
            console.log(data)
            setName(data[0])
            setHistory(data[1])
            setGenotype(data[2])
            setBloodGroup(data[3])
            setAllergy(data[4])
            setMedicalHistory(data[5])
        })
        .catch(err=>{
            console.log(err)
        if(err.response.status==401){
            alert("Unauthorized, login as an authorized user!")
            window.location.href="/login"
        }  
        if(err.response.status==404){
            alert("Patient not found")
            window.location.href="/"
        }  
        })
    })
    return (
        <div className='bodyy'>
        <h2 className='text-center font-bold font-mono text-3xl pb-7 underline'>Patient Data|{address}</h2>
        <div className=' flex flex-row mx-20'>
            <img className='h-32 w-32 object-fit m-2 border-2  border-black p-2 rounded-md' src={image}/>
            <div className='mx-20'>
            <h5 className='p-2 font-bold font-mono text-xl'>Name: {name}</h5>
            <h5 className='p-2 font-bold font-mono text-xl'>Family History: {history}</h5>
            <h5 className='p-2 font-bold font-mono text-xl'>Genotype: {genotype}</h5>
            <h5 className='p-2 font-bold font-mono text-xl'>Blood Group: {bloodGroup}</h5>
            <h5 className='p-2 font-bold font-mono text-xl'>Allergy: {allergy}</h5>
            <h5 className='p-2 font-bold font-mono text-xl'>Medical History: {medical_history}</h5>
            </div>
        </div>
        <div className='absolute bottom-0'>
            <h3 className='text-center'>Signed Zeus Health</h3>
        </div>
        </div>
    )
}