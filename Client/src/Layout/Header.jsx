
import PropTypes from 'prop-types';

const Header = ({showSidebar, setShowSidebar}) => {
    return (
        <div className="fixed top-0 left-0 w-full py-3 px-4  lg:px-7 z-40 lg:bg-none">
            <div className="flex justify-between items-center ml-0 lg:ml-[250px]  h-[65px]">

            <div className="hidden md:block w-[50%]">
                <div className='flex justify-center items-center shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] pl-3  rounded-xl bg-[#ffffff] border border-[#ffffff] overflow-hidden'>
                <span className="material-symbols-rounded text-black">search</span>
                <input className="px-3 w-full  text-black rounded-xl py-2 outline-none " type="text" name='search' placeholder='Search Product' />
                </div>
            </div>

            <div className='flex justify-center items-center relative gap-2 mx-4'>
                <div>
                <h1 className='text-sm hidden lg:block font-bold text-black'>wisdom michael</h1>
                <p className='text-[12px] hidden font-normal lg:flex justify-end items-centertext-[#9ca2ac]'>Admin</p>
                </div>
                <div className='flex justify-center items-center'>
                    <img className='w-9 h-9 rounded-full overflow-hidden' src="/src/assets/react.svg" alt="" />
                </div>

            </div>
            <div onClick={() => setShowSidebar(!showSidebar)} className="cursor-pointer flex justify-center items-center  w-[40px] h-[40px] bg-[#ffffff]  rounded-lg lg:hidden ml-2 ">
            <span className="material-symbols-rounded flex justify-center items-center text-black">menu</span>
            </div>

            </div>

           
            
        </div>
    );
};


Header.propTypes = {
    showSidebar: PropTypes.bool.isRequired,
    setShowSidebar: PropTypes.func.isRequired,
};

export default Header;