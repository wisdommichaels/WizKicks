
import PropTypes from 'prop-types';

const Header = ({showSidebar, setShowSidebar}) => {
    return (
        <div className="fixed top-0 left-0 w-full py-5 px-2 lg:px-7 z-40 ">
            <div className="flex justify-between items-start ml-0 lg:ml-[230px] rounded-md h-[65px] bg-[#b1addf] shadow-[0_0_15px_0_rgb(34_41_47_/_5%)]">
            
            <div onClick={() => setShowSidebar(!showSidebar)} className="cursor-pointer flex justify-center items-center  w-[40px] h-[40px] bg-indigo-500 shadow-lg hover:shadow-indigo-500/50 rounded-sm lg:hidden ">
            <span className="material-symbols-rounded flex justify-center items-center ">menu</span>
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