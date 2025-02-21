// Desc: Register page
// Team: WizKicks
import { Link } from "react-router-dom";
import { useState } from "react";

// Import icons

const Register = () => {

    const[state, setState] = useState({
        name: "",
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
        console.log(state);
    }


    return (
        <div className="min-w-screen min-h-screen bg-[#ffffff] flex items-center justify-center">
           <div className="w-full min-h-screen text-black p-2 flex items-center justify-center m-auto">
            <div className="w-[45%] text-white bg-gradient-to-b from-[#ff8036] to-[#ff9f6b] rounded-[38px]">
            <div>
                    <h1 className="text-4xl font-bold text-center mt-16 mb-3">Welcome To Wizkicks</h1>
                    <p className="text-center">Please fill in your details to get started!</p>
                </div>
            <div className="flex justify-center items-center">
                <img className="w-[400px]" src="/src/assets/Free_Vector___Tablet_login_concept_illustration-removebg-preview.png" alt="" />
            </div>
            </div>
               <div className="bg-[#ffffff] p-4 w-[45%]">
                <div className="flex justify-center">
                    <img className="w-15 " src="/src/assets/REX4-removebg-preview.png" alt="" />
                </div>
                <p className="text-[12px] mb-3 font-medium text-center text-[#8f9296]">Please fill in your details here</p>


            <form onSubmit={submit} className="space-y-2">
            <label htmlFor="email" className="block text-sm font-normal pl-14">
              Full Name
            </label>
            <div  className="mb-3 flex flex-col w-full justify-center items-center gap-1">
                  
                        <input onChange={inputHandle} value={state.name} type="text" name="name" placeholder="Name" id="name" required   className=" px-3 py-3 w-[85%] rounded-xl outline-[#d7d8d9] hover:bg-[#d7d8d9] bg-[#edeef0] text-gray-700 placeholder-gray-400" />
                        {/* <p className="text-xs text-red-600">Please enter a valid email address.</p> */}
                    </div>
            <label htmlFor="email" className="block text-sm font-normal pl-14">
              Email
            </label>
            <div className="mb-3 flex flex-col w-full justify-center items-center gap-1">
              <input
                onChange={inputHandle}
                value={state.email}
                type="email"
                name="email"
                placeholder="Email"
                id="email"
                required
                className=" px-3 py-3 w-[85%] rounded-xl outline-[#d7d8d9] bg-[#edeef0] hover:bg-[#d7d8d9] text-gray-700 placeholder-gray-400 "
              />
              {/* <p className="text-xs text-red-600">Please enter a valid email address.</p> */}
            </div>

            <label
              htmlFor="password"
              className="block text-sm font-normal pl-14"
            >
              Password
            </label>
            <div className="mb-3 flex flex-col w-full justify-center items-center gap-1">
              <input
                onChange={inputHandle}
                value={state.password}
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                required
                className="w-[85%] px-3 py-3 rounded-xl outline-[#d7d8d9] bg-[#edeef0] hover:bg-[#d7d8d9] text-gray-700 placeholder-gray-400 "
              />
              {/* <p className="text-xs text-red-600">Please enter a valid email address.</p> */}
            </div>

            <div className="mb-3 flex pl-12 items-center w-full gap-3">
                        <input type="checkbox" name="checkbox" id="checkbox" required className="w-4 h-4 px-3 py-2 cursor-pointer rounded outline-none border-gray-300 overflow-hidden bg-gray-200 text-blue-600  focus:ring-blue-500" />
                        {/* <p className="text-xs text-red-600">Please enter a valid email address.</p> */}
                        <label htmlFor="checkbox" className="block text-[#8f9296] text-[10px] font-bold">i agree to terms & privacy policy</label>
                    </div>

            <div className="flex justify-center items-center w-full">
              <button className=" bg-[#ff8036] hover:bg-orange-500  flex justify-center items-center w-[85%] font-bold text-white hover:shadow-blue-300/50 hover:shadow-lg text-white- rounded-xl px-7 py-3 mb-3">
                Sign Up
              </button>
            </div>
            

            <div className="flex items-center justify-center gap-2 mb-3">
                        <hr className="w-1/6 border border-[#c6c8ca]" />
                        <p className="text-[12px] text-center text-[#8f9296]">Or Sign Up With</p>
                        <hr className="w-1/6 border border-[#c6c8ca]" />

            </div>

            <div className="flex justify-center gap-8 mb-3 w-full">
              <div className=" w-[40%] gap-2 h-[40px] rounded-xl hover:bg-slate-100 flex items-center justify-center shadow-lg border-[#c6c8ca] border-2 cursor-pointer overflow-hidden">
                <span>
                  <img
                    className="w-5 h-5"
                    src="src/assets/icons8-google (1).svg"
                    alt="google logo"
                  />
                </span>
                Google
              </div>
              <div className=" w-[40%] gap-2 h-[40px] hover:bg-slate-100 rounded-xl flex items-center justify-center shadow-lg border-[#c6c8ca] border-2 cursor-pointer overflow-hidden">
                <span>
                  <img
                    className="w-5 h-5"
                    src="src/assets/icons8-facebook (2).svg"
                    alt="facebook logo"
                  />
                </span>
                Facebook
              </div>
            </div>
            <p className="text-sm text-center text-[#8f9296]">
            Already have an account?{" "}
              <Link to="/login" className="text-[#ff8036] hover:text-orange-500">
                Login
              </Link>
            </p>
          </form>       
     
               </div>
           </div>
        </div>
    );
};

export default Register;
