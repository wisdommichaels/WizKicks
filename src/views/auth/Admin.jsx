// Desc: Login page for the user
// Team: WizKicks
// Desc: Register page
// Team: WizKicks
import { Link } from "react-router-dom";
import { useState } from "react";

// Import icons

const AdminLogin = () => {

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
        console.log(state);
    }


    return (
        <div className="min-w-screen min-h-screen bg-[#cdcae9] flex items-center justify-center">
           <div className="w-[350px] text-white p-2">
               <div className="bg-[#4a47a3] p-4 rounded-lg">
                <h1 className="text-xl mb-3 font-bold text-center">Welcome To Wizkicks</h1>
                <p className="text-sm mb-3 font-medium">plese Login your account</p>

                <form onSubmit={submit} className="space-y-2">

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

                    <button className=" bg-slate-800 w-full text-center hover:bg-slate-900 hover:shadow-blue-300/50 hover:shadow-lg text-white- rounded-md px-7 py-2 mb-3">
                        Login
                    </button>
                    <p className="text-sm text-center"> 
                        Don&apos;t have an account?                 <Link to="/register" className="text-blue-500"> 
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
