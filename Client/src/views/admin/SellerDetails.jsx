import { useState } from "react";

const SellerDetails = () => {
  const [parPage, setParPage] = useState("");

  return (
    <div className="md:px-4 lg:px-8">
      {/* Profile Section */}
      <div className="relative w-full rounded-xl lg:shadow-md px-2 lg:px-0">
        <div className="w-full h-[180px] md:h-[220px] bg-[url('/public/assets/profilebg.jpg')] bg-cover bg-center rounded-xl"></div>

        <div className="absolute bottom-[-45px] left-4 flex items-center">
          <img
            src="http://localhost:5173/public/assets/react.svg"
            alt="Profile"
            className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-white shadow-lg"
          />
          <h2 className="ml-3 mt-8 text-lg md:text-xl font-bold text-purple-900">
            Seller Details
          </h2>
        </div>
      </div>

      {/* Info Section */}
      <div className="w-full bg-white rounded-xl p-6 mt-16 shadow-md">
        <div className="flex flex-wrap md:flex-nowrap justify-start items-center md:text-left">
          <div className="w-1/2  font-semibold ml-3 pb-1 lg:pb-0">Basic Info</div>
          <div className="w-1/2 lg:flex font-semibold hidden  ml-5">Address Details</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-4 lg:mt-3">
          {/* Basic Info */}
          <div className="p-5 bg-gray-100 rounded-xl">
            {[
              { label: "Name", value: "John Doe" },
              { label: "Email", value: "john.doe@example.com" },
              { label: "Role", value: "Seller" },
              { label: "Status", value: "Active" },
              { label: "Payment Status", value: "Active" },
            ].map((item, index) => (
              <div key={index} className="flex gap-2 text-sm py-1">
                <span className="font-semibold text-black">{item.label}:</span>
                <span className="text-gray-600">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="flex mt-3 flex-wrap md:flex-nowrap justify-start items-center text-center md:text-left lg:hidden">
          <div className="w-1/2 md:w-auto flex-1 font-semibold hidden">Basic Info</div>
          <div className="w-1/2 md:w-auto flex font-semibold ml-3 pb-1">Address Details</div>
        </div>

          {/* Address Details */}
          <div className="p-5 bg-gray-100 rounded-xl">
            {[
              { label: "Shop Name", value: "Easy Kicks" },
              { label: "Location", value: "Abuja" },
              { label: "Address", value: "Wuse 2, Abuja" },
              { label: "State", value: "Abuja" },
              { label: "Contact Info", value: "+234 800 123 4567" },
            ].map((item, index) => (
              <div key={index} className="flex gap-2 text-sm py-1">
                <span className="font-semibold text-black">{item.label}:</span>
                <span className="text-gray-600">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Status Change Form */}
        <form className="mt-6">
          <div className="flex gap-4 items-center">
            <select
              onChange={(e) => setParPage(e.target.value)}
              className="w-full md:w-auto px-4 py-2 text-sm md:text-base focus:border-slate-300 outline-none hover:bg-gray-200 bg-gray-100 border border-gray-400 text-black rounded-xl"
            >
              <option value="">Select Status</option>
              <option value="active">Active</option>
              <option value="deactive">Deactive</option>
            </select>
            <button className="w-full md:w-auto py-2 px-12 bg-purple-900 rounded-xl text-white hover:bg-purple-800">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellerDetails;
