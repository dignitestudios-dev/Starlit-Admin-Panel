import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router";
import AuthButton from "../../components/global/AuthButton";
import { useState, useRef } from "react";
import toast from "react-hot-toast";
import instance from "../../axios";

const CreateVoucher = () => {
  const uploadLimit = 10;
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const imageInputRef = useRef(null); // ✅ Ref for the file input
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages((prev) => [...prev, ...files]);
  };

  const handleImageRemove = (indexToRemove) => {
    setImages((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const handleRemoveAll = () => {
    setImages([]);
    if (imageInputRef.current) {
      imageInputRef.current.value = null; // ✅ Reset input value
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    console.log("Submitting images:", images);

    try {
      if (!images.length) {
        toast.error("Please select at least one voucher to upload.");
        return;
      }

      if (images.length > uploadLimit) {
        toast.error("Maximum 10 uploads allowed at once.");
        return;
      }

      const formData = new FormData();
      images.forEach((file) => {
        formData.append("files", file);
      });

      const response = await instance.post(`/admin/upload-coupon`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Response voucher upload:", response);
      setImages([]);
      toast.success("Vouchers uploaded successfully!");
    } catch (error) {
      console.log(error);
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen overflow-y-auto px-6 py-4">
      <div className="flex items-center gap-6 mb-4">
        <button className="text-[34px]" onClick={() => navigate(-1)}>
          <IoIosArrowRoundBack />
        </button>
        <p className="text-heading text-base font-semibold">Upload Images</p>
      </div>

      <form className="" onSubmit={handleSubmit}>
        {/* Image Upload */}
        <div className="rounded-normal bg-[#ffffff] p-4 mb-4 flex items-center gap-5">
          {/* Hidden input */}
          <input
            ref={imageInputRef}
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            disabled={loading}
          />

          {/* Custom button */}
          <button
            type="button"
            onClick={() => imageInputRef.current?.click()}
            className="bg-primary text-[#ffffff] h-[50px] w-fit rounded-[9px] px-[22px]"
          >
            Select Images
          </button>

          <p className="text-[#8c8c8c]">
            {images.length
              ? "Note: Double click on any file to remove"
              : `Upload vouchers (Maximum ${uploadLimit} uploads allowed at once)`}
          </p>
        </div>

        {/* Preview Images */}
        {images.length > 0 && (
          <div className="grid grid-cols-5 md:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
                onDoubleClick={() => handleImageRemove(index)}
                key={index}
                className="h-[200px] rounded-normal bg-[#e0e0e0] bg-center bg-contain bg-no-repeat"
                style={{
                  backgroundImage: `url(${URL.createObjectURL(image)})`,
                }}
              />
            ))}
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <div className="w-[150px]">
            <AuthButton text="Submit" type="submit" loading={loading} />
          </div>
          <button
            type="button"
            onClick={handleRemoveAll}
            className="bg-[#E9E9E9] w-[150px] h-[50px] rounded-[9px] text-[#000000] text-[14px] font-[700]"
          >
            Remove All
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateVoucher;
