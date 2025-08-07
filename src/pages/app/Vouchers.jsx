import { useNavigate } from "react-router";
import instance from "../../axios";
import { useVouchers } from "../../hooks/api/Get";
import { useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { LuLoaderCircle } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";

const Vouchers = () => {
  const navigate = useNavigate();
  const { data, loading, getVouchers } = useVouchers("/admin/coupons");
  const [loadingSend, setLoadingSend] = useState(false);
  const [loadingRemove, setLoadingRemove] = useState(false);

  const handleSendVouchers = async () => {
    setLoadingSend(true);
    try {
      const response = await instance.post("/admin/send");
      Swal.fire({
        title: "Vouchers sent successfully!",
        text: "Vouchers have been sent to the matched users.",
        icon: "success",
      });
      await getVouchers();
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.error || error?.message || "Something went wrong");
    } finally {
      setLoadingSend(false);
    }
  };

  const handleRemoveVouchers = async (filename) => {
    if (!filename) return;
    setLoadingRemove(true);

    try {
      const response = await instance.post("/admin/remove", { filename });
      toast.success(response?.message || "Coupon deleted successfully.");
      await getVouchers();
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.error || error?.message || "Something went wrong");
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
            className="h-[42px] w-[186px] bg-primary rounded-[8px] text-[#ffffff] text-[14px] flex items-center justify-center gap-2"
            onClick={handleSendVouchers}
          >
            Send Vouchers{" "}
            {loadingSend && <LuLoaderCircle className="animate-spin" />}
          </button>
          <button
            type="button"
            className="ms-3 h-[42px] w-[186px] bg-primary rounded-[8px] text-[#ffffff] text-[14px]"
            onClick={() => navigate("/app/create-voucher")}
          >
            + Create Voucher
          </button>
        </div>
      </div>

      {/* Displaying vouchers in a table */}
      <div className="overflow-x-auto bg-white p-4 rounded-lg shadow-lg">
        {loading ? (
          <div className="text-center">Loading vouchers...</div>
        ) : !data?.coupons?.length ? (
          <div className="text-center">No vouchers available.</div>
        ) : (
          <table className="table-auto w-full text-left text-sm text-gray-700">
            <thead>
              <tr className="bg-primary text-[#fff]">
                <th className="py-2 px-4 text-white">Type</th>
                <th className="py-2 px-4">Code</th>
                <th className="py-2 px-4">Amount</th>
              </tr>
            </thead>
            <tbody>
              {data?.coupons?.map((voucher, index) => (
                <tr
                  key={voucher._id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-gray-200 transition-all`}
                >
                  <td className="py-2 px-4">{voucher.type}</td>
                  <td className="py-2 px-4">{voucher.code}</td>
                  <td className="py-2 px-4">{voucher.amount || "0"}</td>
                 
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Vouchers;
