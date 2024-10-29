import {Navigate, Route, Routes } from "react-router-dom";
import NotFound from "../pages/404/NotFound";
// import AgentHome from "../pages/Agent/AgentHome";
import AgentCourses from "../pages/Agent/AgentCourses";
import AgentProfile from "../pages/Agent/components/AgentProfile";

const AgentsIndex = () => {
    return (
        <Routes>
           
     

            <Route path="/courses/" element={<AgentCourses />} />
            <Route path="/profile" element={<AgentProfile />} />
            <Route path="" element={<Navigate to="/agent/dashboard/courses" />} />
            {/* <Route path="/profile" element={<StudentProfile />} /> */}

  
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} /> 
        </Routes>
    );
}

export default AgentsIndex;
