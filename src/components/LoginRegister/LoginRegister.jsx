import BG from "../../assets/BG.mp4";
import { Link } from "react-router-dom";
export default function LoginRegister(){
    return(
        <div className="main w-[100%] h-[100vh]">
            <video className=" w-[100%] h-[100%] object-cover" src={BG} autoPlay loop muted/>
            <div className="absolute w-[100%] h-[100%] top-0 ">
                <div>
                    <div className=''>
                        <form action="" className=" m-[200px] max-w-[250px] mx-auto justify-center items-center bg-cover bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-35 relative">
                        <h1 className=" text-4xl text-white text-center mb-6 font-bold">Login</h1>
                        <div className=" relative my-4">
                            <input type="text" className=" block w-72 py-2.3 px-0 text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" />
                            <label htmlFor="">Your Username</label>
                        </div>
                        <div className=" relative my-4">
                            <input type="password" className=" block w-72 py-2.3 px-0 text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" />
                            <label htmlFor="">Your Password</label>
                        </div>
                        <div>
                            <div>
                                <input type="checkbox" name="" id=""/>
                                <label htmlFor="Remeber Me"></label>
                            </div>
                            <span>Forgot Password?</span>
                        </div>
                        <button type="submit">Login</button>
                        <span>New Here?<Link to="Register">Create an Account</Link></span>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    );
}