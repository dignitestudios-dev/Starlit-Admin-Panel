import { useNavigate } from "react-router";
import instance, { baseUrl } from "../../axios";
import VouchersTable from "../../components/vouchers/VouchersTable";
import { useVouchers } from "../../hooks/api/Get";
import { useState } from "react";
import toast from "react-hot-toast";
import { LuLoaderCircle } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
// import Filter from "../../../components/global/Filter";

const Vouchers = () => {
  const navigate = useNavigate();
  const { data, loading, getVouchers } = useVouchers("admin/coupon");
  const [loadingSend, setLoadingSend] = useState(false);
  const [loadingRemove, setLoadingRemove] = useState(false);

  const handleSendVouchers = async () => {
    setLoadingSend(true);

    try {
      const response = await instance.post("/admin/send");

      toast.success(response?.message || "Coupons sent successfully.");
      await getVouchers();
    } catch (error) {
      console.log(error);
      toast.error(
        error?.response?.data?.error || error?.message || "Something went wrong"
      );
    } finally {
      setLoadingSend(false);
    }
  };

  const handleRemoveVouchers = async (filename) => {
    console.log("filename: ", filename);
    if (!filename) return;
    setLoadingRemove(true);

    try {
      const response = await instance.post("/admin/remove", {
        filename,
      });

      toast.success(response?.message || "Coupon deleted successfully.");
      await getVouchers();
    } catch (error) {
      console.log(error);
      toast.error(
        error?.response?.data?.error || error?.message || "Something went wrong"
      );
    } finally {
      setLoadingRemove(false);
    }
  };

  return (
    <div className="w-full h-auto overflow-y-auto px-6 py-4 overflow-x-hidden">
      <div className="grid grid-cols-2 items-center justify-between pb-4">
        <div>
          <p className="text-heading text-base font-semibold">Vouchers</p>
        </div>
        <div className="flex items-center justify-end w-full">
          <button
            type="button"
            disabled={loadingSend}
            className="h-[42px] w-[186px] bg-primary  rounded-[8px] text-[#ffffff] text-[14px] flex items-center justify-center gap-2"
            onClick={handleSendVouchers}
          >
            Send Vouchers{" "}
            {loadingSend && <LuLoaderCircle className="animate-spin" />}
          </button>
          <button
            type="button"
            className="ms-3 h-[42px] w-[186px] bg-primary  rounded-[8px] text-[#ffffff] text-[14px]"
            onClick={() => navigate("/app/create-voucher")}
          >
            + Create Voucher
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {loading ? (
          <>
            <div className="h-[400px] rounded-normal bg-[#e1e1e1] bg-center bg-contain bg-no-repeat animate-pulse" />
            <div className="h-[400px] rounded-normal bg-[#e1e1e1] bg-center bg-contain bg-no-repeat animate-pulse" />
            <div className="h-[400px] rounded-normal bg-[#e1e1e1] bg-center bg-contain bg-no-repeat animate-pulse" />
            <div className="h-[400px] rounded-normal bg-[#e1e1e1] bg-center bg-contain bg-no-repeat animate-pulse" />
            <div className="h-[400px] rounded-normal bg-[#e1e1e1] bg-center bg-contain bg-no-repeat animate-pulse" />
            <div className="h-[400px] rounded-normal bg-[#e1e1e1] bg-center bg-contain bg-no-repeat animate-pulse" />
          </>
        ) : !data?.images?.length ? (
          <div className="col-span-full h-[60vh] w-full flex justify-center items-center">
            <p className="text-[#8c8c8c]">
              No vouchers have been created yet. Start by uploading a new
              voucher to share with matched users.
            </p>
          </div>
        ) : (
          data?.images?.map((voucher, index) => {
            console.log(`${index} ${voucher.url}`);
            return (
              <div
                key={index}
                className="relative group h-[400px] rounded-normal bg-[#cbcbcb] bg-center bg-contain bg-no-repeat flex justify-center items-center overflow-hidden"
                // style={{ backgroundImage: `url(${voucher.url})` }}
              >
                <img src={voucher.url} alt="" />
                <div className="absolute w-full h-full flex justify-center items-center bg-[#0000005a] rounded-normal opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <RiDeleteBin6Line
                    size={50}
                    className="text-error cursor-pointer"
                    onClick={() => handleRemoveVouchers(voucher.filename)}
                  />
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* <VouchersTable /> */}
    </div>
  );
};

export default Vouchers;
