import { useState } from "react";


const ChatSeller = () => {

    const [show, setShow] = useState(false);

  return (
    <div className="px-2 lg:px-7 py-5">
        <div className="w-full bg-white px-4 py-4 rounded-xl h-[calc(100vh-140px)]">
            <div className="flex w-full h-full relative">
                <div className={`w-[280px] h-full absolute z-10 ${show ? `-left-[16px]` : `-[-336px]`} md:left-0 md:relative transition-all duration-300`}>
                    <div className="w-full h-[calc(100vh-177px)] bg-purple-100 md:bg-transparent overflow-y-auto">
                        <div className="flex text-xl justify-between items-center p-4 md:p-0 md:px-3 md:pb-3">
                        <h2>Seller</h2>
                        <span onClick={() => setShow(true)} className="block cursor-pointer md:hidden">
                        <span className="material-symbols-rounded">
                            close
                        </span>
                        </span>
                            
                        </div>

                        <div className={`h-[60px] flex justify-start items-center gap-2 px-2 py-2 rounded-xl cursor-pointer `}>
                            <div className="relative">
                                <img className="w-[38px] h-[38px] border-white border-2 max-w[38px] p-2 rounded-full"  src="http://localhost:5173/public/assets/react.svg" alt="" />
                                <div className="w-[8px] h-[8px] bg-green-500 rounded-full absolute right-0 bottom-1">
                                <div className="w-[8px] h-[8px] bg-green-500 rounded-full absolute right-0 bottom-0 animate-ping"></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center flex-col w-full">
                            <div className=""></div>
                        </div>


                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChatSeller