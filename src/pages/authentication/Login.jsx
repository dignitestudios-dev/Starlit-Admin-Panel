import { useNavigate } from "react-router";
import { loginBackground, loginLogo } from "../../assets/export";
import AuthInput from "../../components/global/AuthInput";
import AuthButton from "./../../components/global/AuthButton";
import { useFormik } from "formik";
import { useLogin } from "../../hooks/api/Post";
import { processLogin } from "../../lib/utils";
import { signInValues } from "../../init/authentication/signInValues";
import { signInSchema } from "../../schema/authentication/signInSchema";

const Login = () => {
  const navigate = useNavigate();
  const { loading, postData } = useLogin();

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: signInValues,
      validationSchema: signInSchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: async (values, action) => {
        console.log("🚀 ~ onSubmit: ~ action:", action);
        postData("/admin/login", false, null, values, processLogin);
      },
    });
  return (
    <div className="md:h-screen w-full flex justify-between items-center pt-14 pl-4 mb-10 ">
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
        <form onSubmit={handleSubmit}>
          <div className="p-10">
            <div className="space-y-4">
              <p className="text-[36px] font-bold">Login</p>
              <p className="text-[16px] text-light">
                Enter below details to log in
              </p>
            </div>
            <div className="pt-8 w-[448px]">
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
              <div className="pt-3">
                <AuthInput
                  text={" Password"}
                  placeholder={"Enter password here"}
                  type={"password"}
                  id={"password"}
                  name={"password"}
                  max
                  Length={50}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors?.password}
                  touched={touched?.password}
                />
              </div>
              <div className="flex justify-end">
                <p
                  type="button"
                  onClick={() => navigate("/auth/forgot-password")}
                  className="text-primary text-[12px] font-[500] pt-1 cursor-pointer"
                >
                  Forgot password?
                </p>
              </div>
              <div className="pt-8">
                <AuthButton text="Login" type="submit" loading={loading} />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
