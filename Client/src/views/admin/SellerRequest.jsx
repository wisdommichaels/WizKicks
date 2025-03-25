
import { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";


const SellerRequest = () => {

    const [parPage, setParPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
       
  return (
    <div className="lg:px-4 lg:pl-4 lg:pr-8">
        <div className="w-full hidden lg:flex justify-between items-center text-purple-900 mb-2 ">
          <h1 className="text-xl font-bold">Seller Request</h1>
        </div>
         <div className="w-full lg:bg-[#ffffff] rounded-xl lg:p-4  lg:px-4 overflow-hidden">
         <div className="flex flex-wrap gap-3 lg:px-3 justify-between items-center px-4">
              <select
                onChange={(e) => setParPage(parseInt(e.target.value))}
                className="px-4 p-2 text-sm md:text-base focus:border-slate-300 outline-none hover:bg-[#f0efef] bg-[#f5f7f9] border border-slate-400 text-black rounded-xl"
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </select>
              <div className="lg:flex hidden items-center border px-3 border-slate-300 rounded-xl bg-[#f5f7f9] overflow-hidden lg:w-[35%] w-[75%]">
                {/* <span className="material-symbols-rounded text-black hidden">search</span> */}
                <input
                  className="px-4 w-full text-black rounded-xl py-2 outline-none text-sm md:text-base"
                  type="text"
                  name="search"
                  placeholder="Search..."
                />
              </div>
              <div className="flex lg:hidden items-center border px-3 border-slate-300 rounded-xl bg-[#F9F9F9] overflow-hidden lg:w-[20%] w-[75%]">
                <span className="material-symbols-rounded text-black hidden">
                  search
                </span>
                <input
                  className="px-4 w-full text-black rounded-xl py-2 outline-none text-sm md:text-base"
                  type="text"
                  name="search"
                  placeholder="Search..."
                />
              </div>
            </div>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-center text-black border-separate border-spacing-y-2 hidden md:table">
                {/* Table Head */}
                <thead className="text-sm text-[#9ca2ac] uppercase border-b border-slate-300">
                <tr>
                    <th scope="col" className="py-2 px-4">
                      No
                    </th>
                    <th scope="col" className="py-2 px-4">
                      Name
                    </th>
                    <th scope="col" className="py-2 px-4">
                     Email
                    </th>
                    <th scope="col" className="py-2 px-4">
                      Payment Status
                    </th>
                    <th scope="col" className="py-2 px-4">
                     Status
                    </th>
                    <th scope="col" className="py-2 px-4">
                     Action
                    </th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody className="rounded-xl">
                  {[1, 2, 3, 4].map((item, index) => (
                    <tr
                      key={index}
                      className="border-b bg-[#f6f7f9] border-slate-300"
                    >
                      <td className=" py-1 px-4 font-medium whitespace-nowrap rounded-l-xl">
                        {item}
                      </td>
                      <td className="py-1 px-4 font-medium whitespace-nowrap">
                        Wisdom
                      </td>
                      <td className="py-1 px-4 font-medium whitespace-nowrap">
                       wisdom@gmail.com
                      </td>
                      <td className="py-1 px-4 font-medium whitespace-nowrap">
                        <span>Inactive</span>
                      </td>
                      <td className="py-1 px-4 font-medium whitespace-nowrap">
                        <span>Pending</span>
                      </td>
                      <td className="py-1  gap-5  font-medium whitespace-nowrap rounded-r-xl">
                        <div className="flex justify-center items-center gap-5">
                        <Link to='/admin/dashboard/seller/details/2' className="bg-purple-100 flex justify-center w-fit items-center text-purple-800 px-3 py-2 my-1 rounded-xl hover:bg-purple-200">
                        <span className="material-symbols-rounded">visibility</span>
                        </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="w-full bg-white rounded-t-xl p-4 mt-3 overflow-hidden lg:hidden">
        <div className="flex flex-col gap-4">
          {[1, 2, 3, 4].map((item, index) => (
            <div key={index} className="bg-[#f6f7f9] p-4 rounded-xl shadow-sm">
              <div className="flex items-center gap-4">
                <div>
                  <h2 className="text-black font-medium">Wisdom</h2>
                  <p className="text-sm text-gray-600"><span>Payment Status:</span> Inactive</p>
                  <p className="text-sm text-gray-600"><span>Status:</span> Pending</p>
                </div>
              </div>
              <div className="mt-3 flex justify-between items-center">
                <p className="text-sm text-gray-600"><span>Email:</span> wisdom@gmail.com</p>
                <Link to='/admin/dashboard/seller/details/2' 
                  className="bg-purple-200 flex items-center text-purple-800 px-3 py-2 rounded-xl hover:bg-purple-200"
                >
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>

                  <div className="flex lg:justify-end justify-center mt-5 bottom-4 right-4 mb-3 lg:mb-0">
                          <Pagination
                            pageNumber={currentPage}
                            setPageNumber={setCurrentPage}
                            totalItem ={50}
                            parPage={parPage}
                            showItem={3}
                            />
                    </div>

         </div>
         <div className="lg:flex lg:justify-end hidden justify-center mt-5 bottom-4 right-4 mb-3 lg:mb-0">
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

export default SellerRequest
