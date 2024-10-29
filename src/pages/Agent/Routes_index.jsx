import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "../pages/404/NotFound";
import Student from "../layouts/Student";
import useAuthContexts from "../context/AuthContext";
import Agent from "../layouts/Agent";
import StudentSignUp from "../pages/student/SignUp";
import StudentSignIn from "../pages/student/SignIn";


const RoutesIndex = () => {
    const { authuser } = useAuthContexts();
    return (
        <Routes>

            

            
            {/* Student */}
            <Route path="/login/student" element={authuser ? <Navigate to="/student/dashboard" /> : <StudentSignIn />} />
            <Route path="/registration/student" element={authuser ? <Navigate to="/student/dashboard" /> : <StudentSignUp />} />
            <Route path="/student/dashboard" element={authuser ? <Student authuser={authuser} /> : <Navigate to="/login/student" />}>
                <Route path="*" element={authuser ? <Student authuser={authuser} /> : <Navigate to="/login" />} />
            </Route>

            

            {/* Agent */}
            {/* <Route path="/registration/agent" element={<SignUp />} />
            <Route path="/login/agent" element={<SignIn />} /> */}
            <Route path="/agent/dashboard" element={<Agent />}>
                <Route path="*" element={<Agent />} />
            </Route>

           

            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
    );
}

export default RoutesIndex;
