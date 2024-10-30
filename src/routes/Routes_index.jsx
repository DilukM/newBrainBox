import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "../pages/404/NotFound";
import Student from "../layouts/Student";
import useAuthContexts from "../context/AuthContext";
import Agent from "../layouts/Agent";
import StudentSignUp from "../pages/student/SignUp";
import StudentSignIn from "../pages/student/SignIn";
import AgentSignIn from "../pages/Agent/SignIn";
import AgentSignUp from "../pages/Agent/SignUp";

const RoutesIndex = () => {
  const { authuser } = useAuthContexts();
  console.log(authuser);
  return (
    <Routes>
      <Route
        path="/login/student"
        element={
          authuser ? (
            authuser.type == "students" ? (
              <Navigate to="/student/dashboard" />
            ) : (
              <StudentSignIn />
            )
          ) : (
            <StudentSignIn />
          )
        }
      />
      <Route
        path="/registration/student"
        element={
          authuser ? (
            authuser.type == "students" ? (
              <Navigate to="/student/dashboard" />
            ) : (
              <StudentSignUp />
            )
          ) : (
            <StudentSignUp />
          )
        }
      />
      <Route
        path="/student/dashboard"
        element={
          authuser ? (
            authuser.type == "students" ? (
              <Student authuser={authuser} />
            ) : (
              <Navigate to="/login/student" />
            )
          ) : (
            <Navigate to="/login/student" />
          )
        }
      >
        <Route
          path="*"
          element={
            authuser ? (
              <Student authuser={authuser} />
            ) : (
              <Navigate to="/login/student" />
            )
          }
        />
      </Route>

      {/* Agent */}
      <Route
        path="/login/agent"
        element={
          authuser ? (
            authuser.type == "agents" ? (
              <Navigate to="/agent/dashboard" />
            ) : (
              <AgentSignIn />
            )
          ) : (
            <AgentSignIn />
          )
        }
      />
      <Route
        path="/registration/agent"
        element={
          authuser ? (
            authuser.type == "agents" ? (
              <Navigate to="/agent/dashboard" />
            ) : (
              <AgentSignUp />
            )
          ) : (
            <AgentSignUp />
          )
        }
      />
      <Route
        path="/agent/dashboard"
        element={
          authuser ? (
            authuser.type == "agents" ? (
              <Agent authuser={authuser} />
            ) : (
              <Navigate to="/login/agent" />
            )
          ) : (
            <Navigate to="/login/agent" />
          )
        }
      >
        <Route
          path="*"
          element={
            authuser ? (
              <Agent authuser={authuser} />
            ) : (
              <Navigate to="/login/agent" />
            )
          }
        />
      </Route>

      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

export default RoutesIndex;
