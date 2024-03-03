import { useState, useRef } from "react";

import Modal from "../../components/Modal";

import { donationBeneficiaryList } from "./helper";

import { Alert, Box } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import "./styles.css";

const Giving = () => {
  const startDateRef = useRef(null);
  const endDateRef = useRef(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOrganization, setSelectedOrganization] = useState("");
  const [donationAmount, setDonationAmount] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isRecurring, setIsRecurring] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const handleOrganizationChange = (event) => {
    setSelectedOrganization(event.target.value);
  };

  const handleAmountChange = (event) => {
    setDonationAmount(event.target.value);
  };

  const handleStartDateChange = (event) => {
    const selectedStartDate = event.target.value;
    setStartDate(selectedStartDate);

    const startDateObj = new Date(selectedStartDate);
    const endDateObj = new Date(
      startDateObj.getFullYear(),
      startDateObj.getMonth() + 1,
      startDateObj.getDate()
    );
    const formattedEndDate = endDateObj.toISOString().split("T")[0];
    setEndDate(formattedEndDate);
  };

  const handleRecurringChange = () => {
    setIsRecurring(!isRecurring);

    if (!isRecurring) {
      setEndDate("");
    }

    const startDateObj = new Date(startDate);
    const endDateObj = new Date(
      startDateObj.getFullYear(),
      startDateObj.getMonth() + 1,
      startDateObj.getDate()
    );
    const formattedEndDate = endDateObj.toISOString().split("T")[0];
    setEndDate(formattedEndDate);
  };

  const handleSubmit = async () => {
    const formData = {
      ETId: "",
      EmployeeProfileID: "1255",
      TransactionID: "",
      TransactionType: "",
      Amount: parseFloat(donationAmount),
      StartDate: startDate,
      EndDate: endDate,
      TransactionNote: "",
      IsMontheyRecurrence: isRecurring,
    };

    try {
      const response = await fetch("https://10.2.2.3/Training/Submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Donation submitted successfully!");
        setSubmissionSuccess(true);
        setFormSubmitted(false);
      } else {
        console.error("Failed to submit donation:", response.statusText);
        setSubmissionSuccess(false);
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmissionSuccess(false);
    }

    closeModal();
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="w-full h-[1080px] flex items-center">
        <div className="w-[354px] h-full bg-white"></div>
        <div className="w-full h-full bg-[#BCCAD9]">
          <div className="w-full h-[120px] border-b border-[#a9bacd]"></div>
          <div className="pt-[48px] pl-[20px] pr-[45px] relative">
            <div className="">
              {submissionSuccess && (
                <Box
                  sx={{
                    width: "576px",
                    backgroundColor: "#11A75C",
                    padding: "16px",
                    borderRadius: "16px",
                    position: "absolute",
                    top: "24px",
                    right: "45px",
                  }}
                >
                  <div className="h-[24px] flex items-center justify-end">
                    <HighlightOffIcon
                      onClick={() => {
                        setSubmissionSuccess(false);
                      }}
                    />
                  </div>
                  <Alert
                    sx={{
                      backgroundColor: "#11A75C",
                      color: "#fff",
                      fontSize: "20px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Donation Has Been Submitted Successfully.
                  </Alert>
                </Box>
              )}
            </div>
            <h2 className="text-2xl text-[#1B4DFF] leading-[18px] font-medium">
              Donations
            </h2>
            <div className="w-full bg-white mt-[53px] rounded-lg p-3">
              <ul className="text-[#6989AA] capitalize list-disc space-y-4 list-inside pl-5">
                <li>
                  The amount of the donation shall not exceed the 30% of your
                  salary.
                </li>
                <li>
                  In case of recurring donation, it will be deduction from every
                  payroll till the end of the selected period.
                </li>
                <li>
                  The recurring donation shall not exceed the three months.
                </li>
              </ul>
            </div>
            <div className="w-full bg-[#F9FAFB] mt-[24px] pl-[60px] py-[68px] rounded-lg flex items-center gap-3">
              <div className="w-full">
                <h3 className="text-xl text-[#1B4DFF] leading-[18px] font-medium">
                  Donations Form
                </h3>
                <div className="w-[327px] pt-[50px]">
                  <label
                    className="text-[#8EA6BF] text-sm leading-[18px] flex items-center gap-1"
                    htmlFor="organization"
                  >
                    Organization
                    {formSubmitted && !selectedOrganization && (
                      <span className="text-red-500 text-base">*</span>
                    )}
                  </label>
                  <select
                    required
                    id="organization"
                    value={selectedOrganization}
                    onChange={handleOrganizationChange}
                    className={`w-full px-3 mt-2 py-2 bg-white text-[#8EA6BF] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-50`}
                  >
                    <option className="text-xs disabled">Organization</option>
                    {donationBeneficiaryList.map((org) => (
                      <option
                        key={org.donationBeneficiaryId}
                        value={org.donationBeneficiaryNameEn}
                      >
                        {org.donationBeneficiaryNameEn}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-[327px] mt-4">
                  <label
                    className="flex items-center gap-1 text-[#8EA6BF] text-sm leading-[18px]"
                    htmlFor="donationAmount"
                  >
                    Donation Amount(JD)
                    {formSubmitted && !donationAmount && (
                      <span className="text-red-500 text-base">*</span>
                    )}
                  </label>
                  <input
                    min={1}
                    type="number"
                    placeholder="Donation Amount(JD)"
                    id="donationAmount"
                    value={donationAmount}
                    onChange={handleAmountChange}
                    required
                    className={`w-full px-3 mt-2 py-2 bg-white text-[#8EA6BF] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  />
                </div>
                {/* Dates */}
                <div className="w-full flex items-center justify-between gap-5 mt-3 dates">
                  <div className="w-[327px] flex flex-col justify-center">
                    <label
                      className="flex items-center gap-1 text-[#8EA6BF] text-sm leading-[18px]"
                      htmlFor="startDate"
                    >
                      Start Date
                      {formSubmitted && !startDate && (
                        <span className="text-red-500 text-base">*</span>
                      )}
                    </label>
                    <input
                      ref={startDateRef}
                      onFocus={() => (startDateRef.current.type = "date")}
                      onBlur={() => (startDateRef.current.type = "date")}
                      required
                      type="text"
                      placeholder="Start Date"
                      id="startDate"
                      name="donation-start"
                      value={startDate}
                      onChange={handleStartDateChange}
                      min={today}
                      className={`w-full px-3 mt-2 py-2 bg-white fill-current text-[#8EA6BF] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                    />
                  </div>
                  <div className="w-[327px] flex flex-col justify-center">
                    <label
                      className="flex items-center gap-1 text-[#8EA6BF] text-sm leading-[18px]"
                      htmlFor="endDate"
                    >
                      End Date
                      {formSubmitted && !endDate && isRecurring && (
                        <span className="text-red-500 text-base">*</span>
                      )}
                    </label>
                    <input
                      ref={endDateRef}
                      onFocus={() => (endDateRef.current.type = "date")}
                      onBlur={() => (endDateRef.current.type = "date")}
                      required={isRecurring}
                      type="text"
                      placeholder="End Date"
                      id="endDate"
                      value={endDate}
                      onChange={(event) => setEndDate(event.target.value)}
                      className={`w-full px-3 mt-2 py-2 bg-white text-[#8EA6BF] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                    />
                  </div>
                  <div className="w-[166px] flex items-center justify-center mt-5">
                    <input
                      type="checkbox"
                      id="recurring"
                      checked={isRecurring}
                      onChange={handleRecurringChange}
                      className="mr-2 w-4 h-4 accent-white focus:aaccent-[#1B4DFF]"
                    />
                    <label
                      className="text-[#1B4DFF] text-sm font-normal leading-[18px]"
                      htmlFor="recurring"
                    >
                      Recurring Donation
                    </label>
                  </div>
                </div>
                {formSubmitted && (
                  <p className={`text-red-400 text-xs mt-[12px]`}>
                    Please fill all the required fields
                  </p>
                )}
                <div className="w-[327px] mt-[18px]">
                  <button
                    onClick={() => {
                      if (
                        !selectedOrganization ||
                        !donationAmount ||
                        !startDate ||
                        (!endDate && isRecurring)
                      ) {
                        setFormSubmitted(true);
                      } else {
                        setFormSubmitted(false);
                        setModalOpen(true);
                      }
                    }}
                    className="w-full mt-[12px] px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600"
                  >
                    Submit
                  </button>
                </div>
              </div>

              <div className="w-2/4 text-black flex justify-end">
                <img
                  width={285}
                  height={274.92}
                  src="../../public/assets/icon2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalOpen}
        closeModal={closeModal}
        selectedOrganization={selectedOrganization}
        donationAmount={donationAmount}
        startDate={startDate}
        endDate={endDate}
        isRecurring={isRecurring}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default Giving;
