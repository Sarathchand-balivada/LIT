import React from "react";
import Form from "../../components/shared/Form/Form";

const Registration = () =>{
    return(
        <>
        <div className="row g-0">
            <div className="col-md-6 ">
                <img src="/assets/images/reg-img.jpg" alt="registerimage" className="img-2 m-5 "/>
            </div>
            <div className="col-md-6 form-container">
            <Form formTitle={"Registration"} submitBtn={"Registration"}  formType={"registration"}/>
            </div>
        </div>
        </>
    )
};

export default Registration;