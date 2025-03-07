
import PropTypes from 'prop-types';

const Header = ({showSidebar, setShowSidebar}) => {
    return (
        <div className="fixed top-0 left-0 w-full py-5 px-2 lg:px-7 z-40 ">
            <div className="flex justify-between items-center ml-0 lg:ml-[230px] rounded-md h-[65px] bg-[#ffff] shadow-[0_0_15px_0_rgb(34_41_47_/_5%)]">
            
            <div onClick={() => setShowSidebar(!showSidebar)} className="cursor-pointer flex justify-center items-center  w-[40px] h-[40px] bg-[#ff8036] shadow-lg hover:shadow-indigo-500/50 rounded-sm lg:hidden ml-2 ">
            <span className="material-symbols-rounded flex justify-center items-center text-[#ddd9d9]">menu</span>
            </div>

            <div className="hidden md:block w-[30%] px-5">
                <input className="px-3 w-full  py-2 outline-none rounded-md border text-[#92a2ac] focus:border-[#ff9f6b] overflow-hidden" type="text" name='search' placeholder='search product' />
            </div>

            <div className='flex justify-center items-center relative'>
                <div>
                <h1 className='text-sm'>wisdom michael</h1>
                <p className='text-[10px] flex justify-end items-center'>Admin</p>
                </div>
                <div className='flex justify-center items-center'>
                    <img className='w-15 flex justify-center' src="/src/assets/REX4-removebg-preview.png" alt="" />
                </div>

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