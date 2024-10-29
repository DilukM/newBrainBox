/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */

import { useFormik } from "formik";

import { SignInValidationSchema } from "../../utils/Fromik_Validation/AuthValidationSchema";
import { useState } from "react";
import useAuthContexts from "../../context/AuthContext";
import Cookies from 'js-cookie';
import { Navigate } from "react-router-dom";

const AgentSignIn = () => {

  const [error, seterror] = useState("");
  const [registretbox, setopenregistretbox] = useState(false);
  const { authuser, setAuthUser } = useAuthContexts()

  const apiUrl = import.meta.env.VITE_API_URL;
  const user_token = import.meta.env.VITE_USER_TOKEN;

  const onSubmit = async (values, action) => {
    try {

      const res = await fetch(
        `${apiUrl}auth/agent/login`,
        {
          method: "POST",
          headers: { "Content-Type": "Application/json" },
          body: JSON.stringify({
            email: values.email,
            password: values.password,
          }),
        }
      );
      const data = await res.json();

      seterror("");

      if (data.error) {
        seterror(data.error);
      }

      if (data.success) {

        Cookies.set(user_token, data.token, {
          expires: 15, // Set the expiration in days
        });

        setAuthUser(data);
        window.location.reload();

        // setopenregistretbox(true);
        // if (registretbox) {
        //     setTimeout(() => {
        //         // Your function to be executed once after the delay
        //         console.log('Function executed after 2 seconds');
        //         setopenregistretbox(false); // Set hasRun to true to prevent future executions
        //     }, 2000); // 2000 milliseconds = 2 seconds

        // }
        action.resetForm();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SignInValidationSchema,
    onSubmit,
  });
  return (
    <div className="flex grow  w-full bg-[#64748B]/5 h-full">
      {registretbox ? (
        <div
          onClick={() => setopenregistretbox(false)}
          class="bg-black/10 overflow-y-auto overflow-x-hidden fixed backdrop-blur-md flex  left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full"
        >
          <div class="relative p-4 w-full max-w-md h-full md:h-auto">
            <div class="relative p-4 text-center bg-white rounded-lg shadow sm:p-5">
              <div class="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
                <svg
                  aria-hidden="true"
                  class="w-8 h-8 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Success</span>
              </div>
              <p class="mb-4 text-lg font-semibold text-gray-900 ">
                Login Successfully{" "}
              </p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="fixed top-0 hidden p-6 lg:block lg:px-12">
        <a href="#" className="flex items-center space-x-2">
          <img
            className="h-12 w-12 "
            src="https://lms.brainbox.lk/images/app-logo-gold.png"
            alt="logo"
          />
          <p className="text-xl font-semibold uppercase text-slate-700 dark:text-navy-100">
            BrainBox
          </p>
        </a>
      </div>
      <div className="hidden w-full place-items-center lg:grid">
        <div className="w-full max-w-lg p-6">
          <img
            className="w-full"
            src="https://lms.brainbox.lk/images/illustrations/dashboard-check.svg"
            alt="image"
          />
          {/* <img className="w-full" x-show="$store.global.isDarkModeEnabled" src="https://lms.brainbox.lk/images/illustrations/dashboard-check-dark.svg" alt="image" style="display: none;" /> */}
        </div>
      </div>
      <main className="flex w-full flex-col items-center bg-white dark:bg-navy-700 lg:max-w-md">
        <div className="flex w-full max-w-sm grow flex-col justify-center p-5">
          <div className="text-center">
            <img
              className="mx-auto h-16 w-16 lg:hidden"
              src="https://lms.brainbox.lk/images/app-logo-gold.png"
              alt="logo"
            />
            <div className="mt-4">
              <p className="mt-2 text-xl font-medium text-blue-500 dark:text-blue-600">
                Agent Login
              </p>
              <h2 className="text-2xl font-semibold text-slate-600 dark:text-navy-100">
                Welcome Back


              </h2>
              <p className="text-slate-400 dark:text-navy-300">
                Please sign in to continue
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            {error ? (
              <p className="text-red-400 text-[14px]  font-semibold">{error}</p>
            ) : (
              ""
            )}
          </div>
          <form className="mt-4" onSubmit={formik.handleSubmit}>
            <div className="space-y-4">
              {/* <!-- Email Field --> */}
              <CInput
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
                icon={"fa-envelope"}
                name={"email"}
                placeholder={"Email"}
                type={"email"}
              />
              {formik.errors.email && formik.touched.email ? (
                <p className="text-red-400 text-[16px]  ">
                  {formik.errors.email}
                </p>
              ) : (
                ""
              )}

              {/* <!-- Password Field --> */}
              <CInput
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
                icon={"fa-lock"}
                name={"password"}
                placeholder={"Password"}
                type={"password"}
              />
              {formik.errors.password && formik.touched.password ? (
                <p className="text-red-400 text-[16px]  ">
                  {formik.errors.password}
                </p>
              ) : (
                ""
              )}

              {/* <!-- Remember Me and Forgot Password --> */}
              <div className="mt-4 flex items-center justify-between space-x-2">
                <label className="inline-flex items-center space-x-2">
                  <input
                    className="form-checkbox is-outline h-5 w-5 rounded border-slate-400/70 bg-slate-100 before:bg-primary checked:border-primary hover:border-primary focus:border-primary "
                    type="checkbox"
                    name="remember"
                  />
                  <span className="line-clamp-1">Remember me</span>
                </label>
                <a
                  href="#"
                  className="text-[15px] text-slate-400 transition-colors line-clamp-1 hover:text-slate-800 focus:text-slate-800 dark:text-navy-300 dark:hover:text-navy-100 dark:focus:text-navy-100"
                >
                  Forgot Password?
                </a>
              </div>
            </div>

            <div
              id="loadingSpinner"
              className="w-full flex justify-center items-center hidden"
            >
              <div className="spinner h-7 w-7 animate-spin rounded-full border-[3px] border-slate-150 border-r-slate-500 dark:border-navy-500 dark:border-r-navy-300 m-4"></div>
            </div>
            <button
              type="submit"
              className="btn mt-10 h-10 w-full bg-primary rounded-md font-medium focus:bg-indigo-700 text-white hover:bg-indigo-700 "
            >
              Sign in
            </button>
          </form>

          <div className="my-7 flex items-center space-x-3">
            <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
            <p>OR</p>
            <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
          </div>
          <div className="mt-4 text-center text-xs+">
            <p className="line-clamp-1">
              <span>Dont have Account?</span>

              <a
                className="text-primary transition-colors "
                href="/registration/agent"
              >
                Create account
              </a>
            </p>
          </div>
        </div>
        <div className="my-5 flex justify-center text-xs text-slate-400 dark:text-navy-300">
          <a href="#">Privacy Notice</a>
          <div className="mx-3 my-1 w-px bg-slate-200 dark:bg-navy-500"></div>
          <a href="#">Term of service</a>
        </div>
      </main>
    </div>
  );
};
const CInput = ({ name, icon, type, placeholder, onBlur, onChange, value }) => {
  return (
    <div className=" mt-3">
      <label className="relative flex">
        <input placeholder={placeholder} type={type} id={name} onBlur={onBlur} value={value} onChange={onChange} className="form-input border-none outline-none transition-all duration-200  text-[15px]  peer w-full rounded-lg   bg-slate-200 dark:bg-slate-100 hover:bg-slate-300 dark:hover:bg-slate-200 px-3 py-2 pl-9  ring-primary/50  focus:border-none focus:outline-none focus:ring placeholder:text-slate-400" />
        <span className="pointer-events-none text-[16px] absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary ">
          <i className={`fas ${icon} h-5 w-5 transition-colors duration-200`}></i>
        </span>

      </label>

    </div>
  )
}

export default AgentSignIn;
