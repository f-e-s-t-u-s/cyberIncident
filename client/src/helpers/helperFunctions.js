// this will containe all functions needed in the pages folder
import axios from "axios";

const SERVER_URL = "http://localhost:8000";

// USER LOGIN
export const handleLogin = async (values) => {
  try {
    const response = await axios.post(
      `${SERVER_URL}/api/v1/user-login`,
      values
    );
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
// USER SIGNUP
export const handleSignup = async (data) => {
  try {
    const response = await axios.post(
      `${SERVER_URL}/api/v1/create-account`,
      data
    );
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// GET PASSWORD RESET LINK
export const handleForgot = async (data) => {
  try {
    const response = await axios.post(`${SERVER_URL}/api/v1/forgot`, data);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// POST NEW PASSWORD RESET INFO
export const handlePasswordReset = async (values) => {
  try {
    const token = values.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(
      `${SERVER_URL}/api/v1/reset`,
      values,
      config
    );
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// POST EMAIL VERIFICATION CODE
export const emailVerificationCode = async (data) => {
  try {
    const response = await axios.post(`${SERVER_URL}/api/v1/verify`, data);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
