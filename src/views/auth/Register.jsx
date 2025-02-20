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
        <div className="min-w-screen min-h-screen bg-[#cdcae9] flex items-center justify-center">
           <div className="w-[350px] text-white p-2">
               <div className="bg-[#4a47a3] p-4 rounded-lg">
                <h1 className="text-xl mb-3 font-bold text-center">Welcome To Wizkicks</h1>
                <p className="text-sm mb-3 font-medium">plese register your account</p>

                <form onSubmit={submit} className="space-y-2">
                    <div className="mb-4 flex flex-col w-full gap-1">
                        <label htmlFor="name" className="block text-sm font-medium">Name</label>
                        <input onChange={inputHandle} value={state.name} type="text" name="name" placeholder="Name" id="name" required className="w-full px-3 py-2 rounded-md outline-none border border-slate-700 bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" />
                        {/* <p className="text-xs text-red-600">Please enter a valid email address.</p> */}
                    </div>

                    <div className="mb-4 flex flex-col w-full gap-1">
                        <label htmlFor="email" className="block text-sm font-medium">Email</label>
                        <input onChange={inputHandle} value={state.email} type="email" name="email" placeholder="Email" id="email" required className="w-full px-3 py-2 rounded-md outline-none border border-slate-700 bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" />
                        {/* <p className="text-xs text-red-600">Please enter a valid email address.</p> */}
                    </div>

                    <div className="mb-4 flex flex-col w-full gap-1">
                        <label htmlFor="password" className="block text-sm font-medium">Password</label>
                        <input onChange={inputHandle} value={state.password} type="password" name="password" placeholder="Password" id="password" required className="w-full px-3 py-2 rounded-md outline-none border border-slate-700 bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" />
                        {/* <p className="text-xs text-red-600">Please enter a valid email address.</p> */}
                    </div>

                    <div className="mb-4 flex items-center w-full gap-3">
                        <input type="checkbox" name="checkbox" id="checkbox" required className="w-4 h-4 px-3 py-2 rounded outline-none border-gray-300 overflow-hidden bg-gray-200 text-blue-600  focus:ring-blue-500" />
                        {/* <p className="text-xs text-red-600">Please enter a valid email address.</p> */}
                        <label htmlFor="checkbox" className="block text-sm font-medium">i agree to privacy policy & terms</label>
                    </div>

                    <button className=" bg-slate-800 w-full text-center hover:bg-slate-900 hover:shadow-blue-300/50 hover:shadow-lg text-white- rounded-md px-7 py-2 mb-3">
                        Sign Up
                    </button>
                    <p className="text-sm text-center">Already have an account? <Link to="/login" className="text-blue-500">
                            Login 
                        </Link>
                    </p>

                    <div className="flex items-center justify-center gap-2 my-2">
                        <hr className="w-1/4 border border-slate-700" />
                        <p className="text-[12px] text-center">Or Sign Up With</p>
                        <hr className="w-1/4 border border-slate-700" />

                    </div>
                    <div className="flex justify-center gap-3">
                        <div className="bg-[#db4437] w-[125px] h-[35px] rounded-full flex items-center justify-center shadow-lg hover:shadow-orange-700/50 cursor-pointer overflow-hidden">
                            <span>
                               <img className="w-4 h-4" src="src/assets/icons8-google.svg" alt="google logo" />
                            </span>
                        </div>
                        <div className="bg-blue-600 w-[125px] h-[35px] rounded-full flex items-center justify-center shadow-lg hover:shadow-blue-500/50 cursor-pointer overflow-hidden">
                            <span>
                               <img className="w-5 h-5" src="src/assets/icons8-facebook (1).svg" alt="facebook logo" />
                            </span>
                        </div>

                    </div>
                </form>           
     
               </div>
           </div>
        </div>
    );
};

export default Register;
