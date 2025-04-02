import { useState } from "react";


const ChatSeller = () => {

    const [show, setShow] = useState(false);
    const sellerid = 23

  return (
    <div className="lg:pl-4 lg:pr-7">
          <div className="w-full hidden lg:flex justify-between items-center text-purple-900 mb-2 ">
          <h1 className="text-xl font-bold">Live Chat</h1>
        </div>
        <div className="w-full  rounded-xl h-[calc(100vh-140px)]">
            <div className="flex w-full h-full relative gap-3">
                <div className={`w-[280px] h-full absolute z-10 ${show ? `-left-[16px]` : `-left-[336px]`} md:left-0 md:relative transition-all duration-300`}>
                    <div className="w-full h-full p-4 bg-purple-900 rounded-xl overflow-y-auto">
                        <div className="flex text-xl justify-between items-center p-4 md:p-0 md:px-3 md:pb-3">
                        <h2 className="text-white">Sellers</h2>
                        {/* <span onClick={() => setShow(true)} className="block cursor-pointer md:hidden">
                        <span className="material-symbols-rounded text-white">
                            close
                        </span>
                        </span> */}
                            
                        </div>

                        <div className={`flex justify-start items-center bg-purple-500 gap-2 px-4 ml-2 lg:m-0  py-[6px] rounded-xl cursor-pointer w-full`}>
                            <div className="relative w-[35px] h-[35px] border-purple-100 border-2 rounded-full flex justify-center items-center">
                                <img className="p-1"  src="http://localhost:5173/public/assets/react.svg" alt="" />
                                <div className="w-[6px] h-[6px] bg-green-500 rounded-full absolute right-0 bottom-0">
                                <div className="w-[6px] h-[6px] bg-green-500 rounded-full absolute right-0 bottom-0 animate-ping"></div>
                                </div>
                            </div>
                        <div className="flex justify-center items-center flex-col">
                            <div className="flex justify-between items-center w-full">
                                <h2 className="text-[14px] font-semibold text-white">Wisdom Michael</h2>
                            </div>
                        </div>
                        </div>

                    </div>
                </div>

                <div className="w-full md:w-[calc(100%-200px)] h-[calc(100vh-210px)] lg:h-fit md:pl-4 bg-[#ffffff] rounded-xl lg:p-5 px-2 pt-5 flex flex-col">
                    <div className="flex justify-between items-center px-5">
                        {
                            sellerid && <div className="flex justify-start items-center gap-3 w-full">
                                 <div className="relative w-[35px] h-[35px] border-purple-900 border-2 rounded-full flex justify-center items-center">
                                <img className="p-1"  src="http://localhost:5173/public/assets/react.svg" alt="" />
                                <div className="w-[6px] h-[6px] bg-green-500 rounded-full absolute right-0 bottom-0">
                                <div className="w-[6px] h-[6px] bg-green-500 rounded-full absolute right-0 bottom-0 animate-ping"></div>
                                </div>
                            </div>
                            <div className="flex-col justify-between items-center leading-3">
                                <h2 className="text-[14px] font-semibold">Wisdom Michael</h2>
                                <span className="text-[10px] text-gray-500">Online</span>
                            </div>
                            </div>
                        }
                        <div onClick={() => setShow(!show)} className="w-[35px] flex md:hidden h-[35px] rounded-xl bg-purple-900 shadow-lg hover:shadow-purple-900/50  justify-center cursor-pointer items-center text-white">
                            <span className="material-symbols-rounded text-white">
                            {show ? "close" : "forum"}
                            </span>
                        </div>
                    </div>

                    <div className="pt-4">
                        <div className="bg-[#f6f7f9] rounded-t-xl p-3 overflow-y-auto pt-5">
                            <div className="w-full flex justify-start item-center">
                                <div className="flex-col justify-start items-center md:px-3 w-full  lg:mx-w-[85px]">
                                    <div className="flex justify-start items-end flex-col mb-2 ml-4 w-fit bg-purple-900 shadow-lg shadow-purple-900/30 text-white py-1 px-2 rounded-tl-2xl rounded-r-xl ">
                                        <span className="px-3 py-[2px] text-[14px]">How are you?</span>
                                        <span className="text-[10px] px-3 text-white text-right ">12:32</span>
                                    </div>
                                    <div className="w-[35px] h-[35px] rounded-full flex justify-center items-center">
                                    <img className=" p-1 "  src="http://localhost:5173/public/assets/react.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex justify-end item-center">
                                <div className="flex-col justify-start items-center md:px-3 max-w-full  lg:mx-w-[85px]">
                                    <div className="mr-4 ">
                                    <div className="flex flex-col justify-end items-end leading-4 w-full mb-2 bg-purple-300 shadow-lg shadow-white py-1 px-2 rounded-tr-2xl  rounded-l-xl">
                                        <span className="px-3 py-[2px] text-[14px]">i am fine and you?</span>
                                         <span className="text-[10px] px-3 text-gray-700 ">12:34</span>
                                    </div>
                                    </div>
                                    <div className="flex justify-end">
                                    <div className="w-[35px] h-[35px] rounded-full flex justify-center  items-center">
                                    <img className=" p-1 "  src="http://localhost:5173/public/assets/react.svg" alt="" />
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full flex justify-start item-center">
                                <div className="flex-col justify-start items-center md:px-3 w-full  lg:mx-w-[85px]">
                                    <div className="flex justify-start items-end flex-col mb-2 ml-4 w-fit bg-purple-900 shadow-lg shadow-purple-900/30 text-white py-1 px-2 rounded-tl-2xl rounded-r-xl ">
                                        <span className="px-3 py-[2px] text-[12px]">same here dear.</span>
                                        <span className="text-[10px] px-3 text-white text-right ">12:32</span>
                                    </div>
                                    <div className="w-[35px] h-[35px] rounded-full flex justify-center items-center">
                                    <img className=" p-1 "  src="http://localhost:5173/public/assets/react.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                   

                    <form className="flex justify-center items-center bg-[#f6f7f9] rounded-b-xl pb-5 px-4">
                        <div className=" bg-[#ffffff] px-5 shadow-sm  h-[40px] rounded-full flex justify-between items-center w-full">

                        <div className=" cursor-pointer gap-1  flex justify-center items-center">
                            <span className="material-symbols-rounded text-purple-500">
                            attach_file
                            </span>
                            <h1 className=" flex justify-center items-center pb-1 text-purple-500">|</h1>
                        </div>
                        <input className="w-full flex justify-between pl-2 items-center h-[40px] outline-none bg-transparent  " type="text" placeholder="Type a message" />
                        <div className=" pr-3 cursor-pointer flex justify-center items-center">
                            <span className="material-symbols-rounded text-purple-500">
                            emoji_emotions
                            </span>

                        </div>
                        <button className=" justify-center cursor-pointer items-center text-white flex">

                            <span className="material-symbols-rounded text-purple-500">
                            send
                            </span>
                        </button>
                        </div>
                    </form>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ChatSeller