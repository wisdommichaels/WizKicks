

const AdminDashboard = () => {
    return (
        <div className="px-2 md:pr-[30px] md:pl-[19px] py-2 mt-8 lg:mt-0">
            <div className="lg:hidden flex-col gap-2 ml-2 mb-5">
                <h1 className='text-lg lg:block font-bold text-black'>Hello!! Wisdom</h1>
                <p className='text-sm font-normal text-[#92a2ac] leading-3'>Welcome back!</p>
            </div>
            <div className="w-full grid grid-cols-2 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 gap-2">
                <div className="flex justify-between items-center lg:p-5 px-5 py-5 bg-gradient-to-r from-[#4483f8] to-[#b8d4fe] shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] hover:bg-[#b0cffe] rounded-xl gap-3">
                    <div className="flex flex-col justify-start items-start">
                        <h2 className="lg:text-2xl text-[20px] font-bold text-white">$3434</h2>
                        <span className="text-md  font-normal text-white">Total Sales</span>
                    </div>
                <div className="w-[40px] h-[40px] rounded-full bg-[#4483f8]  flex justify-center items-center text-xl  ">
                    <span className="material-symbols-rounded text-white font-bold">paid</span>
                </div>
                </div>

                <div className="flex justify-between items-center lg:p-5 px-5 py-5 shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] bg-gradient-to-r from-[#08b0e8] to-[#94dff8] hover:bg-[#94e1fb] rounded-xl gap-3">
                    <div className="flex flex-col justify-start items-start">
                        <h2 className="lg:text-2xl text-[20px] font-bold text-white">$3434</h2>
                        <span className="text-md  font-normal text-white">Orders</span>
                    </div>
                <div className="w-[40px] h-[40px] rounded-full bg-[#08b0e8] flex justify-center items-center text-xl  ">
                    <span className="material-symbols-rounded text-white">shopping_cart</span>
                </div>
                </div>

                <div className="flex justify-between items-center lg:p-5 px-5 py-5 shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] bg-gradient-to-r from-[#ff8036] to-[#ff9f6b] hover:bg-[#f8bcb1] rounded-xl gap-3">
                    <div className="flex flex-col justify-start items-start ">
                        <h2 className="lg:text-2xl  text-[20px] font-bold text-white">20</h2>
                        <span className="text-md font-normal text-white">Products</span>
                    </div>
                <div className="w-[40px] h-[40px] rounded-full  bg-[#fe6d3d] flex justify-center items-center text-xl  ">
                    <span className="material-symbols-rounded text-white">add_shopping_cart</span>
                </div>
                </div>

                <div className="flex justify-between items-center lg:p-5 px-5 py-5 shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] bg-gradient-to-r from-[#f9c131] to-[#f5e8b3] hover:bg-[#fff2c0] rounded-xl gap-3">
                    <div className="flex flex-col justify-start items-start">
                        <h2 className="lg:text-2xl text-[20px] font-bold text-white">50</h2>
                        <span className="text-md  font-normal text-white">Sellers</span>
                    </div>
                <div className="w-[40px] h-[40px] rounded-full bg-[#fdbf22] flex justify-center items-center text-xl  ">
                    <span className="material-symbols-rounded text-white ">groups</span>
                </div>
                </div>

               

            </div>
           
        </div>
    );
};

export default AdminDashboard;