import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Website/Homepage";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Regiester";
import Users from "./Pages/Dashboard/Users";
import GoogleCallback from "./Pages/Auth/GoogleCallBack";
import Dashboard from "./Pages/Dashboard/Dashboard";
import RequireAuth from "./Pages/Auth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* pupliv Routes */}
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/auth/google/callback"
          // هاض عشان لما اسجل ما يوديني عالباك اند ويجبلي معلوماتي من الباك بل عشان اسجل دخول بواسطة جوجل في الفرونت
          element={<GoogleCallback />}
        ></Route>
        {/* protected Routes */}
        <Route element={<RequireAuth />}>
          <Route path="/Dashboard" element={<Dashboard />}>
            <Route path="users" element={<Users />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
