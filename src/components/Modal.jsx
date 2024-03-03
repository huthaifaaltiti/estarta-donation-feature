import { useState } from "react";

import Alert from "@mui/material/Alert";

const SubmissionModal = ({
  isOpen,
  closeModal,
  selectedOrganization,
  donationAmount,
  startDate,
  endDate,
  isRecurring,
  handleSubmit,
}) => {
  return (
    <>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="z-50 bg-[#F9FAFB] w-[930px] h-601 px-[62px] py-[68px] rounded-lg shadow-xl">
          <div className="w-full h-30 flex items-center gap-3 mb-[36.08px]">
            <div className="w-[30px] flex">
              <img
                src="/assets/icon2.png"
                alt="donation icon"
                style={{ transform: "scaleX(-1)" }}
              />
            </div>
            <h3 className="text-[#1B4DFF] text-xl leading font-normal">
              Donation Information
            </h3>
          </div>

          <div className="bg-white p-[10px] rounded mb-[24px]">
            <p className="text-[#EB7101]">
              By confirming this form, you will be providing your approval for
              the concern team to deduct this amount of JOD from your next
              payroll(s).
            </p>
          </div>

          <div className="w-full text-[#8EA6BF] flex flex-col gap-5">
            <div className="w-full flex items-center justify-between gap-[60px]">
              <div className="w-1/2">
                <label className="text-sm">Organization</label>
                <input
                  type="text"
                  value={selectedOrganization}
                  className={`w-full px-3 mt-2 py-2 bg-white text-[#8EA6BF] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                />
              </div>
              <div className="w-1/2">
                <label className="text-sm">Donation Amount(JOD)</label>
                <input
                  type="text"
                  value={donationAmount}
                  className={`w-full px-3 mt-2 py-2 bg-white text-[#8EA6BF] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                />
              </div>
            </div>

            <div className="w-full flex items-center justify-between gap-[60px]">
              <div className="w-1/2">
                <label className="text-sm">Start Date</label>
                <input
                  type="text"
                  value={startDate}
                  className={`w-full px-3 mt-2 py-2 bg-white text-[#8EA6BF] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                />
              </div>
              <div className="w-1/2">
                <label className="text-sm">End Date</label>
                <input
                  type="text"
                  value={endDate}
                  className={`w-full px-3 mt-2 py-2 bg-white text-[#8EA6BF] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                />
              </div>
            </div>

            <div className="w-full flex items-center gap-1">
              <input
                type="checkbox"
                id="recurring"
                checked={isRecurring}
                className="mr-2 w-4 h-4 accent-white focus:aaccent-[#1B4DFF]"
              />
              <label
                className="text-[#1B4DFF] text-sm font-normal leading-[18px]"
                htmlFor="recurring"
              >
                Recurring Donation
              </label>
            </div>

            <div className="w-full flex items-center justify-center gap-4 mt-[36px]">
              <button
                className="w-[285px] px-6 py-3 text-sm font-medium text-[#8EA6BF] bg-white rounded-md border border-[#8EA6BF]"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="w-[285px] px-6 py-3 text-sm font-medium text-white bg-[#1B4DFF] rounded-md"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubmissionModal;
