import "./App.css";
import Login from "./components/Login";
import NotFound from "./components/Notfound";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        {/* Route protected to denied manual access */}
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
        
        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
