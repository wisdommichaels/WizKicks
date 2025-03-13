import { useState } from "react";
import { Link } from "react-router-dom";


const Orders = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');
    const [parPage, setParPage] = useState(5)
    const [show, setShow] = useState(false)

  return (
    <div className="px-2 lg:px-7 pt-5">
    <div className="w-full p-4 bg-white rounded-xl">
        {/* Top Section */}
        <div className="flex flex-wrap gap-3 justify-between items-center">
            <select className="px-4 p-2 text-sm md:text-base focus:border-slate-300 outline-none bg-[#f9f9f9] border border-slate-400 text-black rounded-xl">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
            </select>
            <div className="flex items-center shadow-lg p-2 rounded-xl bg-white overflow-hidden w-full md:w-auto">
                <span className="material-symbols-rounded text-black">search</span>
                <input 
                    className="px-2 w-full text-black rounded-xl py-2 outline-none text-sm md:text-base" 
                    type="text" 
                    name="search" 
                    placeholder="Search..." 
                />
            </div>
        </div>

        {/* Table Section */}
        <div className="relative mt-5 overflow-x-auto">
            <div className="w-full text-sm text-left bg-white">
               
                {/* Table Header */}
                <div className="text-sm text-black uppercase border-b border-slate-700 hidden md:flex">
                    <div className="py-3 w-1/5 font-bold">Order ID</div>
                    <div className="py-3 w-1/5 font-bold">Price</div>
                    <div className="py-3 w-1/5 font-bold">Payment Status</div>
                    <div className="py-3 w-1/5 font-bold">Order Status</div>
                    <div className="py-3 w-1/5 font-bold flex justify-between">
                        <span>Action</span>
                        <span 
                            className="material-symbols-rounded cursor-pointer" 
                            onClick={() => setShow(!show)}
                        >
                            {show ? "keyboard_arrow_up" : "keyboard_arrow_down"}
                        </span>
                    </div>
                </div>

                {/* Table Rows (Mobile Friendly) */}
                <div className="text-black">
                    {/* Order Row */}
                    <div className="border-b border-slate-700 p-3 md:flex hidden">
                        <div className="w-1/5 font-medium">#23456</div>
                        <div className="w-1/5 font-medium">$650</div>
                        <div className="w-1/5 font-medium">Pending</div>
                        <div className="w-1/5 font-medium">Pending</div>
                        <div className="w-1/5 font-medium flex justify-between">
                            {/* <Link>
                                <span className="material-symbols-rounded">more_horiz</span>
                            </Link> */}
                            <span 
                                className="material-symbols-rounded cursor-pointer" 
                                onClick={() => setShow(!show)}
                            >
                                {show ? "keyboard_arrow_up" : "keyboard_arrow_down"}
                            </span>
                        </div>
                    </div>

                    {/* Mobile View (Stacks Data) */}
                    <div className="md:hidden border-b border-slate-700 p-4">
                        <div className="flex justify-between">
                            <span className="font-bold">Order ID:</span>
                            <span>#23456</span>
                        </div>
                        <div className="flex justify-between mt-2">
                            <span className="font-bold">Price:</span>
                            <span>$650</span>
                        </div>
                        <div className="flex justify-between mt-2">
                            <span className="font-bold">Payment Status:</span>
                            <span>Pending</span>
                        </div>
                        <div className="flex justify-between mt-2">
                            <span className="font-bold">Order Status:</span>
                            <span>Pending</span>
                        </div>
                        <div className="flex justify-between mt-2">
                            <Link>
                                <span className="material-symbols-rounded">more_horiz</span>
                            </Link>
                            <span 
                                className="material-symbols-rounded cursor-pointer" 
                                onClick={() => setShow(!show)}
                            >
                                {show ? "keyboard_arrow_up" : "keyboard_arrow_down"}
                            </span>
                        </div>
                    </div>

                    {/* Hidden Section (Collapsible Content) */}
                    {show && (
                        <div className="border-b border-slate-700 bg-purple-200 p-3">
                            <div className="flex justify-between items-start">
                                <div className="py-3 w-1/5 font-medium">Order Details</div>
                                <div className="py-3 w-1/5 font-medium">$650</div>
                                <div className="py-3 w-1/5 font-medium">More Info</div>
                                <div className="py-3 w-1/5 font-medium">More Status</div>
                                <div className="py-3 w-1/5 font-medium">
                                    <Link>
                                        <span className="material-symbols-rounded">more_horiz</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Orders