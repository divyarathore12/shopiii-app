import React from "react";
import Layout from "../components/layout/layout";
import { useAuth } from "../context/auth";

const Homepage=()=>{
    const [auth,setAuth]=useAuth()
    return(
        
         <Layout title={"best offers"}>
            <h1>HOME</h1>
            <pre>{JSON.stringify(auth,null,4)}</pre>
            </Layout>
    
    )
}
export default Homepage