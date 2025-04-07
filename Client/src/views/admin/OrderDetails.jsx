import { Link } from 'react-router-dom';

const OrderDetails = () => {
  return (
    <div className=" lg:px-2 lg:pr-7 lg:pl-4">
      <div className="w-full lg:p-6 px-3 py-5 bg-white rounded-xl">
        <div className="flex  justify-between items-start sm:items-center mb-3 gap-3">
          <div className="flex gap-1 items-center">
            <Link to='/admin/dashboard/orders'>
              <span className="material-symbols-rounded text-2xl pt-2">arrow_back</span>
            </Link>
            <h2 className="text-xl font-bold">Order Details</h2>
          </div>
          <select className="px-4 py-2 focus:border-purple-500 hover:bg-purple-800 outline-none bg-purple-900 border border-purple-500 rounded-xl text-white" name="" id="">
            <option value="">Pending</option>
            <option value="">Processing</option>
            <option value="">Warehouse</option>
            <option value="">Placed</option>
            <option value="">Cancelled</option>
          </select>
        </div>
        <hr className="mb-2 border-slate-200" />

        <div className="flex flex-col text-lg mb-6">
          <h2 className="pb-1"><span className="font-semibold">Order nº </span> #34564</h2>
          <h2 className="text-sm text-slate-600"><span>Placed on:</span> April 5, 2025, <span>04:25</span></h2>
          <h2 className="text-sm text-slate-600"><span>Total: </span>₦ 4,000</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 mb-5">
          <div className="flex flex-col w-full lg:w-1/2 border border-slate-300 rounded-xl p-4">
            <h2 className="font-semibold text-lg mb-1">Items Ordered</h2>
            {[1, 3, 4].map((imgId, index) => (
              <div key={index} className="flex flex-col bg-[#f5f7f9] gap-2 p-2 mb-5 rounded-xl shadow-md">
                <div className="flex gap-5 text-md">
                  <div className="w-[90px] h-[70px]">
                    <img
                      className="w-full h-full rounded-lg border-slate-300 border object-cover"
                      src={`http://localhost:5173/Public/assets/category/${imgId}.jpg`}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <div className="w-full mb-1">
                      <h2 className="font-semibold text-[16px]">Balanciaga</h2>
                    </div>
                    <div className="flex flex-wrap gap-2 w-full">
                      <div className="w-[45%] sm:w-[30%]">
                        <p className="text-[12px]">Brand : <span> Easy</span></p>
                        <p className="text-[12px]">Quantity : <span> 2</span></p>
                      </div>
                      <div className="w-[45%] sm:w-[30%]">
                        <p className="text-[12px]">Size : <span> 40</span></p>
                        <p className="text-[12px]">Color : <span> White</span></p>
                      </div>
                      <div className="">
                        <p className="bg-purple-200 px-4 py-1 rounded-xl font-semibold text-sm"><span>₦ 4,000</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col w-full lg:w-1/2 border border-slate-300 rounded-xl p-4">
            <h2 className="font-semibold text-lg mb-1">Sellers</h2>
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex flex-col bg-[#f5f7f9] gap-2 p-2 mb-5 rounded-xl shadow-md">
                <div className="flex gap-5 text-md">
                  <div className="w-[90px] h-[70px]">
                    <img
                      className="w-full h-full rounded-full border-slate-300 border object-cover"
                      src={`https://avatar.iran.liara.run/public/27`}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <div className="w-full mb-1">
                      <h2 className="font-semibold text-[16px]">Alhaji Store</h2>
                    </div>
                    <div className="flex flex-wrap gap-2 w-full">
                      <div className="w-[45%] sm:w-[30%]">
                        <p className="text-[12px]">Product : <span> Balanciaga</span></p>
                        <p className="text-[12px]">Quantity : <span> 2</span></p>
                      </div>
                      <div className="w-[45%] sm:w-[30%]">
                        <p className="text-[12px]">Size : <span> 40</span></p>
                        <p className="text-[12px]">Color : <span> White</span></p>
                      </div>
                      <div className="">
                        <p className="bg-purple-200 px-4 py-1 rounded-xl font-semibold text-sm"><span>Pending</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 mb-5">
          <div className="p-4 rounded-xl w-full lg:w-[50%] border border-slate-300">
            <h2 className="font-semibold text-lg mb-1">Payment Information</h2>
            <div className="bg-[#f5f7f9] rounded-xl p-4 shadow-md">
              <div className="flex flex-col">
                <h2 className="font-semibold mb-1">Payment Method</h2>
                <p className="text-slate-600">Pay with Cards, Bank Transfers or USSD</p>
              </div>
              <div className="flex flex-col mt-3">
                <h2 className="font-semibold mb-1">Payment Status</h2>
                <p>Paid</p>
              </div>
              <div className="flex flex-col mt-3">
                <h2 className="font-semibold mb-1">Payment Details</h2>
                <p className="text-sm text-slate-600"><span>Items Total:</span> ₦ 16,000</p>
                <p className="text-sm text-slate-600"><span>Delivery Fees:</span>  ₦ 2,000</p>
                <p className="text-md "><span>Total:</span>  ₦ 18,000</p>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-xl w-full lg:w-[50%] border border-slate-300">
            <h2 className="font-semibold text-lg mb-1">Delivery Information</h2>
            <div className="bg-[#f5f7f9] rounded-xl p-4 shadow-md">
              <div className="flex flex-col gap-1">
                <h2 className="font-semibold">Delivery Method</h2>
                <p className="text-slate-600">Door Delivery</p>
              </div>
              <div className="flex flex-col mt-3">
                <h2 className="font-semibold mb-1">Shipping Address</h2>
                <p>Austin Wisdom</p>
                <p className="text-sm text-slate-600">No.27 kigoma street Wuse Zone 7 <br /> Opposite NAFDAC office <br /> ABUJA-WUSE ZONE 7, Federal Capital Territory</p>
              </div>
              <div className="flex flex-col mt-3 gap-1">
                <h2 className="font-semibold mb-1">Shipping Details</h2>
                <p className="text-sm text-slate-600">Door Delivery. Fulfilled by zaijianle</p>
                <p className="text-sm text-slate-600">Delivery between 30 November and 01 December.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
