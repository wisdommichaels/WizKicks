import { useState } from "react";


const ChatSeller = () => {

    const [show, setShow] = useState(false);
    const sellerid = 23

  return (
    <div className="px-2 lg:px-7 py-5">
        <div className="w-full bg-white rounded-xl p-4 lg:p-0 h-[calc(100vh-140px)]">
            <div className="flex w-full h-full relative">
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

                        <div className={`h-[60px] flex justify-start items-center bg-purple-500 gap-2 px-2 rounded-xl cursor-pointer `}>
                            <div className="relative">
                                <img className="w-[49px] h-[40px] border-purple-200 border-2 max-w[49px] p-2 rounded-full"  src="http://localhost:5173/public/assets/react.svg" alt="" />
                                <div className="w-[6px] h-[6px] bg-green-500 rounded-full absolute right-0 bottom-1.5">
                                <div className="w-[6px] h-[6px] bg-green-500 rounded-full absolute right-0 bottom-0 animate-ping"></div>
                                </div>
                            </div>
                        <div className="flex justify-center items-center flex-col w-full">
                            <div className="flex justify-between items-center w-full">
                                <h2 className="text-base font-semibold text-white">Wisdom Michael</h2>
                            </div>
                        </div>
                        </div>

                    </div>
                </div>

                <div className="w-full md:w-[calc(100%-200px)] md:pl-4">
                    <div className="flex justify-between items-center">
                        {
                            sellerid && <div className="flex justify-start items-center gap-3">
                                 <div className="relative">
                                <img className="w-[40px] h-[40px] border-purple-400 border-2 max-w[45px] p-2 rounded-full"  src="http://localhost:5173/public/assets/react.svg" alt="" />
                                <div className="w-[6px] h-[6px] bg-green-500 rounded-full absolute right-0 bottom-1.5">
                                <div className="w-[6px] h-[6px] bg-green-500 rounded-full absolute right-0 bottom-0 animate-ping"></div>
                                </div>
                            </div>
                            </div>
                        }
                        <div onClick={() => setShow(!show)} className="w-[35px] flex md:hidden h-[35px] rounded-xl bg-purple-500 shadow-lg hover:shadow-purple-500/50  justify-center cursor-pointer items-center text-white">
                            <span className="material-symbols-rounded text-white">
                            {show ? "close" : "menu"}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChatSeller