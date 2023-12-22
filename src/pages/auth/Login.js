import React from "react";
//import InputType from "../../components/shared/Form/InputType";
import Form from "../../components/shared/Form/Form";

const Login = () =>{
    return(
        <>
        <div className="row g-0">
            <div className="col-md-6 g-0 ">

                {/* <h2 className="m-1">L-IT Management</h2> */}
                <img src="./assets/images/L-IT logo.jpg" className="ms-5 m-4 img-1 mb-0"/>
               <div><h1 className="text-primary m-0 ms-3 ">L-IT Truly Services PVT LTD</h1></div> 
            </div>
            <div className="col-md-4 form-container">
           <Form formTitle={"Login"} submitBtn={"Login"} formType={"login"}/>

            </div>
        </div>
        </>
    )
};

export default Login;