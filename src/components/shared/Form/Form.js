import React, { useState } from "react";
import InputType from "./InputType";
import { Link } from "react-router-dom";

const Form = ({ formType, submitBtn, formTitle }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("");
  const [gender, setGender] = useState("");
  // const navigate=useNavigate();

  return (
    <div>
      <form>
        <h1 className="text-center">{formTitle}</h1>
        <hr />
        {(() => {
          switch (true) {
            case formType === "login": {
              return (
                <>
                  <InputType
                    labelText={"Email"}
                    labelFor={"forEmail"}
                    inputType={"email"}
                    name={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputType
                    labelText={"Password"}
                    labelFor={"forPassword"}
                    inputType={"password"}
                    name={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </>
              );
            }
            case formType === "registration": {
              return (
                <>
                  <InputType
                    labelText={"FirstName"}
                    labelFor={"forFirstName"}
                    inputType={"text"}
                    name={"firstName"}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <InputType
                    labelText={"LastName"}
                    labelFor={"forlastName"}
                    inputType={"text"}
                    name={"lastName"}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <InputType
                    labelText={"Email"}
                    labelFor={"forEmail"}
                    inputType={"email"}
                    name={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputType
                    labelText={"Password"}
                    labelFor={"forPassword"}
                    inputType={"password"}
                    name={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputType
                    labelText={"PhoneNumber"}
                    labelFor={"forPhoneNumber"}
                    inputType={"text"}
                    name={"phoneNumber"}
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <InputType
                    labelText={"Role"}
                    labelFor={"forRole"}
                    inputType={"text"}
                    name={"role"}
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  />
                  <InputType
                    labelText={"Gender"}
                    labelFor={"forGender"}
                    inputType={"text"}
                    name={"gender"}
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  />
                </>
              );
            }
          }
        })()}
        {/* <div className="formpage"> */}
        <div>
          {formType === "login" ? (
            <p>
              Not register yet ? Register
              <Link to="/register"> Here!! </Link>
              {/* navigate("/register") */}
            </p>
          ) : (
            <p>
              Already registered
              <Link to="/login"> Login Here!! </Link>
            </p>
          )}
          <button className="btn btn-primary mb-2" type="submit">
            {submitBtn}
          </button>

          {/* <button className="btn btn-primary ms-5" type="cancel">{cancelBtn}</button> */}
        </div>
        {/* </div> */}
      </form>
    </div>
  );
};

export default Form;
