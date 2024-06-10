import { useState, useEffect } from "react";
//import './App.css'
import axios from "axios";
function Add(){
  const [address, setAddress] = useState("");
  const [name2, setName2] = useState("");
  const [familyHistory, setFamilyHistory] = useState("");
  const [genotype, setGenotype] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [allergy, setAllergy] = useState("");
  const [medicalHistory, setMedicalHistory] = useState("");
  useEffect(() => {
    axios
      .get("https://bads.onrender.com/ping/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status == 401) {
          window.location.href = "/login";
        }
      });
  }, []);
  return (
   <div className="add-patient-data mt-64">
     <h1>Add/Modify Patient Data</h1>
     <form>
       <input
         type="text"
         placeholder="0xaddress"
         className="rounded-xl m-3 h-10 px-1"
         onChange={(e) => {
           setAddress(e.target.value);
         }}
       />
       <input
         type="text"
         placeholder="Name"
         className="rounded-xl m-3 h-10 px-1"
         onChange={(e) => {
           setName2(e.target.value);
         }}
       />
       <input
         type="text"
         placeholder="Family History"
         className="rounded-xl m-3 h-10 px-1"
         onChange={(e) => {
           setFamilyHistory(e.target.value);
         }}
       />
       <input
         type="text"
         placeholder="Genotype"
         className="rounded-xl m-3 h-10 px-1"
         onChange={(e) => {
           setGenotype(e.target.value);
         }}
       />
       <input
         type="text"
         placeholder="Blood Group"
         className="rounded-xl m-3 h-10 px-1"
         onChange={(e) => {
           setBloodGroup(e.target.value);
         }}
       />
       <input
         type="text"
         placeholder="Allergy"
         className="rounded-xl m-3 h-10 px-1"
         onChange={(e) => {
           setAllergy(e.target.value);
         }}
       />
       <input
         type="text"
         placeholder="Medical History"
         className="rounded-xl m-3 h-10 px-1"
         onChange={(e) => {
           setMedicalHistory(e.target.value);
         }}
       />
       <center>
         {" "}
         <button
           type="submit"
           className="block bg-blue-500"
           onClick={(e) => {
             e.preventDefault();
             if (
               address.length > 32 &&
               name2.length > 0 &&
               familyHistory.length > 0 &&
               genotype.length > 0 &&
               bloodGroup.length > 0 &&
               allergy.length > 0 &&
               medicalHistory.length > 0
             ) {
               axios
                 .post(
                   "https://bads.onrender.com/allergysearch/",
                   {
                     eth_address: address,
                     name: name2,
                     family_history: familyHistory,
                     genotype: genotype,
                     blood_group: bloodGroup,
                     allergy: allergy,
                     medical_history: medicalHistory,
                   },
                   {
                     headers: {
                       Authorization: `Bearer ${localStorage.getItem(
                         "access_token"
                       )}`,
                     },
                   }
                 )
                 .then((resp) => {
                   console.log(resp);
                   alert("Data Added/Modified Successfully");
                 })
                 .catch((err) => {
                   console.log(err);
                   alert("An error occured!");
                 });
             }
           }}
         >
           Add
         </button>
       </center>
     </form>
   </div>
  );
}

export default Add