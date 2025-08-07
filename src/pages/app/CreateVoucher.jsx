import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router";
import AuthButton from "../../components/global/AuthButton";
import { useState, useRef } from "react";
import toast from "react-hot-toast";
import instance from "../../axios";
import { RiDeleteBin6Line } from "react-icons/ri";
import Papa from "papaparse"; // CSV parsing library

const CreateVoucher = () => {
  const uploadLimit = 1; // Only one CSV file
  const navigate = useNavigate();
  const [csvFile, setCsvFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [parsedData, setParsedData] = useState([]);
  const csvInputRef = useRef(null); // ✅ Ref for the CSV file input

  const handleCsvChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCsvFile(file);
      parseCsv(file);
    }
  };


  const handlereload = () =>{
    window.location.reload();
  }

  const parseCsv = (file) => {
    Papa.parse(file, {
      complete: (result) => {
        console.log(result); // Log parsed result to see the output structure

        const records = result.data.map((row) => {
          // Ensure that each row has the correct structure
          return {
            type: row.type, // Accessing columns by header names directly
            code: row.code,
            amount: row.amount ? row.amount : null, // Handle null or undefined amounts
          };
        });

        setParsedData(records);
      },
      header: true, // This tells Papa to treat the first row as header
      skipEmptyLines: true, // Skips empty lines in the CSV
    });
  };

  const handleRemoveFile = () => {
    setCsvFile(null);        // Clear the selected file
    setParsedData([]);       // Clear the preview data
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    console.log("Submitting CSV data:", parsedData);

    try {
      if (!parsedData.length) {
        toast.error("Please upload a valid CSV file with voucher data.");
        return;
      }

      // if (parsedData.length > uploadLimit) {
      //   toast.error("Maximum 1 CSV file upload allowed.");
      //   return;
      // }

      const payload = { records: parsedData };

      const response = await instance.post("/admin/coupon", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Response voucher upload:", response);
      setParsedData([]);
      // navigate("/app/vouchers");
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
        <p className="text-heading text-base font-semibold">Upload CSV</p>
      </div>

      <form className="" onSubmit={handleSubmit}>
        {/* CSV Upload */}
        <div className="rounded-normal bg-[#ffffff] p-4 mb-4 flex items-center gap-5">
          {/* Hidden input */}
          <input
            ref={csvInputRef}
            type="file"
            accept=".csv"
            onChange={handleCsvChange}
            className="hidden"
            disabled={loading}
          />

          {/* Custom button */}
          <button
            type="button"
            onClick={() => csvInputRef.current?.click()}
            className="bg-primary text-[#ffffff] h-[50px] w-fit rounded-[9px] px-[22px]"
          >
            Select CSV
          </button>

          <p className="text-[#8c8c8c]">
            {csvFile
              ? "Note: Double-click to remove the file"
              : "Upload a CSV file (Maximum 1 file allowed)"}
          </p>
        </div>

        {/* Preview CSV Data */}
        {parsedData.length > 0 && (
          <div className="bg-[#f4f4f4] p-4 rounded-lg">
            <h3 className="font-semibold text-lg">Preview Data</h3>
            <table className="w-full mt-2">
              <thead>
                <tr>
                  <th className="text-left">Type</th>
                  <th className="text-left">Code</th>
                  <th className="text-left">Amount</th>
                </tr>
              </thead>
              <tbody>
                {parsedData.map((record, index) => (
                  <tr key={index}>
                    <td>{record.type}</td>
                    <td>{record.code}</td>
                    <td>{record.amount || "N/A"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <div className="w-[150px]">
            <AuthButton text="Submit" type="submit" loading={loading} />
          </div>
          <button
            type="button"
            onClick={handleRemoveFile}  // Call the new function to remove the file and preview data
            className="bg-[#E9E9E9] w-[150px] h-[50px] rounded-[9px] text-[#000000] text-[14px] font-[700]"
          >
            Remove File
          </button>
          <button
            type="button"
            onClick={handlereload}  // Call the new function to remove the file and preview data
            className="bg-[#E9E9E9] w-[150px] h-[50px] rounded-[9px] text-[#000000] text-[14px] font-[700]"
          >
 Reload
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateVoucher;
