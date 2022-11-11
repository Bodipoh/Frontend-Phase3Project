import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/home/Home";
import Student from "./pages/Student";
import Course from "./pages/course/Course";
import EditStudentRecord from "./pages/EditStudentRecord";


const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/student" element={<Student />} />
          <Route path="/course" element={<Course />} />
          <Route path="/EditStudentRecord" element={<EditStudentRecord/>}/>
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;


