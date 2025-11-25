import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from './../../api/axios-client';
import { useStateContext } from "../../context/ContextProvider";

function SignUp() {
const navigate =useNavigate();
const {setUser} = useStateContext();
const [first_name,setFirstName] =useState("");
const [last_name,setLastName] =useState("");
const [email,setEmail] =useState("");
const [password,setPassword] =useState("");
const [passwordConfirmation,setPasswordConfirmation] =useState("");
const [error,setError] =useState('');

const handleSignup = async (e) =>{

  e.preventDefault();

  if(password !== passwordConfirmation){
    setError("Password $Confirm Password do not match!");
  }

  try{
    await axiosClient.get("/sanctum/csrf-cookie");

    const result = await axiosClient.post("/api/register",{
        first_name,
        last_name,
        email,
        password,
        password_confirmation:passwordConfirmation,
    });
    console.log("Register Successfully", result.data);

    const userRsponse = await axiosClient.get("/api/user");
    setUser(userRsponse.data);
    navigate("/");
   
    alert("Register successfull")
  }catch (error){
    console.error("Registration Error",error.response ? error.response.data : error);
    alert("Registration Failed! Check Console.");
    
  }
}



  return (
    <div className="main-content" id="app">
      <section className="section">
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">
              <div className="card card-primary">
                <div className="card-header">
                  <h4>Register</h4>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSignup}>
                    <div className="row">
                      <div className="form-group col-6">
                        <label htmlFor="frist_name">First Name</label>
                        <input
                          id="frist_name"
                          value={first_name}
                          onChange={(e)=>setFirstName(e.target.value)}
                          type="text"
                          className="form-control"
                          name="frist_name"
                          autofocus
                        />
                      </div>
                      <div className="form-group col-6">
                        <label htmlFor="last_name">Last Name</label>
                        <input
                          id="last_name"
                          value={last_name}
                          onChange={(e)=>setLastName(e.target.value)}
                          type="text"
                          className="form-control"
                          name="last_name"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        type="email"
                        className="form-control"
                        name="email"
                      />
                      <div className="invalid-feedback"></div>
                    </div>
                    <div className="row">
                      <div className="form-group col-6">
                        <label htmlFor="password" className="d-block">
                          Password
                        </label>
                        <input
                          id="password"
                          value={password}
                          onChange={(e)=>setPassword(e.target.value)}
                          type="password"
                          className="form-control pwstrength"
                          data-indicator="pwindicator"
                          name="password"
                        />
                        <div id="pwindicator" className="pwindicator">
                          <div className="bar" />
                          <div className="label" />
                        </div>
                      </div>
                      <div className="form-group col-6">
                        <label htmlFor="password2" className="d-block">
                          Password Confirmation
                        </label>
                        <input
                          id="password2"
                          value={passwordConfirmation}
                          onChange={(e) => setPasswordConfirmation(e.target.value)}
                          type="password"
                          className="form-control"
                          name="password-confirm"
                        />
                        {
                          error && (
                            <small>
                              {error}
                            </small>
                          )
                        }
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          name="agree"
                          className="custom-control-input"
                          id="agree"
                        />
                        <label className="custom-control-label" htmlFor="agree">
                          I agree with the terms and conditions
                        </label>
                      </div>
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg btn-block"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
                <div className="mb-4 text-muted text-center">
                  Already Registered? <Link to={"/login"}>Login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignUp;
