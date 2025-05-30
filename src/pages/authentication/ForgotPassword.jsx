import { useNavigate } from "react-router";
import { loginBackground, loginLogo } from "../../assets/export";
import AuthInput from "../../components/global/AuthInput";
import AuthButton from "./../../components/global/AuthButton";
import { BsArrowLeft } from "react-icons/bs";
import { useFormik } from "formik";
import { forgotPasswordValues } from "../../init/authentication/signInValues";
import { forgotPasswordSchema } from "../../schema/authentication/signInSchema";
import { processForgot } from "../../lib/utils";
import { useLogin } from "../../hooks/api/Post";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { loading, postData } = useLogin();
  console.log("🚀 ~ ForgotPassword ~ loading:", loading);

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: forgotPasswordValues,
      validationSchema: forgotPasswordSchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: async (values, action) => {
        console.log("🚀 ~ onSubmit: ~ action:", action);

        postData("/admin/forgotpassword", false, null, values, processForgot);
      },
    });
  return (
    <div className="h-screen w-full flex justify-between items-center pt-14 pl-4 mb-10 ">
      <div
        className="w-full h-screen p-8 rounded-b-normal"
        style={{
          backgroundImage: `url(${loginBackground})`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="w-full h-screen ">
        <div>
          <img src={loginLogo} alt="logo" className="h-[162] w-[258px]" />
        </div>
        <div className="p-10 mt-12">
          <span onClick={() => navigate(-1)} className="cursor-pointer">
            <BsArrowLeft size={28} />
          </span>
          <div className="space-y-4">
            <p className="text-[36px] font-bold">Forgot Password</p>
            <p className="text-[16px] text-light">
              Enter your registered email address to recover password
            </p>
          </div>
          <div className="pt-8 w-[448px]">
            <form className="w-[448px]" onSubmit={handleSubmit}>
              <AuthInput
                text={"Email address"}
                placeholder={"Enter email here"}
                type={"email"}
                id={"email"}
                name={"email"}
                maxLength={50}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors?.email}
                touched={touched?.email}
              />
              <div
                className="pt-8"
                // onClick={() => navigate("/auth/verify-otp")}
              >
                <AuthButton text="Next" type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
