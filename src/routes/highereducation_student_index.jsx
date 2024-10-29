import {   Navigate, Route, Routes } from "react-router-dom";
import NotFound from "../pages/404/NotFound";
import StudentDashboard from "../pages/student/StudentDashboard";
import StudentRecordings from "../pages/student/StudentRecordings";
import StudentStore from "../pages/student/school/StudentStore";
import StudenSubscribe from "../pages/student/school/StudenSubscribe";
// import StudentTheoryDashBoard from "../pages/student/StudentTheoryDashBoard";

const HighereducationStudentIndex = () => {
    return (
        <Routes>
           
     

            <Route path="/recordings" element={<StudentRecordings />} />
            <Route path="/store" element={<StudentStore />} />
            <Route path="/package" element={<StudenSubscribe />} />

            <Route path="" element={<StudentDashboard />} />


            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} /> 
        </Routes>
    );
}

export default HighereducationStudentIndex;

