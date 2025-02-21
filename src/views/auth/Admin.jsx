// Desc: Login page for the user
// Team: WizKicks
// Desc: Register page
// Team: WizKicks
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { admin_login } from "../../store/reducers/authReducer";

// Import icons

const AdminLogin = () => {
    const dispatch = useDispatch();

    const[state, setState] = useState({
        email: "",
        password: ""
    });

    const inputHandle = (e) => {
        const {name, value} = e.target;
        setState({
            ...state,
            [name]: value
        });
    }
    
    const submit = (e) => {
        e.preventDefault();
        dispatch(admin_login (state));
        // console.log(state);
    }


    return (
        <div className="min-w-screen min-h-screen bg-[#ffffff] flex items-center justify-center">
           <div className="w-full min-h-screen text-black p-2 flex items-center justify-center m-auto">
            <div className="w-[45%] text-white bg-gradient-to-b from-[#ff8036] to-[#ff9f6b] rounded-4xl">
            <div>
                    <h1 className="text-5xl font-bold text-center mt-16 mb-3">Welcome Back</h1>
                    <p className="text-center">We are happy to have you back!</p>
                </div>
            <div className="flex justify-center items-center">
                <img className="w-[500px]" src="/src/assets/illustration_3d-page_2-removebg-preview (1).png" alt="" />
            </div>
            </div>
               <div className="bg-[#ffffff] p-4 w-[45%]">
                <div className="flex justify-center mb-3">
                    <img className="w-15 " src="/src/assets/REX4-removebg-preview.png" alt="" />
                </div>
                <h1 className="text-2xl mb-2 font-bold text-center">Welcome To Wizkicks</h1>
                <p className="text-[12px] mb-3 font-medium text-center text-[#8f9296]">please Login your account</p>

                <form onSubmit={submit} className="space-y-2">

                        <label htmlFor="email" className="block text-sm font-medium pl-14">Email</label>
                    <div className="mb-5 flex flex-col w-full justify-center items-center gap-1">
                        <input onChange={inputHandle} value={state.email} type="email" name="email" placeholder="Email" id="email" required className=" px-3 py-3 w-[85%] rounded-xl outline-[#d7d8d9] bg-[#edeef0] hover:bg-[#d7d8d9] text-gray-700 placeholder-gray-400 " />
                        {/* <p className="text-xs text-red-600">Please enter a valid email address.</p> */}
                    </div>

                        <label htmlFor="password" className="block text-sm font-medium pl-14">Password</label>
                    <div className="mb-5 flex flex-col w-full justify-center items-center gap-1">
                        <input onChange={inputHandle} value={state.password} type="password" name="password" placeholder="Password" id="password" required className="w-[85%] px-3 py-3 rounded-xl outline-[#d7d8d9] bg-[#edeef0] hover:bg-[#d7d8d9] text-gray-700 placeholder-gray-400 " />
                        {/* <p className="text-xs text-red-600">Please enter a valid email address.</p> */}
                    </div>

                    <div className="flex justify-end items-center gap-2 pr-10 mb-6">
              <Link to="/forgot-password" className="text-[12px] font-medium leading-3 text-[#8f9296] hover:text-[#b6b9bc]">
                Forgot Password?
              </Link>
            </div>

                    <div className="flex justify-center items-center w-full">
                    <button className=" bg-[#ff8036]  hover:bg-orange-500  flex justify-center items-center w-[85%] font-bold text-white hover:shadow-blue-300/50 hover:shadow-lg text-white- rounded-xl px-7 py-3 mb-3">
                        Login
                    </button>
                    </div>
                    <p className="text-sm text-center"> 
                        Don&apos;t have an account?  <Link to="/register" className="text-[#ff8036]    hover:text-orange-500 "> 
                         Sign Up 
                        </Link>
                    </p>

                </form>           
     
               </div>
           </div>
        </div>
    );
};

export default AdminLogin;
