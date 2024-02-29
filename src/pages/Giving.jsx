import { useState } from "react";

const Giving = () => {
  const [selectedOrganization, setSelectedOrganization] = useState("");
  const [donationAmount, setDonationAmount] = useState("Donation Amount(JD)");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isRecurring, setIsRecurring] = useState(false);

  const donationBeneficiaryList = [
    {
      donationBeneficiaryId: 3,
      deductionId: 32,
      donationBeneficiaryNameEn: "Takyet Um Ali",
      donationBeneficiaryNameAr: "تكية أم علي",
      website: "a",
      marketingMessage: "this is TUA",
      isActive: true,
    },
  ];

  const handleOrganizationChange = (event) => {
    setSelectedOrganization(event.target.value);
  };

  const handleAmountChange = (event) => {
    setDonationAmount(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleRecurringChange = () => {
    setIsRecurring(!isRecurring);
  };

  const handleSubmit = async () => {
    const formData = {
      ETId: "",
      EmployeeProfileID: "1255", // Assuming this is the employee's ID
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
      } else {
        console.error("Failed to submit donation:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };


  return (
    <div className="w-full h-[1080px] flex items-center">
      <div className="w-[354px] h-full bg-white">left</div>
      <div className="w-full h-full bg-[#BCCAD9]">
        <div className="w-full h-[120px] border-b border-[#a9bacd]"></div>
        <div className="pt-[48px] pl-[20px] pr-[45px]">
          <h2 className="text-2xl text-[#1B4DFF] leading-[18px] font-medium">
            Donations
          </h2>

          <div className="w-full  bg-white mt-[53px] rounded-lg p-3">
            <ul className="text-[#6989AA] capitalize list-disc space-y-4 list-inside pl-5">
              <li>
                The amount of the donation shall not exceed the 30% of your
                salary.
              </li>
              <li>
                In case of recurring donation, it will be deduction from every
                payroll till the end of the selected period.
              </li>
              <li>The recurring donation shall not exceed the three months.</li>
            </ul>
          </div>

          <div className="w-full bg-[#F9FAFB] mt-[24px] pl-[60px] py-[68px] rounded-lg flex items-center gap-3">
            <div className="w-2/4">
              <h3 className="text-xl text-[#1B4DFF] leading-[18px] font-medium">
                Donations Form
              </h3>

              {/* Organization */}
              <div className="w-[327px] pt-[50px]">
                <label
                  className="block text-[#8EA6BF] text-sm leading-[18px]"
                  htmlFor="organization"
                >
                  Organization
                </label>
                <select
                  id="organization"
                  value={selectedOrganization}
                  onChange={handleOrganizationChange}
                  className="w-full px-3 mt-2 py-2 bg-white text-[#8EA6BF] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option className="text-xs">Organization</option>

                  {donationBeneficiaryList.map((organization) => (
                    <option
                      key={organization.donationBeneficiaryId}
                      value={organization.donationBeneficiaryId}
                    >
                      {organization.donationBeneficiaryNameEn} (
                      {organization.donationBeneficiaryNameAr})
                    </option>
                  ))}
                </select>
              </div>

              {/* Donation amount */}
              <div className="w-[327px] mt-4">
                <label
                  className="block text-[#8EA6BF] text-sm leading-[18px]"
                  htmlFor="donationAmount"
                >
                  Donation Amount(JD)
                </label>
                <input
                  type="text"
                  id="donationAmount"
                  value={donationAmount}
                  onChange={handleAmountChange}
                  className="w-full px-3 mt-2 py-2 bg-white text-[#8EA6BF] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Dates */}
              <div className="w-full flex items-center justify-between gap-3 mt-3">
                {/* Start date */}
                <div className="flex flex-col justify-center">
                  <label
                    className="block text-[#8EA6BF] text-sm leading-[18px]"
                    htmlFor="startDate"
                  >
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    value={startDate}
                    onChange={handleStartDateChange}
                    className="w-full px-3 mt-2 py-2 bg-white text-[#8EA6BF] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* End date */}
                <div className="flex flex-col justify-center">
                  <label
                    className="block text-[#8EA6BF] text-sm leading-[18px]"
                    htmlFor="endDate"
                  >
                    End Date
                  </label>
                  <input
                    type="date"
                    id="endDate"
                    value={endDate}
                    onChange={handleEndDateChange}
                    className="w-full px-3 mt-2 py-2 bg-white text-[#8EA6BF] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Recurring */}
                <div className="flex items-center justify-center mt-5">
                  <input
                    type="checkbox"
                    id="recurring"
                    checked={isRecurring}
                    onChange={handleRecurringChange}
                    className="mr-2"
                  />
                  <label
                    className="text-[#1B4DFF] text-sm font-normal leading-[18px]"
                    htmlFor="recurring"
                  >
                    Recurring Donation
                  </label>
                </div>
              </div>

              {/* Submit */}
              <div className="w-[327px]">
                <button
                  onClick={handleSubmit}
                  className="w-full mt-[12px] px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
  );
};

export default Giving;
