import React, { useEffect, useState } from "react";
// import "../../styles/styles.scss";
import { Field, Formik } from "formik";
import google from "../../assets/images/flat-color-icons_google.svg";
import Logo from "../../assets/images/logo/Logo.svg";
import signupImage from "../../assets/images/thumb.jpg";
import { validateLoginFormSchema } from "../../helpers/validation";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // You can use any icon library you prefer
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import Picture from "../../assets/images/3d-casual-life-young-people-students-1.png";
import { handleLogin } from "../../helpers/helperFunctions";
import { useDispatch } from "react-redux";
import Alert from '@mui/material/Alert';
import {
  updateToken,
  updateUserInfo,
  updateLoggedStatus,
} from "../../slice/userSlice";
import { CircularProgress } from "@mui/material";

function Login() {
  const [error, setError] = useState(null);
  const [isAlertVisible, setAlertVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowLogIn, setShowLogIn] = useState(true);
 

  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
      setIsLoading(true);
      setShowLogIn(false);
    await handleLogin(values).then((data) => {
      setIsLoading(false);
      setShowLogIn(true);
      if (data.status === 200) {
        console.log(data.data);
        dispatch(updateToken(data.data.token));
        dispatch(updateUserInfo(data.data.userExists));
        dispatch(updateLoggedStatus(data.data.auth));
        // window.location.href = "/dashboard"; 
        

      } else if (data.response.status === 400) {
        console.log(data.response.data);
        setError(data.response.data);
        setAlertVisible(true);
      } else {
        // if the user makes request when not online or anyother error
        setError("An error occurred");
      }
    });
  };

  const signInWithGoogle = () => {
    window.open(
      "http://localhost:8000/api/v1/authenticate/google",
      "_self",
      "toolbar=no, scrollbars=yes, resizable=no, width=1000, height=auto"
    );
  };

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex items-center justify-center py-5 md:h-screen">
          <img src={signupImage} alt="" className="items-center" />
        </div>
        <div>
          <div className="h-screen py-5 px-10">
            <div className="flex items-center justify-center">
              <img
                src={signupImage}
                alt=""
                className="object-scale-down h-48 w-auto items-center"
              />
            </div>
            <div className="font-bold py-4 text-center text-2xl">
              <h2 className="">Login to your account</h2>
            </div>
            {isAlertVisible && (
                <Alert severity="error">{error}</Alert>
              )}
            <div className="">
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                onSubmit={handleSubmit}
                validationSchema={validateLoginFormSchema}
              >
                {(props) => (
                  <form onSubmit={props.handleSubmit}>
                    <div className="formInputs">
                      <div className="py-4">
                        <TextField
                          fullWidth
                          label="Email"
                          variant="outlined"
                          name="email"
                          onChange={props.handleChange("email")}
                          error={props.touched.email && props.errors.email}
                          helperText={props.touched.email && props.errors.email}
                        />
      
                      </div>
                      <div className="input py-2">
                        <div className="">
                          <TextField
                            fullWidth
                            id="outlined-password-input"
                            name="password"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            onChange={props.handleChange("password")}
                            error={props.touched.password && props.errors.password}
                            helperText={props.errors.password}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-center py-4">
                      <p>
                        Forgot your password?{" "}
                        <span>
                          <Link to="/forgot">Reset Password</Link>
                        </span>
                      </p>
                    </div>
                    <button
                      type="submit"
                      className="rounded-md bg-slate-600 w-full text-white py-2"
                    >
                      {isShowLogIn ? "Log in" : ""}
                      {isLoading && (
                       <CircularProgress color="inherit" className="absolute " size={18} />
                      )}
                    </button>
                    <p className="text-center py-4">Or</p>
                    <div
                      onClick={signInWithGoogle}
                      className="flex items-center justify-center border-2 rounded-md "
                    >
                      <img src={google} alt="google icon" />
                      <p>Login with Google</p>
                    </div>
                    <div className="login">
                      <p className="text-center py-5">
                        Don't Have an account?{" "}
                        <span>
                          <Link to="/signup">Create Account</Link>
                        </span>
                      </p>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
