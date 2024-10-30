import {Navigate, Route, Routes } from "react-router-dom";
import NotFound from "../pages/404/NotFound";
import StudentRecordings from "../pages/student/School/StudentRecordings";
import StudenSubscribe from "../pages/student/School/StudenSubscribe";
import FreeCourses from "../pages/student/School/FreeCourses";
import StudentExamAssessment from "../pages/student/School/StudentExamAssessment";
import StudentPayment from "../pages/student/School/components/payments/StudentPayment";
import StudentProfile from "../pages/student/School/components/StudentProfile";
import StudentHome from "../pages/student/School/StudentHome";
import HECourses from "../pages/student/School/HECourses";

const StudentsIndex = () => {
    return (
        <Routes>
           
     
            <Route path="/higher-education" element={<HECourses />} />
            <Route path="/recordings" element={<StudentRecordings/>} />
            <Route path="/exam&assessment" element={<StudentExamAssessment />} />
            <Route path="/package" element={<StudenSubscribe />} />
            <Route path="/free-courses" element={<FreeCourses />} />
            <Route path="/profile" element={<StudentProfile />} />
            <Route path="/payments" element={<StudentPayment />} />

            <Route path="" element={<StudentHome />} />

  
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} /> 
        </Routes>
    );
}

export default StudentsIndex;
