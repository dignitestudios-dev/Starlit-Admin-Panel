import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router";

import { useFormik } from "formik";
import { CreateNotificationSchema } from "../../schema/notification/CreateNotificationSchema";
import { CreateNotificationValues } from "../../init/notification/CreateNotificationValues";
import Calender from "../../components/global/Calendar";
import TimePicker from "../../components/global/TimePicker";
import { useLogin } from "../../hooks/api/Post";
import { processLogin, processNotification } from "../../lib/utils";
import AuthButton from "../../components/global/AuthButton";

const CreateNotification = () => {
  const navigate = useNavigate();
  const {postData,loading}=useLogin();
  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: CreateNotificationValues,
    validationSchema: CreateNotificationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values, action) => {
      console.log("🚀 ~ onSubmit: ~ action:", action);
      console.log("🚀 ~ onSubmit: ~ values:", values);
      const data={
        title:values.title,
        body:values.description,
        scheduledTime:values.startDate,
      }
      postData("/admin/save-notification", false, null, data, processNotification);
      // Use the loading state to show loading spinner
      // Use the response if you want to perform any specific functionality
      // Otherwise you can just pass a callback that will process everything
    },
  });
  return (
    <div className="w-full h-screen overflow-y-auto px-6 py-4">
      <div className="flex items-center gap-6 mb-4">
        <button className="text-[34px]" onClick={() => navigate(-1)}>
          <IoIosArrowRoundBack />
        </button>
        <p className="text-heading text-base font-semibold">
          Create Notification
        </p>
      </div>

      <form
        className="space-y-6 p-4 rounded-normal bg-[#ffffff]"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="text-[14px] font-medium text-[#181818] block mb-2">
            Title of Notification
          </label>
          <input
            type="text"
            placeholder="Type Here..."
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            id="title"
            name="title"
            maxLength={50}
            className="border border-[#D1D1D1] focus:outline-none focus:ring-2 focus:ring-blue-300 w-full rounded-[12px] p-4 text-[14px] placeholder:text-[#B9B9B9]"
            style={{ border: "1px solid", borderColor: "#00000030" }}
          />
          {errors && (
            <p className="text-error text-normal pt-1">{errors.title}</p>
          )}
        </div>

        <div>
          <label className="text-[14px] font-medium text-[#181818] block mb-2">
            Description of Notification
          </label>
          <textarea
            placeholder="Type Here..."
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            id="description"
            name="description"
            maxLength={250}
            className="border border-[#D1D1D1] focus:outline-none focus:ring-2 focus:ring-blue-300 w-full rounded-[12px] p-4 text-[14px] placeholder:text-[#B9B9B9]"
            rows={4}
          ></textarea>
          {errors && (
            <p className="text-error text-normal">{errors.description}</p>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="">
            <label className="text-[14px] font-medium text-[#181818] block mb-2">
              Select Date
            </label>
            <Calender
              startDate={values.startDate}
              setStartDate={(date) => setFieldValue("startDate", date)}
              position="left-0"
              text="Select Date"
            />
            {errors.startDate && touched.startDate && (
              <p className="text-error text-normal">{errors.startDate}</p>
            )}
          </div>
          <div className="">
            <label className="text-[14px] font-medium text-[#181818] block mb-2">
              Select Time
            </label>
            <TimePicker
              value={values.time}
              onSave={({ time }) => setFieldValue("time", time)}
              //   onCancel={() => setFieldValue("time", "")}
            />
            {errors.time && touched.time && (
              <p className="text-error text-normal">{errors.time}</p>
            )}
          </div>
        </div>
        <div className="flex gap-6">
          <div className="w-[150px]">
          <AuthButton text="Create" type="submit" loading={loading} />
          </div>
          <div>
            <button className="bg-[#E9E9E9] w-[150px] h-[50px] rounded-[9px] text-[#000000] text-[14px] font-[700] ">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateNotification;
