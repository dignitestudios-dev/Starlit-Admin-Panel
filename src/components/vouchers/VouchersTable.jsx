import { useVouchers } from "../../hooks/api/Get";
import { LuLoaderCircle } from "react-icons/lu";

// const data = [
//   {
//     id: 1,
//     title: "Lorem ipsum dolor",
//     description:
//       "Lorem ipsum dolor sit amet consectetur. In volutpat et mattis ut tristique viverra blandit. Cras sem egestas praesent enim elementum dolor arcu. Cras sem egestas praesent enim elementum dolor arcu.",
//     status: "Delivered",
//   },
//   {
//     id: 2,
//     title: "Lorem ipsum dolor",
//     description:
//       "Lorem ipsum dolor sit amet consectetur. In volutpat et mattis ut tristique viverra blandit. Cras sem egestas praesent enim elementum dolor arcu. Cras sem egestas praesent enim elementum dolor arcu.",
//     status: "Delivered",
//   },
//   {
//     id: 3,
//     title: "Lorem ipsum dolor",
//     description:
//       "Lorem ipsum dolor sit amet consectetur. In volutpat et mattis ut tristique viverra blandit. Cras sem egestas praesent enim elementum dolor arcu. Cras sem egestas praesent enim elementum dolor arcu.",
//     status: "Delivered",
//   },
//   {
//     id: 4,
//     title: "Lorem ipsum dolor",
//     description:
//       "Lorem ipsum dolor sit amet consectetur. In volutpat et mattis ut tristique viverra blandit. Cras sem egestas praesent enim elementum dolor arcu. Cras sem egestas praesent enim elementum dolor arcu.",
//     status: "Delivered",
//   },
// ];

const VouchersTable = () => {
  const { data, loading } = useVouchers("admin/list-notification");

  return (
    <div className="bg-[#fff] rounded-normal mt-4">
      <div
        className="hidden md:grid grid-cols-12 gap-4 text-[#787F8C] font-semibold text-[12px] rounded-t-normal
        bg-secondaryLight px-4"
      >
        <div className="col-span-1 py-3 text-left">S.No</div>
        <div className="col-span-2 py-3 text-left">Title</div>
        <div className="col-span-7 py-3 text-left">Description</div>
        <div className="col-span-2 py-3 text-left">Status</div>
      </div>
      <div className="text-[#202224] text-[16px]   font-[400]">
        {loading ? (
          <div className="flex justify-center items-center h-[300px]">
            <LuLoaderCircle size={30} className="animate-spin" />
          </div>
        ) : (
          data?.map((item, index) => (
            <div
              key={index}
              className="hidden md:grid grid-cols-12 gap-4 items-center border-b border-b-[#f0f0f0] py-2 mb-4 text-white text-[13px] px-4"
            >
              <div className="col-span-1 flex items-center justify-start">
                {index + 1}
              </div>
              <div className="col-span-2 flex items-center justify-start">
                {item.title}
              </div>
              <div className="col-span-7 flex items-center justify-start">
                {item.body}
              </div>
              <div className="col-span-2 flex items-center justify-start">
                <span className="bg-[#41C54E26] h-[32px] w-[87px] px-4  flex items-center justify-center text-[#41C54E] text-[13px] font-[500] rounded-normal">
                  {item.status}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default VouchersTable;
