import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import History_Table01 from "./History_Table01";
import History_Table02 from "./History_Table02";
export default function History_Router(){
    return(
        <div className="mx-auto p-20">
        <nav className="flex justify-center border-gray-300 mb-4 pb-2">
        
            <Link to="/History_Table01" className=" p-10 bg-slate-400 py-3">บอล</Link>
            <Link to="/History_Table02"className=" p-10 bg-slate-400 py-3">ฟุตซอล</Link>
        </nav>
        <Routes>
          <Route path="/History_Table01" element={<History_Table01 />} />
          <Route path="/History_Table02" element={<History_Table02 />} />
          
        </Routes>
      </div>
    );
}