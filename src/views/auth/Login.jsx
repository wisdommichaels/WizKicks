// Desc: Login page for the user
// Team: WizKicks
// Desc: Register page
// Team: WizKicks
import { Link } from "react-router-dom";
import { useState } from "react";

// Import icons

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const inputHandle = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div className="min-w-screen min-h-screen bg-[#cdcae9] flex items-center justify-center">
      <div className="w-[350px] text-white p-2">
        <div className="bg-[#4a47a3] p-4 rounded-lg">
          <h1 className="text-xl mb-3 font-bold text-center">
            Welcome To Wizkicks
          </h1>
          <p className="text-sm mb-3 font-medium">plese Login your account</p>

          <form onSubmit={submit} className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium pl-14">
              Email
            </label>
            <div className="mb-5 flex flex-col w-full justify-center items-center gap-1">
              <input
                onChange={inputHandle}
                value={state.email}
                type="email"
                name="email"
                placeholder="Email"
                id="email"
                required
                className=" px-3 py-3 w-[85%] rounded-xl bg-[#edeef0] text-gray-700 placeholder-gray-400 "
              />
              {/* <p className="text-xs text-red-600">Please enter a valid email address.</p> */}
            </div>

            <label
              htmlFor="password"
              className="block text-sm font-medium pl-14"
            >
              Password
            </label>
            <div className="mb-5 flex flex-col w-full justify-center items-center gap-1">
              <input
                onChange={inputHandle}
                value={state.password}
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                required
                className="w-[85%] px-3 py-3 rounded-xl outline-none bg-[#edeef0] text-gray-700 placeholder-gray-400 "
              />
              {/* <p className="text-xs text-red-600">Please enter a valid email address.</p> */}
            </div>

            <div className="flex justify-center items-center w-full">
              <button className=" bg-[#ff8036] flex justify-center items-center w-[85%] font-bold text-white hover:bg-slate-900 hover:shadow-blue-300/50 hover:shadow-lg text-white- rounded-xl px-7 py-3 mb-3">
                Login
              </button>
            </div>
            <p className="text-sm text-center">
              Don&apos;t have an account?{" "}
              <Link to="/register" className="text-blue-500">
                Sign Up
              </Link>
            </p>

            <div className="flex justify-center gap-3">
              <div className="bg-[#db4437] w-[125px] h-[35px] rounded-full flex items-center justify-center shadow-lg hover:shadow-orange-700/50 cursor-pointer overflow-hidden">
                <span>
                  <img
                    className="w-4 h-4"
                    src="src/assets/icons8-google.svg"
                    alt="google logo"
                  />
                </span>
              </div>
              <div className="bg-blue-600 w-[125px] h-[35px] rounded-full flex items-center justify-center shadow-lg hover:shadow-blue-500/50 cursor-pointer overflow-hidden">
                <span>
                  <img
                    className="w-5 h-5"
                    src="src/assets/icons8-facebook (1).svg"
                    alt="facebook logo"
                  />
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
