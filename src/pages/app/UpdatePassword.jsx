import { UpdatePasswordImg } from "../../assets/export";
import InputField from "../../components/global/InputField";

const UpdatePassword = () => {
  return (
    <div className="w-full h-auto overflow-y-auto px-6 py-4">
      <div className="grid grid-cols-1 items-center justify-between">
        <div className="mb-4">
          <p className="text-heading text-base font-semibold">
            Update Password
          </p>
        </div>
        <div className="bg-[#ffffff] p-6 rounded-[16px] grid lg:grid-cols-2  justify-center ">
          <div>
            <p className="text-[#565656] text-[16px] font-[400] tracking-[-1.4%] ">
              Update your Password
            </p>
            <div className="w-[380px] mt-6">
              <InputField
                text={"Current Password"}
                placeholder={"Enter password here"}
                type={"password"}
                id={"currentPassword"}
                name={"currentPassword"}
                maxLength={50}
              />
            </div>
            <div className="w-[380px] mt-6">
              <InputField
                text={"New Password"}
                placeholder={"Enter new password here"}
                type={"password"}
                id={"newPassword"}
                name={"newPassword"}
                maxLength={50}
              />
            </div>
            <div className="w-[380px] mt-6">
              <InputField
                text={"Confirm Password"}
                placeholder={"Re enter password here"}
                type={"password"}
                id={"confirmNewPassword"}
                name={"confirmNewPassword"}
                maxLength={50}
              />
            </div>
            <div className="mt-6">
              <button className="bg-primary text-[#ffffff] h-[45px] w-[380px] rounded-[9px]">
                Update
              </button>
            </div>
          </div>
          <div>
            <img
              src={UpdatePasswordImg}
              className="w-[500px] h-[500px] object-contain "
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
