import { ErrorToast, SuccessToast } from "../components/global/Toaster";
import Cookies from "js-cookie";
export const processSignup = (data, navigate) => {
  if (data?.success) {
    navigate("/app/dashboard");
    return;
  }
};

export const processLogin = (data, navigate) => {
  if (data?.success) {
    console.log(data);
    Cookies.set("token",data?.result?.token)
    navigate("/app/dashboard");
    return;
  }
};
export const processNotification = (data, navigate) => {
  if (data?.status) {
    navigate("/app/notification");
    return;
  }
};

export const processForgot = (data, navigate) => {
  console.log(data,"dataCome")
  if (data?.success) {
    sessionStorage.setItem("email", data?.result?.email);
    navigate("/auth/verify-otp");
    return;
  }
};
export const processVerifyOtp = (data, navigate) => {
  if (data?.success) {
    navigate("/auth/reset-password");
    return;
  }
};

export const processResend = (data) => {
  if (data?.success) {
    SuccessToast(data?.message);
    return;
  }
};

export const processError = (error) => {
  console.log(error?.response?.data?.error,"errpss")
  if (error?.response?.data?.error) {
    ErrorToast(error?.response?.data?.error);
    return;
  } else {
    ErrorToast("Server Error");
  }
};
