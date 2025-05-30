import { useNavigate } from "react-router";
import { loginBackground, loginLogo } from "../../assets/export";
import AuthInput from "../../components/global/AuthInput";
import AuthButton from "./../../components/global/AuthButton";
import { useState } from "react";
import ResetPasswordModal from "../../components/authentication/ResetPasswordModal";
import { useFormik } from "formik";
import { resetPasswordValues } from "../../init/authentication/signInValues";
import { processLogin } from "../../lib/utils";
import { resetPasswordSchema } from "../../schema/authentication/signInSchema";
import { useLogin } from "../../hooks/api/Post";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [modal, setModalOpen] = useState(false);
  console.log("🚀 ~ ResetPassword ~ modal:", modal);

  const openResetModal = () => {
    setModalOpen(true);
  };

  const otpEmail = sessionStorage.getItem("email");
  console.log("🚀 ~ ResetPassword ~ otpEmail:", otpEmail);

  const { loading, postData } = useLogin();
  console.log("🚀 ~ Login ~ loading:", loading);

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: resetPasswordValues,
      validationSchema: resetPasswordSchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: async (values, action) => {
        const payload = {
          password: values.password,
          confirm_password: values.confirm_password,
          email: sessionStorage.getItem("email"),
        };

        postData("/admin/resetpassword", false, null, payload, null);
        openResetModal();
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
        <div className="p-10">
          <div className="space-y-4">
            <p className="text-[36px] font-bold">Reset Password</p>
            <p className="text-[16px] text-light">Set nee password</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="pt-8 w-[448px]">
              <AuthInput
                text={"New password"}
                placeholder={"Enter new password"}
                type={"password"}
                id={"password"}
                name={"password"}
                maxLength={50}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors?.password}
                touched={touched?.password}
              />
              <div className="pt-3">
                <AuthInput
                  text={"Re-type password"}
                  placeholder={"Re-type password here"}
                  type={"password"}
                  id={"confirm_password"}
                  name={"confirm_password"}
                  max
                  Length={50}
                  value={values.confirm_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors?.confirm_password}
                  touched={touched?.confirm_password}
                />
              </div>
              <div className="pt-8">
                <AuthButton text="Update" type={"submit"} loading={loading} />
              </div>
            </div>
          </form>
        </div>
      </div>
      <ResetPasswordModal
        showModal={modal}
        handleClose={() => {
          setModalOpen(false);
          navigate("/auth/login");
        }}
      />
    </div>
  );
};

export default ResetPassword;
