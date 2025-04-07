import { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from './../Pagination';


const Orders = () => {
    const [currentPage, setCurrentPage] = useState(1);
    // const [searchValue, setSearchValue] = useState('');
    const [parPage, setParPage] = useState(5)
    const [show, setShow] = useState(false)

    return (
        <div className="lg:px-2 lg:pr-7 lg:pl-4">
            <div className="w-full hidden lg:flex justify-between items-center text-purple-900 mb-2 ">
          <h1 className="text-xl font-bold">Oders</h1>
        </div>
        <div className="w-full lg:p-4 lg:pt-6 lg:bg-white  lg:rounded-xl">
            {/* Top Section */}
            <div className="flex flex-wrap px-2 gap-3 lg:px-3 justify-between items-center">
                <select onChange={(e) => setParPage(parseInt(e.target.value))} className="px-4 p-2 text-sm md:text-base focus:border-slate-300 outline-none hover:bg-[#f0efef] bg-[#f9f9f9] border border-slate-400 text-black rounded-xl">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                </select>
                <div className="lg:flex hidden items-center border px-3 border-slate-300 rounded-xl bg-[#F9F9F9] overflow-hidden lg:w-[20%] w-[75%]">
                    {/* <span className="material-symbols-rounded text-black hidden">search</span> */}
                    <input 
                        className="px-4 w-full text-black rounded-xl py-2 outline-none text-sm md:text-base" 
                        type="text" 
                        name="search" 
                        placeholder="Search..." 
                    />
                </div>
                <div className="flex lg:hidden items-center border px-3 border-slate-300 rounded-xl bg-[#F9F9F9] overflow-hidden lg:w-[20%] w-[75%]">
                    <span className="material-symbols-rounded text-black hidden">search</span>
                    <input 
                        className="px-4 w-full text-black rounded-xl py-2 outline-none text-sm md:text-base" 
                        type="text" 
                        name="search" 
                        placeholder="Search..." 
                    />
                </div>
            </div>
    
            {/* Table Section */}
            <div className="relative lg:mt-5  overflow-x-hidden mt-3">
                <div className="w-full text-sm text-left py-1 bg-white rounded-xl">
                   
                    {/* Table Header */}
                    <div className="text-sm text-black uppercase hidden md:flex px-3">
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
                    <div className="text-black mt-3 p-3 lg:p-0">
                        {/* Order Row */}
                        <div className="bg-[#F9F9F9] py-2 pl-5 pr-3 md:flex hidden rounded-xl justify-center items-center">
                            <div className="w-1/5 font-medium">#23456</div>
                            <div className="w-1/5 font-medium">$650</div>
                            <div className="w-1/5 font-medium">Pending</div>
                            <div className="w-1/5 font-medium">Pending</div>
                            <div className="w-1/5 font-medium flex justify-between">
                                <Link to='/admin/dashboard/order-details/3' className="bg-purple-200 py-2 px-3 text-purple-800 rounded-xl hover:bg-purple-300">View</Link>
                                <span 
                                    className="material-symbols-rounded cursor-pointer" 
                                    onClick={() => setShow(!show)}
                                >
                                    {show ? "keyboard_arrow_up" : "keyboard_arrow_down"}
                                </span>
                            </div>
                        </div>
    
                        {/* Mobile View (Stacks Data) */}
                        <div className="md:hidden p-4 rounded-xl border-b-1 border-slate-800  bg-[#f5f7f9]">
                            <div className="flex justify-between">
                                <span className="font-bold">Order ID:</span>
                                <span className="font-bold">#23456</span>
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
                            <div className="flex justify-between mt-5">
                            <Link to='/admin/dashboard/order-details/3' className="bg-purple-800 py-2 px-3 text-white rounded-xl hover:bg-purple-700">View Orders</Link> 
                                <span 
                                    className="material-symbols-rounded cursor-pointer" 
                                    onClick={() => setShow(!show)}
                                >
                                    {show ? "keyboard_arrow_up" : "keyboard_arrow_down"}
                                </span>
                            </div>
                        </div>
    
                        {/* Hidden Section (Collapsible Content) */}
                     
                            <div className={`transition-all duration-300 overflow-hidden ${show ? "block" : "hidden"}`}>
                            <div className="hidden lg:flex justify-between items-start py-2 pl-5 bg-purple-100 pr-3  rounded-xl my-3 ">
                                    <div className="py-2 w-1/5 font-medium">#23456</div>
                                    <div className="py-2 w-1/5 font-medium">$650</div>
                                    <div className="py-2 w-1/5 font-medium">Pending</div>
                                    <div className="py-2 w-1/5 font-medium">Pending</div>
                                    <div className="py-2 w-1/5 font-medium">
                                        
                                    </div>
                                </div>
    
                                <div className="hidden lg:flex justify-between items-start bg-purple-100  rounded-xl  pr-3  py-2 pl-5">
                                    <div className="py-2 w-1/5 font-medium">#23456</div>
                                    <div className="py-2 w-1/5 font-medium ">$650</div>
                                    <div className="py-2 w-1/5 font-medium">Pending</div>
                                    <div className="py-2 w-1/5 font-medium">Pending</div>
                                    <div className="py-2 w-1/5 font-medium">
                                        
                                    </div>
                                </div>
                                <div className="md:hidden bg-[#f5f7f9] rounded-xl p-4 border-b-1 border-slate-700 ">
                            <div className="flex justify-between">
                                <span className="font-bold">Order ID:</span>
                                <span className="font-bold">#23456</span>
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
                        </div>
                                <div className="md:hidden bg-[#f5f7f9] rounded-xl p-4 border-t-1 border-slate-700 ">
                            <div className="flex justify-between">
                                <span className="font-bold">Order ID:</span>
                                <span className="font-bold">#23456</span>
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
                        </div>
                            </div>
                      
                    </div>
                    <div className="text-black p-3 lg:mt-3 lg:p-0">
                        {/* Order Row */}
                        <div className="bg-[#F9F9F9] py-2 pl-5 pr-3 md:flex hidden rounded-xl justify-center items-center">
                            <div className="w-1/5 font-medium">#23456</div>
                            <div className="w-1/5 font-medium">$650</div>
                            <div className="w-1/5 font-medium">Pending</div>
                            <div className="w-1/5 font-medium">Pending</div>
                            <div className="w-1/5 font-medium flex justify-between">
                                <Link to='/admin/dashboard/order-details/3' className="bg-purple-200 py-2 px-3 text-purple-800 rounded-xl hover:bg-purple-300">View</Link>
                                <span 
                                    className="material-symbols-rounded cursor-pointer" 
                                    onClick={() => setShow(!show)}
                                >
                                    {show ? "keyboard_arrow_up" : "keyboard_arrow_down"}
                                </span>
                            </div>
                        </div>
    
                        {/* Mobile View (Stacks Data) */}
                        <div className="md:hidden p-4 rounded-xl border-b-1 border-slate-800  bg-[#f5f7f9]">
                            <div className="flex justify-between">
                                <span className="font-bold">Order ID:</span>
                                <span className="font-bold">#23456</span>
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
                            <div className="flex justify-between mt-5">
                            <Link to='/admin/dashboard/order-details/3' className="bg-purple-800 py-2 px-3 text-white rounded-xl hover:bg-purple-700">View Orders</Link> 
                                <span 
                                    className="material-symbols-rounded cursor-pointer" 
                                    onClick={() => setShow(!show)}
                                >
                                    {show ? "keyboard_arrow_up" : "keyboard_arrow_down"}
                                </span>
                            </div>
                        </div>
    
                        {/* Hidden Section (Collapsible Content) */}
                     
                            <div className={`transition-all duration-300 overflow-hidden ${show ? "block" : "hidden"}`}>
                                <div className="hidden lg:flex justify-between items-start py-2 pl-5 bg-purple-100 pr-3 rounded-xl my-3 ">
                                    <div className="py-2 w-1/5 font-medium">#23456</div>
                                    <div className="py-2 w-1/5 font-medium">$650</div>
                                    <div className="py-2 w-1/5 font-medium">Pending</div>
                                    <div className="py-2 w-1/5 font-medium">Pending</div>
                                    <div className="py-2 w-1/5 font-medium">
                                        
                                    </div>
                                </div>
    
                                <div className="hidden lg:flex justify-between items-start bg-purple-100 rounded-xl  pr-3  py-2 pl-5">
                                    <div className="py-2 w-1/5 font-medium">#23456</div>
                                    <div className="py-2 w-1/5 font-medium ">$650</div>
                                    <div className="py-2 w-1/5 font-medium">Pending</div>
                                    <div className="py-2 w-1/5 font-medium">Pending</div>
                                    <div className="py-2 w-1/5 font-medium">
                                        
                                    </div>
                                </div>
                                <div className="md:hidden bg-[#f5f7f9] rounded-xl p-4 border-b-1 border-slate-700 ">
                            <div className="flex justify-between">
                                <span className="font-bold">Order ID:</span>
                                <span className="font-bold">#23456</span>
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
                        </div>
                                <div className="md:hidden bg-[#f5f7f9] rounded-xl p-4 border-t-1 border-slate-700 ">
                            <div className="flex justify-between">
                                <span className="font-bold">Order ID:</span>
                                <span className="font-bold">#23456</span>
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
                        </div>
                            </div>
                      
                    </div>

                <div className="flex justify-center lg:hidden mb-4 mt-3 bottom-4 right-4">
                <Pagination
                    pageNumber={currentPage}
                    setPageNumber={setCurrentPage}
                    totalItem ={50}
                    parPage={parPage}
                    showItem={3}

                />
                </div>
                </div>
            </div>
                <div className="flex justify-end mt-5 bottom-4 right-4">
                <Pagination
                    pageNumber={currentPage}
                    setPageNumber={setCurrentPage}
                    totalItem ={50}
                    parPage={parPage}
                    showItem={3}

                />
                </div>

        </div>
    </div>
      )
}

export default Orders