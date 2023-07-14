import { useState } from "react";
import React from "react";
import axios from "axios";
import "../../styles/AuthStyles.css";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/layout";
import toast from 'react-hot-toast';
const Register=()=>{
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [address,setaddress]=useState("")
    const [phone,setphone]=useState("")
    const [answer,setanswer]=useState("")

    const Navigate=useNavigate();
const HandleSubmit=async(e)=>{
  e.preventDefault();
  try {
    const res = await axios.post('http://localhost:8080/api/v1/auth/register', {
      name,
      email,
      password,
      phone,
      address,
      answer,
    });
    if (res && res.data.success) {
      toast.success(res.data && res.data.message);
      Navigate("/login");
    } else {
      toast.error(res.data.message);
    }
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong");
  }
};

// console.log(process.env.REAC_APP_API);
   return(
        <Layout title={"Register-Shopiii App"}>
      <div className="form-container mt-0" >
            <h4 className="title">REGISTER FORM</h4>
                <form onSubmit={HandleSubmit}>
  <div className="mb-3">
    <input type="text" value={name} onChange={(e)=>setname(e.target.value)} className="form-control" id="exampleInputName1" placeholder="Enter Your Name"  required/>
  </div>
  <div className="mb-3">
    <input type="Email" value={email} onChange={(e)=>setemail(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Enter Your Email" required />
  </div>
  <div className="mb-3">
    <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Enter Password" required/>
  </div>
  <div className="mb-3">
    <input type="text" value={address} onChange={(e)=>setaddress(e.target.value)} className="form-control" id="exampleInputAdderess1" placeholder="Enter Your Address" required/>
  </div>
  <div className="mb-3">
    <input type="text" value={phone} onChange={(e)=>setphone(e.target.value)} className="form-control" id="exampleInputphone1" placeholder="Enter Phone Number" required/>
  </div>
  <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e) => setanswer(e.target.value)}
              className="form-control"
              id="exampleInputAnswer1"
              placeholder="What is Your Favorite sports"
              required
            />
          </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

            </div>
        </Layout>
    )
}
export default Register;