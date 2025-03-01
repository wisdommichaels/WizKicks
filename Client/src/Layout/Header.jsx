

const Header = (showSidebar, setShowSidebar) => {
    return (
        <div className="fixed top-0 left-0 w-full py-5 px-2 lg:px-7 z-40 ">
            <div className="flex justify-between items-start ml-0 lg:ml-[230px] rounded-md h-[65px] bg-[#b1addf] shadow-[0_0_15px_0_rgb(34_41_47_/_5%)]">
            
            <div onClick={() => setShowSidebar(!showSidebar)} className="cursor-pointer flex items-center justify-center w-[50px] h-[50px] rounded-md bg-[#b1addf] text-[#fff] lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>

            </div>

            </div>
            
        </div>
    );
};

export default Header;