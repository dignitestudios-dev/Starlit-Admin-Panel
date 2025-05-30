import { useNavigate } from "react-router";
import instance, { baseUrl } from "../../axios";
import VouchersTable from "../../components/vouchers/VouchersTable";
import { useVouchers } from "../../hooks/api/Get";
import { useState } from "react";
import toast from "react-hot-toast";
import { LuLoaderCircle } from "react-icons/lu";
// import Filter from "../../../components/global/Filter";

const Vouchers = () => {
  const navigate = useNavigate();
  const { data, loading } = useVouchers("admin/count");
  const [loadingSend, setLoadingSend] = useState(false);

  const handleSendVouchers = async () => {
    setLoadingSend(true);

    try {
      const response = await instance.post("/admin/send");

      toast.success(response?.message || "Coupons sent successfully.");
    } catch (error) {
      console.log(error);
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Something went wrong"
      );
    } finally {
      setLoadingSend(false);
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
          <p className="text-[#8c8c8c]">No voucher</p>
        ) : (
          data?.images?.map((voucher, index) => {
            console.log(voucher);
            return (
              <div
                key={index}
                className="h-[400px] rounded-normal bg-[#cbcbcb] bg-center bg-contain bg-no-repeat"
                style={{ backgroundImage: `url(${voucher.url})` }}
              />
            );
          })
        )}
      </div>

      {/* <VouchersTable /> */}
    </div>
  );
};

export default Vouchers;
