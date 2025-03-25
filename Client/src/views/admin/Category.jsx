import { useState } from "react";
import Pagination from "./../Pagination";
import { Link } from "react-router-dom";


const Categories = () => {
  const [parPage, setParPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [show, setShow] = useState(false);
    // const [searchValue, setSearchValue] = useState('');

  return (
    <div className="lg:px-4 lg:pl-4 lg:pr-6">
       <div className="w-full hidden lg:flex justify-between items-center text-purple-900 mb-2 ">
          <h1 className="text-xl font-bold">Category</h1>
        </div>
      
      <div className="flex lg:hidden justify-between item-center mb-6 p-4 ">
        <h1 className="text-purple-900 text-xl font-bold ">Category</h1>
        {/* <button
        className="lg:hidden fixed right-5 animate-bounce bg-purple-800 text-white p-4 rounded-full shadow-xl  transition-all duration-300 hover:bg-purple-900"
        onClick={() => setShow(true)}
      >
        <span className="material-symbols-rounded p-1">add</span>
      </button> */}
      </div>
      
      

      <div className="flex flex-wrap w-full ">
        <div className="w-full lg:w-7/12">
          <div className="w-full lg:bg-[#ffffff] rounded-xl lg:p-4  lg:px-4 overflow-hidden">
            <div className="flex flex-wrap gap-3 lg:px-3 px-4 justify-between items-center">
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
                      Image
                    </th>
                    <th scope="col" className="py-2 px-4">
                      Name
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
                      <td className=" py-1 px-4 font-medium whitespace-nowrap flex justify-center items-center">
                        <img
                          className="w-[50px] h-[50px] rounded-lg object-cover"
                          src={`http://localhost:5173/Public/assets/category/${item}.jpg`}
                          alt=""
                        />
                      </td>
                      <td className="py-1 px-4 font-medium whitespace-nowrap">
                        addias
                      </td>
                      <td className="py-1  gap-5  font-medium whitespace-nowrap rounded-r-xl">
                        <div className="flex justify-center items-center gap-5">
                        <Link className="bg-purple-100 flex justify-center w-fit items-center text-purple-800 px-3 py-2 my-1 rounded-xl hover:bg-purple-200">
                        <span className="material-symbols-rounded">edit_square</span>
                        </Link>

                        <Link className="bg-red-300 flex justify-start w-fit items-center text-red-500 hover:text-white px-3 py-2 my-1 rounded-xl hover:bg-red-500">
                        <span className="material-symbols-rounded">delete</span>
                        </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ✅ Mobile View: Convert Table to Card List */}
            <div className="md:hidden space-y-4 my-4 bg-white p-4 rounded-t-xl">
  {[1, 2, 3, 4].map((item, index) => (
    <div key={index} className="  p-5 rounded-xl shadow flex items-center gap-4  bg-gray-100">
      {/* Image on the Left */}
      <div className="flex w-[30%] justify-center items-center">
        <img
          className="w-[80px] border border-slate-200 h-[80px] rounded-lg object-cover"
          src={`http://localhost:5173/Public/assets/category/${item}.jpg`}
          alt={`Category ${item}`}
        />
      </div>

      {/* Details on the Right */}
      <div className="flex-1 ">
        <p className="text-sm text-[#9ca2ac]">
          No: <span className="font-semibold text-black">{item}</span>
        </p>
        <p className="text-sm text-[#9ca2ac]">
          Name: <span className="font-semibold text-black">jordan</span>
        </p>

        {/* Buttons - Edit & Delete */}
        <div className="flex gap-2 mt-2 justify-center items-center">
          {/* Edit Button */}
          <button className="bg-purple-800 w-[50%] text-white p-2 rounded-xl">
            <span className="material-symbols-rounded">edit_square</span>
          </button>

          {/* Delete Button */}
          <button className=" border-2 border-purple-900 w-[50%] text-purple-900 p-2 rounded-xl">
            <span className="material-symbols-rounded">delete</span>
          </button>
        </div>

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
        </div>

        {show && (
  <div
    className={`fixed lg:hidden inset-0 bg-purple-200/30 backdrop-blur-[1px] flex items-end justify-center z-[9999] transition-opacity duration-500 ${
      show ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
    }`}
  >
    {/* Modal Content (Slide Up) */}
    <div
      className={`w-full bg-white rounded-t-xl p-5 shadow-lg transition-transform duration-500 transform max-h-[85vh] overflow-y-auto ${
        show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
    >
      <h1 className="text-black font-semibold text-xl mb-2 text-center">
        Add Category
      </h1>
      <form>
        <div className="flex flex-col gap-2 w-full mb-3">
          <label className="text-black" htmlFor="name">Category Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Category Name"
            className="px-4 w-full text-black rounded-xl bg-[#f5f7f9] border-slate-300 border py-2 outline-none text-sm md:text-base"
          />
        </div>
        <div>
          <label
            className="flex justify-center items-center flex-col bg-[#f5f7f9] border border-dashed h-[200px] w-full border-slate-400 cursor-pointer"
            htmlFor="image"
          >
            <span className="material-symbols-rounded text-4xl text-black">
              add_a_photo
            </span>
            <span className="text-black">Add Image</span>
          </label>
          <input type="file" id="image" name="image" className="hidden" />
        </div>

        {/* Buttons - Always Visible */}
        <div className="mt-4 flex flex-col gap-2">
          <button className="bg-purple-900 hover:bg-purple-800 cursor-pointer w-full text-white rounded-xl px-7 py-3 text-center">
            Add Category
          </button>
          <button
            className="text-purple-900 text-lg bg-purple-100 px-3 py-2 rounded-xl transition-transform duration-300 "
            onClick={() => setShow(false)}
          >
            ✕ Close
          </button>
        </div>
      </form>
    </div>
  </div>
)}

{/* <button
   className="lg:hidden absolute bottom-[20%] animate-bounce right-5 transform -translate-y-1/2 bg-purple-800 text-white p-4 rounded-full shadow-xl transition-all duration-300 hover:bg-purple-900"
  onClick={() => setShow(true)}
>
  <span className="material-symbols-rounded p-1">add</span>
</button> */}


      </div>
    </div>
  );
};

export default Categories;
